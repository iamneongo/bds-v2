import { ImageResponse } from "next/og";

export const alt = "Texas Ace Team — Realtors in the DFW area";
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
          justifyContent: "space-between",
          background: "#161311",
          padding: "72px",
          fontFamily: "sans-serif",
          color: "#f4f3f0",
        }}
      >
        {/* top row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#c75912",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
              color: "#161311",
            }}
          >
            A
          </div>
          <div style={{ fontSize: 28, letterSpacing: 6, color: "#a89f96" }}>
            TEXAS ACE TEAM
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 800, lineHeight: 1 }}>
            Realtors in
          </div>
          <div style={{ fontSize: 104, fontWeight: 300, lineHeight: 1.05, color: "#9c948b" }}>
            the DFW area.
          </div>
        </div>

        {/* bottom row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "#c75912",
              color: "#161311",
              fontWeight: 800,
              padding: "10px 22px",
              borderRadius: 999,
            }}
          >
            5.0 rating
          </div>
          <span style={{ color: "#6b6560" }}>500+ reviews · Google &amp; Zillow</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
