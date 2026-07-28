const sections = [
  { slug: "overview", title: "城市概览", en: "City Profile", desc: "城市名片、历史沿革、自然地理与总体规划", mark: "01" },
  { slug: "map", title: "城市地图", en: "City Map", desc: "行政区、交通网络与公共设施综合地图", mark: "02" },
  { slug: "districts", title: "行政区划", en: "Districts", desc: "市级架构、各行政区及街道社区资料", mark: "03" },
  { slug: "roads", title: "道路与地名", en: "Roads & Places", desc: "道路、桥隧、广场及地名沿革", mark: "04" },
  { slug: "transit", title: "公共交通", en: "Public Transit", desc: "地铁、公交、铁路与对外交通系统", mark: "05" },
  { slug: "facilities", title: "城市设施", en: "Public Facilities", desc: "政务、教育、医疗、文化与市政设施", mark: "06" },
  { slug: "life", title: "城市生活", en: "City Life", desc: "商圈、旅游、城市文化与影像记录", mark: "07" },
  { slug: "news", title: "新闻公告", en: "News & Notices", desc: "城市新闻、工程进展、交通调整与规划公示", mark: "08" },
  { slug: "archives", title: "建设档案", en: "Development Archive", desc: "城市版本、建设日志、规划方案与历史资料", mark: "09" }
];

const submenus = {
  overview: ["城市名片", "历史沿革", "自然地理", "人口与经济", "城市规划"],
  map: ["综合地图", "行政区划图", "道路地图", "公共交通图", "设施地图"],
  districts: ["印沙区", "陇府区", "古丘区", "三山区", "合湾区", "新胡区", "江洲区"],
  roads: ["道路名录", "桥梁与隧道", "广场与地标", "地名由来", "命名规则"],
  transit: ["地铁", "公交", "城际铁路", "铁路车站", "对外交通"],
  facilities: ["政府机关", "教育", "医疗", "文化体育", "公园绿地", "市政设施"],
  life: ["城市商圈", "旅游景点", "城市文化", "节庆活动", "城市影像"],
  news: ["泽州要闻", "工程公告", "交通调整", "规划公示"],
  archives: ["城市版本", "建设日志", "规划方案", "城市影像", "资料说明"]
};

const submenuSlugs = {
  overview: ["profile", "history", "geography", "economy", "planning"],
  map: ["comprehensive", "districts", "roads", "transit", "facilities"],
  districts: ["yinsha", "longfu", "guqiu", "sanshan", "hewan", "xinhu", "jiangzhou"],
  roads: ["directory", "bridges", "landmarks", "origins", "naming"],
  transit: ["metro", "bus", "intercity", "railway", "external"],
  facilities: ["government", "education", "healthcare", "culture", "parks", "municipal"],
  life: ["business", "tourism", "culture", "festivals", "gallery"],
  news: ["zezhou", "projects", "traffic", "planning"],
  archives: ["versions", "logs", "plans", "screenshots", "setting"]
};

const newsCategories = [
  { slug: "zezhou", title: "泽州要闻", en: "Zezhou News", desc: "发布全市重要政务活动与城市发展动态" },
  { slug: "projects", title: "工程公告", en: "Project Notices", desc: "发布城市建设项目、施工安排与工程进展" },
  { slug: "traffic", title: "交通调整", en: "Traffic Updates", desc: "发布道路、公交、地铁及铁路运行调整信息" },
  { slug: "planning", title: "规划公示", en: "Planning Notices", desc: "发布城市规划方案及相关公示信息" }
];

const cityVersions = [
  { source: "01", era: "筑城起步", title: "区域骨架初现", desc: "城市建设尚未大规模展开，山体、水系和外围通道共同构成泽州最初的空间底盘。" },
  { source: "03", era: "筑城起步", title: "首片街区落地", desc: "北部交通节点附近出现首批连续街区，城市由单一通道开始向成片建设转变。" },
  { source: "04", era: "筑城起步", title: "基础路网成形", desc: "核心区道路进一步织密，南北向发展轴开始形成，早期城区轮廓逐渐清晰。" },
  { source: "05", era: "筑城起步", title: "城区向南延伸", desc: "建设用地沿主要道路向南推进，中心街区与外围交通之间的联系得到加强。" },
  { source: "06", era: "筑城起步", title: "核心区持续加密", desc: "既有路网内部得到填充，城市功能由线性分布逐步转向紧凑的中心城区。" },
  { source: "07", era: "筑城起步", title: "早期城区完善", desc: "街区结构继续补全，城市在河流与山地之间建立起较稳定的建设边界。" },
  { source: "09", era: "交通塑城", title: "对外通道启动", desc: "新的区域道路接入城市，核心区开始承担更强的集散与对外联系功能。" },
  { source: "10", era: "交通塑城", title: "门户枢纽建设", desc: "北部交通组织明显增强，城市路网由内部服务转向兼顾区域联络。" },
  { source: "10-0", era: "交通塑城", title: "区域联络线成形", desc: "跨越河道与城区的快速联系逐渐建立，为后续多方向扩展预留骨架。" },
  { source: "11", era: "交通塑城", title: "北向联系加强", desc: "北部通道与中心区衔接趋于完整，城市发展范围首次明显突破早期核心。" },
  { source: "12", era: "交通塑城", title: "城市骨架拉开", desc: "东西向和南北向主通道共同作用，泽州开始呈现由中心向外围放射的发展结构。" },
  { source: "13", era: "交通塑城", title: "中心城区扩展", desc: "核心区建设继续向周边填充，道路网络和用地布局进入同步扩张阶段。" },
  { source: "14", era: "中心成形", title: "跨河发展起步", desc: "河岸空间得到进一步利用，城区开始沿桥梁和滨水通道向新的片区延伸。" },
  { source: "15", era: "中心成形", title: "东部街区增长", desc: "中心城区东侧出现更连续的建设组团，城市内部功能分区逐渐丰富。" },
  { source: "16", era: "中心成形", title: "山前片区联动", desc: "道路向东部山前空间展开，既有中心与外围地区之间形成新的发展走廊。" },
  { source: "17", era: "中心成形", title: "河湾城市带成形", desc: "滨水路网与中心街区逐步贯通，城市空间由单核向沿河连续发展转变。" },
  { source: "18", era: "中心成形", title: "中心功能继续填充", desc: "道路密度和建设范围同步提升，中心城区进入结构完善与功能补充阶段。" },
  { source: "19", era: "中心成形", title: "北部组团出现", desc: "北侧新增建设节点，城市开始形成中心城区与外围组团相互支撑的格局。" },
  { source: "20", era: "组团拓展", title: "环线交通组织", desc: "环绕中心城区的交通联系加强，为分流穿城交通和连接外围片区创造条件。" },
  { source: "21", era: "组团拓展", title: "西岸新区形成", desc: "河流西侧出现成片建设，跨河联系推动城市从单岸发展走向两岸协同。" },
  { source: "22", era: "组团拓展", title: "都市骨架确立", desc: "环线、放射线和跨河通道共同构成新的城市骨架，多组团结构更加明确。" },
  { source: "23", era: "组团拓展", title: "环城联系加强", desc: "外围交通网络进一步闭合，各片区之间的通达性和独立发展能力同步提升。" },
  { source: "24", era: "组团拓展", title: "多组团协同发展", desc: "中心、西岸与北部片区持续扩展，城市空间由连续建成区和外围节点共同组成。" },
  { source: "24.5", era: "组团拓展", title: "公共交通网络完善", desc: "轨道与城市道路的覆盖范围继续扩大，主要组团之间建立更稳定的公共交通联系。" },
  { source: "25", era: "区域拓展", title: "南部空间展开", desc: "城市建设跨越南侧水系，新的道路和用地为南部发展打开空间。" },
  { source: "26", era: "区域拓展", title: "东部滨山组团启动", desc: "东部山地周边出现独立建设组团，城市开始利用更广阔的区域空间。" },
  { source: "27", era: "区域拓展", title: "跨江联系强化", desc: "连接中心城区、东部和南部的交通走廊增多，组团之间的联系更加直接。" },
  { source: "28", era: "区域拓展", title: "东部环线形成", desc: "东部组团的环形道路逐渐完整，滨山地区进入系统化建设阶段。" },
  { source: "29", era: "区域拓展", title: "南岸走廊发展", desc: "南岸道路与建设节点持续增加，城市沿河谷和跨江通道向外延展。" },
  { source: "30", era: "区域拓展", title: "区域道路再组织", desc: "外围快速联系进一步完善，中心城区与各组团之间形成层次更清晰的道路体系。" },
  { source: "31", era: "区域都市", title: "城市继续南拓", desc: "南部新建道路和轨道联系出现，泽州的建成范围由核心河湾扩展至更完整的区域。" },
  { source: "32", era: "区域都市", title: "南部新区成片", desc: "南部建设由交通节点转向连续街区，新的城市副中心轮廓开始显现。" },
  { source: "33", era: "区域都市", title: "区域网络贯通", desc: "道路、铁路与轨道交通在更大范围内衔接，城市进入多中心协同发展阶段。" },
  { source: "34", era: "区域都市", title: "现状版泽州", desc: "中心城区、两岸新区、东部滨山组团和南部片区共同构成当前泽州的城市格局。" }
];

