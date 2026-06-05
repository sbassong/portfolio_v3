import { ImageResponse } from "next/og";

export const alt = "Sam Bassong — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", marginBottom: "40px" }}>
          <div
            style={{
              background: "#f97316",
              width: "60px",
              height: "6px",
              borderRadius: "3px",
            }}
          />
        </div>
        <div
          style={{
            color: "#fafafa",
            fontSize: 88,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-4px",
            marginBottom: "24px",
          }}
        >
          Sam Bassong
        </div>
        <div
          style={{
            color: "#9ca3af",
            fontSize: 36,
            marginBottom: "64px",
          }}
        >
          Software Developer
        </div>
        <div style={{ color: "#f97316", fontSize: 24 }}>sambassong.com</div>
      </div>
    ),
    { ...size }
  );
}
