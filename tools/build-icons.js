#!/usr/bin/env node
// Wraps assets/icons.svg into assets/icons.js so the sprite can be injected
// without fetch() — external <use href="...svg#id"> and fetch both fail on file://.
// Run after editing the sprite:  node tools/build-icons.js
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const svg = fs.readFileSync(path.join(root, "assets/icons.svg"), "utf8").trim();

const out = `// GENERATED FILE — edit assets/icons.svg and run: node tools/build-icons.js
(() => {
  const sprite = ${JSON.stringify(svg)};
  const inject = () => {
    if (document.getElementById("icon-sprite")) return;
    const host = document.createElement("div");
    host.id = "icon-sprite";
    host.hidden = true;
    host.innerHTML = sprite;
    document.body.prepend(host);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", inject);
  else inject();
  window.ICONS = sprite.match(/id="(i-[a-z0-9-]+)"/g).map((s) => s.slice(4, -1));
})();
`;
fs.writeFileSync(path.join(root, "assets/icons.js"), out);
console.log("assets/icons.js written:", out.match(/i-/g).length, "refs");