const busNumbering = [
  { range: "1—99", title: "市区常规线路", en: "URBAN SERVICE", desc: "承担中心城区日常通勤与片区间基础接驳。" },
  { range: "101—199", title: "市区长距离线路", en: "URBAN LIMITED", desc: "服务跨片区长距离出行，并可采用大站停靠等组织方式。" },
  { range: "201—299", title: "市郊连接线路", en: "SUBURBAN LINK", desc: "连接中心城区与近郊组团、交通节点及外围街道。" },
  { range: "301—999", title: "郊区分区线路", en: "OUTER DISTRICT", desc: "以百位数字区分不同郊区的公交服务片区。" }
];

const busRoute301 = {
  number: "301",
  type: "三山区东郊街道郊区公交",
  outbound: [
    ["滨郊南路", "shared"],
    ["古林南", "shared"],
    ["古林北", "shared"],
    ["林郊大道·锦郊路", "shared"],
    ["林郊大道·文郊东路", "outbound-only"],
    ["东郊地铁站", "shared"]
  ],
  inbound: [
    ["东郊地铁站", "shared"],
    ["林郊大道·文郊西路", "inbound-only"],
    ["林郊大道·锦郊路", "shared"],
    ["古林北", "shared"],
    ["古林南", "shared"],
    ["滨郊南路", "shared"]
  ]
};

const districts = [
  { name: "印沙区", en: "Yinsha District", no: "01" },
  { name: "陇府区", en: "Longfu District", no: "02" },
  { name: "古丘区", en: "Guqiu District", no: "03" },
  { name: "三山区", en: "Sanshan District", no: "04" },
  { name: "合湾区", en: "Hewan District", no: "05" },
  { name: "新胡区", en: "Xinhu District", no: "06" },
  { name: "江洲区", en: "Jiangzhou District", no: "07" }
];

const metroLines = [
  {
    number: 1, color: "#009ace",
    stations: [
      ["龙腾嘴", []], ["新岗", [10, 12]], ["龙衔山", []], ["和平湾", [7, 11]],
      ["璇玑路", [8]], ["常印大道", [3]], ["印沙大道", [2]], ["陇蜀", []],
      ["凤台大道", [5]], ["牧林", []],
      ["泽大三山校区", [4, 8]], ["东郊", []]
    ]
  },
  {
    number: 2, color: "#a6093d",
    stations: [
      ["白下国际机场", [9, 12]], ["神工大道", []], ["凌云角", []], ["天信", []],
      ["常纬汇", []], ["红渡广场", [5]], ["衡印路", [3, 6, 12]],
      ["市职业技术学院", [11]], ["印沙大道", [1]], ["神印路", []],
      ["随化桥", [8]], ["江洲新城", [5]], ["工气石化", []], ["白塔山", []],
      ["北庭", []], ["江洲北站", [4]]
    ]
  },
  {
    number: 3, color: "#009a44",
    stations: [
      ["泽州站", [5, 12]], ["衡印路", [2, 6, 12]], ["植物园", [11]], ["常印大道", [1]],
      ["元江·省人民医院", [8]], ["平江汇", []], ["善家庄", []],
      ["青奥公园·青奥中心", [5, 7, 12]], ["规划终点（暂定名）", [10]]
    ]
  },
  {
    number: 4, color: "#7d55c7",
    stations: [
      ["规划终点（暂定名）", [9]], ["规划车站（暂定名）", [6, 9]],
      ["泽大三山校区", [1, 8]], ["江洲北站", [2]]
    ]
  },
  {
    number: 5, color: "#f2da51",
    stations: [
      ["规划终点（暂定名）", []], ["承商街", []], ["红渡广场", [2]],
      ["常纬汇", []], ["泽州站", [3, 12]], ["站前广场", [6, 11], [6, 11]],
      ["陇蜀大道·市第六中学", []], ["勤庄", []], ["凤台大道", [1]],
      ["水榭滨", [8]], ["江洲新城", [2]], ["汇善坊", []],
      ["青奥公园·青奥中心", [3, 7, 12]], ["规划终点（暂定名）", [10]]
    ]
  },
  {
    number: 6, color: "#4bbbb4",
    stations: [
      ["北端终点（暂定名）", []], ["规划车站（暂定名）", [4, 9]],
      ["站前广场", [5, 11], [5]], ["名广", []], ["衡印路", [2, 3, 12]],
      ["和信园北", []], ["和岳信息园", [7]], ["博览中心", [8, 12]], ["惠首湾", []],
      ["迁移广场", []], ["泽州南站", [10, 12]]
    ]
  },
  {
    number: 7, color: "#4A7729",
    stations: [
      ["西端终点（暂定名）", []], ["规划车站（暂定名）", []],
      ["和岳信息园", [6]], ["和宁路", [8]], ["和平湾", [1, 11]],
      ["驰龙大道", []], ["新胜·省人民法院", [10]], ["胡家肆", [10]],
      ["天元大道", []], ["青奥公园·青奥中心", [3, 5, 12]]
    ]
  },
  {
    number: 8, color: "#93282C",
    stations: [
      ["博览中心", [6, 12]], ["合其路", []], ["和宁路", [7]], ["天赐府", [11]],
      ["璇玑路", [1]], ["元江·省人民医院", [3]], ["随化桥", [2]], ["水榭滨", [5]],
      ["泽大三山校区", [1, 4]], ["古林", []]
    ]
  },
  {
    number: 9, color: "#fa4616",
    stations: [
      ["白下国际机场", [2, 12]], ["规划车站（暂定名）", []],
      ["规划车站（暂定名）", [6, 11]], ["规划终点（暂定名）", [4]]
    ]
  },
  {
    number: 10, color: "#b9975b",
    stations: [
      ["泽州南站", [6, 12]], ["鱼龙嘴", []], ["夹龙山", []], ["铁道旧址", []],
      ["新岗", [1, 12]], ["伏爪关", []], ["新胜·省人民法院", [7]],
      ["胡家肆", [7]], ["规划车站（暂定名）", []],
      ["规划终点（暂定名）", [5]], ["北端规划终点（暂定名）", [3]]
    ]
  },
  {
    number: 11, color: "#ef426f",
    stations: [
      ["西北终点（暂定名）", []], ["规划车站（暂定名）", [9]],
      ["站前广场", [5, 6], [5]], ["学研路", []], ["市职业技术学院", [2]],
      ["植物园", [3]], ["天赐府", [8]], ["和平湾", [1, 7]]
    ]
  },
  {
    number: 12, color: "#ff6314",
    stations: [
      ["白下国际机场", [2, 9]], ["规划车站（暂定名）", []],
      ["泽州站", [3, 5]], ["衡印路", [2, 3, 6]], ["博览中心", [6, 8]],
      ["泽州南站", [6, 10]], ["新岗", [1, 10]],
      ["青奥公园·青奥中心", [3, 5, 7]]
    ]
  }
];

