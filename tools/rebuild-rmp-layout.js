const fs = require("fs");
const path = require("path");

const source = path.resolve(__dirname, "../review/RMP_1785391141774-source.json");
const output = path.resolve(__dirname, "../review/泽州市轨道交通线网图-重构版.json");
const preview = path.resolve(__dirname, "../review/泽州市轨道交通线网图-重构预览.svg");
const data = JSON.parse(fs.readFileSync(source, "utf8"));

const stationCoords = {
  "白下国际机场":[170,300], "神工大道":[260,300], "凌云角":[350,340], "天信":[440,360],
  "常纬汇":[550,340], "红渡广场":[620,400], "承商街":[520,460], "泽州站":[700,300],
  "站前广场":[760,220], "印沙大道":[820,380], "衡印路":[700,440], "市职业技术学院":[780,440],
  "神印路":[900,440], "随化桥":[980,440], "江洲新城":[1060,440], "工气石化":[1140,440],
  "白塔山":[1200,380], "北庭":[1200,320], "江洲北站":[1200,260],
  "龙腾嘴":[840,800], "新岗":[840,720], "龙衔山":[840,660], "和平湾":[840,600],
  "璇玑路":[840,540], "常印大道":[840,480], "陇蜀":[880,340], "凤台大道":[940,280],
  "牧林":[1000,220], "泽大三山校区":[1060,160], "东郊":[1140,100],
  "植物园":[760,500], "元江·省人民医院":[900,500], "平江汇":[980,500],
  "善家庄":[1060,500], "青奥公园·奥体中心":[1140,500], "青奥公园·青奥中心":[1140,500],
  "陇蜀大道·市第六中学":[820,260], "勤庄":[880,260], "水榭滨":[1000,340], "汇善坊":[1100,470],
  "名广":[720,360], "和信园北":[680,500], "和岳信息园":[620,520], "博览中心":[600,600],
  "慧首湾":[560,650], "惠首湾":[560,650], "迁移广场":[520,700], "泽州南站":[620,740],
  "和宁路":[680,580], "驰龙大道":[920,620], "新胜·省人民法院":[1000,680], "胡家肆":[1100,700],
  "天元大道":[1160,620], "合其路":[640,620], "天赐府":[760,580], "古林":[1240,180],
  "鱼龙嘴":[700,760], "夹龙山":[760,760], "铁道旧址":[820,760], "伏爪关":[940,700],
  "学研路":[760,400]
};

const nodes = new Map(data.graph.nodes.map(n => [n.key, n]));
const oldPos = new Map(data.graph.nodes.map(n => [n.key, {x:n.attributes.x, y:n.attributes.y}]));
const isStation = n => n.attributes.type === "shmetro-basic" || n.attributes.type === "shmetro-int";
const stationName = n => n.attributes[n.attributes.type]?.names?.[0];

// First apply a broad affine transform, then replace every known station with a newly designed coordinate.
for (const n of data.graph.nodes) {
  const a = n.attributes;
  a.x = 150 + (a.x - 180) * 0.98;
  a.y = 110 + (a.y + 172) * 0.86;
  if (isStation(n)) {
    const name = stationName(n);
    if (stationCoords[name]) [a.x, a.y] = stationCoords[name];
    const station = a[a.type];
    if (!name || name === "XX") station.names = ["规划车站", "PLANNED STATION"];
    else if (name === "终点") station.names = ["规划终点", "PLANNED TERMINUS"];
    else if (name === "车站") station.names = ["规划车站", "PLANNED STATION"];
    else if (name === "青奥公园·奥体中心") station.names[0] = "青奥公园·青奥中心";
    else if (name === "慧首湾") station.names[0] = "惠首湾";
  }
}

// Rebuild virtual bends from the new station geometry rather than retaining the old skeleton.
const neighbours = new Map();
const riverEdges = new Set(data.graph.edges.filter(e => e.attributes.style === "river").map(e => e.key));
const riverNodes = new Set(data.graph.edges.filter(e => e.attributes.style === "river").flatMap(e => [e.source, e.target]));
for (const e of data.graph.edges) {
  if (!neighbours.has(e.source)) neighbours.set(e.source, []);
  if (!neighbours.has(e.target)) neighbours.set(e.target, []);
  neighbours.get(e.source).push(e.target);
  neighbours.get(e.target).push(e.source);
}
for (let pass = 0; pass < 8; pass++) {
  const updates = [];
  for (const n of data.graph.nodes) {
    if (n.attributes.type !== "virtual") continue;
    if (riverNodes.has(n.key)) continue;
    const linked = (neighbours.get(n.key) || []).map(k => nodes.get(k)).filter(Boolean);
    if (!linked.length) continue;
    const x = linked.reduce((s,v)=>s+v.attributes.x,0)/linked.length;
    const y = linked.reduce((s,v)=>s+v.attributes.y,0)/linked.length;
    updates.push([n, Math.round(x/20)*20, Math.round(y/20)*20]);
  }
  for (const [n,x,y] of updates) { n.attributes.x=x; n.attributes.y=y; }
}

