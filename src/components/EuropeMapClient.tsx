"use client";

import dynamic from "next/dynamic";

/**
 * Lazy-loads the Europe map (react-simple-maps + d3-geo) as a separate chunk
 * so it stays out of the initial JS. Reserves the same box to avoid layout shift.
 */
const EuropeMap = dynamic(
  () => import("./EuropeMap").then((m) => m.EuropeMap),
  {
    ssr: false,
    loading: () => (
      <div aria-hidden style={{ width: "100%", aspectRatio: "980 / 540" }} />
    ),
  },
);

export function EuropeMapClient() {
  return <EuropeMap />;
}
