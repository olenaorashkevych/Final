// scripts/build-sprite.mjs
import fg from "fast-glob";
import fs from "fs/promises";
import path from "path";
import { optimize } from "svgo";

const SRC_DIR = "public/images/svg";
const OUT_FILE = "public/images/sprite.svg";

const files = await fg("*.svg", { cwd: SRC_DIR });

if (!files.length) {
    console.log("❌ SVG файли не знайдені");
    process.exit(0);
}

const symbols = [];

for (const file of files) {
    const id = path.basename(file, ".svg");

    const rawSvg = await fs.readFile(path.join(SRC_DIR, file), "utf8");

    const { data } = optimize(rawSvg, {
        multipass: true,
        plugins: [
            "preset-default",
            "removeDimensions",
            {
                name: "removeAttrs",
                params: { attrs: "(fill|stroke|style)" }
            }
        ]
    });

    const viewBoxMatch = data.match(/viewBox="([^"]+)"/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

    // видаляємо обгортку svg
    const inner = data
        .replace(/<svg[^>]*>/, "")
        .replace("</svg>", "")
        .trim();

    // 👇 додаємо fill="currentColor"
    symbols.push(
        `<symbol id="${id}" viewBox="${viewBox}">${inner}</symbol>`
    );
}

const sprite = `
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  ${symbols.join("\n  ")}
</svg>
`.trim();

await fs.writeFile(OUT_FILE, sprite, "utf8");

console.log(`✅ Sprite зібрано: ${OUT_FILE}`);