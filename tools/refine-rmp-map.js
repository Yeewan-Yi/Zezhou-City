const fs = require("fs");
const path = require("path");

const sourcePath = path.resolve(__dirname, "../review/RMP_1785391141774-source.json");
const outputPath = path.resolve(__dirname, "../review/泽州市轨道交通线网图-优化版.json");
const publicCopyPath = "D:/文档/架空城市/泽州市轨道交通线网图-优化版.json";

const data = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const nodes = data.graph.nodes;
const edges = data.graph.edges;

const linePalette = [
  [1, "#009ace", "#fff"], [2, "#a6093d", "#fff"], [3, "#009a44", "#fff"],
  [4, "#7d55c7", "#fff"], [5, "#f2da51", "#000"], [6, "#4bbbb4", "#fff"],
  [7, "#4a7729", "#fff"], [8, "#93282c", "#fff"], [9, "#fa4616", "#fff"],
  [10, "#b9975b", "#fff"], [11, "#ef426f", "#fff"], [12, "#ff6314", "#fff"]
];

const oldLegendKeys = new Set([
  "misc_node_FGZiMDKSX2", "misc_node_D_IWQuCh08", "misc_node_OUqZE0kWxj",
  "misc_node_eCzmmVF-Ph", "misc_node_utOkyf9zeI", "misc_node_qVEcXjNKkA",
  "misc_node_sHF44-ty-l", "misc_node__4l4H8qsTH", "misc_node_DFxUjcx4GF",
  "misc_node_-wtTIybPgH", "misc_node_eQ6snj8gxi", "misc_node_-GgJoQ7gSd"
]);

data.graph.nodes = nodes.filter((node) => !oldLegendKeys.has(node.key));

for (const node of data.graph.nodes) {
  const a = node.attributes;
  const station = a[a.type];
  if (!station?.names) continue;

  const [zh, en] = station.names;
  if (zh === "青奥公园·奥体中心") {
    station.names = ["青奥公园·青奥中心", en];
    continue;
  }
  if (zh === "慧首湾") {
    station.names = ["惠首湾", en];
    continue;
  }
  if (!zh || zh === "XX") {
    station.names = ["规划车站", "PLANNED STATION"];
  } else if (zh === "终点") {
    station.names = ["规划终点", "PLANNED TERMINUS"];
  } else if (zh === "车站") {
    station.names = ["规划车站", "PLANNED STATION"];
  }

  // 统一双语站名的视觉方向，避免英文缩写风格混杂。
  if (station.names[1] === "Stn") station.names[1] = "PLANNED STATION";
  if (station.names[1] === "TERMINAL") station.names[1] = "PLANNED TERMINUS";
}

// 线路折角采用统一圆角；河流降低饱和度和宽度，让轨道网络成为视觉主体。
for (const edge of edges) {
  const a = edge.attributes;
  if (a.diagonal) a.diagonal.roundCornerFactor = 18;
  if (a.perpendicular) a.perpendicular.roundCornerFactor = Math.min(a.perpendicular.roundCornerFactor || 18, 26);
  if (a.style === "river" && a.river) {
    a.river.color = ["shanghai", "river", "#d4ebf5", "#fff"];
    a.river.width = 13;
    a.zIndex = -8;
  }
}

function textNode(key, x, y, content, fontSize, options = {}) {
  return {
    key,
    attributes: {
      visible: true,
      zIndex: options.zIndex ?? 5,
      x,
      y,
      type: "text",
      text: {
        content,
        fontSize,
        lineHeight: options.lineHeight ?? fontSize,
        textAnchor: options.anchor ?? "start",
        dominantBaseline: "middle",
        language: "zh",
        color: ["other", "other", options.color ?? "#153c38", "#fff"],
        rotate: 0,
        italic: "normal",
        bold: options.bold ?? "normal",
        outline: options.outline ?? 0
      }
    }
  };
}

function badgeNode(key, x, y, number, color, labelColor) {
  return {
    key,
    attributes: {
      visible: true,
      zIndex: 5,
      x,
      y,
      type: "suzhourt-num-line-badge",
      "suzhourt-num-line-badge": {
        num: number,
        branch: false,
        color: ["nanjing", `zz${number}`, color, labelColor]
      }
    }
  };
}

// 正式图名区：与线网保持明显留白，形成城市公共信息图的出版物结构。
data.graph.nodes.push(
  textNode("zz_title_cn", 170, -238, "泽州市轨道交通线网图", 31, { bold: "bold" }),
  textNode("zz_title_en", 170, -203, "ZEZHOU METRO NETWORK MAP", 11, { color: "#647b78", bold: "bold" }),
  textNode("zz_title_meta", 1270, -228, "2026.07 规划版", 11, { color: "#647b78", anchor: "end" }),
  textNode("zz_legend_title", 168, 650, "线路图例  LINE LEGEND", 12, { color: "#45625f", bold: "bold" }),
  textNode("zz_legend_note", 1270, 706, "本图按地理方位概化绘制，不作为实际距离与建设时序依据", 10, { color: "#798b89", anchor: "end" })
);

// 两行六列的完整图例，取代原先缺少文字且拥挤的数字矩阵。
linePalette.forEach(([number, color, labelColor], index) => {
  const row = Math.floor(index / 6);
  const col = index % 6;
  const x = 168 + col * 184;
  const y = 680 + row * 42;
  data.graph.nodes.push(
    badgeNode(`zz_legend_badge_${number}`, x, y, number, color, labelColor),
    textNode(`zz_legend_label_${number}`, x + 30, y, `${number}号线`, 12, { color: "#304b48" })
  );
});

// 保留原线网中心位置，仅修正画布到正式横版比例，避免导入后出现过多空白。
data.svgViewBoxMin = { x: 145, y: -265 };
data.svgViewBoxZoom = 49;
data.version = Math.max(77, data.version || 0);

const output = JSON.stringify(data);
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output, "utf8");
fs.writeFileSync(publicCopyPath, output, "utf8");

console.log(JSON.stringify({
  outputPath,
  publicCopyPath,
  nodes: data.graph.nodes.length,
  edges: data.graph.edges.length,
  bytes: Buffer.byteLength(output)
}, null, 2));
