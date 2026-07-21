"use client";

import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import geography from "world-atlas/countries-110m.json";

type City = {
  name: string;
  sub?: string;
  coordinates: [number, number];
  anchor: "start" | "middle" | "end";
  dx: number;
  dy: number;
};

/* Coverage cities (lon, lat) with label placement tweaks. */
const cities: City[] = [
  { name: "London", sub: "United Kingdom", coordinates: [-0.1278, 51.5074], anchor: "end", dx: -10, dy: -6 },
  { name: "Paris", sub: "France", coordinates: [2.3522, 48.8566], anchor: "end", dx: -10, dy: 4 },
  { name: "Geneva", sub: "Switzerland", coordinates: [6.1432, 46.2044], anchor: "end", dx: -10, dy: -4 },
  { name: "French Riviera", sub: "Côte d'Azur", coordinates: [7.262, 43.7102], anchor: "start", dx: 12, dy: -6 },
  { name: "Monaco", coordinates: [7.4246, 43.7384], anchor: "start", dx: 12, dy: 24 },
  { name: "Ibiza", sub: "Balearic Islands", coordinates: [1.4329, 38.9067], anchor: "middle", dx: 0, dy: 20 },
];

export function EuropeMap() {
  // react-simple-maps' projection yields sub-pixel float differences between
  // server and client, causing hydration mismatches. Render client-only after
  // mount, reserving the same box to avoid layout shift.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div aria-hidden style={{ width: "100%", aspectRatio: "980 / 540" }} />;
  }

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ center: [3.5, 45], scale: 1050 }}
      width={980}
      height={540}
      style={{ width: "100%", height: "auto" }}
    >
      <Geographies geography={geography}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#26232f"
              stroke="rgba(167,139,250,0.35)"
              strokeWidth={0.6}
              style={{
                default: { outline: "none" },
                hover: { outline: "none", fill: "#322d42" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>

      {cities.map((city) => (
        <Marker key={city.name} coordinates={city.coordinates}>
          <circle r={7} fill="none" stroke="#7c3aed" strokeWidth={1} opacity={0.4} />
          <circle r={3.5} fill="#7c3aed" stroke="#a78bfa" strokeWidth={1} />
          <text
            textAnchor={city.anchor}
            dx={city.dx}
            dy={city.dy}
            style={{ fontFamily: "var(--font-sans)" }}
            fontSize={11}
            letterSpacing={1}
            fill="#a78bfa"
          >
            {city.name}
          </text>
          {city.sub ? (
            <text
              textAnchor={city.anchor}
              dx={city.dx}
              dy={city.dy + 11}
              style={{ fontFamily: "var(--font-sans)" }}
              fontSize={8}
              letterSpacing={1}
              fill="rgba(255,255,255,0.4)"
            >
              {city.sub}
            </text>
          ) : null}
        </Marker>
      ))}
    </ComposableMap>
  );
}
