"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #080810;
          --bg2: #0f0f1a;
          --bg3: #14141f;
          --border: rgba(255,255,255,0.07);
          --border2: rgba(255,255,255,0.12);
          --text: #f0f0fa;
          --muted: #7b7b9a;
          --purple: #7c5cfc;
          --purple-dim: rgba(124,92,252,0.12);
          --purple-glow: rgba(124,92,252,0.25);
          --red: #f04b4b;
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        /* NAV */
        nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(8,8,16,0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          height: 60px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 18px;
          letter-spacing: -0.5px;
          text-decoration: none;
          color: var(--text);
        }
        .logo-dot {
          width: 28px; height: 28px;
          border-radius: 8px;
          background: var(--purple);
          display: flex; align-items: center; justify-content: center;
        }
        .nav-links {
          display: flex; align-items: center; gap: 28px;
          font-size: 13.5px; color: var(--muted);
        }
        .nav-links a {
          color: inherit; text-decoration: none; transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--text); }
        .nav-cta {
          background: var(--purple);
          color: white;
          border: none;
          padding: 8px 20px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .nav-cta:hover { opacity: 0.85; }

        /* HERO */
        .hero {
          max-width: 1160px;
          margin: 0 auto;
          padding: 90px 2rem 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: var(--purple-dim);
          border: 1px solid rgba(124,92,252,0.3);
          color: #a78bfa;
          padding: 5px 14px;
          border-radius: 999px;
          font-size: 12.5px;
          font-weight: 500;
          margin-bottom: 24px;
        }
        .hero-badge .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #a78bfa;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(42px, 5vw, 68px);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -2px;
          margin-bottom: 24px;
        }
        h1 em {
          font-style: normal;
          color: var(--purple);
        }
        .hero-sub {
          color: var(--muted);
          font-size: 16px;
          max-width: 420px;
          line-height: 1.7;
          margin-bottom: 36px;
        }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-primary {
          background: var(--purple);
          color: white;
          border: none;
          padding: 13px 28px;
          border-radius: 999px;
          font-size: 14.5px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
          font-family: 'Inter', sans-serif;
          display: flex; align-items: center; gap: 8px;
          text-decoration: none;
        }
        .btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-ghost {
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border2);
          padding: 13px 28px;
          border-radius: 999px;
          font-size: 14.5px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          font-family: 'Inter', sans-serif;
          display: flex; align-items: center; gap: 8px;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.05); transform: translateY(-1px); }

        /* MOCKUP */
        .mockup {
          background: var(--bg3);
          border: 1px solid var(--border2);
          border-radius: 20px;
          padding: 14px;
          position: relative;
        }
        .mockup-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4px 12px;
        }
        .traffic-lights { display: flex; gap: 6px; }
        .tl { width: 11px; height: 11px; border-radius: 50%; }
        .tl-r { background: #ff5f57; }
        .tl-y { background: #ffbd2e; }
        .tl-g { background: #28c840; }
        .rec-badge {
          display: flex; align-items: center; gap: 6px;
          background: rgba(240,75,75,0.12);
          border: 1px solid rgba(240,75,75,0.25);
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 11.5px;
          color: var(--red);
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .rec-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--red);
          animation: blink 1.2s ease-in-out infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .mockup-screen {
          background: #070710;
          border-radius: 12px;
          border: 1px solid var(--border);
          overflow: hidden;
          position: relative;
          aspect-ratio: 16/9;
        }
        .screen-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.5;
        }
        .screen-content {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 8px;
          padding: 10px;
        }
        .sc-sidebar {
          background: rgba(255,255,255,0.03);
          border-radius: 8px;
          border: 1px solid var(--border);
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          overflow: hidden;
        }
        .sc-row {
          height: 10px;
          border-radius: 4px;
          background: rgba(255,255,255,0.07);
          flex-shrink: 0;
        }
        .sc-row.active { background: var(--purple-dim); border: 1px solid rgba(124,92,252,0.25); }
        .sc-main { display: flex; flex-direction: column; gap: 8px; overflow: hidden; }
        .sc-topbar {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: 7px;
          height: 24px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          padding: 0 8px;
          gap: 6px;
        }
        .sc-topbar-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.1); flex-shrink: 0; }
        .sc-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          flex: 1;
          min-height: 0;
        }
        .sc-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: 7px;
          padding: 6px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow: hidden;
        }
        .sc-card-thumb {
          background: rgba(124,92,252,0.15);
          border-radius: 4px;
          flex: 1;
          min-height: 0;
        }
        .sc-card-line { height: 5px; border-radius: 3px; background: rgba(255,255,255,0.06); flex-shrink: 0; }
        .sc-card-line.short { width: 60%; }
        .webcam-pip {
          position: absolute;
          bottom: 10px;
          left: 10px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 2.5px solid var(--purple);
          background: linear-gradient(135deg, #2a1a5e, #1a0a40);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          box-shadow: 0 0 0 4px rgba(124,92,252,0.15);
        }
        .ai-chip {
          position: absolute;
          top: -14px;
          right: 16px;
          background: var(--bg2);
          border: 1px solid rgba(124,92,252,0.4);
          border-radius: 10px;
          padding: 8px 14px;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 10;
          white-space: nowrap;
        }
        .ai-chip-icon {
          width: 20px; height: 20px;
          background: var(--purple);
          border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
        }
        .ai-chip-text { color: var(--muted); }
        .ai-chip-text strong { color: var(--text); font-weight: 600; }
        .mockup-controls {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 14px;
        }
        .ctrl-btn {
          padding: 8px 20px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          border: none;
          transition: opacity 0.2s;
          display: flex; align-items: center; gap: 6px;
        }
        .ctrl-stop { background: var(--red); color: white; }
        .ctrl-share { background: rgba(255,255,255,0.08); border: 1px solid var(--border2); color: var(--text); }
        .ctrl-btn:hover { opacity: 0.8; }

        /* STATS */
        .stats-bar {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: var(--bg2);
        }
        .stats-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 48px 2rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .stat-item {
          text-align: center;
          padding: 0 24px;
          border-right: 1px solid var(--border);
        }
        .stat-item:last-child { border-right: none; }
        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 42px;
          font-weight: 800;
          color: var(--text);
          letter-spacing: -1px;
        }
        .stat-num span { color: var(--purple); }
        .stat-label { font-size: 13px; color: var(--muted); margin-top: 4px; }

        /* FEATURES */
        .features {
          max-width: 1160px;
          margin: 0 auto;
          padding: 100px 2rem;
        }
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--purple);
          margin-bottom: 16px;
        }
        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(30px, 3.5vw, 48px);
          font-weight: 800;
          letter-spacing: -1.5px;
          margin-bottom: 16px;
        }
        .section-sub { color: var(--muted); font-size: 16px; max-width: 480px; margin-bottom: 60px; }
        .features-header { text-align: center; display: flex; flex-direction: column; align-items: center; }
        .feat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .feat-card {
          background: var(--bg3);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 32px 28px;
          transition: border-color 0.25s, transform 0.2s;
        }
        .feat-card:hover {
          border-color: rgba(124,92,252,0.45);
          transform: translateY(-2px);
        }
        .feat-icon {
          width: 44px; height: 44px;
          background: var(--purple-dim);
          border: 1px solid rgba(124,92,252,0.2);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
        .feat-title { font-size: 17px; font-weight: 700; margin-bottom: 10px; }
        .feat-desc { color: var(--muted); font-size: 14px; line-height: 1.7; }

        /* HOW IT WORKS */
        .how {
          background: var(--bg2);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .how-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 100px 2rem;
        }
        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
          margin-top: 60px;
          position: relative;
        }
        .steps::before {
          content: '';
          position: absolute;
          top: 22px;
          left: calc(16% + 22px);
          width: calc(68% - 44px);
          height: 1px;
          border-top: 1px dashed rgba(124,92,252,0.4);
        }
        .step-num {
          width: 44px; height: 44px;
          border-radius: 12px;
          border: 1px solid rgba(124,92,252,0.4);
          background: var(--bg);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 800;
          color: var(--purple);
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }
        .step-title { font-size: 17px; font-weight: 700; margin-bottom: 8px; }
        .step-desc { color: var(--muted); font-size: 14px; line-height: 1.7; }

        /* PRICING */
        .pricing {
          max-width: 900px;
          margin: 0 auto;
          padding: 100px 2rem;
        }
        .pricing-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 56px;
        }
        .price-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: start;
        }
        .price-card {
          background: var(--bg3);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 36px 32px;
        }
        .price-card.featured {
          background: #16103a;
          border: 1px solid rgba(124,92,252,0.5);
          position: relative;
        }
        .popular-badge {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--purple);
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 4px 16px;
          border-radius: 999px;
          white-space: nowrap;
        }
        .price-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 8px;
        }
        .price-amount {
          font-family: 'Syne', sans-serif;
          font-size: 52px;
          font-weight: 800;
          letter-spacing: -2px;
          line-height: 1;
          margin-bottom: 6px;
        }
        .price-period { font-size: 13px; color: var(--muted); margin-bottom: 28px; }
        .price-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }
        .price-features li {
          font-size: 14px;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .price-features li.enabled { color: var(--text); }
        .price-features li.disabled { color: #444460; }
        .price-btn {
          width: 100%;
          padding: 13px;
          border-radius: 12px;
          font-size: 14.5px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          border: none;
          transition: opacity 0.2s, transform 0.15s;
          text-align: center;
          display: block;
          text-decoration: none;
        }
        .price-btn:hover { opacity: 0.85; transform: translateY(-1px); }
        .price-btn-free {
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border2);
          color: var(--text);
        }
        .price-btn-pro { background: var(--purple); color: white; }

        /* FOOTER */
        footer {
          border-top: 1px solid var(--border);
          background: var(--bg);
        }
        .footer-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 40px 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }
        .footer-links { display: flex; gap: 24px; flex-wrap: wrap; }
        .footer-links a {
          font-size: 13px;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover { color: var(--text); }
        .footer-copy { font-size: 12.5px; color: #444460; }

        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; gap: 40px; padding: 60px 1.5rem 40px; }
          .stats-inner { grid-template-columns: repeat(2,1fr); }
          .stat-item:nth-child(2) { border-right: none; }
          .stat-item:nth-child(3) { border-right: 1px solid var(--border); border-top: 1px solid var(--border); padding-top: 24px; margin-top: 24px; }
          .stat-item:nth-child(4) { border-right: none; border-top: 1px solid var(--border); padding-top: 24px; margin-top: 24px; }
          .feat-grid { grid-template-columns: 1fr; }
          .steps { grid-template-columns: 1fr; }
          .steps::before { display: none; }
          .price-grid { grid-template-columns: 1fr; }
          .nav-links { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <Link href="/" className="logo">
          <div className="logo-dot">
            <svg viewBox="0 0 24 24" width="14" height="14">
              <circle cx="12" cy="12" r="4" fill="white"/>
              <path d="M5 12a7 7 0 0 0 14 0" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          reco-d
        </Link>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
        </div>
        <Link href="/auth/sign-in">
          <button className="nav-cta">Let's Reco-d</button>
        </Link>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div>
          <div className="hero-badge">
            <span className="dot" />
            AI-powered video collaboration
          </div>
          <h1>
            Record.<br />
            <em>Share.</em><br />
            Understand.
          </h1>
          <p className="hero-sub">
            One-click screen and camera capture, instant shareable links, and AI
            that turns your recordings into searchable, actionable summaries.
          </p>
          <div className="hero-actions">
            <Link href="/auth/sign-in" className="btn-primary">
              Start recording free
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <button className="btn-ghost">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              Watch demo
            </button>
          </div>
        </div>

        {/* Mockup */}
        <div className="mockup">
          <div className="ai-chip">
            <div className="ai-chip-icon">
              <svg viewBox="0 0 24 24" width="11" height="11" fill="white">
                <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/>
              </svg>
            </div>
            <div className="ai-chip-text"><strong>AI summary</strong> ready in 12s</div>
          </div>

          <div className="mockup-bar">
            <div className="traffic-lights">
              <div className="tl tl-r" />
              <div className="tl tl-y" />
              <div className="tl tl-g" />
            </div>
            <div className="rec-badge">
              <div className="rec-dot" />
              LIVE 02:14
            </div>
          </div>

          <div className="mockup-screen">
            <div className="screen-grid" />
            <div className="screen-content">
              <div className="sc-sidebar">
                <div className="sc-row" style={{ width: "70%", height: "8px", marginBottom: "4px" }} />
                <div className="sc-row active" style={{ width: "100%", height: "28px", borderRadius: "6px" }} />
                <div className="sc-row" style={{ width: "88%", height: "24px", borderRadius: "6px" }} />
                <div className="sc-row" style={{ width: "75%", height: "24px", borderRadius: "6px" }} />
                <div className="sc-row" style={{ width: "90%", height: "24px", borderRadius: "6px" }} />
              </div>
              <div className="sc-main">
                <div className="sc-topbar">
                  <div className="sc-topbar-dot" />
                  <div className="sc-topbar-dot" />
                  <div className="sc-row" style={{ flex: 1, height: "8px", maxWidth: "100px" }} />
                </div>
                <div className="sc-cards">
                  <div className="sc-card" style={{ borderColor: "rgba(124,92,252,0.3)", background: "rgba(124,92,252,0.05)" }}>
                    <div className="sc-card-thumb" />
                    <div className="sc-card-line" />
                    <div className="sc-card-line short" />
                  </div>
                  <div className="sc-card">
                    <div className="sc-card-thumb" style={{ background: "rgba(255,255,255,0.04)" }} />
                    <div className="sc-card-line" />
                    <div className="sc-card-line short" />
                  </div>
                  <div className="sc-card">
                    <div className="sc-card-thumb" style={{ background: "rgba(255,255,255,0.04)" }} />
                    <div className="sc-card-line" />
                    <div className="sc-card-line short" />
                  </div>
                </div>
              </div>
            </div>
            <div className="webcam-pip">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="rgba(255,255,255,0.5)" fill="none" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </div>
          </div>

          <div className="mockup-controls">
            <button className="ctrl-btn ctrl-stop">Stop recording</button>
            <button className="ctrl-btn ctrl-share">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                <polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
              </svg>
              Share link
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            { num: "1080", suffix: "p", label: "Resolution" },
            { num: "Zero", suffix: "", label: "Watermarks" },
            { num: "1", suffix: "-Click", label: "Instant Sharing" },
            { num: "100", suffix: "%", label: "Cloud Hosted" },
          ].map((s) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-num">{s.num}<span>{s.suffix}</span></div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="features-header">
          <div className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Features
          </div>
          <h2 className="section-title">Record once, share everywhere</h2>
          <p className="section-sub">
            Everything a team needs to stop scheduling calls and start sharing context asynchronously.
          </p>
        </div>

        <div className="feat-grid">
          {[
            {
              icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,
              title: "Screen + camera, in one take",
              desc: "Capture your screen, webcam, and mic simultaneously — up to 1080p. No software to install, works entirely in the browser.",
            },
            {
              icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>,
              title: "AI summaries and chapters",
              desc: "Transcription, smart chapter markers, key takeaways, and action items — generated automatically the moment your recording ends.",
            },
            {
              icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
              title: "Team workspaces",
              desc: "Organize recordings into shared folders, leave timestamped comments, and set viewer-only or edit permissions per workspace.",
            },
            {
              icon: <><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></>,
              title: "One-click sharing",
              desc: "Every video gets a private link the moment you stop recording , You can share it instantly via Slack, Notion, email, or any other tool your team already uses.",
            },
            {
              icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>,
              title: "Viewer analytics",
              desc: "See who Actually watched your video and Know whether your message actually landed.",
            },
            {
              icon: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></>,
              title: "Instant View Alerts",
              desc: "Never wonder if your message was seen. Get an automatic email notification the exact moment someone watches your video for the first time.",
            }
          ].map((f) => (
            <div className="feat-card" key={f.title}>
              <div className="feat-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {f.icon}
                </svg>
              </div>
              <div className="feat-title">{f.title}</div>
              <div className="feat-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <div className="how" id="how">
        <div className="how-inner">
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="section-label">How it works</div>
            <h2 className="section-title">From idea to inbox in minutes</h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>
              No meetings. No scheduling. Just record your thinking and let reco-d do the rest.
            </p>
          </div>
          <div className="steps">
            {[
              {
                n: "1",
                title: "Hit record",
                desc: "Launch the reco-d desktop app, choose your capture sources, and click record. A lightweight native client built for reliable, flawless capture.",
              },
              {
                n: "2",
                title: "AI processes instantly",
                desc: "While you review, reco-d transcribes your audio, generates chapter titles, and surfaces action items.",
              },
              {
                n: "3",
                title: "Share the link",
                desc: "Copy the link and paste it wherever your team already works — Slack, Notion, email.",
              },
            ].map((s) => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="pricing-header">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Simple, no-surprise pricing</h2>
          <p className="section-sub">Start free, no credit card required. Upgrade only when you need more.</p>
        </div>

        <div className="price-grid">
          {/* Starter */}
          <div className="price-card">
            <div className="price-name">Starter</div>
            <div className="price-amount">$0</div>
            <div className="price-period">Free forever — no credit card</div>
            <ul className="price-features">
              {[
                { text: "Up to 25 videos", on: true },
                { text: "5-minute recording limit", on: true },
                { text: "720p quality", on: true },
                { text: "AI summaries", on: false },
              ].map((item) => (
                <li key={item.text} className={item.on ? "enabled" : "disabled"}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={item.on ? "#a78bfa" : "#444460"} strokeWidth="2">
                    {item.on
                      ? <polyline points="20 6 9 17 4 12"/>
                      : <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                    }
                  </svg>
                  {item.text}
                </li>
              ))}
            </ul>
            <Link href="/auth/sign-in" className="price-btn price-btn-free">Let's Reco-d</Link>
          </div>

          {/* Pro */}
          <div className="price-card featured">
            <div className="popular-badge">Most popular</div>
            <div className="price-name" style={{ color: "#a78bfa" }}>Pro</div>
            <div className="price-amount">$99</div>
            <div className="price-period">per year — $8.25 / month billed annually</div>
            <ul className="price-features">
              {[
                "Unlimited videos",
                "Unlimited recording length",
                "1080p HD video quality & downloads",
                "AI titles, summaries & chapters",
              ].map((item) => (
                <li key={item} className="enabled">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#a78bfa" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/auth/sign-in" className="price-btn price-btn-pro">Upgrade to Pro</Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-inner">
          <Link href="/" className="logo">
            <div className="logo-dot">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <circle cx="12" cy="12" r="4" fill="white"/>
                <path d="M5 12a7 7 0 0 0 14 0" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            reco-d
          </Link>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
            <a href="#">Privacy policy</a>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} reco-d Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}