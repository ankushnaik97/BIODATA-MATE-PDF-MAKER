/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    Razorpay: any;
  }
}

export function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export async function initiatePayment(
  onSuccess: () => void,
  onFailure: (error: string) => void,
  userCountry: string
) {
  const isIndia = userCountry === "India";
  const amount = isIndia ? 900 : 200; // 900 paise = ₹9 or 200 cents = $2
  const currency = isIndia ? "INR" : "USD";
  const displayAmount = isIndia ? "₹9" : "$2";

  try {
    // Create order
    const orderRes = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, currency }),
    });

    const order = await orderRes.json();

    if (!orderRes.ok) {
      onFailure(order.error || "Failed to create order");
      return;
    }

    // Demo mode
    if (order.demo) {
      const confirmed = confirm(
        `Demo Mode: This would charge ${displayAmount} for the PDF download.\n\nClick OK to simulate successful payment.`
      );
      if (confirmed) {
        onSuccess();
      } else {
        onFailure("Payment cancelled");
      }
      return;
    }

    // Load Razorpay
    const loaded = await loadRazorpay();
    if (!loaded) {
      onFailure("Failed to load payment gateway. Please try again.");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "BiodataMate",
      description: "Marriage Biodata PDF Download",
      order_id: order.id,
      handler: async function (response: any) {
        // Verify payment
        const verifyRes = await fetch("/api/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });

        const result = await verifyRes.json();

        if (result.verified) {
          onSuccess();
        } else {
          onFailure("Payment verification failed");
        }
      },
      theme: {
        color: "#dc2626",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.on("payment.failed", function (response: any) {
      onFailure(response.error?.description || "Payment failed");
    });
    razorpay.open();
  } catch (error) {
    console.error("Payment error:", error);
    onFailure("Something went wrong. Please try again.");
  }
}
