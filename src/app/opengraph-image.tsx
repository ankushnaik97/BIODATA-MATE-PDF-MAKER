import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BiodataMate - #1 Marriage Biodata Maker Online";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #fef2f2, #fffbeb)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            borderRadius: 20,
            width: 1160,
            height: 590,
            border: "3px solid #dc2626",
            padding: 40,
          }}
        >
          <div style={{ display: "flex", fontSize: 72, fontWeight: "bold" }}>
            <span style={{ color: "#111827" }}>Biodata</span>
            <span style={{ color: "#dc2626" }}>Mate</span>
          </div>
          <div style={{ fontSize: 32, color: "#6b7280", marginTop: 16 }}>
            #1 Marriage Biodata Maker Online
          </div>
          <div style={{ fontSize: 24, color: "#9ca3af", marginTop: 12 }}>
            Create Beautiful Biodata • All Religions • PDF Download
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#dc2626",
              fontWeight: "bold",
              marginTop: 32,
              background: "#fef2f2",
              padding: "12px 32px",
              borderRadius: 50,
            }}
          >
            Free to Create • Just ₹9/$2 to Download
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