// 英文站名仅取自各线路 JSON 的 localisedName.en；
// 数组顺序与上方各线路 stations 顺序严格对应，不采用 JSON 内的换乘数据。
const metroEnglishNames = {
  1: ["LONGTENGZUI", "XIN'GANG", "LONGXIANSHAN", "HEPINGWAN", "XUANJILU", "CHANGYINDADAO", "YINSHADADAO", "LONGSHU", "FENGTAIDADAO", "MULIN", "ZZU SANSHAN CAMPUS", "DONGJIAO"],
  2: ["BAIXIA INTERNATIONAL AIRPORT", "SHENGONGDADAO", "LINGYUNJIAO", "TIANXIN", "CHANGWEIHUI", "HONGDUGUANGCHANG", "HENGYINLU", "ZZVTC", "YINSHADADAO", "SHENYINLU", "SUIHUAQIAO", "JIANGZHOUXINCHENG", "GONGQISHIHUA", "BAITASHAN", "BEITING", "JIANGZHOU NORTH RAILWAY STATION"],
  3: ["ZEZHOU RAILWAY STATION", "HENGYINLU", "ZHIWUYUAN", "CHANGYINDADAO", "YUANJIANG", "PINGJIANGHUI", "SHANJIAZHUANG", "THE YOUTH OLYMPIC PARK", "XX"],
  4: ["TERMINAL", "Stn", "ZZU SANSHAN CAMPUS", "JIANGZHOU NORTH RAILWAY STATION"],
  5: ["TERMINAL", "CHENGSHANGJIE", "HONGDUGUANGCHANG", "CHANGWEIHUI", "ZEZHOU RAILWAY STATION", "Stn", "LONGSHUDADAO", "QINZHUANG", "FENGTAIDADAO", "SHUIXIEBIN", "JIANGZHOUXINCHENG", "HUISHANFANG", "THE YOUTH OLYMPIC PARK", "XX"],
  6: ["TERMINAL", "Stn", "ZHANQIANGUANGCHANG", "MINGGUANG", "HENGYINLU", "HEXINYUANBEI", "HEYUEXINXIYUAN", "THE EXHIBITION CENTER", "HUISHOUWAN", "QIANYIGUANGCHANG", "ZEZHOU SOUTH RAILWAY STATION"],
  7: ["TERMINAL", "Stn", "HEYUEXINXIYUAN", "HE'NINGLU", "HEPINGWAN", "CHILONGDADAO", "XINSHENG/PPC", "HUJIASI", "TIANYUANDADAO", "THE YOUTH OLYMPIC PARK"],
  8: ["THE EXHIBITION CENTER", "HEQILU", "HE'NINGLU", "TIANCIFU", "XUANJILU", "YUANJIANG", "SUIHUAQIAO", "SHUIXIEBIN", "ZZU SANSHAN CAMPUS", "GULIN"],
  9: ["BAIXIA INTERNATIONAL AIRPORT", "Stn", "Stn", "TERMINAL"],
  10: ["ZEZHOU SOUTH RAILWAY STATION", "YULONGZUI", "JIALONGSHAN", "TIEDAOJIUZHI", "XIN'GANG", "FUZHAOGUAN", "XINSHENG/PPC", "HUJIASI", "XX", "XX", "XX"],
  11: ["TERMINAL", "Stn", "ZHANQIANGUANGCHANG", "XUEYANLU", "ZZVTC", "ZHIWUYUAN", "TIANCIFU", "HEPINGWAN"],
  12: ["BAIXIA INTERNATIONAL AIRPORT", "Stn", "ZEZHOU RAILWAY STATION", "HENGYINLU", "THE EXHIBITION CENTER", "ZEZHOU SOUTH RAILWAY STATION", "XIN'GANG", "THE YOUTH OLYMPIC PARK"]
};

const app = document.querySelector("#app");
const nav = document.querySelector("#primary-nav");

function submenuHref(sectionSlug, index) {
  return `#${sectionSlug}-${submenuSlugs[sectionSlug][index]}`;
}

nav.innerHTML = sections
  .map((section) => `
    <div class="nav-item">
      <a class="nav-link" href="#${section.slug}" data-slug="${section.slug}">${section.title}</a>
      <div class="submenu" aria-label="${section.title}二级导航">
        <div class="submenu-inner">
          ${submenus[section.slug].map((item, index) => {
            return `<a href="${submenuHref(section.slug, index)}">${item}</a>`;
          }).join("")}
        </div>
      </div>
    </div>
  `)
  .join("");

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => link.blur());
});
nav.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("mouseleave", () => {
    if (item.contains(document.activeElement)) document.activeElement.blur();
  });
});

const preloadSectionBackgrounds = () => {
  [
    "assets/zezhou-districts.jpg",
    "assets/zezhou-roads.jpg",
    "assets/zezhou-public-transit.png",
    "assets/zezhou-facilities.jpg"
  ].forEach((src) => {
    const image = new Image();
    image.src = src;
  });
};
if ("requestIdleCallback" in window) {
  window.requestIdleCallback(preloadSectionBackgrounds);
} else {
  window.setTimeout(preloadSectionBackgrounds, 300);
}

