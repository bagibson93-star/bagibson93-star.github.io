import Image from "next/image";
import { asset } from "@/lib";
import { ArrowRight } from "./Icons";

type Cta = { label: string; href: string };
type HeroProps = {
  /** Path in /public, e.g. "/hero.jpg". Also used as the video poster. */
  image: string;
  imageAlt: string;
  /** Optional muted, looping MP4 background, e.g. "/hero.mp4". */
  video?: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
};

/**
 * Full-viewport cinematic hero.
 * - Slow Ken Burns zoom on load, scroll-driven scale/parallax (CSS only)
 * - Staggered text reveal
 * - All motion disabled under prefers-reduced-motion (see globals.css)
 * - Dark navy gradient fallback shows if the image is missing
 */
export default function Hero({ image, imageAlt, video, eyebrow, title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-gradient-to-br from-[#05070c] via-[#0d1422] to-[#2a1a0a] text-[#fffaf5]"
    >
      {/* Media layer */}
      <div className="hero-parallax absolute inset-0 -z-20">
        <div className="hero-media absolute inset-0">
          <Image
            src={asset(image)}
            alt={imageAlt}
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-[62%_center] sm:object-center"
          />
          {video ? (
            <video
              className="hero-video absolute inset-0 size-full object-cover"
              src={asset(video)}
              poster={asset(image)}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
              tabIndex={-1}
            />
          ) : null}
        </div>
      </div>

      {/* Scrims: soft cream from the left (desktop) / from the top (mobile), plus vignette and grain */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(130%_100%_at_0%_100%,rgba(5,7,12,0.88)_0%,rgba(5,7,12,0.65)_38%,rgba(5,7,12,0.15)_68%,transparent_85%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,7,12,0.7)] via-[rgba(5,7,12,0.2)] via-50% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,7,12,0.6)] via-[rgba(5,7,12,0.25)] via-50% to-transparent" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[rgba(5,7,12,0.5)] to-transparent" />
        <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.5)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--bg)] to-transparent" />
        <div className="rain absolute inset-0" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="hero-copy-scroll mx-auto w-full max-w-7xl px-6 pb-24 pt-40 sm:pb-32 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-[#fffaf5]/20 bg-[#fffaf5]/10 px-4 py-1.5 text-sm font-medium text-[#f6ece8] backdrop-blur-md" style={{ ["--i" as string]: 0 }}>
              <span aria-hidden="true" className="size-2 rounded-full bg-[#ff5a52]" />
              {eyebrow}
            </p>
          ) : null}
          <h1
            id="hero-title"
            className="reveal text-balance text-5xl drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] font-semibold leading-[0.98] tracking-[-0.035em] sm:text-7xl lg:text-[5.25rem]"
            style={{ ["--i" as string]: 1 }}
          >
            {title}
          </h1>
          <p className="reveal mt-7 max-w-xl text-pretty text-lg leading-relaxed text-[#f6e9df] sm:text-xl" style={{ ["--i" as string]: 2 }}>
            {subtitle}
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-3" style={{ ["--i" as string]: 3 }}>
            {primaryCta ? (
              <a href={primaryCta.href} className="group inline-flex items-center gap-2 rounded-full bg-[#f5b041] px-7 py-3.5 text-base font-semibold text-[#160f05] shadow-lg shadow-black/30 transition hover:bg-[#ffc56b]">
                {primaryCta.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            ) : null}
            {secondaryCta ? (
              <a href={secondaryCta.href} className="inline-flex items-center gap-2 rounded-full border border-[#fffaf5]/30 bg-[#fffaf5]/10 px-7 py-3.5 text-base font-semibold text-[#fffaf5] backdrop-blur-md transition hover:bg-[#fffaf5]/20">
                {secondaryCta.label}
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="scroll-cue h-10 w-6 rounded-full border-2 border-[#fffaf5]/50 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-[#fffaf5]/80" />
        </div>
      </div>
    </section>
  );
}
