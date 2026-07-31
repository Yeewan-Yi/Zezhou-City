import fs from "node:fs";
const source = fs.readFileSync("review/401-reference.svg", "utf8");
const group = source.match(/<g id="group_routemap">([\s\S]*?)<\/g>/)[1];
const paths = [...group.matchAll(/<path class="st198" d="([^"]+)"\/>/g)].map((match) => match[1]);
console.log(JSON.stringify(paths, null, 2));
