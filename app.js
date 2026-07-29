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
  districts: ["印沙区", "陇蜀区", "古丘区", "三山区", "合湾区", "新胡区", "江洲区"],
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
  districts: ["yinsha", "longshu", "guqiu", "sanshan", "hewan", "xinhu", "jiangzhou"],
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

const cityVersionDates = [
  "2025.07.04", "2025.07.04", "2025.07.04", "2025.07.04", "2025.07.04", "2025.07.04",
  "2025.07.15", "2025.07.16", "2025.07.16", "2025.07.18", "2025.07.19", "2025.07.22",
  "2025.07.24", "2025.07.24", "2025.07.26", "2025.07.28", "2025.07.29", "2025.07.31",
  "2025.08.02", "2025.08.06", "2025.08.30", "2025.09.04", "2025.09.06", "2025.09.12",
  "2025.09.27", "2025.10.08", "2025.10.12", "2025.10.25", "2025.10.27", "2025.11.15",
  "2025.12.10", "2026.01.21", "2026.02.11", "2026.07.28"
];
cityVersions.forEach((version, index) => { version.date = cityVersionDates[index]; });

const cityEras = [
  { range: "01—07", title: "筑城起步", dates: "2025.07.04", start: 0, end: 5, desc: "同日留存的六次早期推演，记录泽州从空间底盘到首轮城区轮廓的集中形成。" },
  { range: "09—13", title: "交通塑城", dates: "2025.07.15—07.22", start: 6, end: 11, desc: "一周内对外通道与区域联络连续落位，城市骨架由核心区向多方向拉开。" },
  { range: "14—19", title: "中心成形", dates: "2025.07.24—07.31", start: 12, end: 17, desc: "滨水、东部与北部组团在八天内相继出现，中心城区进入结构完善期。" },
  { range: "20—24.5", title: "组团拓展", dates: "2025.08.02—09.12", start: 18, end: 23, desc: "跨越盛夏的六次记录见证环线闭合、西岸开发与公共交通网络成形。" },
  { range: "25—30", title: "区域拓展", dates: "2025.09.27—11.15", start: 24, end: 29, desc: "建设重心向南岸与东部滨山迁移，泽州由组团城市迈向更大的区域尺度。" },
  { range: "31—34", title: "区域都市", dates: "2025.12.10—2026.07.28", start: 30, end: 33, desc: "跨年度的最后四次留存，记录南部新区成片、区域网络贯通与现状格局定型。" }
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
  { name: "陇蜀区", en: "Longshu District", no: "02" },
  { name: "古丘区", en: "Guqiu District", no: "03" },
  { name: "三山区", en: "Sanshan District", no: "04" },
  { name: "合湾区", en: "Hewan District", no: "05" },
  { name: "新胡区", en: "Xinhu District", no: "06" },
  { name: "江洲区", en: "Jiangzhou District", no: "07" }
];

