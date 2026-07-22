import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * Renders the real San Diego region map inline so individual regions can be
 * styled/hovered via CSS. The SVG (from the target site) lives in
 * public/images/sd-map.svg and uses named <g> region groups.
 */
export async function SanDiegoMap() {
  let svg = "";
  try {
    svg = await readFile(
      path.join(process.cwd(), "public", "images", "sd-map.svg"),
      "utf8"
    );
    // make it fluid + drop the fixed pixel width/height
    svg = svg.replace(
      /<svg([^>]*?)>/,
      '<svg$1 class="wbg-sd-map" preserveAspectRatio="xMidYMid meet">'
    );
  } catch {
    return null;
  }

  return (
    <div
      className="wbg-sd-map-wrap w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
