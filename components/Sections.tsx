import Image from "next/image";
import { about, contact, projects, services, site, steps } from "@/content";
import { asset, isRealLink } from "@/lib";
import { ArrowUpRight, Check, Code, Mail, socialIcon } from "./Icons";

function SectionHeading({ id, eyebrow, title, intro }: { id: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="fade-up mb-14 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--amber)]">{eyebrow}</p>
      <h2 id={id} className="text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{title}</h2>
      {intro ? <p className="mt-5 text-pretty text-lg leading-relaxed text-[var(--muted)]">{intro}</p> : null}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-12">
      <SectionHeading id="projects-title" eyebrow="Selected work" title="Real sites for real businesses" intro="A few things I've designed, built and launched." />
      <ul className={`grid gap-8 md:grid-cols-2 ${projects.length >= 3 ? "lg:grid-cols-3" : ""}`}>
        {projects.map((p) => (
          <li key={p.title} className="fade-up">
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--card)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 hover:border-[#f5b041]/40">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--line)] bg-[var(--bg-soft)]">
                {p.image ? (
                  <Image src={asset(p.image)} alt={p.imageAlt || `Screenshot of ${p.title}`} fill unoptimized sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover object-top transition duration-700 group-hover:scale-[1.04]" />
                ) : (
                  <div aria-hidden="true" className="absolute inset-0 grid place-items-center bg-[repeating-linear-gradient(135deg,transparent_0_14px,rgba(255,255,255,0.04)_14px_28px)]">
                    <span className="rounded-full border border-dashed border-[var(--muted)]/40 px-4 py-1.5 text-sm text-[var(--muted)]">Add a screenshot</span>
                  </div>
                )}
                {p.example ? (
                  <span className="absolute left-4 top-4 rounded-full bg-[#f5b041] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#160f05]">Example</span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-[var(--muted)]">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full bg-[var(--bg-soft)] px-3 py-1 text-xs font-medium text-[var(--fg)]">{t}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                  {p.liveUrl ? (
                    <a href={p.liveUrl} {...(isRealLink(p.liveUrl) ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-4 py-2 text-[var(--accent-fg)] transition hover:opacity-90">
                      Visit site<span className="sr-only">: {p.title}{isRealLink(p.liveUrl) ? " (opens in a new tab)" : ""}</span>
                      <ArrowUpRight />
                    </a>
                  ) : null}
                  {p.repoUrl ? (
                    <a href={p.repoUrl} {...(isRealLink(p.repoUrl) ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] px-4 py-2 transition hover:bg-[var(--bg-soft)]">
                      <Code /> Code<span className="sr-only">: {p.title} source</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-12">
        <SectionHeading id="services-title" eyebrow="Services" title="Simple packages, honest prices" intro="Everything a small business needs to look professional online, without the agency price tag." />
        <ul className="grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.name} className="fade-up">
              <article className={`relative flex h-full flex-col rounded-3xl p-8 ${s.featured ? "bg-gradient-to-b from-[#1a1710] to-[#0f1522] text-[#fffaf5] shadow-2xl shadow-[#f5b041]/10 ring-1 ring-[#f5b041]/50" : "border border-[var(--line)] bg-[var(--card)]"}`}>
                {s.featured ? <p className="absolute right-6 top-6 rounded-full bg-[#f5b041] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#160f05]">Most popular</p> : null}
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight">{s.price || "Get a quote"}</span>
                  {s.price ? <span className={s.featured ? "text-[#d8cde0]" : "text-[var(--muted)]"}>{s.priceNote}</span> : null}
                </p>
                <p className={`mt-4 leading-relaxed ${s.featured ? "text-[#ece3ef]" : "text-[var(--muted)]"}`}>{s.description}</p>
                <ul className="mt-7 space-y-3 border-t border-current/10 pt-7">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${s.featured ? "bg-[#f5b041] text-[#160f05]" : "bg-[var(--accent)] text-[var(--accent-fg)]"}`}><Check className="size-3" /></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-8 inline-flex justify-center rounded-full px-6 py-3 font-semibold transition ${s.featured ? "bg-[#f5b041] text-[#160f05] hover:bg-[#ffc56b]" : "border border-[var(--line)] hover:bg-[var(--bg-soft)]"}`}>
                  Get started<span className="sr-only"> with the {s.name} package</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
        <ol className="mt-16 grid gap-6 sm:grid-cols-3" aria-label="How it works">
          {steps.map((p) => (
            <li key={p.step} className="fade-up flex gap-4">
              <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full border border-[var(--line)] bg-[var(--card)] font-semibold text-[var(--amber)]">{p.step}</span>
              <div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-[var(--muted)]">{p.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-12">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div className="fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--amber)]">About</p>
          <h2 id="about-title" className="text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{about.heading}</h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-[var(--muted)]">
            {about.paragraphs.map((t, i) => <p key={i}>{t}</p>)}
          </div>
        </div>
        <ul className="grid content-center gap-4">
          {about.highlights.map((h) => (
            <li key={h.label} className="fade-up rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6">
              <p className="text-xl font-semibold tracking-tight">{h.label}</p>
              <p className="mt-1 text-[var(--muted)]">{h.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-4 pb-6 sm:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#111827] px-6 py-20 text-[#fffaf5] sm:px-12 sm:py-24">
        <div aria-hidden="true" className="absolute -right-32 -top-32 size-96 rounded-full bg-[#f5b041]/25 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-40 left-10 size-96 rounded-full bg-[#ff5a52]/20 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 id="contact-title" className="text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">Let's build your website.</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#ece3ef]">Tell me about your business and I'll reply within one business day with ideas and a simple quote.</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2.5 rounded-full bg-[#f5b041] px-7 py-3.5 font-semibold text-[#160f05] transition hover:bg-[#ffc56b]">
              <Mail /> {contact.email}
            </a>
            {contact.phone ? (
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="rounded-full border border-white/25 px-7 py-3.5 font-semibold transition hover:bg-white/10">{contact.phone}</a>
            ) : null}
          </div>
          {contact.links.some((l) => isRealLink(l.href)) ? (
            <ul className="mt-10 flex gap-3" aria-label="Social profiles">
              {contact.links.filter((l) => isRealLink(l.href)).map((l) => {
                const Icon = socialIcon[l.icon];
                return (
                  <li key={l.label}>
                    <a href={l.href} aria-label={`${l.label} profile`} {...(isRealLink(l.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="grid size-12 place-items-center rounded-full border border-white/20 transition hover:bg-white/10">
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-10 text-sm text-[var(--muted)] sm:flex-row sm:justify-between sm:px-10 lg:px-12">
      <p>© {new Date().getFullYear()} {site.name}. {contact.location}</p>
      <p className="flex flex-wrap gap-x-6 gap-y-2">
        <a href={`mailto:${contact.email}`} className="underline underline-offset-4 hover:text-[var(--fg)]">{contact.email}</a>
        {contact.links.filter((l) => isRealLink(l.href)).map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`${l.label} profile`} className="underline underline-offset-4 hover:text-[var(--fg)]">{l.label}</a>
        ))}
        <a href="#top" className="underline underline-offset-4 hover:text-[var(--fg)]">Back to top</a></p>
    </footer>
  );
}