const mappedDistricts = [
  {
    slug: "yinsha", name: "印沙区", en: "YINSHA DISTRICT", color: "#c35e52",
    path: "M391.5 424.5 C417 418.2 450 409.4 476.8 400.1 C483.2 397.9 488.9 394.8 493.3 391.7 C501.6 405.5 511.2 425.6 518.9 441 C528.6 461.3 539.1 484.4 547.6 504.2 C553.4 516.7 560.8 526.1 567.4 530.4 C551.2 524 530.7 515.8 512.1 509.4 C488.1 502.7 464.4 490.1 442.9 474.9 C425.7 462.4 408.9 441.8 391.5 424.5 Z",
    labelX: 469, labelY: 459, viewBox: "340 340 285 255",
    boundary: "纬地快速路、经天快速路、常印大道（快速路）围合"
  },
  {
    slug: "longshu", name: "陇蜀区", en: "LONGSHU DISTRICT", color: "#b48735",
    path: "M493.3 391.7 C513.7 382.6 535.9 371.2 555.8 363 C562.6 359.6 568.4 355.6 573.2 352 C579.2 361.8 583.8 374.3 589.5 383.8 C594.6 392.1 599.8 400.6 603.9 407.3 C615.8 417.2 632.7 431 645.7 437.8 C637.2 448.8 628.2 460.8 620.5 470.4 C617.2 474.5 614.5 477.5 612.5 479.4 C607.3 490.8 602.7 504.9 597.5 517.4 C595.3 523 593.1 528.1 591 531.7 C588.3 536 585.3 540.2 582.4 543.2 L567.4 530.4 C560.9 518.2 554.4 505.1 547.6 491.4 C538 472.1 528.2 451 518.9 431.9 C510.2 414.1 501.7 398.5 493.3 391.7 Z",
    labelX: 570, labelY: 438, viewBox: "445 305 255 285",
    boundary: "纬地快速路、经天快速路、凤台大道（快速路）与江面围合"
  },
  {
    slug: "jiangzhou", name: "江洲区", en: "JIANGZHOU DISTRICT", color: "#367c74",
    path: "M696 376 C683.1 391 670.2 406.5 658.1 421.2 C645.7 436.5 633.8 452.4 623 467 C618.8 472.6 615.1 477.1 612.5 479.4 C607.4 491.4 602.9 504.2 598.1 516.2 C595.5 522.9 593.1 528.1 591 531.7 C610.6 534.1 632.1 536.3 653.2 538.3 C675 540.4 697.3 543 716.7 544.7 C749.8 545.8 783.4 545.1 816.5 544.5 C842.3 544.1 866.8 543.6 889 543.2 C934 543.1 979 543.2 1024 543.2 L1024 319.3 L889.3 319.3 C865.8 319.7 841.2 319.9 817.1 320 C791.9 320.1 767.1 320.1 744.5 320.3 C736.4 329.6 728.2 339.1 720.2 348.4 C711.3 358.6 703 368.2 696 376 Z",
    labelX: 757, labelY: 437, viewBox: "555 270 469 410",
    boundary: "两江中心线向东延伸至海洋边界，包含东侧孤岛"
  }
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

function selectBusMapStop(stop) {
  const source = stop.classList.contains("bus-map-hotspot")
    ? stop
    : [...app.querySelectorAll(".bus-map-hotspot")].find((item) => item.dataset.mapStop === stop.dataset.mapStop);
  if (!source) return;
  app.querySelectorAll(".bus-map-stop").forEach((item) => {
    item.classList.toggle("active", item.dataset.mapStop === source.dataset.mapStop);
  });
  const mapStopName = app.querySelector("[data-map-stop-name]");
  const mapTransfers = app.querySelector("[data-map-transfers]");
  const popup = app.querySelector(".bus-map-popup");
  if (mapStopName) mapStopName.textContent = source.dataset.mapStop;
  if (mapTransfers) {
    const busNote = source.dataset.mapBusNote || "";
    const metroBadge = source.dataset.mapMetroLine
      ? `<span class="map-transfer-metro" style="--transfer-color:${source.dataset.mapMetroColor}">
          <b>${source.dataset.mapMetroLine}号线</b><em>${source.dataset.mapMetroStation}站</em>
        </span>`
      : "";
    mapTransfers.innerHTML = `
      <span class="map-transfer-bus"><b>301</b>${busNote ? `<em>${busNote}</em>` : ""}</span>
      ${metroBadge}
    `;
  }
  if (popup) {
    const left = parseFloat(source.style.getPropertyValue("--stop-left"));
    const top = parseFloat(source.style.getPropertyValue("--stop-top"));
    popup.style.setProperty("--popup-left", `${left}%`);
    popup.style.setProperty("--popup-top", `${top}%`);
    popup.classList.toggle("bus-map-popup-left", left > 62);
  }
}

app.addEventListener("click", (event) => {
  const mapStop = event.target.closest(".bus-map-stop, .bus-map-hotspot");
  if (mapStop) {
    selectBusMapStop(mapStop);
    return;
  }
  const districtButton = event.target.closest("[data-district-map]");
  if (districtButton) {
    const district = mappedDistricts.find((item) => item.slug === districtButton.dataset.districtMap);
    const focus = app.querySelector("[data-district-focus]");
    if (!district || !focus) return;
    app.querySelectorAll("[data-district-map]").forEach((item) => item.classList.toggle("active", item === districtButton));
    focus.querySelector("[data-district-en]").textContent = district.en;
    focus.querySelector("[data-district-name]").textContent = district.name;
    focus.querySelector("[data-district-boundary]").textContent = district.boundary;
    focus.querySelector("[data-district-map-canvas]").innerHTML = districtSvg(district, true);
    focus.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  const link = event.target.closest(".column-switcher-link");
  if (!link || currentPrimaryIndex === null || currentPrimaryIndex < 0) return;
  const currentSection = sections[currentPrimaryIndex];
  if (link.dataset.targetSection !== currentSection.slug) return;
  event.preventDefault();
  history.pushState(null, "", link.getAttribute("href"));
  render();
});

app.addEventListener("mouseover", (event) => {
  const mapStop = event.target.closest(".bus-map-hotspot");
  if (mapStop) selectBusMapStop(mapStop);
});

app.addEventListener("focusin", (event) => {
  const mapStop = event.target.closest(".bus-map-hotspot");
  if (mapStop) selectBusMapStop(mapStop);
});

app.addEventListener("keydown", (event) => {
  const mapStop = event.target.closest(".bus-map-stop");
  if (!mapStop || (event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  selectBusMapStop(mapStop);
});

app.addEventListener("mouseover", (event) => {
  const mapStop = event.target.closest(".bus-map-hotspot");
  if (mapStop) selectBusMapStop(mapStop);
});

app.addEventListener("focusin", (event) => {
  const mapStop = event.target.closest(".bus-map-hotspot");
  if (mapStop) selectBusMapStop(mapStop);
});

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

function homeTemplate() {
  return `
    <section class="hero">
      <div class="hero-slideshow" aria-hidden="true">
        <div class="hero-slide hero-slide-1"></div>
        <div class="hero-slide hero-slide-2" data-background="assets/zezhou-home-2.jpg"></div>
        <div class="hero-slide hero-slide-3" data-background="assets/zezhou-home-3.jpg"></div>
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

function loadDeferredHomeMedia() {
  const slideshow = document.querySelector(".hero-slideshow");
  if (!slideshow || slideshow.dataset.loading) return;
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (connection?.saveData || ["slow-2g", "2g"].includes(connection?.effectiveType)) return;
  slideshow.dataset.loading = "true";
  const slides = [...slideshow.querySelectorAll("[data-background]")];
  Promise.all(slides.map((slide) => new Promise((resolve) => {
    const loader = new Image();
    loader.decoding = "async";
    loader.onload = () => {
      if (slideshow.isConnected) slide.style.backgroundImage = `url("${slide.dataset.background}")`;
      resolve();
    };
    loader.onerror = resolve;
    loader.src = slide.dataset.background;
  }))).then(() => {
    if (slideshow.isConnected) slideshow.classList.add("media-ready");
  });
}

function scheduleDeferredHomeMedia() {
  const start = () => {
    if ("requestIdleCallback" in window) window.requestIdleCallback(loadDeferredHomeMedia, { timeout: 2400 });
    else window.setTimeout(loadDeferredHomeMedia, 1200);
  };
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
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
            ? `<h1 class="page-composite-title"><a href="#${section.slug}" aria-label="返回${section.title}一级栏目">${section.title}</a><i>/</i><em>${secondaryTitle}</em></h1>`
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
    <a class="column-switcher-link column-switcher-${direction}${item.crossesSection ? " column-switcher-cross-section" : ""}" href="${item.href}" data-target-section="${item.section.slug}">
      ${direction === "previous" ? '<span class="column-switcher-arrow" aria-hidden="true">←</span>' : ""}
      <span class="column-switcher-copy">
        <small>${item.crossesSection ? (direction === "previous" ? "PREVIOUS SECTION · 进入上一板块" : "NEXT SECTION · 进入下一板块") : (direction === "previous" ? "上一栏目" : "下一栏目")}</small>
        <strong><em>${item.section.title}</em><i>/</i><span>${item.title}</span></strong>
      </span>
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
  return `
    ${sectionHeroTemplate(section, 0)}
    <section class="archive-page shell section-drawer">
      <header class="archive-heading">
        <div><p>CITY EVOLUTION</p><h2>泽州市城市版本</h2></div>
        <span>34个建设版本 · 6个发展阶段 · 2025.07—2026.07</span>
      </header>
      <p class="archive-intro">本档案依据历次城市总览图，记录泽州建成区、交通骨架和城市组团的演变。阶段时间取自原始图片的文件创建日期，文字说明根据图面变化整理。</p>

      <article class="archive-viewer" id="archive-viewer">
        <figure class="archive-image-frame">
          <img id="archive-version-image" src="assets/archive/versions/zezhou-version-01.webp" alt="泽州市城市版本01：${first.title}" loading="lazy" decoding="async">
          <div class="archive-stage-overlay" id="archive-stage-overlay">
            <button class="archive-stage-handle" id="archive-stage-handle" type="button" aria-expanded="false" aria-controls="archive-stage-panel">
              <span>城市发展阶段</span>
              <strong><i id="archive-stage-handle-number">01</i><b id="archive-stage-handle-title">${cityEras[0].title}</b></strong>
              <em>展开</em>
            </button>
            <div class="archive-stage-panel" id="archive-stage-panel">
              <nav class="archive-stage-nav" aria-label="城市发展阶段">
                ${cityEras.map((item, index) => `
                  <button class="${index === 0 ? "active" : ""}" type="button" data-archive-stage="${index}" aria-pressed="${index === 0}">
                    <span>${String(index + 1).padStart(2, "0")}</span><strong>${item.title}</strong><small>${item.dates}</small>
                  </button>
                `).join("")}
              </nav>
              <section class="archive-stage-summary" aria-live="polite">
                <span class="archive-stage-watermark" id="archive-stage-watermark">01</span>
                <div class="archive-stage-summary-title"><small id="archive-stage-range">当前阶段 / VERSION ${cityEras[0].range}</small><h3 id="archive-stage-title">${cityEras[0].title}</h3></div>
                <div class="archive-stage-summary-copy"><b>DEVELOPMENT CHRONICLE</b><p id="archive-stage-desc">${cityEras[0].desc}</p></div>
              </section>
            </div>
          </div>
        </figure>
        <div class="archive-version-copy">
          <div class="archive-version-meta">
            <span id="archive-version-number">VERSION 01</span>
          </div>
          <p id="archive-version-era">${first.era} · ${first.date}</p>
          <h3 id="archive-version-title">${first.title}</h3>
          <div class="archive-copy-rule"></div>
          <p id="archive-version-desc">${first.desc}</p>
          <div class="archive-version-controls">
            <button type="button" data-archive-step="-1" aria-label="查看上一个城市版本">←<span>上一版本</span></button>
            <strong><span id="archive-current-count">01</span> / <span id="archive-stage-count">06</span></strong>
            <button type="button" data-archive-step="1" aria-label="查看下一个城市版本"><span>下一版本</span>→</button>
          </div>
        </div>
      </article>

      <nav class="archive-version-strip" aria-label="城市版本选择">
        ${cityVersions.map((version, index) => `
          <button class="${index === 0 ? "active" : ""}" type="button" data-archive-index="${index}" data-archive-era="${cityEras.findIndex((item) => index >= item.start && index <= item.end)}" aria-label="查看版本${String(index + 1).padStart(2, "0")}：${version.title}" aria-pressed="${index === 0}" ${index > cityEras[0].end ? "hidden" : ""}>
            <small>${version.date.slice(5)}</small><strong>${String(index + 1).padStart(2, "0")}</strong>
          </button>
        `).join("")}
      </nav>
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

function districtSvg(district, detail = false) {
  const clipId = `district-clip-${district.slug}`;
  return `
    <svg class="district-map-svg" viewBox="${detail ? district.viewBox : "0 0 1024 1024"}" role="img" aria-label="${district.name}行政区地图">
      <defs><clipPath id="${clipId}"><path d="${district.path}"/></clipPath></defs>
      <image href="assets/maps/zezhou-base.svg" x="0" y="0" width="1024" height="1024"/>
      ${detail ? `
        <rect x="0" y="0" width="1024" height="1024" fill="#d8dcda" opacity=".74"/>
        <image href="assets/maps/zezhou-base.svg" x="0" y="0" width="1024" height="1024" clip-path="url(#${clipId})"/>
      ` : ""}
      <path class="district-map-shape" d="${district.path}" style="--district-color:${district.color}"/>
      <text class="district-map-label" x="${district.labelX}" y="${district.labelY}" text-anchor="middle">${district.name}</text>
    </svg>
  `;
}

function districtOverviewSvg() {
  return `
    <svg class="district-map-svg district-overview-svg" viewBox="0 0 1024 1024" role="img" aria-label="泽州市行政区划图">
      <image href="assets/maps/zezhou-base.svg" x="0" y="0" width="1024" height="1024"/>
      ${mappedDistricts.map((district) => `
        <path class="district-map-shape" d="${district.path}" style="--district-color:${district.color}"/>
        <text class="district-map-label" x="${district.labelX}" y="${district.labelY}" text-anchor="middle">${district.name}</text>
      `).join("")}
    </svg>
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
          <${mappedDistricts.some((item) => item.name === district.name) ? "a" : "article"}
            class="district-card"
            ${mappedDistricts.some((item) => item.name === district.name) ? `href="#districts-${mappedDistricts.find((item) => item.name === district.name).slug}"` : ""}>
            <span class="district-no">${district.no}</span>
            <small>${district.en}</small>
            <h3>${district.name}</h3>
            <div class="district-rule"></div>
            <p>${mappedDistricts.some((item) => item.name === district.name) ? "查看行政边界、区域底图与毗邻关系。" : "行政边界资料待后续补充。"}</p>
            <span class="district-status">${mappedDistricts.some((item) => item.name === district.name) ? "查看区图" : "边界待补充"}</span>
          </${mappedDistricts.some((item) => item.name === district.name) ? "a" : "article"}>
        `).join("")}
      </div>
    </section>
  `;
}

function districtMapTemplate(section) {
  return `
    ${sectionHeroTemplate(section, 1)}
    <section class="map-page district-map-page shell section-drawer">
      <div class="map-section-heading">
        <div><p>ADMINISTRATIVE DIVISIONS</p><h2>泽州市行政区划图</h2></div>
        <span class="status-badge status-built"><i></i>行政边界</span>
      </div>
      <p class="map-intro">全图依据道路、快速路、两江中心线与东侧海洋边界拟合行政边界；当前展示印沙区、陇蜀区与江洲区。</p>
      <figure class="map-figure district-overview">
        <div class="map-image-frame">${districtOverviewSvg()}</div>
        <figcaption class="district-map-legend">
          ${mappedDistricts.map((district) => `<span><i style="--district-color:${district.color}"></i>${district.name}</span>`).join("")}
        </figcaption>
      </figure>
    </section>
  `;
}

function districtSecondaryTemplate(section, district, index) {
  return `
    ${sectionHeroTemplate(section, index)}
    <section class="district-secondary-page shell section-drawer">
      <div class="map-section-heading">
        <div><p>${district.en}</p><h2>${district.name}行政区地图</h2></div>
        <span class="status-badge status-built"><i></i>边界已核对</span>
      </div>
      <p class="map-intro">${district.boundary}。地图保留行政区内原始色彩，行政区外统一灰显，以清楚表达不规则行政范围。</p>
      <figure class="district-secondary-figure">
        <div class="district-secondary-map">${districtSvg(district, true)}</div>
        <figcaption>
          <strong>${district.name}</strong>
          <span>边界依据道路中心线、河道中心线、河岸与海洋边界重新拟合；手绘参考线仅用于确认区位和毗邻关系。</span>
        </figcaption>
      </figure>
      ${columnSwitcherTemplate(section, index, "bottom")}
      ${lowerBackButtonTemplate(section)}
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
          <img src="assets/maps/zezhou-base.svg" alt="泽州市现状城市基础地图" loading="lazy" decoding="async">
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
            <img src="assets/zezhou-metro-plan.png" alt="泽州市地铁规划线网图" loading="lazy" decoding="async">
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

function busLocalMapTemplate() {
  const mapStops = [
    { name: "滨郊南路", x: 850.1, y: 302.8, labelX: 854.1, labelY: 305.4, anchor: "start", type: "首末站" },
    { name: "古林南", x: 849.2, y: 280.7, labelX: 853.2, labelY: 283.3, anchor: "start", type: "中途站", metroLine: "8", metroStation: "古林", metroColor: "#93282c" },
    { name: "古林北", x: 848.7, y: 266.4, labelX: 852.7, labelY: 269, anchor: "start", type: "中途站", metroLine: "8", metroStation: "古林", metroColor: "#93282c" },
    { name: "林郊大道·锦郊路", x: 848.2, y: 251.3, labelX: 852.2, labelY: 253.9, anchor: "start", type: "中途站" },
    { name: "林郊大道·文郊东路", x: 842.1, y: 212.8, labelX: 846.1, labelY: 216.8, anchor: "start", type: "方向性站点", busNote: "开往东郊地铁站方向" },
    { name: "林郊大道·文郊西路", x: 839.2, y: 210.3, labelX: 835.2, labelY: 207.5, anchor: "end", type: "方向性站点", busNote: "开往滨郊南路方向" },
    { name: "东郊地铁站", x: 824.8, y: 176.1, labelX: 828.8, labelY: 172.9, anchor: "start", type: "首末站", metroLine: "1", metroStation: "东郊", metroColor: "#009ace" }
  ];
  return `
    <figure class="bus-local-map-card">
      <header>
        <div><small>LOCAL ROUTE MAP</small><h3>301路局部线路图</h3></div>
        <span>去返程叠加</span>
      </header>
      <div class="bus-local-map-frame">
        <svg viewBox="5856.23 1893.02 759.04 983.03" role="img" aria-labelledby="bus-301-map-title bus-301-map-desc">
          <title id="bus-301-map-title">301路公交局部线路图</title>
          <desc id="bus-301-map-desc">展示滨郊南路至东郊地铁站的去程和返程站点、方向性停靠站及线路轨迹。</desc>
          <defs>
            <marker id="bus-arrow-outbound" markerUnits="userSpaceOnUse" markerWidth="3" markerHeight="3" refX="2.6" refY="1.5" orient="auto">
              <path d="M0,0 L3,1.5 L0,3 Z" fill="#176058"/>
            </marker>
            <marker id="bus-arrow-inbound" markerUnits="userSpaceOnUse" markerWidth="3" markerHeight="3" refX="2.6" refY="1.5" orient="auto">
              <path d="M0,0 L3,1.5 L0,3 Z" fill="#d29a35"/>
            </marker>
            <filter id="bus-route-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.1" flood-color="#173b37" flood-opacity=".28"/>
            </filter>
          </defs>
          <image class="bus-map-base" href="assets/maps/zezhou-base.svg" x="910" y="910" width="6371" height="6371"/>
          <g class="bus-map-overlay" transform="translate(910 910) scale(6.2216796875)">
          <g class="bus-map-route-halo">
            <path d="M850.1 302.8 C849.9 294 849.5 286 849.2 280.7 C849 275.2 848.8 270.4 848.7 266.4 C848.6 260.4 848.5 255.4 848.2 251.3 C847.3 239.6 845.5 222.8 842.1 212.8 C838.3 200.5 830.2 183.7 824.8 176.1"/>
            <path d="M824.8 176.1 C830.6 185.4 835.8 198.5 839.2 210.3 C843.2 222.6 846.8 239.1 848.2 251.3 C848.5 257.2 848.6 261.7 848.7 266.4 C848.8 271.8 849 276.6 849.2 280.7 C849.5 288.4 849.9 296.8 850.1 302.8"/>
          </g>
          <path class="bus-map-route bus-map-route-outbound"
            d="M850.1 302.8 C849.9 294 849.5 286 849.2 280.7 C849 275.2 848.8 270.4 848.7 266.4 C848.6 260.4 848.5 255.4 848.2 251.3 C847.3 239.6 845.5 222.8 842.1 212.8 C838.3 200.5 830.2 183.7 824.8 176.1"
            marker-end="url(#bus-arrow-outbound)"/>
          <path class="bus-map-route bus-map-route-inbound"
            d="M824.8 176.1 C830.6 185.4 835.8 198.5 839.2 210.3 C843.2 222.6 846.8 239.1 848.2 251.3 C848.5 257.2 848.6 261.7 848.7 266.4 C848.8 271.8 849 276.6 849.2 280.7 C849.5 288.4 849.9 296.8 850.1 302.8"
            marker-end="url(#bus-arrow-inbound)"/>
          <g class="bus-map-stops" filter="url(#bus-route-shadow)">
            ${mapStops.map((stop, index) => `
              <g class="bus-map-stop${index === 0 ? " active" : ""}"
                data-map-stop="${stop.name}" data-map-stop-type="${stop.type}"
                aria-hidden="true">
                <circle class="bus-map-stop-hit" cx="${stop.x}" cy="${stop.y}" r="5.6"/>
                <circle class="${stop.type.includes("方向性") ? "direction" : stop.type.includes("首末站") ? "terminal" : "shared"}"
                  cx="${stop.x}" cy="${stop.y}" r="${stop.type.includes("首末站") ? 1.55 : 1.05}"/>
                <text class="bus-map-stop-label" x="${stop.labelX}" y="${stop.labelY}" text-anchor="${stop.anchor}">${stop.name}</text>
              </g>
            `).join("")}
          </g>
          </g>
        </svg>
        ${mapStops.map((stop) => `
          <button class="bus-map-hotspot" type="button"
            style="--stop-left:${((stop.x - 795) / 122 * 100).toFixed(2)}%;--stop-top:${((stop.y - 158) / 158 * 100).toFixed(2)}%"
            data-map-stop="${stop.name}" data-map-stop-type="${stop.type}"
            ${stop.busNote ? `data-map-bus-note="${stop.busNote}"` : ""}
            ${stop.metroLine ? `data-map-metro-line="${stop.metroLine}" data-map-metro-station="${stop.metroStation}" data-map-metro-color="${stop.metroColor}"` : ""}
            aria-label="查看${stop.name}站点信息"></button>
        `).join("")}
        <aside class="bus-map-popup" style="--popup-left:45.16%;--popup-top:91.65%" aria-live="polite">
          <strong data-map-stop-name>滨郊南路</strong>
          <div class="bus-map-transfers" data-map-transfers>
            <span class="map-transfer-bus"><b>301</b></span>
          </div>
        </aside>
      </div>
      <figcaption>
        <span><i class="outbound"></i>去程</span>
        <span><i class="inbound"></i>返程</span>
        <span><b></b>双向停靠</span>
        <span class="bus-map-source">基于泽州市现状底图绘制</span>
      </figcaption>
    </figure>
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
            <div class="bus-route-body">
              <div class="bus-direction-view">
                ${busDirectionTemplate("滨郊南路 → 东郊地铁站", "outbound", busRoute301.outbound)}
                <div data-bus-inbound hidden>
                  ${busDirectionTemplate("东郊地铁站 → 滨郊南路", "inbound", busRoute301.inbound)}
                </div>
              </div>
              ${busLocalMapTemplate()}
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
  const preservedScrollY = window.scrollY;
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
  const isDistrictMapPage = secondaryRoute?.section.slug === "map" && secondaryRoute.secondarySlug === "districts";
  const mappedDistrictPage = secondaryRoute?.section.slug === "districts"
    ? mappedDistricts.find((district) => district.slug === secondaryRoute.secondarySlug)
    : null;
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
  const shouldTransition = direction !== 0;
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
  document.documentElement.classList.toggle("switching-secondary", isSecondarySwitch);

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

  if (isSecondarySwitch && existingDrawer && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const drawerExit = existingDrawer.animate([
      { opacity: 1, transform: "translateX(0)" },
      { opacity: 0, transform: `translateX(${secondaryDirection > 0 ? -90 : 90}px)` }
    ], {
      duration: 340,
      easing: "cubic-bezier(.4,0,.65,1)",
      fill: "forwards"
    });
    try {
      await drawerExit.finished;
    } catch {
      // A newer navigation replaced this one.
    }
    if (version !== renderVersion) return;
  } else if (shouldTransition) {
    document.body.classList.add("view-transitioning");
    await animateView([
      { opacity: 1, transform: "translateX(0)" },
      { opacity: 0, transform: `translateX(${direction > 0 ? -64 : 64}px)` }
    ], 440);
    if (version !== renderVersion) return;
    app.getAnimations?.().forEach((animation) => animation.cancel());
  } else {
    document.body.classList.remove("view-transitioning");
  }

  document.body.classList.toggle("home-page", !isInnerPage);
  document.body.classList.toggle("inner-page", isInnerPage);
  const nextMarkup = isNewsArticle
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
        : isDistrictMapPage
          ? districtMapTemplate(secondaryRoute.section)
        : mappedDistrictPage
          ? districtSecondaryTemplate(secondaryRoute.section, mappedDistrictPage, secondaryRoute.index)
          : secondaryRoute
            ? secondaryTemplate(secondaryRoute.section, secondaryRoute.index)
            : section
              ? section.slug === "news"
                ? newsTemplate(section)
                : section.slug === "districts"
                  ? districtsTemplate(section)
                  : sectionTemplate(section)
              : homeTemplate();
  if (isSecondarySwitch && existingDrawer) {
    const nextView = document.createElement("template");
    nextView.innerHTML = nextMarkup.trim();
    const nextDrawer = nextView.content.querySelector(".section-drawer");
    if (nextDrawer) {
      nextDrawer.classList.add("drawer-horizontal");
      existingDrawer.replaceWith(nextDrawer);
    }
    const secondaryTitle = isNewsArticle
      ? newsCategories[0].title
      : newsCategory
        ? newsCategory.title
        : submenus[secondaryRoute.section.slug][secondaryRoute.index];
    const titleDetail = app.querySelector(".page-composite-title em");
    const breadcrumbDetail = app.querySelector(".page-hero-subpage .breadcrumb span:last-child");
    if (titleDetail) titleDetail.textContent = secondaryTitle;
    if (breadcrumbDetail) breadcrumbDetail.textContent = secondaryTitle;
  } else {
    app.innerHTML = nextMarkup;
  }
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
  if (isSecondarySwitch) window.scrollTo(0, preservedScrollY);
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
    let archiveStageIndex = 0;
    let archiveRequestId = 0;
    let archiveRotationTimer = 0;
    const image = document.querySelector("#archive-version-image");
    const viewer = document.querySelector("#archive-viewer");
    const stageOverlay = document.querySelector("#archive-stage-overlay");
    const stageHandle = document.querySelector("#archive-stage-handle");
    const stageHandleNumber = document.querySelector("#archive-stage-handle-number");
    const stageHandleTitle = document.querySelector("#archive-stage-handle-title");
    const loadedArchiveSources = new Set([image?.getAttribute("src")]);
    const versionNumber = document.querySelector("#archive-version-number");
    const era = document.querySelector("#archive-version-era");
    const title = document.querySelector("#archive-version-title");
    const description = document.querySelector("#archive-version-desc");
    const currentCount = document.querySelector("#archive-current-count");
    const stageCount = document.querySelector("#archive-stage-count");
    const stageRange = document.querySelector("#archive-stage-range");
    const stageTitle = document.querySelector("#archive-stage-title");
    const stageDescription = document.querySelector("#archive-stage-desc");
    const stageWatermark = document.querySelector("#archive-stage-watermark");
    const versionButtons = [...document.querySelectorAll("[data-archive-index]")];
    const versionStrip = document.querySelector(".archive-version-strip");
    const stageButtons = [...document.querySelectorAll("[data-archive-stage]")];

    const stopArchiveRotation = () => {
      window.clearTimeout(archiveRotationTimer);
      archiveRotationTimer = 0;
    };

    const scheduleArchiveRotation = () => {
      stopArchiveRotation();
      if (document.hidden) return;
      archiveRotationTimer = window.setTimeout(() => showArchiveVersion(archiveIndex + 1), 4000);
    };

    const showArchiveVersion = (nextIndex) => {
      const currentStage = cityEras[archiveStageIndex];
      const targetIndex = nextIndex < currentStage.start ? currentStage.end : nextIndex > currentStage.end ? currentStage.start : nextIndex;
      const targetStageIndex = archiveStageIndex;
      const requestId = ++archiveRequestId;
      archiveIndex = targetIndex;
      const version = cityVersions[targetIndex];
      const displayNumber = String(targetIndex + 1).padStart(2, "0");
      const nextSource = `assets/archive/versions/zezhou-version-${displayNumber}.webp`;
      image.classList.add("changing");
      const commitVersion = () => {
        if (requestId !== archiveRequestId || targetStageIndex !== archiveStageIndex) return;
        image.src = nextSource;
        image.alt = `泽州市城市版本${displayNumber}：${version.title}`;
        versionNumber.textContent = `VERSION ${displayNumber}`;
        era.textContent = `${version.era} · ${version.date}`;
        title.textContent = version.title;
        description.textContent = version.desc;
        currentCount.textContent = String(targetIndex - currentStage.start + 1).padStart(2, "0");
        versionButtons.forEach((button, index) => {
          const active = index === targetIndex;
          button.classList.toggle("active", active);
          button.setAttribute("aria-pressed", String(active));
        });
        const activeVersionButton = versionButtons[targetIndex];
        if (activeVersionButton) {
          versionStrip.scrollTo({
            left: activeVersionButton.offsetLeft - (versionStrip.clientWidth - activeVersionButton.offsetWidth) / 2,
            behavior: "smooth"
          });
        }
        window.requestAnimationFrame(() => image.classList.remove("changing"));
        scheduleArchiveRotation();
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const shouldPreload = !connection?.saveData && !["slow-2g", "2g"].includes(connection?.effectiveType);
        if (shouldPreload && targetIndex < currentStage.end) {
          const preloadSource = `assets/archive/versions/zezhou-version-${String(targetIndex + 2).padStart(2, "0")}.webp`;
          const preload = new Image();
          preload.decoding = "async";
          preload.onload = () => loadedArchiveSources.add(preloadSource);
          preload.src = preloadSource;
        }
      };
      if (loadedArchiveSources.has(nextSource)) {
        commitVersion();
      } else {
        const loader = new Image();
        loader.decoding = "async";
        loader.onload = () => {
          loadedArchiveSources.add(nextSource);
          commitVersion();
        };
        loader.onerror = () => {
          if (requestId === archiveRequestId) {
            image.classList.remove("changing");
            scheduleArchiveRotation();
          }
        };
        loader.src = nextSource;
      }
    };

    const showArchiveStage = (nextStageIndex) => {
      archiveStageIndex = nextStageIndex;
      const nextStage = cityEras[archiveStageIndex];
      stageButtons.forEach((button, index) => {
        const active = index === archiveStageIndex;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      versionButtons.forEach((button) => {
        button.hidden = Number(button.dataset.archiveEra) !== archiveStageIndex;
      });
      stageRange.textContent = `当前阶段 / VERSION ${nextStage.range}`;
      stageTitle.textContent = nextStage.title;
      stageDescription.textContent = nextStage.desc;
      stageWatermark.textContent = String(archiveStageIndex + 1).padStart(2, "0");
      stageHandleNumber.textContent = String(archiveStageIndex + 1).padStart(2, "0");
      stageHandleTitle.textContent = nextStage.title;
      stageCount.textContent = String(nextStage.end - nextStage.start + 1).padStart(2, "0");
      showArchiveVersion(nextStage.start);
      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: window.scrollY + viewer.getBoundingClientRect().top - 12,
          behavior: "smooth"
        });
      });
    };

    versionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        stopArchiveRotation();
        showArchiveVersion(Number(button.dataset.archiveIndex));
      });
    });
    const closeStageOverlay = () => {
      stageOverlay.classList.remove("open");
      stageHandle.setAttribute("aria-expanded", "false");
      stageHandle.querySelector("em").textContent = "展开";
    };
    stageButtons.forEach((button) => {
      button.addEventListener("click", () => {
        showArchiveStage(Number(button.dataset.archiveStage));
        closeStageOverlay();
      });
    });
    document.querySelectorAll("[data-archive-step]").forEach((button) => {
      button.addEventListener("click", () => {
        stopArchiveRotation();
        showArchiveVersion(archiveIndex + Number(button.dataset.archiveStep));
      });
    });
    stageHandle.addEventListener("click", () => {
      const isOpen = stageOverlay.classList.toggle("open");
      stageHandle.setAttribute("aria-expanded", String(isOpen));
      stageHandle.querySelector("em").textContent = isOpen ? "收起" : "展开";
    });
    stageOverlay.addEventListener("mouseleave", () => {
      closeStageOverlay();
      if (stageOverlay.contains(document.activeElement)) document.activeElement.blur();
    });
    document.addEventListener("visibilitychange", scheduleArchiveRotation);
    scheduleArchiveRotation();
  }
  if (slug === "home") scheduleDeferredHomeMedia();
  if (!isSecondarySwitch) window.scrollTo(0, 0);
  currentPrimaryIndex = targetPrimaryIndex;
  currentSecondaryIndex = targetSecondaryIndex;

  if (isSecondarySwitch) {
    const nextDrawer = app.querySelector(".section-drawer");
    if (nextDrawer && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const drawerEnter = nextDrawer.animate([
        { opacity: 0, transform: `translateX(${secondaryDirection > 0 ? 90 : -90}px)` },
        { opacity: 1, transform: "translateX(0)" }
      ], {
        duration: 460,
        easing: "cubic-bezier(.2,.78,.2,1)"
      });
      try {
        await drawerEnter.finished;
      } catch {
        // A newer navigation replaced this one.
      }
    }
    if (version === renderVersion) {
      window.scrollTo(0, preservedScrollY);
      document.body.classList.remove("switching-secondary");
      document.documentElement.classList.remove("switching-secondary");
    }
  } else if (shouldTransition) {
    await animateView([
      { opacity: 0, transform: `translateX(${direction > 0 ? 64 : -64}px)` },
      { opacity: 1, transform: "translateX(0)" }
    ], 620);
    if (version === renderVersion) document.body.classList.remove("view-transitioning");
  }
}

window.addEventListener("hashchange", render);
render();
