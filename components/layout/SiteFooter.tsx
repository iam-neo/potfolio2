import { SITE_METADATA } from "@/lib/constants";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#1e202b] bg-[#0a0b0e] py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-mono text-xs font-semibold text-[#f0f0f4]">
            {SITE_METADATA.title}
          </span>
          <span className="text-[#3c3f52] hidden sm:inline" aria-hidden="true">•</span>
          <span className="font-mono text-[11px] text-[#5e6171]">
            Archival Narrative Engine v{SITE_METADATA.version}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-mono text-[11px] text-[#5e6171]">
            Phase 1: Foundation Active
          </span>
          <span className="text-[#3c3f52]" aria-hidden="true">•</span>
          <span className="font-mono text-[11px] text-[#5e6171]">
            © {currentYear} {SITE_METADATA.author}
          </span>
        </div>
      </div>
    </footer>
  );
}
