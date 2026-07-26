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

const districts = [
  { name: "印沙区", en: "Yinsha District", no: "01" },
  { name: "陇府区", en: "Longfu District", no: "02" },
  { name: "古丘区", en: "Guqiu District", no: "03" },
  { name: "三山区", en: "Sanshan District", no: "04" },
  { name: "合湾区", en: "Hewan District", no: "05" },
  { name: "新胡区", en: "Xinhu District", no: "06" },
  { name: "江洲区", en: "Jiangzhou District", no: "07" }
];

const app = document.querySelector("#app");
const nav = document.querySelector("#primary-nav");

nav.innerHTML = sections
  .map((section) => `
    <div class="nav-item">
      <a class="nav-link" href="#${section.slug}" data-slug="${section.slug}">${section.title}</a>
      <div class="submenu" aria-label="${section.title}二级导航">
        <div class="submenu-inner">
          ${submenus[section.slug].map((item) => `<a href="#${section.slug}">${item}</a>`).join("")}
        </div>
      </div>
    </div>
  `)
  .join("");

function homeTemplate() {
  return `
    <section class="hero">
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

function sectionTemplate(section) {
  const current = sections.findIndex((item) => item.slug === section.slug);
  const prev = sections[(current - 1 + sections.length) % sections.length];
  const next = sections[(current + 1) % sections.length];

  return `
    <section class="page-hero">
      <div class="shell page-hero-inner">
        <div>
          <p>${section.en}</p>
          <h1>${section.title}</h1>
          <span>${section.desc}</span>
        </div>
        <b>${section.mark}</b>
      </div>
    </section>
    <section class="placeholder shell">
      <div class="breadcrumb"><a href="#home">首页</a><i>/</i><span>${section.title}</span></div>
      <div class="placeholder-panel">
        <span class="placeholder-mark" aria-hidden="true">${section.mark}</span>
        <p>CONTENT RESERVED</p>
        <h2>${section.title}内容区已预留</h2>
        <div class="rule"></div>
        <span>待您提供这部分的城市资料后，将在此建立完整的页面层级、图文内容和数据展示。</span>
      </div>
      <div class="page-switcher">
        <a href="#${prev.slug}"><small>上一栏目</small><strong>← ${prev.title}</strong></a>
        <a href="#${next.slug}" class="next"><small>下一栏目</small><strong>${next.title} →</strong></a>
      </div>
    </section>
  `;
}

function newsTemplate(section) {
  return `
    <section class="page-hero">
      <div class="shell page-hero-inner">
        <div>
          <p>${section.en}</p>
          <h1>${section.title}</h1>
          <span>${section.desc}</span>
        </div>
        <b>${section.mark}</b>
      </div>
    </section>
    <section class="news-page shell">
      <div class="breadcrumb"><a href="#home">首页</a><i>/</i><span>新闻公告</span></div>
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
    <section class="page-hero">
      <div class="shell page-hero-inner">
        <div>
          <p>${section.en}</p>
          <h1>${section.title}</h1>
          <span>${section.desc}</span>
        </div>
        <b>${section.mark}</b>
      </div>
    </section>
    <section class="districts-page shell">
      <div class="breadcrumb"><a href="#home">首页</a><i>/</i><span>行政区划</span></div>
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
    <section class="page-hero">
      <div class="shell page-hero-inner">
        <div>
          <p>${section.en}</p>
          <h1>${section.title}</h1>
          <span>${section.desc}</span>
        </div>
        <b>${section.mark}</b>
      </div>
    </section>
    <section class="map-page shell">
      <div class="breadcrumb"><a href="#home">首页</a><i>/</i><span>城市地图</span></div>
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
    <section class="page-hero">
      <div class="shell page-hero-inner">
        <div>
          <p>${section.en}</p>
          <h1>${section.title}</h1>
          <span>${section.desc}</span>
        </div>
        <b>${section.mark}</b>
      </div>
    </section>
    <section class="transit-page shell">
      <div class="breadcrumb"><a href="#home">首页</a><i>/</i><span>公共交通</span><i>/</i><span>地铁</span></div>
      <div class="transit-heading">
        <p>ZEZHOU METRO</p>
        <h2>泽州市地铁</h2>
        <span>现状运营线网与远期规划线网分别展示，规划内容不代表当前已经建成。</span>
      </div>
      <div class="status-legend">
        <span><b class="legend-dot built"></b><strong>已建成</strong>　现状城市地图中显示的既有线路</span>
        <span><b class="legend-dot planned"></b><strong>未建成</strong>　规划线网图中的远期线路及延伸段</span>
      </div>

      <article class="transit-map-block">
        <header>
          <div>
            <p>OPERATING NETWORK</p>
            <h3>现有地铁与城市地图</h3>
          </div>
          <span class="status-badge status-built"><i></i>已建成 · 运营中</span>
        </header>
        <p class="map-intro">以下矢量图记录泽州市当前城市格局及现有地铁线路，可用于查看线路与道路、行政区和公共设施之间的空间关系。</p>
        <figure class="map-figure">
          <div class="map-image-frame current-network">
            <img src="assets/zezhou-current-map.svg" alt="泽州市现有城市地图及已建成地铁">
          </div>
          <figcaption>
            <span>泽州市现状综合地图</span>
            <a href="assets/zezhou-current-map.svg" target="_blank" rel="noopener">查看矢量原图 ↗</a>
          </figcaption>
        </figure>
      </article>

      <article class="transit-map-block planned-block">
        <header>
          <div>
            <p>PLANNED NETWORK</p>
            <h3>地铁规划线网图</h3>
          </div>
          <span class="status-badge status-planned"><i></i>规划 · 未建成</span>
        </header>
        <p class="map-intro">以下线网图为泽州市地铁远期规划方案，用于展示规划线路、换乘关系和枢纽布局。图中规划内容与现状运营状态应分别理解。</p>
        <figure class="map-figure">
          <div class="map-image-frame planned-network">
            <img src="assets/zezhou-metro-plan.png" alt="泽州市规划地铁线网图，所示规划部分尚未建成">
          </div>
          <figcaption>
            <span><b class="legend-dot planned"></b>规划方案 · 未建成部分</span>
            <a href="assets/zezhou-metro-plan.png" target="_blank" rel="noopener">打开原尺寸规划图 ↗</a>
          </figcaption>
        </figure>
      </article>
    </section>
  `;
}

function render() {
  const slug = location.hash.replace(/^#/, "") || "home";
  const section = sections.find((item) => item.slug === slug);
  app.innerHTML = section
    ? section.slug === "news"
      ? newsTemplate(section)
      : section.slug === "districts"
        ? districtsTemplate(section)
        : section.slug === "map"
          ? mapTemplate(section)
          : section.slug === "transit"
            ? transitTemplate(section)
            : sectionTemplate(section)
    : homeTemplate();
  document.title = section ? `${section.title}｜泽州市门户` : "泽州市门户";
  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.slug === slug);
  });
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);
render();
