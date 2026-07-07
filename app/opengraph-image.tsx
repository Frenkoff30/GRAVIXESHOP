import { ImageResponse } from "next/og";

export const alt = "GRAVIX · Vybavení pro tvůj trénink";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0e0e11",
          color: "#f2f2f6",
          padding: "0 90px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* volt glow */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 620,
            height: 620,
            borderRadius: 620,
            background:
              "radial-gradient(circle, rgba(169,224,52,0.20), rgba(169,224,52,0) 62%)",
            display: "flex",
          }}
        />
        {/* jemná mřížka */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            opacity: 0.4,
          }}
        />

        {/* eyebrow */}
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 10,
            color: "#a9e034",
          }}
        >
          ČESKÁ FITNESS ZNAČKA
        </div>

        {/* wordmark */}
        <div
          style={{
            display: "flex",
            fontSize: 200,
            fontWeight: 800,
            letterSpacing: -4,
            lineHeight: 1,
            marginTop: 8,
          }}
        >
          GRAVIX
        </div>

        {/* tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 58,
            fontWeight: 800,
            letterSpacing: 1,
            marginTop: 8,
          }}
        >
          <span style={{ color: "#f2f2f6" }}>POWER YOUR&nbsp;</span>
          <span style={{ color: "#a9e034" }}>TRAINING.</span>
        </div>

        {/* volt line */}
        <div
          style={{
            display: "flex",
            width: 130,
            height: 6,
            backgroundColor: "#a9e034",
            marginTop: 40,
          }}
        />

        {/* footer */}
        <div
          style={{
            display: "flex",
            fontSize: 27,
            letterSpacing: 6,
            color: "#b0b1bb",
            marginTop: 26,
          }}
        >
          SHAKERY · NOSNÍ PÁSKY · GRAVIXSTORE.CZ
        </div>
      </div>
    ),
    { ...size },
  );
}
