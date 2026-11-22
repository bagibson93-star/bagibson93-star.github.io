import { contact, site } from "@/content";
import { isRealLink } from "@/lib";
import { GitHub } from "./Icons";

const github = contact.links.find((l) => l.icon === "github" && isRealLink(l.href));

const nav = [
  { href: "#projects", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/10 bg-[rgba(7,9,15,0.6)] px-4 py-2 text-[#fffaf5] shadow-lg shadow-black/10 backdrop-blur-xl max-sm:mx-3 sm:mx-6 sm:px-6 lg:mx-auto">
        <a href="#top" className="flex items-center gap-2.5 py-1.5 font-semibold tracking-tight">
          <span aria-hidden="true" className="grid size-8 place-items-center rounded-full bg-[#f5b041] text-sm font-bold text-[#160f05]">
            {site.name.split(" ").map((w) => w[0]).join("")}
          </span>
          <span className="max-sm:sr-only">{site.name}</span>
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-0.5 text-sm font-medium sm:gap-1">
            {nav.map((n) => (
              <li key={n.href} className={n.href === "#about" ? "max-sm:hidden" : ""}>
                <a href={n.href} className="block rounded-full px-3 py-2 text-[#f6ece8] transition hover:bg-white/10 hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
            {github ? (
              <li>
                <a href={github.href} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="grid size-9 place-items-center rounded-full text-[#f6ece8] transition hover:bg-white/10 hover:text-white">
                  <GitHub className="size-5" />
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </header>
  );
}
