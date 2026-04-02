import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// This API route creates a Razorpay order
// You need to set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in .env.local

export async function POST(request: NextRequest) {
  try {
    const { amount, currency } = await request.json();

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      // Demo mode: return a fake order for testing
      return NextResponse.json({
        id: `demo_order_${Date.now()}`,
        amount: amount,
        currency: currency,
        demo: true,
      });
    }

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        amount: amount, // amount in paise
        currency: currency,
        receipt: `bd_${Date.now()}`,
      }),
    });

    const order = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: order.error?.description || "Failed to create order" }, { status: 400 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("Payment order error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
