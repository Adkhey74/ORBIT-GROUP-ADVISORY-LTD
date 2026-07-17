import { site } from "@/content/site";
import { Wordmark } from "./ui/Wordmark";

export function Footer() {
  const { company, footer } = site;
  const year = 2026;

  const columns = [
    { heading: "Offices", items: footer.offices },
    { heading: "Divisions", items: footer.divisions },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#0d0d0d]">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Wordmark size="md" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              {footer.tagline}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="text-sm text-white/60">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-white"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {company.phone}
                </a>
              </li>
              <li className="pt-1 text-xs text-white/35">By appointment only</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[11px] uppercase tracking-[0.12em] text-white/35">
            © {year} {company.legalName} · Registered in {company.registeredIn} · Company
            No. {company.registrationNumber}
          </span>
          <span className="text-[11px] uppercase tracking-[0.12em] text-white/35">
            {footer.note}
          </span>
        </div>
      </div>
    </footer>
  );
}
