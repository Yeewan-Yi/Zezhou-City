const sections = [
  { slug: "overview", title: "城市概览", en: "City Profile", desc: "城市名片、历史沿革、自然地理与总体规划", mark: "01" },
  { slug: "map", title: "城市地图", en: "City Map", desc: "行政区、交通网络与公共设施综合地图", mark: "02" },
  { slug: "districts", title: "行政区划", en: "Districts", desc: "市级架构、各行政区及街道社区资料", mark: "03" },
  { slug: "roads", title: "道路与地名", en: "Roads & Places", desc: "道路、桥隧、广场及地名沿革", mark: "04" },
  { slug: "transit", title: "公共交通", en: "Public Transit", desc: "地铁、公交、铁路与对外交通系统", mark: "05" },
  { slug: "facilities", title: "城市设施", en: "Public Facilities", desc: "政务、教育、医疗、文化与市政设施", mark: "06" },
  { slug: "life", title: "城市生活", en: "City Life", desc: "商圈、旅游、城市文化与影像记录", mark: "07" },
  { slug: "news", title: "新闻公告", en: "News & Notices", desc: "城市新闻、工程进展、交通调整与规划公示", mark: "08" },
  { slug: "archives", title: "建设档案", en: "Development Archive", desc: "存档版本、建设日志、规划方案与创作手记", mark: "09" }
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
  archives: ["城市版本", "建设日志", "规划方案", "游戏截图", "设定说明"]
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
        <h1>泽州市，<br>一座拥有真实脉络的虚构城市。</h1>
        <p class="hero-lead">这里将记录泽州市的空间、交通、地名、生活与成长。当前为网站一级栏目架构预览。</p>
        <div class="hero-actions">
          <a href="#overview">认识泽州市</a>
          <a href="#map" class="ghost">打开城市地图</a>
        </div>
      </div>
    </section>

    <section class="directory shell">
      <div class="section-heading">
        <div><p>EXPLORE THE CITY</p><h2>城市导航</h2></div>
        <span>九个一级栏目已经建立，具体内容将在后续逐步填充。</span>
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

function sectionHeroTemplate(section, activeIndex = -1) {
  const hasHeroImage = ["districts", "roads", "transit", "facilities"].includes(section.slug);
  return `
    <section class="page-hero page-hero-${section.slug}${hasHeroImage ? " page-hero-image" : ""}">
      <div class="shell page-hero-inner">
        <div class="page-hero-copy">
          <div class="page-hero-meta">
            <p>${section.en}</p>
            <div class="breadcrumb"><a href="#home">首页</a><i>/</i><span>${section.title}</span></div>
          </div>
          <h1>${section.title}</h1>
          <span>${section.desc}</span>
        </div>
        <nav class="secondary-title-grid" aria-label="${section.title}二级栏目">
          ${submenus[section.slug].map((title, index) => `
            <a href="${submenuHref(section.slug, index)}" class="${index === activeIndex ? "active" : ""}">
              <small>${String(index + 1).padStart(2, "0")}</small>
              <strong>${title}</strong>
              <span aria-hidden="true">→</span>
            </a>
          `).join("")}
        </nav>
      </div>
    </section>
  `;
}

function sectionTemplate(section) {
  return sectionHeroTemplate(section);
}

function secondaryTemplate(section, secondaryIndex) {
  const title = submenus[section.slug][secondaryIndex];
  return `
    ${sectionHeroTemplate(section, secondaryIndex)}
    <section class="placeholder shell">
      <div class="placeholder-panel">
        <span class="placeholder-mark" aria-hidden="true">${section.mark}</span>
        <p>CONTENT RESERVED</p>
        <h2>${title}</h2>
        <div class="rule"></div>
        <span>${section.title} · ${title}的详细资料将在后续补充。</span>
      </div>
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
    <section class="news-page shell">
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
    ${sectionHeroTemplate(section, 0)}
    <section class="news-page shell">
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
        <span>各行政区详细资料将在后续建设中逐步补充。</span>
      </div>
      <div class="district-grid">
        ${districts.map((district) => `
          <article class="district-card">
            <span class="district-no">${district.no}</span>
            <small>${district.en}</small>
            <h3>${district.name}</h3>
            <div class="district-rule"></div>
            <p>区域简介、人口面积、行政驻地、交通设施等内容暂待补充。</p>
            <span class="district-status">资料建设中</span>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function mapTemplate(section) {
  return `
    ${sectionHeroTemplate(section, 0)}
    <section class="map-page shell">
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
          <img src="assets/zezhou-current-map.svg" alt="泽州市现状城市地图及已建成地铁线路">
        </div>
        <figcaption>
          <span><b class="legend-dot built"></b>已建成：现有城市及运营线路</span>
          <a href="assets/zezhou-current-map.svg" target="_blank" rel="noopener">打开原尺寸地图 ↗</a>
        </figcaption>
      </figure>
    </section>
  `;
}

function transitTemplate(section) {
  return `
    ${sectionHeroTemplate(section, 0)}
    <section class="transit-page shell">
      <div class="transit-heading">
        <p>ZEZHOU METRO</p>
        <h2>地铁</h2>
        <span>按线路编号查看泽州市地铁规划站点及换乘关系。图中未正式命名的站点以“暂定名”标识。</span>
      </div>

      <div class="metro-line-tabs" role="tablist" aria-label="地铁线路">
        ${metroLines.map((line, index) => `
          <button class="metro-line-tab${index === 0 ? " active" : ""}" type="button"
            role="tab" aria-selected="${index === 0}" data-line="${line.number}"
            style="--line-color:${line.color}">
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

function metroLineDiagram(line) {
  const stationCards = line.stations.map(([name, transfers, outsideTransfers = []], stationIndex) => {
    const englishName = metroEnglishNames[line.number]?.[stationIndex] || "";
    return `
    <div class="metro-station">
      <div class="transfer-badges">
        ${transfers.map((number) => {
          const transfer = metroLines.find((item) => item.number === number);
          const outside = outsideTransfers.includes(number);
          return `<span class="${outside ? "outside" : ""}" style="--transfer-color:${transfer.color}" title="${outside ? "站外换乘" : "换乘"}${number}号线">${number}</span>`;
        }).join("")}
      </div>
      <i class="station-dot${transfers.length ? " transfer-station-dot" : ""}" aria-label="${transfers.length ? "换乘站" : "一般车站"}"></i>
      <strong>${name}</strong>
      <small>${englishName}</small>
    </div>
  `;
  }).join("");

  return `
    <header class="metro-line-header" style="--line-color:${line.color}">
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
    <p class="metro-note">线路及站名根据当前规划图整理；“规划车站/规划终点（暂定名）”表示原图尚未给出正式站名。</p>
  `;
}

function render() {
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
  const isMapPage = secondaryRoute?.section.slug === "map" && secondaryRoute.secondarySlug === "comprehensive";
  const isInnerPage = Boolean(section || secondaryRoute || newsCategory || isNewsArticle);
  const activeSlug = newsCategory || isNewsArticle
    ? "news"
    : secondaryRoute
      ? secondaryRoute.section.slug
      : slug;
  document.body.classList.toggle("home-page", !isInnerPage);
  document.body.classList.toggle("inner-page", isInnerPage);
  app.innerHTML = isNewsArticle
    ? newsArticleTemplate(newsSection)
    : newsCategory
      ? newsCategoryTemplate(newsSection, newsCategory)
      : isMetroPage
        ? transitTemplate(secondaryRoute.section)
        : isMapPage
          ? mapTemplate(secondaryRoute.section)
          : secondaryRoute
            ? secondaryTemplate(secondaryRoute.section, secondaryRoute.index)
            : section
              ? section.slug === "news" ? newsTemplate(section) : sectionTemplate(section)
              : homeTemplate();
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
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);
render();
