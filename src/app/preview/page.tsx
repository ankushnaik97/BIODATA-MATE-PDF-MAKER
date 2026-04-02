"use client";

import { useBiodataStore } from "@/lib/store";
import BiodataTemplate from "@/components/BiodataTemplate";
import { initiatePayment } from "@/lib/payment";
import { useRouter } from "next/navigation";
import { Download, Image, ArrowLeft, Lock, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useRef, useState, useCallback } from "react";
import { toPng } from "html-to-image";

export default function PreviewPage() {
  const { biodata, isPaid, setIsPaid } = useBiodataStore();
  const router = useRouter();
  const templateRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const isIndia = biodata.country === "India";
  const price = isIndia ? "₹9" : "$2";

  const handlePayment = useCallback(() => {
    initiatePayment(
      () => {
        setIsPaid(true);
        toast.success("Payment successful! You can now download your biodata.");
      },
      (error) => {
        toast.error(error);
      },
      biodata.country
    );
  }, [biodata.country, setIsPaid]);

  const captureImage = useCallback(async (): Promise<string> => {
    const element = document.getElementById("biodata-content");
    if (!element) throw new Error("Biodata element not found");

    // Ensure element is visible and rendered
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 300));

    // html-to-image with multiple retries for reliability
    let dataUrl = "";
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        dataUrl = await toPng(element, {
          quality: 0.95,
          pixelRatio: 2,
          backgroundColor: "#ffffff",
          cacheBust: true,
          style: {
            transform: "none",
            transformOrigin: "top left",
          },
        });
        if (dataUrl && dataUrl.length > 100) break;
      } catch (e) {
        if (attempt === 2) throw e;
        await new Promise((r) => setTimeout(r, 500));
      }
    }

    if (!dataUrl || dataUrl.length < 100) {
      throw new Error("Generated image is empty");
    }

    return dataUrl;
  }, []);

  const handleDownloadPDF = useCallback(async () => {
    if (!isPaid) {
      handlePayment();
      return;
    }

    setDownloading(true);
    const loadingToast = toast.loading("Generating PDF...");
    try {
      const dataUrl = await captureImage();
      const jsPDF = (await import("jspdf")).default;

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Calculate dimensions preserving aspect ratio (794x1123 template = A4 ratio)
      const img = new window.Image();
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = dataUrl;
      });

      const imgRatio = img.width / img.height;
      const pageRatio = pdfWidth / pdfHeight;

      let drawWidth = pdfWidth;
      let drawHeight = pdfHeight;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > pageRatio) {
        drawHeight = pdfWidth / imgRatio;
        offsetY = (pdfHeight - drawHeight) / 2;
      } else {
        drawWidth = pdfHeight * imgRatio;
        offsetX = (pdfWidth - drawWidth) / 2;
      }

      pdf.addImage(dataUrl, "PNG", offsetX, offsetY, drawWidth, drawHeight);
      pdf.save(`${biodata.fullName || "biodata"}_biodata.pdf`);

      toast.dismiss(loadingToast);
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("PDF generation error:", error);
      toast.dismiss(loadingToast);
      toast.error("Failed to generate PDF. Please try refreshing the page.");
    } finally {
      setDownloading(false);
    }
  }, [isPaid, handlePayment, biodata.fullName, captureImage]);

  const handleDownloadImage = useCallback(async () => {
    if (!isPaid) {
      handlePayment();
      return;
    }

    setDownloading(true);
    const loadingToast = toast.loading("Generating image...");
    try {
      const dataUrl = await captureImage();

      const link = document.createElement("a");
      link.download = `${biodata.fullName || "biodata"}_biodata.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.dismiss(loadingToast);
      toast.success("Image downloaded successfully!");
    } catch (error) {
      console.error("Image generation error:", error);
      toast.dismiss(loadingToast);
      toast.error("Failed to generate image. Please try refreshing the page.");
    } finally {
      setDownloading(false);
    }
  }, [isPaid, handlePayment, biodata.fullName, captureImage]);

  if (!biodata.fullName) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <p className="text-gray-500 mb-4">No biodata found. Please create one first.</p>
        <button
          onClick={() => router.push("/create")}
          className="px-6 py-2 bg-red-500 text-white rounded-full font-semibold"
        >
          Create Biodata
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top bar */}
      <div className="bg-white border-b sticky top-16 z-40 no-print">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap gap-3">
          <button
            onClick={() => router.push("/create")}
            className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Edit Biodata
          </button>

          <div className="flex items-center gap-3 flex-wrap">
            {isPaid && (
              <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                Payment Done
              </span>
            )}

            {!isPaid && (
              <button
                onClick={handlePayment}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm transition shadow"
              >
                <Lock className="w-4 h-4" />
                Pay {price} to Download
              </button>
            )}

            <button
              onClick={handleDownloadPDF}
              disabled={downloading}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold text-sm transition shadow disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              {downloading ? "Generating..." : isPaid ? "Download PDF" : `PDF (${price})`}
            </button>

            <button
              onClick={handleDownloadImage}
              disabled={downloading}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm transition shadow disabled:opacity-50"
            >
              <Image className="w-4 h-4" />
              {downloading ? "Generating..." : isPaid ? "Download Image" : `Image (${price})`}
            </button>
          </div>
        </div>
      </div>

      {/* Template Preview */}
      <div className="py-8 px-4 flex justify-center">
        <div ref={templateRef} className="shadow-2xl rounded-lg overflow-hidden">
          {!isPaid && (
            <div className="bg-amber-50 border-b border-amber-200 p-3 text-center no-print">
              <p className="text-sm text-amber-700">
                🔒 This is a preview. Pay {price} to download high-quality PDF or Image.
              </p>
            </div>
          )}
          <BiodataTemplate data={biodata} />
        </div>
      </div>
    </div>
  );
}