// Major waterways follow the city's west-east river corridor and eastern waterfront.
const riverCoords = {
  "misc_node_jSwoLZERm5":[150,430], "misc_node_nfwgO83g9c":[270,430], "misc_node_E0Ms1xWzDI":[380,450],
  "misc_node_3HfM8oNL2E":[470,500], "misc_node_7AwM6Q45l6":[560,540], "misc_node_aJcjLJyKny":[670,560],
  "misc_node_ASBg1xc2kP":[780,580], "misc_node_P3ROBIEGf1":[900,580], "misc_node_w4c0TEWZSq":[1040,580],
  "misc_node_rT7qmKdLOX":[1180,580], "misc_node_0im4qlKCsH":[1280,760], "misc_node_0wFwYAa2dd":[900,640],
  "misc_node_IJs53kiAjG":[820,680], "misc_node_0OR_lL2hNM":[700,680], "misc_node_OxvElMz6Dc":[560,680]
};
for (const [key, xy] of Object.entries(riverCoords)) {
  const n=nodes.get(key); if(n) [n.attributes.x,n.attributes.y]=xy;
}

// Move facilities and endpoint badges together with their nearest station.
for (const n of data.graph.nodes) {
  const type = n.attributes.type;
  if (isStation(n) || type === "virtual" || type === "text") continue;
  const old = oldPos.get(n.key);
  let nearest = null, best = Infinity;
  for (const s of data.graph.nodes.filter(isStation)) {
    const so = oldPos.get(s.key);
    const d = Math.hypot(old.x-so.x, old.y-so.y);
    if (d < best) { best=d; nearest=s; }
  }
  if (nearest && best < 95) {
    const so = oldPos.get(nearest.key);
    n.attributes.x = nearest.attributes.x + (old.x-so.x);
    n.attributes.y = nearest.attributes.y + (old.y-so.y);
  }
}

for (const e of data.graph.edges) {
  const a=e.attributes;
  if (a.diagonal) a.diagonal.roundCornerFactor=14;
  if (a.perpendicular) a.perpendicular.roundCornerFactor=22;
  if (a.style === "river" && a.river) { a.river.width=11; a.river.color=["shanghai","river","#d8edf6","#fff"]; a.zIndex=-8; }
}

data.svgViewBoxMin={x:120,y:70};
data.svgViewBoxZoom=48;
fs.writeFileSync(output, JSON.stringify(data), "utf8");

// Lightweight geometry preview: sufficient to verify that the graph was genuinely rebuilt before RMP import.
const esc=s=>String(s).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const lineSvg=data.graph.edges.map(e=>{
  const s=nodes.get(e.source)?.attributes,t=nodes.get(e.target)?.attributes;
  if(!s||!t) return "";
  const col=e.attributes.style==="river"?"#d8edf6":(e.attributes["single-color"]?.color?.[2]||"#999");
  const w=e.attributes.style==="river"?11:6;
  return `<line x1="${s.x}" y1="${s.y}" x2="${t.x}" y2="${t.y}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`;
}).join("");
const stationSvg=data.graph.nodes.filter(isStation).map(n=>{
  const a=n.attributes,name=a[a.type].names[0];
  return `<g><circle cx="${a.x}" cy="${a.y}" r="5.5" fill="#fff" stroke="#465b59" stroke-width="2"/><text x="${a.x+8}" y="${a.y-8}" font-size="10" fill="#1f3533">${esc(name)}</text></g>`;
}).join("");
fs.writeFileSync(preview, `<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="920" viewBox="100 50 1250 800"><rect x="100" y="50" width="1250" height="800" fill="#fff"/>${lineSvg}${stationSvg}</svg>`, "utf8");

console.log(JSON.stringify({output,preview,nodes:data.graph.nodes.length,edges:data.graph.edges.length},null,2));
