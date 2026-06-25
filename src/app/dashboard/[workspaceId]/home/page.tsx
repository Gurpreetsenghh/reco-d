"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Video, FolderOpen, ArrowRight, Share2, Bot, MonitorPlay, Download } from "lucide-react";
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const DESKTOP_APP_URL = "https://google.com";

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

// Defined locally inside the file so you don't need a new component file
const RecordModal = ({ children }: { children: ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent className="bg-[#171717] border-[#252525] text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Get the Desktop App
          </DialogTitle>
          <DialogDescription className="text-[#BDBDBD] mt-2">
            To capture your screen, camera, and microphone seamlessly in 1080p,
            you need the reco-d desktop application.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 mt-6">
          <Button
            asChild
            className="w-full bg-[#a22fe0] hover:bg-[#a22fe0]/80 text-white flex items-center gap-2 py-6 rounded-xl"
          >
            <a href={DESKTOP_APP_URL} target="_blank" rel="noopener noreferrer">
              <Download size={20} />
              Download for Windows
            </a>
          </Button>
        </div>

        <p className="text-center text-xs text-[#707070] mt-4">
          Version 1.0.0 • Lightweight Electron Client
        </p>
      </DialogContent>
    </Dialog>
  )
}

const Home = () => {
  const pathname = usePathname();
  const libraryUrl = pathname?.endsWith("/home") ? pathname.replace("/home", "") : pathname;

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
          
          <RecordModal>
            <button
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#9d4edd", color: "#fff", padding: "12px 28px", borderRadius: 999, fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 4px 24px rgba(157,78,221,0.35)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#7b2cbf")}
              onMouseLeave={e => (e.currentTarget.style.background = "#9d4edd")}
            >
              Start Recording
              <ArrowRight size={16} />
            </button>
          </RecordModal>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 style={{ color: "#e4e4e7", fontSize: 17, fontWeight: 600, margin: "0 0 16px", letterSpacing: "-0.01em" }}>Quick Actions</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          
          <RecordModal>
            <div
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
          </RecordModal>

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

    </div>
  );
};

export default Home;