function homeTemplate() {
  return `
    <section class="hero">
      <div class="hero-slideshow" aria-hidden="true">
        <div class="hero-slide hero-slide-1"></div>
        <div class="hero-slide hero-slide-2"></div>
        <div class="hero-slide hero-slide-3"></div>
      </div>
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="hero-river" aria-hidden="true"></div>
      <div class="shell hero-content">
        <p class="eyebrow">ZEZHOU CITY · 泽州市</p>
        <h1>泽州市，<br>山水交织的现代都市。</h1>
        <p class="hero-lead">汇集泽州市空间规划、公共交通、道路地名与城市生活信息，为市民和游客提供清晰便捷的城市指引。</p>
        <div class="hero-actions">
          <a href="#overview">认识泽州市</a>
          <a href="#map" class="ghost">打开城市地图</a>
        </div>
      </div>
    </section>

    <section class="directory shell">
      <div class="section-heading">
        <div><p>EXPLORE THE CITY</p><h2>城市导航</h2></div>
        <span>按主题浏览城市概况、公共服务、交通出行与建设信息。</span>
      </div>
      <div class="section-grid">
        ${sections.map((section) => `
          <a href="#${section.slug}" class="section-card">
            <span class="card-no">${section.mark}</span>
            <div>
              <small>${section.en}</small>
              <h3>${section.title}</h3>
              <p>${section.desc}</p>
            </div>
            <span class="arrow" aria-hidden="true">↗</span>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function sectionHeroTemplate(section, activeIndex = -1, backRoute = null) {
  const hasHeroImage = ["overview", "map", "districts", "roads", "transit", "facilities", "life", "news", "archives"].includes(section.slug);
  const isSubpage = activeIndex >= 0;
  const secondaryTitle = isSubpage ? submenus[section.slug][activeIndex] : "";
  const parentRoute = backRoute || { href: `#${section.slug}`, label: section.title };
  return `
    <section class="page-hero page-hero-${section.slug}${hasHeroImage ? " page-hero-image" : ""}${isSubpage ? " page-hero-subpage" : ""}">
      <div class="shell page-hero-inner">
        <div class="page-hero-copy">
          <div class="page-hero-meta">
            <p>${section.en}</p>
            <div class="breadcrumb">
              <a href="#home">首页</a><i>/</i>
              ${isSubpage ? `<a href="#${section.slug}">${section.title}</a><i>/</i><span>${secondaryTitle}</span>` : `<span>${section.title}</span>`}
            </div>
          </div>
          ${isSubpage
            ? `<h1 class="page-composite-title"><span>${section.title}</span><i>/</i><em>${secondaryTitle}</em></h1>`
            : `<h1>${section.title}</h1>`}
          <span>${section.desc}</span>
        </div>
        ${isSubpage ? "" : `<nav class="secondary-title-grid" aria-label="${section.title}二级栏目">
          ${submenus[section.slug].map((title, index) => `
            <a href="${submenuHref(section.slug, index)}">
              <small>${String(index + 1).padStart(2, "0")}</small>
              <strong>${title}</strong>
              <span aria-hidden="true">→</span>
            </a>
          `).join("")}
        </nav>`}
        ${isSubpage ? `
          <a class="level-back level-back-top" href="${parentRoute.href}" aria-label="返回${parentRoute.label}">
            <span class="level-back-icon" aria-hidden="true">←</span>
            <span><small>RETURN</small><strong>返回${parentRoute.label}</strong></span>
          </a>
        ` : ""}
      </div>
    </section>
  `;
}

function lowerBackButtonTemplate(section, backRoute = null) {
  const parentRoute = backRoute || { href: `#${section.slug}`, label: section.title };
  return `
    <div class="level-back-footer">
      <a class="level-back level-back-bottom" href="${parentRoute.href}" aria-label="返回${parentRoute.label}">
        <span class="level-back-icon" aria-hidden="true">←</span>
        <span><small>BACK TO PREVIOUS LEVEL</small><strong>返回${parentRoute.label}</strong></span>
      </a>
    </div>
  `;
}

function adjacentColumn(section, secondaryIndex, offset) {
  let sectionIndex = sections.findIndex((item) => item.slug === section.slug);
  let targetIndex = secondaryIndex + offset;

  if (targetIndex < 0) {
    sectionIndex = (sectionIndex - 1 + sections.length) % sections.length;
    targetIndex = submenus[sections[sectionIndex].slug].length - 1;
  } else if (targetIndex >= submenus[section.slug].length) {
    sectionIndex = (sectionIndex + 1) % sections.length;
    targetIndex = 0;
  }

  const targetSection = sections[sectionIndex];
  return {
    section: targetSection,
    index: targetIndex,
    title: submenus[targetSection.slug][targetIndex],
    href: submenuHref(targetSection.slug, targetIndex),
    crossesSection: targetSection.slug !== section.slug
  };
}

function columnSwitcherTemplate(section, secondaryIndex, position) {
  const previous = adjacentColumn(section, secondaryIndex, -1);
  const next = adjacentColumn(section, secondaryIndex, 1);
  const itemTemplate = (item, direction) => `
    <a class="column-switcher-link column-switcher-${direction}${item.crossesSection ? " column-switcher-cross-section" : ""}" href="${item.href}">
      ${direction === "previous" ? '<span class="column-switcher-arrow" aria-hidden="true">←</span>' : ""}
      <span class="column-switcher-copy">
        <small>${item.crossesSection ? (direction === "previous" ? "进入上一板块" : "进入下一板块") : (direction === "previous" ? "上一栏目" : "下一栏目")}</small>
        <strong><em>${item.section.title}</em><i>/</i>${item.title}</strong>
      </span>
      ${item.crossesSection ? '<b class="column-switcher-section-badge">跨板块</b>' : ""}
      ${direction === "next" ? '<span class="column-switcher-arrow" aria-hidden="true">→</span>' : ""}
    </a>`;

  return `
    <nav class="column-switcher column-switcher-${position}" aria-label="相邻栏目快捷导航">
      ${itemTemplate(previous, "previous")}
      ${itemTemplate(next, "next")}
    </nav>
  `;
}

function sectionTemplate(section) {
  return sectionHeroTemplate(section);
}

function subpageHeaderTemplate(section, secondaryIndex) {
  const title = submenus[section.slug][secondaryIndex];
  return `
    <section class="subpage-header">
      <div class="shell subpage-header-inner">
        <div>
          <div class="breadcrumb">
            <a href="#home">首页</a><i>/</i><a href="#${section.slug}">${section.title}</a><i>/</i><span>${title}</span>
          </div>
          <p>${section.en}</p>
          <h1>${title}</h1>
          <span>${section.desc}</span>
        </div>
        <a class="subpage-back" href="#${section.slug}">返回${section.title}栏目</a>
      </div>
    </section>
  `;
}

function secondaryTemplate(section, secondaryIndex) {
  const title = submenus[section.slug][secondaryIndex];
  return `
    ${sectionHeroTemplate(section, secondaryIndex)}
    <section class="placeholder shell section-drawer">
      <div class="placeholder-panel">
        <span class="placeholder-mark" aria-hidden="true">${section.mark}</span>
        <p>PUBLIC INFORMATION</p>
        <h2>${title}</h2>
        <div class="rule"></div>
        <span>本栏目当前暂无可公开信息。</span>
      </div>
    </section>
  `;
}

function archiveVersionsTemplate(section) {
  const first = cityVersions[0];
  const eras = [
    ["01—07", "筑城起步", "依托北部通道形成首片街区，建立中心城区最初的道路与用地骨架。"],
    ["09—13", "交通塑城", "对外通道和区域联络线逐渐接入，城市由早期核心向多方向扩展。"],
    ["14—19", "中心成形", "中心城区持续填充，滨水空间、东部和北部组团开始联动。"],
    ["20—24.5", "组团拓展", "环线与跨河联系加强，西岸新区和外围组团共同进入发展阶段。"],
    ["25—30", "区域拓展", "建设跨越南侧水系并进入东部滨山地区，城市尺度显著扩大。"],
    ["31—34", "区域都市", "南部新区、轨道网络与区域道路贯通，形成当前多中心城市格局。"]
  ];
  return `
    ${sectionHeroTemplate(section, 0)}
    <section class="archive-page shell section-drawer">
      <header class="archive-heading">
        <div><p>CITY EVOLUTION</p><h2>泽州市城市版本</h2></div>
        <span>34个建设版本 · 从早期路网到区域都市</span>
      </header>
      <p class="archive-intro">本档案依据历次城市总览图，记录泽州建成区、交通骨架和城市组团的演变。版本编号沿用原始影像顺序，文字说明根据图面变化整理。</p>

      <article class="archive-viewer">
        <figure class="archive-image-frame">
          <img id="archive-version-image" src="assets/archive/versions/zezhou-version-01.webp" alt="泽州市城市版本01：${first.title}">
          <figcaption>地图影像为对应建设阶段的城市总览</figcaption>
        </figure>
        <div class="archive-version-copy">
          <div class="archive-version-meta">
            <span id="archive-version-number">VERSION 01</span>
            <small id="archive-version-source">原始编号 ${first.source}</small>
          </div>
          <p id="archive-version-era">${first.era}</p>
          <h3 id="archive-version-title">${first.title}</h3>
          <div class="archive-copy-rule"></div>
          <p id="archive-version-desc">${first.desc}</p>
          <div class="archive-version-controls">
            <button type="button" data-archive-step="-1" aria-label="查看上一个城市版本">←<span>上一版本</span></button>
            <strong><span id="archive-current-count">01</span> / ${String(cityVersions.length).padStart(2, "0")}</strong>
            <button type="button" data-archive-step="1" aria-label="查看下一个城市版本"><span>下一版本</span>→</button>
          </div>
        </div>
      </article>

      <nav class="archive-version-strip" aria-label="城市版本选择">
        ${cityVersions.map((version, index) => `
          <button class="${index === 0 ? "active" : ""}" type="button" data-archive-index="${index}" aria-label="查看版本${String(index + 1).padStart(2, "0")}：${version.title}" aria-pressed="${index === 0}">
            <small>${version.era}</small><strong>${String(index + 1).padStart(2, "0")}</strong><span>${version.source}</span>
          </button>
        `).join("")}
      </nav>

      <section class="archive-eras">
        <header><p>DEVELOPMENT PHASES</p><h3>城市发展阶段</h3></header>
        <div class="archive-era-grid">
          ${eras.map(([range, title, desc], index) => `
            <article><span>${String(index + 1).padStart(2, "0")}</span><small>VERSION ${range}</small><h4>${title}</h4><p>${desc}</p></article>
          `).join("")}
        </div>
      </section>
    </section>
  `;
}

function newsTemplate(section) {
  return sectionHeroTemplate(section);
}

function newsCategoryTemplate(section, category) {
  const isZezhouNews = category.slug === "zezhou";
  const categoryIndex = newsCategories.findIndex((item) => item.slug === category.slug);
  return `
    ${sectionHeroTemplate(section, categoryIndex)}
    <section class="news-page shell section-drawer">
      ${isZezhouNews ? `
        <div class="news-list-heading"><p>LATEST NEWS</p><h2>新闻列表</h2></div>
        <a class="news-list-item" href="#news-article-20260726">
          <time datetime="2026-07-26"><strong>26</strong><span>2026.07</span></time>
          <div>
            <small>泽州要闻</small>
            <h3>泽州市市长专题调研城市官网建设工作</h3>
            <p>加快搭建权威、便捷、开放的城市信息窗口</p>
          </div>
          <b aria-hidden="true">→</b>
        </a>
      ` : `
        <div class="news-empty">
          <p>${category.en}</p>
          <h2>${category.title}</h2>
          <span>本栏目暂无已发布内容。</span>
        </div>
      `}
    </section>
  `;
}

function newsArticleTemplate(section) {
  return `
    ${sectionHeroTemplate(section, 0, { href: "#news-zezhou", label: "泽州要闻" })}
    <section class="news-page shell section-drawer">
      <article class="news-article">
        <header class="news-article-header">
          <p class="news-label">泽州要闻</p>
          <h2>泽州市市长专题调研城市官网建设工作</h2>
          <p class="news-subtitle">加快搭建权威、便捷、开放的城市信息窗口</p>
          <div class="news-meta">
            <time datetime="2026-07-26">发布时间：2026年7月26日</time>
            <span>来源：泽州市城市建设办公室</span>
          </div>
        </header>
        <div class="news-article-body">
          <p>7月26日，泽州市市长主持召开城市官方网站建设专题推进会，听取网站总体架构、栏目设置和资料整理工作进展汇报，并就加快建设具有泽州特色的城市信息门户作出部署。</p>
          <p>会议指出，城市官网是集中展示泽州市规划建设成果、公共交通体系、行政区划和城市文化的重要窗口。网站建设要坚持准确、清晰、实用的原则，逐步形成涵盖城市概览、城市地图、行政区划、道路地名、公共交通、城市设施、城市生活、新闻公告和建设档案等内容的完整信息体系。</p>
          <p>市长在调研中强调，要以方便公众认识泽州、了解泽州为出发点，统一页面视觉风格和信息发布规范，做好道路、车站、公共建筑等城市资料的整理与关联；同时建立持续更新机制，及时发布城市建设进展、交通调整和规划信息，使网站成为记录城市发展历程的重要数字档案。</p>
          <p>目前，泽州市城市官网已完成一级栏目框架和首页视觉体系搭建，首批城市资料整理工作正在有序推进。下一阶段将围绕城市概览及各行政区基础信息开展内容录入，并逐步完善地图、交通线路和公共设施等专题页面。</p>
        </div>
        <footer class="news-article-footer">
          <span>责任编辑：泽州城市门户编辑组</span>
          <span>泽州市城市建设办公室</span>
        </footer>
      </article>
    </section>
  `;
}

function districtsTemplate(section) {
  return `
    <section class="page-hero page-hero-districts page-hero-image">
      <div class="shell page-hero-inner">
        <div>
          <div class="page-hero-meta">
            <p>${section.en}</p>
            <div class="breadcrumb"><a href="#home">首页</a><i>/</i><span>行政区划</span></div>
          </div>
          <h1>${section.title}</h1>
          <span>${section.desc}</span>
        </div>
        <b>${section.mark}</b>
      </div>
    </section>
    <section class="districts-page shell">
      <div class="districts-heading">
        <p>DISTRICTS OF ZEZHOU</p>
        <h2>泽州市行政区</h2>
        <span>按行政区浏览区域概况、公共服务与交通信息。</span>
      </div>
      <div class="district-grid">
        ${districts.map((district) => `
          <article class="district-card">
            <span class="district-no">${district.no}</span>
            <small>${district.en}</small>
            <h3>${district.name}</h3>
            <div class="district-rule"></div>
            <p>本栏目收录区域概况、行政驻地、公共设施和交通服务等信息。</p>
            <span class="district-status">区域信息</span>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function mapTemplate(section) {
  return `
    ${sectionHeroTemplate(section, 0)}
    <section class="map-page shell section-drawer">
      <div class="map-section-heading">
        <div>
          <p>CURRENT CITY MAP</p>
          <h2>泽州市现状地图</h2>
        </div>
        <span class="status-badge status-built"><i></i>现状 · 已建成</span>
      </div>
      <p class="map-intro">本图展示泽州市现有城市空间、道路、地名、公共设施及已投入使用的地铁线路，是当前城市建设状态的综合记录。</p>
      <figure class="map-figure">
        <div class="map-image-frame">
          <img src="assets/maps/zezhou-base.svg" alt="泽州市现状城市基础地图">
        </div>
        <figcaption>
          <span><b class="legend-dot built"></b>已建成：现有城市及运营线路</span>
          <a href="assets/maps/zezhou-base.svg" target="_blank" rel="noopener">打开原尺寸地图 ↗</a>
        </figcaption>
      </figure>
    </section>
  `;
}

function transitTemplate(section) {
  return `
    ${sectionHeroTemplate(section, 0)}
    <section class="transit-page shell section-drawer">
      <div class="transit-heading">
        <p>ZEZHOU METRO</p>
        <h2>地铁</h2>
        <span>按线路编号查看泽州市地铁规划站点及换乘关系。图中未正式命名的站点以“暂定名”标识。</span>
      </div>

      <div class="metro-line-tabs" role="tablist" aria-label="地铁线路">
        ${metroLines.map((line, index) => `
          <button class="metro-line-tab${index === 0 ? " active" : ""}" type="button"
            role="tab" aria-selected="${index === 0}" data-line="${line.number}"
            style="--line-color:${line.color};--line-label-color:${line.number === 5 ? "#111" : "#fff"}">
            <span>${line.number}</span><strong>${line.number}号线</strong><small>${line.stations.length}站</small>
          </button>
        `).join("")}
      </div>

      <div id="metro-line-view" class="metro-line-view" role="tabpanel">
        ${metroLineDiagram(metroLines[0])}
      </div>

      <article class="metro-overview">
        <header>
          <div><p>NETWORK MASTER PLAN</p><h3>泽州市地铁规划总图</h3></div>
          <span class="status-badge status-planned"><i></i>规划线网</span>
        </header>
        <p class="map-intro">总图用于核对线路走向、站点位置和换乘关系；点击上方线路，可查看更适合站台导向阅读的单线线路图。</p>
        <figure class="map-figure">
          <div class="map-image-frame planned-network">
            <img src="assets/zezhou-metro-plan.png" alt="泽州市地铁规划线网图">
          </div>
          <figcaption>
            <span><b class="legend-dot planned"></b>泽州市地铁规划方案</span>
            <a href="assets/zezhou-metro-plan.png" target="_blank" rel="noopener">打开原尺寸规划图 ↗</a>
          </figcaption>
        </figure>
      </article>
    </section>
  `;
}

function busDirectionTemplate(label, direction, stations) {
  return `
    <section class="bus-direction bus-direction-${direction}">
      <header>
        <span>${direction === "outbound" ? "去" : "返"}</span>
        <div><small>${direction.toUpperCase()}</small><h3>${label}</h3></div>
      </header>
      <ol class="bus-stop-list">
        ${stations.map(([name, status], index) => `
          <li class="${status}">
            <i aria-hidden="true"></i>
            <span class="bus-stop-order">${String(index + 1).padStart(2, "0")}</span>
            <strong>${name}</strong>
            ${status === "outbound-only" ? '<em>仅去程停靠</em>' : ""}
            ${status === "inbound-only" ? '<em>仅返程停靠</em>' : ""}
          </li>
        `).join("")}
      </ol>
    </section>
  `;
}

function busTemplate(section) {
  return `
    ${sectionHeroTemplate(section, 1)}
    <section class="bus-page shell section-drawer">
      <header class="bus-page-heading">
        <p>ZEZHOU CITY BUS</p>
        <h2>公交线路与编号体系</h2>
      </header>

      <div class="bus-numbering" role="tablist" aria-label="按编号范围查看公交线路">
        ${busNumbering.map((item, index) => `
          <button class="bus-number-tab${index === 0 ? " active" : ""}" type="button" role="tab" aria-selected="${index === 0}"
            aria-controls="bus-range-panel-${index}" data-bus-range="${index}">
            <span>${item.range}</span>
            <small>${item.en}</small>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <b aria-hidden="true">查看线路 →</b>
          </button>
        `).join("")}
      </div>

      <div class="bus-range-results" aria-live="polite">
        ${busNumbering.slice(0, 3).map((item, index) => `
          <section class="bus-range-panel" id="bus-range-panel-${index}" data-bus-panel="${index}" role="tabpanel"${index === 0 ? "" : " hidden"}>
            <div class="bus-range-empty"><small>${item.en}</small><h3>${item.range}</h3><p>该编号范围当前暂无已公布线路。</p></div>
          </section>
        `).join("")}
        <section class="bus-range-panel" id="bus-range-panel-3" data-bus-panel="3" role="tabpanel" hidden>
          <article class="bus-route-card">
            <header class="bus-route-header">
              <div class="bus-route-number"><small>BUS</small><strong>${busRoute301.number}</strong></div>
              <div>
                <p>OUTER DISTRICT SERVICE · SANSHAN</p>
                <h2>${busRoute301.number}路</h2>
                <span>${busRoute301.type} · 双向运营 · 非环线</span>
              </div>
              <button class="bus-direction-toggle" type="button" data-bus-direction="outbound"
                aria-label="切换至返程方向">
                <span data-direction-start>滨郊南路</span><i>→</i><span data-direction-end>东郊地铁站</span>
                <small>点击切换方向</small>
              </button>
            </header>
            <div class="bus-direction-view">
              ${busDirectionTemplate("滨郊南路 → 东郊地铁站", "outbound", busRoute301.outbound)}
              <div data-bus-inbound hidden>
                ${busDirectionTemplate("东郊地铁站 → 滨郊南路", "inbound", busRoute301.inbound)}
              </div>
            </div>
            <footer class="bus-route-note">
              <span><i class="shared-sample"></i>双向共同停靠</span>
              <span><i class="direction-sample"></i>方向性停靠站</span>
            </footer>
          </article>
        </section>
      </div>
    </section>
  `;
}

function metroLineDiagram(line) {
  const stationCards = line.stations.map(([name, transfers, outsideTransfers = []], stationIndex) => {
    const englishName = metroEnglishNames[line.number]?.[stationIndex] || "";
    return `
    <div class="metro-station">
      <div class="transfer-badges">
        ${transfers.map((number) => {
          const transfer = metroLines.find((item) => item.number === number);
          const outside = outsideTransfers.includes(number);
          return `<span class="${outside ? "outside" : ""}" style="--transfer-color:${transfer.color};color:${number === 5 ? "#111" : "#fff"}" title="${outside ? "站外换乘" : "换乘"}${number}号线">${number}</span>`;
        }).join("")}
      </div>
      <i class="station-dot${transfers.length ? " transfer-station-dot" : ""}" aria-label="${transfers.length ? "换乘站" : "一般车站"}">${transfers.length ? '<span aria-hidden="true"></span>' : ""}</i>
      <strong>${name}</strong>
      <small>${englishName}</small>
    </div>
  `;
  }).join("");

  return `
    <header class="metro-line-header" style="--line-color:${line.color};--line-label-color:${line.number === 5 ? "#111" : "#fff"}">
      <span class="metro-line-number">${line.number}</span>
      <div>
        <p>ZEZHOU METRO LINE ${line.number}</p>
        <h3>${line.number}号线</h3>
      </div>
      <span class="metro-station-count">规划站点 ${line.stations.length} 座</span>
    </header>
    <div class="metro-diagram-scroll" style="--line-color:${line.color}">
      <div class="metro-diagram" style="--station-count:${line.stations.length}">
        <div class="metro-track"></div>
        ${stationCards}
      </div>
    </div>
    <p class="metro-note">部分规划站点尚未正式命名，页面统一以“暂定名”标识，最终名称以正式公告为准。</p>
  `;
}

let currentPrimaryIndex = null;
let currentSecondaryIndex = null;
let renderVersion = 0;

async function animateView(keyframes, duration) {
  if (!app.animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const animation = app.animate(keyframes, {
    duration,
    easing: "cubic-bezier(.22,.72,.2,1)",
    fill: "forwards"
  });
  try {
    await animation.finished;
  } catch {
    // A newer navigation canceled this transition.
  }
}

async function render() {
  const version = ++renderVersion;
  app.getAnimations?.().forEach((animation) => animation.cancel());
  const slug = location.hash.replace(/^#/, "") || "home";
  const section = sections.find((item) => item.slug === slug);
  const newsCategory = newsCategories.find((item) => slug === `news-${item.slug}`);
  const isNewsArticle = slug === "news-article-20260726";
  const newsSection = sections.find((item) => item.slug === "news");
  const secondaryRoute = sections
    .flatMap((item) => submenuSlugs[item.slug].map((secondarySlug, index) => ({
      section: item, secondarySlug, index, route: `${item.slug}-${secondarySlug}`
    })))
    .find((item) => item.route === slug);
  const isMetroPage = secondaryRoute?.section.slug === "transit" && secondaryRoute.secondarySlug === "metro";
  const isBusPage = secondaryRoute?.section.slug === "transit" && secondaryRoute.secondarySlug === "bus";
  const isMapPage = secondaryRoute?.section.slug === "map" && secondaryRoute.secondarySlug === "comprehensive";
  const isArchiveVersionsPage = secondaryRoute?.section.slug === "archives" && secondaryRoute.secondarySlug === "versions";
  const isInnerPage = Boolean(section || secondaryRoute || newsCategory || isNewsArticle);
  const activeSlug = newsCategory || isNewsArticle
    ? "news"
    : secondaryRoute
      ? secondaryRoute.section.slug
      : slug;
  const targetPrimaryIndex = activeSlug === "home"
    ? -1
    : sections.findIndex((item) => item.slug === activeSlug);
  const targetSecondaryIndex = isNewsArticle
    ? 0
    : newsCategory
      ? newsCategories.findIndex((item) => item.slug === newsCategory.slug)
      : secondaryRoute?.index ?? null;
  const direction = currentPrimaryIndex === null || targetPrimaryIndex === currentPrimaryIndex
    ? 0
    : targetPrimaryIndex > currentPrimaryIndex ? 1 : -1;
  const isSecondarySwitch = currentPrimaryIndex === targetPrimaryIndex
    && currentSecondaryIndex !== null
    && targetSecondaryIndex !== null
    && targetSecondaryIndex !== currentSecondaryIndex;
  const secondaryDirection = isSecondarySwitch
    ? targetSecondaryIndex > currentSecondaryIndex ? 1 : -1
    : 0;
  const transitionDirection = direction || secondaryDirection;
  const shouldTransition = transitionDirection !== 0;
  const existingDrawer = app.querySelector(".section-drawer");
  const isReturningUp = Boolean(existingDrawer) && (
    Boolean(section) ||
    (Boolean(newsCategory) && Boolean(app.querySelector(".news-article")))
  );
  const secondaryGrid = !shouldTransition && secondaryRoute
    ? app.querySelector(".secondary-title-grid")
    : null;
  document.body.classList.toggle("entering-secondary", Boolean(secondaryGrid));
  document.body.classList.toggle("returning-up", isReturningUp);
  document.body.classList.toggle("switching-secondary", isSecondarySwitch);

  if (isReturningUp && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const drawerExit = existingDrawer.animate([
      { opacity: 1, transform: "translateY(0) scale(1)" },
      { opacity: 0, transform: "translateY(90px) scale(.985)" }
    ], {
      duration: 360,
      easing: "cubic-bezier(.4,0,.7,.2)",
      fill: "forwards"
    });
    try {
      await drawerExit.finished;
    } catch {
      // A newer navigation replaced this one.
    }
    if (version !== renderVersion) return;
  }

  if (secondaryGrid && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const fade = secondaryGrid.animate([
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(-14px)" }
    ], {
      duration: 280,
      easing: "cubic-bezier(.4,0,.2,1)",
      fill: "forwards"
    });
    try {
      await fade.finished;
    } catch {
      // A newer navigation replaced this one.
    }
    if (version !== renderVersion) return;
  }

  if (shouldTransition) {
    document.body.classList.add("view-transitioning");
    await animateView([
      { opacity: 1, transform: "translateX(0)" },
      { opacity: 0, transform: `translateX(${transitionDirection > 0 ? -64 : 64}px)` }
    ], isSecondarySwitch ? 380 : 440);
    if (version !== renderVersion) return;
    app.getAnimations?.().forEach((animation) => animation.cancel());
  } else {
    document.body.classList.remove("view-transitioning");
  }

  document.body.classList.toggle("home-page", !isInnerPage);
  document.body.classList.toggle("inner-page", isInnerPage);
  app.innerHTML = isNewsArticle
    ? newsArticleTemplate(newsSection)
    : newsCategory
      ? newsCategoryTemplate(newsSection, newsCategory)
      : isMetroPage
        ? transitTemplate(secondaryRoute.section)
        : isBusPage
          ? busTemplate(secondaryRoute.section)
        : isArchiveVersionsPage
          ? archiveVersionsTemplate(secondaryRoute.section)
        : isMapPage
          ? mapTemplate(secondaryRoute.section)
          : secondaryRoute
            ? secondaryTemplate(secondaryRoute.section, secondaryRoute.index)
            : section
              ? section.slug === "news" ? newsTemplate(section) : sectionTemplate(section)
              : homeTemplate();
  const parentSection = isNewsArticle
    ? newsSection
    : newsCategory
      ? newsSection
      : secondaryRoute?.section;
  if (parentSection) {
    const activeColumnIndex = isNewsArticle
      ? 0
      : newsCategory
        ? newsCategories.findIndex((item) => item.slug === newsCategory.slug)
        : secondaryRoute.index;
    const drawer = app.querySelector(".section-drawer");
    const backRoute = isNewsArticle
      ? { href: "#news-zezhou", label: "泽州要闻" }
      : null;
    drawer?.insertAdjacentHTML("afterbegin", columnSwitcherTemplate(parentSection, activeColumnIndex, "top"));
    drawer?.insertAdjacentHTML("beforeend", columnSwitcherTemplate(parentSection, activeColumnIndex, "bottom"));
    drawer?.insertAdjacentHTML("beforeend", lowerBackButtonTemplate(parentSection, backRoute));
  }
  if (secondaryGrid || isReturningUp) {
    window.setTimeout(() => {
      if (version === renderVersion) {
        document.body.classList.remove("entering-secondary", "returning-up");
      }
    }, 620);
  }
  document.title = isNewsArticle
    ? "泽州市市长专题调研城市官网建设工作｜泽州市门户"
    : newsCategory
      ? `${newsCategory.title}｜泽州市门户`
      : secondaryRoute
        ? `${submenus[secondaryRoute.section.slug][secondaryRoute.index]}｜泽州市门户`
      : section
        ? `${section.title}｜泽州市门户`
        : "泽州市门户";
  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.slug === activeSlug);
  });
  if (isMetroPage) {
    const lineView = document.querySelector("#metro-line-view");
    document.querySelectorAll(".metro-line-tab").forEach((button) => {
      button.addEventListener("click", () => {
        const line = metroLines.find((item) => item.number === Number(button.dataset.line));
        document.querySelectorAll(".metro-line-tab").forEach((item) => {
          const selected = item === button;
          item.classList.toggle("active", selected);
          item.setAttribute("aria-selected", String(selected));
        });
        lineView.innerHTML = metroLineDiagram(line);
        lineView.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }
  if (isBusPage) {
    const busPrompt = document.querySelector(".bus-range-prompt");
    const busTabs = document.querySelectorAll(".bus-number-tab");
    const busPanels = document.querySelectorAll(".bus-range-panel");
    busTabs.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedRange = button.dataset.busRange;
        busTabs.forEach((item) => {
          const selected = item === button;
          item.classList.toggle("active", selected);
          item.setAttribute("aria-selected", String(selected));
        });
        busPanels.forEach((panel) => {
          panel.hidden = panel.dataset.busPanel !== selectedRange;
        });
        if (busPrompt) busPrompt.hidden = true;
      });
    });

    const directionToggle = document.querySelector(".bus-direction-toggle");
    directionToggle?.addEventListener("click", () => {
      const showInbound = directionToggle.dataset.busDirection === "outbound";
      const outbound = document.querySelector(".bus-direction-outbound");
      const inboundWrap = document.querySelector("[data-bus-inbound]");
      if (outbound) outbound.hidden = showInbound;
      if (inboundWrap) inboundWrap.hidden = !showInbound;
      directionToggle.dataset.busDirection = showInbound ? "inbound" : "outbound";
      directionToggle.querySelector("[data-direction-start]").textContent = showInbound ? "东郊地铁站" : "滨郊南路";
      directionToggle.querySelector("[data-direction-end]").textContent = showInbound ? "滨郊南路" : "东郊地铁站";
      directionToggle.setAttribute("aria-label", showInbound ? "切换至去程方向" : "切换至返程方向");
      const activeDirection = showInbound
        ? inboundWrap?.querySelector(".bus-direction")
        : outbound;
      activeDirection?.animate([
        { opacity: 0, transform: "translateX(22px)" },
        { opacity: 1, transform: "translateX(0)" }
      ], {
        duration: 360,
        easing: "cubic-bezier(.2,.78,.2,1)"
      });
    });
  }
  if (isArchiveVersionsPage) {
    let archiveIndex = 0;
    const image = document.querySelector("#archive-version-image");
    const versionNumber = document.querySelector("#archive-version-number");
    const sourceNumber = document.querySelector("#archive-version-source");
    const era = document.querySelector("#archive-version-era");
    const title = document.querySelector("#archive-version-title");
    const description = document.querySelector("#archive-version-desc");
    const currentCount = document.querySelector("#archive-current-count");
    const versionButtons = [...document.querySelectorAll("[data-archive-index]")];

    const showArchiveVersion = (nextIndex) => {
      archiveIndex = (nextIndex + cityVersions.length) % cityVersions.length;
      const version = cityVersions[archiveIndex];
      const displayNumber = String(archiveIndex + 1).padStart(2, "0");
      const nextSource = `assets/archive/versions/zezhou-version-${displayNumber}.webp`;
      image.classList.add("changing");
      window.setTimeout(() => {
        image.src = nextSource;
        image.alt = `泽州市城市版本${displayNumber}：${version.title}`;
        versionNumber.textContent = `VERSION ${displayNumber}`;
        sourceNumber.textContent = `原始编号 ${version.source}`;
        era.textContent = version.era;
        title.textContent = version.title;
        description.textContent = version.desc;
        currentCount.textContent = displayNumber;
        versionButtons.forEach((button, index) => {
          const active = index === archiveIndex;
          button.classList.toggle("active", active);
          button.setAttribute("aria-pressed", String(active));
        });
        versionButtons[archiveIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        window.requestAnimationFrame(() => image.classList.remove("changing"));
        const preloadIndex = (archiveIndex + 1) % cityVersions.length;
        const preload = new Image();
        preload.src = `assets/archive/versions/zezhou-version-${String(preloadIndex + 1).padStart(2, "0")}.webp`;
      }, 180);
    };

    versionButtons.forEach((button) => {
      button.addEventListener("click", () => showArchiveVersion(Number(button.dataset.archiveIndex)));
    });
    document.querySelectorAll("[data-archive-step]").forEach((button) => {
      button.addEventListener("click", () => showArchiveVersion(archiveIndex + Number(button.dataset.archiveStep)));
    });
  }
  window.scrollTo(0, 0);
  currentPrimaryIndex = targetPrimaryIndex;
  currentSecondaryIndex = targetSecondaryIndex;

  if (shouldTransition) {
    await animateView([
      { opacity: 0, transform: `translateX(${transitionDirection > 0 ? 64 : -64}px)` },
      { opacity: 1, transform: "translateX(0)" }
    ], isSecondarySwitch ? 500 : 620);
    if (version === renderVersion) document.body.classList.remove("view-transitioning", "switching-secondary");
  }
}

window.addEventListener("hashchange", render);
render();
