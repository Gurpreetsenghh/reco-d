
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Monitor,
  Play,
  Sparkles,
  Share2,
  Video,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white selection:bg-purple-500/30">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 -top-50 h-175 w-175 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[180px]" />
        <div className="absolute -bottom-62.5 right-0 h-125 w-125 rounded-full bg-indigo-600/10 blur-[180px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-900/70 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600">
              <Video size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight">reco-d</span>
          </div>

          <Link
            href="/auth/sign-in"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Log In
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 md:pb-32 md:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400">
              <Sparkles className="h-4 w-4" />
              Screen Recording & Video Sharing
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Turn Screen
              <br />
              Recordings Into
              <br />
              <span className="bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Clear Communication
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400 lg:text-xl">
              Record your screen, share videos instantly, and generate
              automatic transcripts and summaries to communicate faster.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/auth/sign-up"
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 font-medium shadow-lg shadow-purple-500/20 transition hover:bg-purple-700"
              >
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Link>

              <button className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-8 py-4 font-medium transition hover:bg-zinc-900">
                <Play className="h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Product Mockup */}
          <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4 shadow-2xl backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-between px-2">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                <span className="text-xs font-semibold tracking-wider text-red-400">
                  LIVE 02:14
                </span>
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
              <Image
                src="/dashboard-preview.png"
                alt="Dashboard Preview"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute bottom-5 left-5">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-purple-600 bg-zinc-800 lg:h-32 lg:w-32">
                  <Image
                    src="/webcamLand.png"
                    alt="Webcam Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <button className="rounded-full bg-red-500 px-6 py-2 text-sm font-medium transition hover:bg-red-600">
                Stop Recording
              </button>

              <button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-black transition hover:bg-zinc-200">
                Share Link
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Everything You Need
          </h2>

          <p className="mt-4 text-lg text-zinc-400">
            Simple tools designed to help you record, share, and explain ideas
            more effectively.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition hover:border-purple-500/50">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 transition group-hover:scale-110">
              <Monitor className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-bold">Screen Recording</h3>

            <p className="mt-4 leading-relaxed text-zinc-400">
              Capture your screen, webcam, and microphone with a single click
              and record presentations, tutorials, or walkthroughs.
            </p>
          </div>

          <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition hover:border-purple-500/50">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 transition group-hover:scale-110">
              <Sparkles className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-bold">
              AI Transcripts & Summaries
            </h3>

            <p className="mt-4 leading-relaxed text-zinc-400">
              Generate transcripts and concise summaries automatically so
              viewers can quickly understand the important parts.
            </p>
          </div>

          <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition hover:border-purple-500/50">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 transition group-hover:scale-110">
              <Share2 className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-bold">Instant Video Sharing</h3>

            <p className="mt-4 leading-relaxed text-zinc-400">
              Share recordings using a simple link and let anyone watch directly
              in their browser without downloads.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Simple Pricing
          </h2>

          <p className="mt-4 text-lg text-zinc-400">
            Start free and upgrade when you need more recording power.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Starter */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-10">
            <h3 className="text-2xl font-bold">Starter</h3>

            <p className="mt-2 text-zinc-400">
              Perfect for individuals getting started.
            </p>

            <div className="my-8">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-zinc-500"> / month</span>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-zinc-500" />
                Up to 25 recordings
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-zinc-500" />
                5 minute recording limit
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-zinc-500" />
                720p video quality
              </li>
            </ul>

            <Link
              href="/auth/sign-up"
              className="mt-8 block rounded-xl border border-zinc-700 py-3 text-center font-semibold transition hover:bg-zinc-800"
            >
              Get Started Free
            </Link>
          </div>

          {/* Pro */}
          <div className="relative rounded-3xl border border-purple-500 bg-linear-to-b from-purple-600 to-purple-900 p-10 shadow-2xl shadow-purple-500/20">
            <div className="absolute right-8 top-0 -translate-y-1/2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
              Recommended
            </div>

            <h3 className="text-2xl font-bold">Pro</h3>

            <p className="mt-2 text-purple-200">
              For creators and professionals.
            </p>

            <div className="my-8">
              <span className="text-5xl font-bold">$99</span>
              <span className="text-purple-200"> / year</span>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-200" />
                Unlimited recordings
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-200" />
                Unlimited recording length
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-200" />
                1080p video quality
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-200" />
                AI transcripts & summaries
              </li>
            </ul>

            <Link
              href="/auth/sign-up"
              className="mt-8 block rounded-xl bg-white py-3 text-center font-semibold text-purple-900 transition hover:bg-zinc-100"
            >
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-4xl rounded-3xl border border-purple-500/20 bg-linear-to-b from-purple-600/20 to-transparent p-12 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Start Recording Today
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Record your screen, share videos instantly, and generate transcripts
            and summaries automatically.
          </p>

          <Link
            href="/auth/sign-up"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 font-medium transition hover:bg-purple-700"
          >
            Get Started Free
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-[#050505]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800">
              <Video className="h-4 w-4 text-purple-500" />
            </div>

            <span className="text-xl font-bold">reco-d</span>
          </div>

          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} reco-d. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

