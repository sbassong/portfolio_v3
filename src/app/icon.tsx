import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f9fafb",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
        }}
      >
        <span
          style={{
            color: "#0a0a0a",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          SB.
        </span>
      </div>
    ),
    { ...size }
  );
}
