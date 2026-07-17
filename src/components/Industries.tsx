import { site } from "@/content/site";
import { Marquee } from "./ui/Marquee";

export function Industries() {
  return (
    <div className="border-y border-white/10 bg-[#131313] py-7">
      <Marquee
        items={site.industries.map((i) => i)}
        duration={30}
        separator="·"
        itemClassName="px-8 text-[11px] uppercase tracking-[0.25em] text-white/55"
      />
    </div>
  );
}
