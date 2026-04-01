"use client";

import { useBiodataStore } from "@/lib/store";
import BiodataTemplate from "@/components/BiodataTemplate";
import { initiatePayment } from "@/lib/payment";
import { useRouter } from "next/navigation";
import { Download, Image, ArrowLeft, Lock, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useRef, useState, useCallback } from "react";

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

  const handleDownloadPDF = useCallback(async () => {
    if (!isPaid) {
      handlePayment();
      return;
    }

    setDownloading(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).default;

      const element = document.getElementById("biodata-content");
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: null,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${biodata.fullName || "biodata"}_biodata.pdf`);

      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("PDF generation error:", error);
      toast.error("Failed to generate PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  }, [isPaid, handlePayment, biodata.fullName]);

  const handleDownloadImage = useCallback(async () => {
    if (!isPaid) {
      handlePayment();
      return;
    }

    setDownloading(true);
    try {
      const html2canvas = (await import("html2canvas")).default;

      const element = document.getElementById("biodata-content");
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: null,
      });

      const link = document.createElement("a");
      link.download = `${biodata.fullName || "biodata"}_biodata.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();

      toast.success("Image downloaded successfully!");
    } catch (error) {
      console.error("Image generation error:", error);
      toast.error("Failed to generate image. Please try again.");
    } finally {
      setDownloading(false);
    }
  }, [isPaid, handlePayment, biodata.fullName]);

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
