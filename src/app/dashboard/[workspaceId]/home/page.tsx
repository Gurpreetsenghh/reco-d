"use client";

import { useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Video, FolderOpen, ArrowRight, Share2, Bot, MonitorPlay, X } from "lucide-react";

const DESKTOP_APP_URL = "https://google.com"; // Replace with the actual URL of your desktop app

const FeatureCard = ({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 14, background: "#141416", border: "1px solid #2a2a2d", borderRadius: 16, padding: "18px 20px" }}>
    <div style={{ padding: 10, background: "#1f1f23", borderRadius: 10, color: "#a1a1aa", flexShrink: 0 }}>
      {icon}
    </div>
    <div>
      <h4 style={{ color: "#e4e4e7", fontWeight: 500, fontSize: 14, margin: "0 0 4px" }}>{title}</h4>
      <p style={{ color: "#52525b", fontSize: 13, lineHeight: 1.5, margin: 0 }}>{desc}</p>
    </div>
  </div>
);

const Home = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const libraryUrl = pathname?.endsWith("/home") ? pathname.replace("/home", "") : pathname;
  const handleDownloadMouseEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.background = "#e4e4e7";
  };
  const handleDownloadMouseLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.background = "#fafafa";
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, paddingBottom: 60, maxWidth: 960, width: "100%", fontFamily: "Inter, system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ position: "relative", overflow: "hidden", borderRadius: 24, border: "1px solid #27272a", background: "linear-gradient(135deg, #1c1c1f 0%, #131315 60%, #0c0c0e 100%)", padding: "56px 52px" }}>
        <div style={{ position: "absolute", top: -120, right: -120, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(157,78,221,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 600 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, marginBottom: 24, padding: "6px 14px", borderRadius: 999, background: "rgba(157,78,221,0.12)", border: "1px solid rgba(157,78,221,0.25)" }}>
            <Sparkles size={14} color="#9d4edd" />
            <span style={{ color: "#c77dff", fontSize: 13, fontWeight: 500 }}>Welcome to reco-d</span>
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 700, color: "#fafafa", lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 20px" }}>
            Record your screen.<br />
            <span style={{ background: "linear-gradient(90deg, #9d4edd, #c77dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Share the link.
            </span>
          </h1>
          <p style={{ color: "#71717a", fontSize: 16, lineHeight: 1.7, margin: "0 0 36px", maxWidth: 480 }}>
            A simple screen recorder with AI summaries and instant sharing. No clutter, no complexity — just record and send.
          </p>
          <button
            onClick={() => setOpen(true)}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#9d4edd", color: "#fff", padding: "12px 28px", borderRadius: 999, fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 4px 24px rgba(157,78,221,0.35)" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#7b2cbf")}
            onMouseLeave={e => (e.currentTarget.style.background = "#9d4edd")}
          >
            Start Recording
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 style={{ color: "#e4e4e7", fontSize: 17, fontWeight: 600, margin: "0 0 16px", letterSpacing: "-0.01em" }}>Quick Actions</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div
            onClick={() => setOpen(true)}
            style={{ background: "#141416", border: "1px solid #27272a", borderRadius: 24, padding: 28, cursor: "pointer", transition: "border-color 0.2s, transform 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(157,78,221,0.4)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#27272a"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 14, background: "#1f1f23", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, color: "#a1a1aa" }}>
              <Video size={22} />
            </div>
            <h3 style={{ color: "#fafafa", fontWeight: 600, fontSize: 16, margin: "0 0 6px" }}>New Recording</h3>
            <p style={{ color: "#52525b", fontSize: 13, lineHeight: 1.55, margin: 0 }}>Capture your screen and microphone with our lightweight desktop app.</p>
          </div>

          <Link
            href={libraryUrl}
            style={{ display: "block", background: "#141416", border: "1px solid #27272a", borderRadius: 24, padding: 28, textDecoration: "none", transition: "border-color 0.2s, transform 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(157,78,221,0.4)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#27272a"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 14, background: "#1f1f23", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, color: "#a1a1aa" }}>
              <FolderOpen size={22} />
            </div>
            <h3 style={{ color: "#fafafa", fontWeight: 600, fontSize: 16, margin: "0 0 6px" }}>My Library</h3>
            <p style={{ color: "#52525b", fontSize: 13, lineHeight: 1.55, margin: 0 }}>Browse and manage all your recordings in one place.</p>
          </Link>
        </div>
      </div>

      {/* What's included */}
      <div>
        <h2 style={{ color: "#e4e4e7", fontSize: 17, fontWeight: 600, margin: "0 0 16px", letterSpacing: "-0.01em" }}>What's included</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          <FeatureCard icon={<MonitorPlay size={18} />} title="Screen Recording" desc="720p on Free, 1080p on Pro. Records your screen and mic." />
          <FeatureCard icon={<Share2 size={18} />} title="Instant Sharing" desc="Get a shareable link the moment you stop recording." />
          <FeatureCard icon={<Bot size={18} />} title="AI Summaries" desc="Auto transcript and key takeaways after every recording." />
        </div>
      </div>

      {/* Custom Modal — no shadcn, full inline control */}
      {open && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }} />

          {/* Modal */}
          <div
            style={{ position: "relative", width: "100%", maxWidth: 420, background: "#121214", border: "1px solid #27272a", borderRadius: 20, padding: 28, boxShadow: "0 24px 80px rgba(0,0,0,0.6)" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              style={{ position: "absolute", top: 16, right: 16, width: 28, height: 28, borderRadius: 8, background: "#1f1f23", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#71717a" }}
            >
              <X size={14} />
            </button>

            {/* Icon */}
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "#1f1f23", border: "1px solid #27272a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: "#a1a1aa" }}>
              <Video size={22} />
            </div>

            {/* Text */}
            <h2 style={{ color: "#fafafa", fontSize: 18, fontWeight: 600, textAlign: "center", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
              Desktop app required
            </h2>
            <p style={{ color: "#71717a", fontSize: 14, lineHeight: 1.6, textAlign: "center", margin: "0 0 24px" }}>
              To record your screen you'll need the reco-d desktop app installed on your computer.
            </p>

            {/* Already installed hint */}
            <div style={{ background: "#1a1a1d", border: "1px solid #27272a", borderRadius: 12, padding: "14px 16px", marginBottom: 14, textAlign: "center" }}>
              <p style={{ color: "#e4e4e7", fontSize: 13, fontWeight: 500, margin: "0 0 3px" }}>Already installed?</p>
              <p style={{ color: "#52525b", fontSize: 13, margin: 0 }}>Launch reco-d from your Start Menu to begin recording.</p>
            </div>

            {/* Download button */}
            <a
              href={DESKTOP_APP_URL}
              download
              style={{ display: "block", width: "100%", background: "#fafafa", color: "#09090b", padding: "12px 0", borderRadius: 999, fontSize: 14, fontWeight: 600, textAlign: "center", textDecoration: "none", boxSizing: "border-box", transition: "background 0.2s" }}
              onMouseEnter={handleDownloadMouseEnter}
              onMouseLeave={handleDownloadMouseLeave}
            >
              Download for Windows
            </a>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;