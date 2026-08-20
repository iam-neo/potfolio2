import Link from "next/link";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { SITE_METADATA, NAVIGATION_LINKS } from "@/lib/constants";

export function SiteHeader() {
  return (
    <>
      {/* Skip to Main Content for Screen Readers & Keyboard Nav */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#d9825b] text-[#0a0b0e] font-mono text-xs font-semibold rounded"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full border-b border-[#1e202b]/60 bg-[#0a0b0e]/80 backdrop-blur-md transition-colors">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand & Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-sm tracking-tight transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <span className="font-mono text-xs font-bold tracking-widest text-[#f0f0f4]">
              NEO
            </span>
            <span className="text-[#3c3f52]" aria-hidden="true">/</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#9496a4] group-hover:text-[#f0f0f4] transition-colors hidden xs:inline-block">
              Archive & Folio
            </span>
          </Link>

          {/* Phase Badge & Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <MonoLabel variant="accent" size="xs" dot className="hidden md:inline-flex">
              {SITE_METADATA.phase}
            </MonoLabel>

            <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main Navigation">
              {NAVIGATION_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-wider text-[#9496a4] hover:text-[#f0f0f4] px-2.5 py-1.5 rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
