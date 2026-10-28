import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} - ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";


export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#f4efe4",
          color: "#111111",
          borderTop: "16px solid #ff6a00",
        }}
      >
        <div style={{ fontSize: 32, color: "#ff6a00", fontWeight: 700 }}>
          {profile.title}
        </div>
        <div style={{ fontSize: 88, fontWeight: 800, marginTop: 20 }}>
          {`Hi, I'm ${profile.name}.`}
        </div>
        <div style={{ fontSize: 34, color: "#55504a", marginTop: 28, maxWidth: 1000 }}>
          {profile.intro}
        </div>
      </div>
    ),
    { ...size }
  );
}
