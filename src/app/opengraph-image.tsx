import { ImageResponse } from "next/og";

export const alt = "Orbit Group — Executive Security & Mobility";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background:
            "radial-gradient(120% 120% at 20% 0%, #1a1636 0%, #050505 60%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 40,
            letterSpacing: 8,
            color: "#a78bfa",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Orbit Group
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 84,
            lineHeight: 1,
            color: "white",
            fontWeight: 800,
            maxWidth: 900,
          }}
        >
          Executive Security &amp; Mobility
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 30,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 820,
          }}
        >
          Discreet operational support across Europe — for family offices and
          high-profile principals.
        </div>
      </div>
    ),
    { ...size },
  );
}
