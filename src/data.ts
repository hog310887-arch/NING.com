import { Project, ExperienceItem, SkillGroup } from './types';

export const TRANSLATIONS = {
  en: {
    navHome: 'INDEX',
    navWorks: 'PROJECTS',
    navAbout: 'ABOUT',
    navContact: 'CONTACT',
    
    heroTitle: 'DESIGNING SYSTEMIC CURIOSITY',
    heroSub: 'KANGNING SUN PERSONAL WEBSITE',
    heroStatus: 'STATUS: ACTIVE INQUIRY',
    heroLocation: 'LOC: NANJING / SUZHOU / SHANGHAI / ZHEJIANG / XUZHOU',
    heroTime: 'SYS_TIME: ',
    heroRole: 'COGNITIVE DESIGN FOR DIGITAL HUMANITY',
    
    filterAll: 'ALL WORK',
    filterUiUx: '3D DYNAMIC DESIGN',
    filterBrand: 'AE EFFECTS VIDEOS',
    filterMotion: 'SHORT VIDEO ADS',
    filterCode: 'DYNAMIC POSTERS',
    
    projectYear: 'YEAR',
    projectClient: 'CLIENT',
    projectRole: 'ROLE',
    projectDuration: 'DURATION',
    projectMetrics: 'IMPACT',
    projectOverview: 'OVERVIEW',
    projectChallenge: 'THE CHALLENGE',
    projectSolution: 'THE ARCHITECTURAL SOLUTION',
    viewProject: 'INSPECT PROTO_TYPE',
    closeDetail: 'BACK',
    exploreMore: 'EXPLORE ARCHIVE',

    aboutTitle: 'DECODING COGNITION / ENCODING FORM',
    aboutBio1: 'I operate at the friction point between radical minimalism and complex engineering logic. As a designer-technologist, I believe the best interfaces are invisible infrastructures: silent, precise, and completely natural to human perception.',
    aboutBio2: 'With over 8 years of practice spanning Tokyo, SFO, and digital-ether space, I custom-craft interaction systems, geometric brands, and sensory code. My objective is simple: reduce friction to absolute zero while magnifying the visceral joy of digital interaction.',
    
    expTitle: 'COMMERCIAL PROGRESSION',
    skillsTitle: 'TACTICAL MATRIX',
    
    contactTitle: 'COMMENCE SYNCHRONIZATION',
    contactSub: 'Interested in exploring high-fidelity product design, parametric design systems, or direct consultations? Dispatch a message or synchronize via direct channels.',
    formName: 'IDENTIFICATION (NAME)',
    formEmail: 'COMMUNICATION INTERFACE (EMAIL)',
    formSubject: 'TOPIC CATEGORY',
    formSubjectPlaceholder: 'Select integration type...',
    formMessage: 'PROJECT CONTEXT (MESSAGE)',
    formSubmit: 'DISPATCH TRANSMISSION',
    formSending: 'ROUTING DATA...',
    formSuccess: 'TRANSMISSION RECEIVED. WE WILL RESPOND SHORTLI.',
    formError: 'INTEGRITY CHECK FAILED. RESUBMIT INQUIRY.',
    
    footerCopyright: '© 2026 INTERNAL REGISTER. ALL SYNAPSES SECURED.',
    footerMeta: 'DESIGNED UNDER SWISS DESIGN SPECIFICS / CODE AS FORM',
    copyEmail: 'COPY CH_EMAIL',
    emailCopied: 'COPIED TO NEURONS!',
  },
  zh: {
    navHome: '首页索引',
    navWorks: '设计项目',
    navAbout: '关于自我',
    navContact: '联系同步',
    
    heroTitle: '设计系统性好奇心',
    heroSub: '孙康宁个人网站',
    heroStatus: '当前状态：接受全新预约',
    heroLocation: '地理坐标：南京/苏州/上海/浙江/徐州',
    heroTime: '系统时间：',
    heroRole: '面向数字生命的人性化设计',
    
    filterAll: '全部项目',
    filterUiUx: '3D动态设计',
    filterBrand: 'AE特效视频制作',
    filterMotion: '短视频广告',
    filterCode: '动态海报',
    
    projectYear: '年度',
    projectClient: '委托客户',
    projectRole: '项目角色',
    projectDuration: '研发周期',
    projectMetrics: '衡量指标',
    projectOverview: '项目概述',
    projectChallenge: '核心挑战',
    projectSolution: '系统性解决方案',
    viewProject: '解析原型',
    closeDetail: '返回',
    exploreMore: '浏览归档纪录',

    aboutTitle: '破译认知 / 编码形体',
    aboutBio1: '我致力于在极致极简主义与复杂工程逻辑之间寻求摩擦力。作为一名设计师兼技术专家，我相信最顶级的界面是无形的底层基建：静默、精确、且完美融入人类感知器官。',
    aboutBio2: '在东京、旧金山和数字虚拟空间积累了8年以上的商业实践，我定制开发交互算法、几何美学品牌与重感官代码。我的目的极其纯粹：将认知阻力降为绝对零度，并成倍放大数字交互的最本质快感。',
    
    expTitle: '商业进化轨迹',
    skillsTitle: '核心技能矩阵',
    
    contactTitle: '启动底层数据同步',
    contactSub: '对高保真产品原型、参数化设计系统或高级设计咨询感兴趣？在此发送传输请求，或通过下方直接通道取得联络。',
    formName: '身份标识（您的姓名）',
    formEmail: '通信接口（电子邮箱）',
    formSubject: '主题类目',
    formSubjectPlaceholder: '请选择对接类型...',
    formMessage: '项目上下文（详细信息）',
    formSubmit: '发送信息数据包',
    formSending: '正在路由传输...',
    formSuccess: '数据传输成功，系统将在近期给您回复。',
    formError: '完整性校验失败，请尝试重新提报。',
    
    footerCopyright: '© 2026 内部存盘。保留一切数字衍生权。',
    footerMeta: '依据瑞士版面系统规范构建 / 代码即形体',
    copyEmail: '拷贝邮箱地址',
    emailCopied: '已成功拷贝至剪贴板！',
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'chronos',
    title: {
      en: 'Chronos Quantum OS Prototype',
      zh: 'Chronos 量子系统用户界面原型',
    },
    category: 'uiux',
    tag: { en: 'OS Design & Spatial UI', zh: '系统设计与空间计算' },
    year: '2026',
    client: 'Chronos Lab Inc.',
    imageUrl: '/src/assets/images/regenerated_image_1780590527988.png',
    overview: {
      en: 'A zero-loading, hyper-spatial desktop interface designed for upcoming quantum computing terminals, integrating multi-dimensional data visualization canvases and real-time process control maps.',
      zh: '专为下一代量子计算终端设计的零耗时、高空间感桌面人机交互界面，深度整合多维数据可视化画布与实时计算进程管控地图。',
    },
    details: {
      challenge: {
        en: 'Translating atomic and superposition state calculations into visual controllers that can be logically understood and manipulated by human engineers without infinite mental load.',
        zh: '需要将微观量子纠缠、叠加态计算等高维物理模型，映射为人类工程学家能在常数时间内认知并精细操作的图形控制器。',
      },
      solution: {
        en: 'Developed a polar-grid design system based on gravitational orbit visual paths, applying adaptive opacity scales and real-time physics simulators to visualize asynchronous calculation streams.',
        zh: '构建了基于重力轨道模拟的极坐标视觉定位系统，通过自适应不透明度层级与内置物理引擎，将异步量子计算流渲染为交互式引力透镜组件。',
      },
      duration: '6 Months',
      role: { en: 'Lead Interaction & Systems Designer', zh: '首席交互与系统架构设计师' },
      metrics: { en: 'LTM Cognition Overhead Reduced by 42%', zh: '降低用户长期心理负载 42%' },
    },
  },
  {
    id: 'aeon-branding',
    title: {
      en: 'Aeon Labs Parametric Systems',
      zh: 'Aeon Labs 极简参数化视觉识别系统',
    },
    category: 'brand',
    tag: { en: 'Generative Visual Identity', zh: '生成式品牌视觉体系' },
    year: '2025',
    client: 'Aeon Labs Corp.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    overview: {
      en: 'A fully responsive fluid branding system generated entirely via SVG equations. Algorithms mutate the logo shape based on server queries per second, reflecting the brand\'s digital metabolism.',
      zh: '一套由SVG方程实时编译、完全具备响应式流体特征的品牌识别系统。标志图形随每秒服务器请求吞吐量的改变而动态裂变，真实映射企业的数据新陈代谢。',
    },
    details: {
      challenge: {
        en: 'Breaking the traditional rules of a strictly static design guidelines manual and crafting visual indicators that remain instantly recognizable yet perfectly fluid across physical and digital prints.',
        zh: '挑战传统的、非黑即白的静态VI手册，解决如何在极高波动性的实时裂变状态下，依然保留品牌核心的几何锚点与印刷辨识精度。',
      },
      solution: {
        en: 'Anchored 3 dynamic nodes inside a pristine golden ratio grid. Built a typescript renderer that guarantees logo output always satisfies the dual criteria of convex hull geometry and aesthetic minimalist rules.',
        zh: '在严苛的黄金比例网格中定义 3 个动态节点，通过 TypeScript 编写的边界判定逻辑，确保生成的任意徽标形状绝对符合凸包几何算法和瑞士极简美学。',
      },
      duration: '4 Months',
      role: { en: 'Generative Brand Architect', zh: '生成式品牌架构师' },
      metrics: { en: '100% Algorithmic Layout Synthesis', zh: '100% 算法自主式版面合成' },
    },
  },
  {
    id: 'aphelion-visual',
    title: {
      en: 'Aphelion 3D Spatial Audio Station',
      zh: 'Aphelion 3D 空间立体音频调度台',
    },
    category: 'motion',
    tag: { en: 'Geometric 3D Rendering', zh: '几何三维材质与动态合成' },
    year: '2025',
    client: 'Aphelion Sound Technologies',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    overview: {
      en: 'An interactive virtual synthesizer workspace designed to map structural coordinates of physical soundwaves in ultra-minimal dark mode settings.',
      zh: '专为高维音频合成定制的立体虚拟调度台。利用极简黑色哑光材质、配合精细高斯模糊，在三维坐标轴上对声波在现实建筑内的反射路径进行解构重组。',
    },
    details: {
      challenge: {
        en: 'Making complex audio engineering workflows visible and interactive inside WebGL with zero frame lag, keeping aesthetic styling clean and sterile.',
        zh: '如何在保证极度宁静、冷峻的设计语言前提下，将错综复杂的音频算法在画布上进行高帧率、低延迟的直观渲染和动态操控。',
      },
      solution: {
        en: 'Utilized raymarching techniques combined with skeletal vertex motion vectors. We created an interactable 3D black monolith mesh hovering above an invisible audio controller grid.',
        zh: '综合运用光线步进算法与骨骼顶点波动向量，在画布核心创造了一座受音乐频率支配的悬浮黑色暗晶方碑，构建了一种仪式感极强的控制载体。',
      },
      duration: '5 Months',
      role: { en: '3D Sculptor & Audio Interaction Designer', zh: '3D 美学塑造与空间音频交互设计师' },
      metrics: { en: '60 FPS Parametric Matrix Rendering', zh: '流畅达到 60帧/秒 的极限粒子计算' },
    },
  },
  {
    id: 'zenith-hologram',
    title: {
      en: 'Zenith Volumetric Holographic UI',
      zh: 'Zenith 真实全息悬浮折射控制台',
    },
    category: 'uiux',
    tag: { en: 'Holographic & Spatial UX', zh: '全息光折射系统设计' },
    year: '2026',
    client: 'Zenith Space Instruments',
    imageUrl: '/src/assets/images/regenerated_image_1780590393689.png',
    overview: {
      en: 'An ultra-fine projection-based volumetric navigation dash featuring real-time light refraction simulations and tactile feedback fields for deep-space telemetry.',
      zh: '基于光流体微结构投影技术的小型化座舱仪表系统。通过动态光线折射模拟计算与浮动感知三维网格，实现全息图组的高保真多视角即时渲染。',
    },
    details: {
      challenge: {
        en: 'Overcoming optical aberration distortion in simulated curved lenses and displaying high-density text arrays that remain completely legible from oblique viewer angles.',
        zh: '需要克服虚拟曲面微透镜产生的光学色散畸变，并设计一套即使在倾斜侧视点视角下，依然享有极高阅读效率及对比度的高密度系统字符排版。',
      },
      solution: {
        en: 'Implemented dynamic perspective recalculations on the viewport. We combined anti-aliased subpixel shader filters with sterile font hierarchies to protect data integrity.',
        zh: '通过在着色器层面对各向同性视椎体进行逆向矩阵弯曲补偿，并采用超轻量无衬线等宽字体，保证了任意空间倾斜度下极高的可读性。',
      },
      duration: '5 Months',
      role: { en: 'Lead Spatial UX Architect', zh: '空间层交互系统设计师' },
      metrics: { en: 'Perfect Legibility at 85° Slant', zh: '在大倾角 85度 视切面下保持完美识读' },
    },
  },
  {
    id: 'nova-brand',
    title: {
      en: 'Nova Fluid Dynamic Brand Identity',
      zh: 'Nova 粒子流体态动态品牌识别系统',
    },
    category: 'brand',
    tag: { en: 'Fluid Dynamics & Kinetic Branding', zh: '流体动力学与动态影像系统' },
    year: '2026',
    client: 'Nova Tech Entertainment',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop',
    overview: {
      en: 'An algorithmic, generative promotional system built with AE expressions and particle simulators, producing ultra-fluid brand motion videos.',
      zh: '基于重力流体力学、超轻量粒子自相似渲染引擎的广告视频。利用高级运动表达式驱动，塑造具备 high-tech 奢华调性的流线型品牌感官影像。',
    },
    details: {
      challenge: {
        en: 'Converting heavy real-time physical simulation renders into modular dynamic patterns that look identical in ultra-high resolution video formats.',
        zh: '需要将庞大的物理级拟真粒子碰撞动画，重塑为高分辨率、轻度模块化的运动组件，以便能够在极短渲染周期内导出为广播级的商业推广影像。',
      },
      solution: {
        en: 'Engineered custom parametric motion templates. We mapped acceleration vectors directly to scale constraints, establishing perfect consistency across various dimensions.',
        zh: '在AE中构建了独特的非线性时间拉伸模型。将速度向量直接锚定于粒子拖尾长度与模糊半径，使重构视频兼顾力量感与优雅顺滑的动态。',
      },
      duration: '4 Months',
      role: { en: 'Lead Motion & Expression Developer', zh: '动态物理动效与高级渲染工程师' },
      metrics: { en: '100% Procedural Flow Animation', zh: '100% 过程式算法衍生流动质感' },
    },
  },
  {
    id: 'singularity-ads',
    title: {
      en: 'Singularity Spatial Audio promos',
      zh: 'Singularity 超立体粒子微广告视频',
    },
    category: 'motion',
    tag: { en: 'Cinematic Audio-Reactive Promos', zh: '短视频广告与音画联动' },
    year: '2025',
    client: 'Singularity Acoustics',
    imageUrl: 'https://images.unsplash.com/photo-1618005198143-d3667c4ee33c?q=80&w=1200&auto=format&fit=crop',
    overview: {
      en: 'A high-impact cinematic promotional short-form campaign featuring glass-shattering dynamics perfectly synchronized to tactile sub-bass design.',
      zh: '为高纯度声学硬件品牌定制的超高精度动态微视频。运用刚体碎裂力学与无光泽黑色哑光材质，将看不见的超重低音共振轨迹具象化为空间波动。',
    },
    details: {
      challenge: {
        en: 'Synchronizing micro-animations of chaotic material fracturing precisely on frame boundaries of short-form audio clips without manual manual keyframing.',
        zh: '对瞬态产生的千百个高维碎屑颗粒，在极短视频帧序内实现与声学波形瞬态能量极度吻合的精准驱动，消除大工业生产环境下的手工打帧延迟。',
      },
      solution: {
        en: 'Offloaded calculations to audio-amplitude drivers. We wrote an automated parser that scales velocity thresholds based on decibel peaks, guaranteeing pixel-perfect sync.',
        zh: '编写了高频声音振幅参数发生器，将音频分频后的瞬态响应直接作用于物理破碎场的约束强度和膨胀速度，实现了声画音准级别的绝对对齐。',
      },
      duration: '3 Months',
      role: { en: 'Systemic Motion Tech Artist', zh: '三维碎裂系统美术与动态程序员' },
      metrics: { en: 'Frame-Perfect Amplitude Auditing', zh: '分贝振幅与碰撞动画帧级无死角同步' },
    },
  },
  {
    id: 'prism-posters',
    title: {
      en: 'Prism Topological Kinetic Poster Series',
      zh: 'Prism 拓扑结构动力学极简动态海报',
    },
    category: 'code',
    tag: { en: 'Dynamic Vector Typography', zh: '动力学等宽排版海报' },
    year: '2025',
    client: 'Experimental Typography Biennale',
    imageUrl: 'https://images.unsplash.com/photo-1502239608882-93b729c6af43?q=80&w=1200&auto=format&fit=crop',
    overview: {
      en: 'A kinetic, interactive code-based poster collection representing modern typography as a living 3D elastic membrane reacting to user cursor and scroll velocity.',
      zh: '为先锋创意排版双年展定制的等宽文字动力学海报系列。基于弹性动力学，将字母排版处理为受滚动位移及光标引力拉扯的三维拓扑膜。',
    },
    details: {
      challenge: {
        en: 'Rendering elastic string typography calculations instantly on standard mobile browsers with no layout stutters or canvas clipping issues.',
        zh: '如何将复杂的空间拉网物理模拟，在算力受限的移动端浏览器中实现即时网格映射与排版，并使字符边界优雅舒展而不发生畸变遮挡。',
      },
      solution: {
        en: 'Leveraged optimized Euler physics approximations directly inside a lightweight canvas context, updating path nodes conditionally to save runtime energy.',
        zh: '采用轻量级的欧拉积分物理模型进行顶点流求解，通过仅刷新受光标及位移影响的关键网格节点，将冗余的微积分开销缩减至仅为原先的 8%。',
      },
      duration: '3 Months',
      role: { en: 'Code Artist & Layout Programmer', zh: '代码美学创作者与排版技术专家' },
      metrics: { en: '60fps Interaction on Low-spec Devices', zh: '在非旗舰移动端依旧完美跑满 60帧/' },
    },
  },
  {
    id: 'elysian-canvas',
    title: {
      en: 'Elysian Neo-Minimal Desktop Space',
      zh: 'Elysian 先锋立体空间计算虚拟桌面',
    },
    category: 'uiux',
    tag: { en: 'Spatial Computing Environment', zh: '超精细三维空间算法交互' },
    year: '2026',
    client: 'Elysian Future Reality',
    imageUrl: '/src/assets/images/regenerated_image_1780739720005.png',
    overview: {
      en: 'An immersive interactive spatial environment exploring multi-layered physics-driven depths, dynamic ambient occlusion, and sterile typography constraints.',
      zh: '以冷峻的高斯模糊磨砂和物理浮光反射为基底的三维虚拟桌面。通过微弱的自然阴影、精巧的距离层叠，对界面元素进行有秩序的高级感布局。',
    },
    details: {
      challenge: {
        en: 'Designing realistic subtle spatial shadows that adapt intelligently to window movements without introducing heavy GPU shaders.',
        zh: '如何在不堆砌高复杂片元着色器的普通渲染管线下，模拟出高拟真、能随窗口位置或悬浮高度即时漂移拉深的轻量空腔遮蔽阴影。',
      },
      solution: {
        en: 'Applied nested CSS multi-layered shadow offsets correlated with depth state vectors, resulting in a beautiful spatial layer hierarchy with low processor draw.',
        zh: '使用多层级、基于坐标关联变换的深度混合参数集。运用自适应位移公式对普通阴影做线性扩散折减，以最低资源开销呈现极佳的浮动光感。',
      },
      duration: '4 Months',
      role: { en: 'Principal Interaction Expert', zh: '空间沉浸设计师' },
      metrics: { en: 'Zero GPU Shader Overhead', zh: '实现物理级光感深度却省去 100% 重度着色器负荷' },
    },
  },
  {
    id: 'nebula-dynamics',
    title: {
      en: 'Nebula Generative Particle Field',
      zh: 'Nebula 三维星云粒子生成场',
    },
    category: 'uiux',
    tag: { en: '3D Simulation & GLSL Shaders', zh: '三维流体微观粒子交互' },
    year: '2026',
    client: 'Interstellar Art Lab',
    imageUrl: '/src/assets/images/regenerated_image_1780739726126.png',
    overview: {
      en: 'A high-fidelity dynamic particle playground mapping gravity attraction vectors in real-time, rendering beautiful recursive color fields inside an interactive space canvas.',
      zh: '模拟非线性力学与重力场演变的粒子系统。通过多级自适应向量场，把看不见的引力约束解析并动态渲染为高维度星团的膨胀破碎。',
    },
    details: {
      challenge: {
        en: 'Simulating over 100,000 active gravity-influenced particles smoothly on basic handheld viewports at 60fps without drain.',
        zh: '在运算资源高度受限的普通移动端上，以 60帧/秒 顺畅运行多达十万个具有独立引力计算的重力粒子，而避免过度发热或卡顿。',
      },
      solution: {
        en: 'Optimized standard vector maths into accelerated GLSL matrix operations, storing positions directly inside GPU textures to eliminate bottleneck CPU-to-GPU memory transfer cycles.',
        zh: '通过在 WebGL 着色器中使用浮点纹理直接保存粒子瞬时状态，剔除耗时的 CPU 数据交换通道，实现粒子自更新及物理拟真渲染全硬件加速。',
      },
      duration: '4 Months',
      role: { en: 'Principal Creative Technologist', zh: '首席创意技术工程师' },
      metrics: { en: '120k Particles at Solid 60FPS', zh: '支撑 12万 粒子于标准设备满帧率漫游' },
    },
  },
  {
    id: 'orion-spheres',
    title: {
      en: 'Orion Kinetic Glass Sculptures',
      zh: 'Orion 几何球体动力学互动装置',
    },
    category: 'uiux',
    tag: { en: 'Parametric Spatial Simulation', zh: '参数化实体三维建模与动力学' },
    year: '2025',
    client: 'Metropolitan Digital Museum',
    imageUrl: '/src/assets/images/regenerated_image_1780739729923.png',
    overview: {
      en: 'A gorgeous algorithmic spatial installation composing real-time refractive glass and moving mechanical structures responding to environmental depth variations.',
      zh: '由算法自主编排的三维拟物折射交互空间。使纯白磨砂与亮面玻璃物态在外力压迫或拖动下，呈现逼真的动能反弹、惯性滑动与漫反射表面张力。',
    },
    details: {
      challenge: {
        en: 'Generating photo-realistic glass refraction lighting curves on standard browser web canvas environments without complex path tracing tools.',
        zh: '不借助高级离线渲染器，在标准前端画布中快速拟合具有双重交叠透射与超广角反射特性的超写实流体玻璃材质表现。',
      },
      solution: {
        en: 'Synthesized normal-mapped depth formulas mimicking physical ray bends inside a lightweight custom fragment shader, producing crisp glass micro-textures for near-zero GPU cost.',
        zh: '自主编写了简易的空间法线菲涅尔弯曲拟合算法，并对背景层图样实施基于距离感知的二次高斯虚化，以超低能耗逼真还原本底折射率差。',
      },
      duration: '5 Months',
      role: { en: '3D Material & Vector Designer', zh: '3D 材质动能交互美术设计' },
      metrics: { en: 'Low-latency Depth Refraction', zh: '在零渲染延迟下精准复现双折射散射偏振' },
    },
  },
  {
    id: 'fractal-matrix',
    title: {
      en: 'Fractal Dimension Spatial Gateway',
      zh: 'Fractal 高维自相似空间分形格栅',
    },
    category: 'uiux',
    tag: { en: 'Algorithmic 3D Generative Math', zh: '生成式三维数学拓扑结构' },
    year: '2026',
    client: 'Dimension Shift Labs',
    imageUrl: '/src/assets/images/regenerated_image_1780739735044.png',
    overview: {
      en: 'A mathematical dimensional construct that mutates its internal fractal boundaries live as users interact with cursor displacement and viewport ratios.',
      zh: '基于复数域曼德勃罗/朱利亚分形公式的三维拓扑空间。利用视口边界与光标坐标，将高维自相似的几何晶体分立生长轨迹化呈现在平面之上。',
    },
    details: {
      challenge: {
        en: 'Managing deeply recursive math iteration cycles and canvas repaint buffers dynamically without freezing browser responsive loop callbacks.',
        zh: '如何在极限位移拉伸与频繁重绘中，防止由于数学级数递归深度突增导致的计算阻塞，维护整站的顺滑弹性微动效。',
      },
      solution: {
        en: 'Implemented lazy dynamic resolution pooling combined with interval-spaced computation batches, rendering critical geometric grids as dynamic cached SVGs.',
        zh: '设计了渐进式分辨率降噪算法，在用户快速交互时自适应降低边角阶数，在静止时渐次填补高维网格细节，成功平衡质感与敏捷交互。',
      },
      duration: '3 Months',
      role: { en: 'Generative Dimension Programmer', zh: '自相似算法与分形数学技术指导' },
      metrics: { en: '100% Procedural Grid Growth', zh: '100% 由纯粹数学代数公式演算迭代' },
    },
  },
  {
    id: 'vortex-code',
    title: {
      en: 'Vortex Parametric Design Tool',
      zh: 'Vortex 参数化无代码页面渲染编译器',
    },
    category: 'code',
    tag: { en: 'TypeScript Compiler & Engine', zh: 'TypeScript 高性能编译渲染引擎' },
    year: '2026',
    client: 'Self-Initiated Prototype',
    imageUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1200&auto=format&fit=crop',
    overview: {
      en: 'A high-performance creative tool that parses architectural coordinates and automatically synthesizes clean SVG assets, utilizing dynamic tree schemas and math equations.',
      zh: '高能创意生产力工具，通过极小占用空间的数学公式算力，将用户的骨架画笔实时编译生成极具工业机械质感的矢量工程制图。',
    },
    details: {
      challenge: {
        en: 'Managing heavy recursive matrix recalculations on high pixel density screens (retina) without degrading user interaction frame rates below 60fps.',
        zh: '解决在高像素密度的视网膜屏上，对成千上万个嵌套矩阵进行高频递归级联计算时，所面临的严重卡顿和主线程阻塞瓶颈。',
      },
      solution: {
        en: 'Offloaded intensive trigonometry matrix mutations to coordinate worker threads. Leveraged offscreen HTML Canvas contexts and dynamic batching techniques to achieve instant paint cycles.',
        zh: '将复杂的傅里叶三角级数及几何迭代矩阵运算，全部卸载到多线程的 Worker 中进行，并通过离屏画布与包批渲染，达成极致的原生级流畅交互。',
      },
      duration: '3 Months',
      role: { en: 'Creative Coder & Compiler Engineer', zh: '创意程序员 & 编译引擎开发者' },
      metrics: { en: 'Instant compilation < 2ms', zh: '交互计算延迟控制在 2毫秒 内' },
    },
  },
  {
    id: 'chronicle-code',
    title: {
      en: 'Chronicle Kinetic Letterpress Poster',
      zh: 'Chronicle 活字印刷动力学动态海报',
    },
    category: 'code',
    tag: { en: 'Fluid Typographic Grid', zh: '动态流体网格活字排版' },
    year: '2026',
    client: 'Tokyo Typography Club',
    imageUrl: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1200&auto=format&fit=crop',
    overview: {
      en: 'An interactive, responsive digital typography installation simulating classic cold metal letterpress typesetting dynamically shifting under simulated gravitational waves.',
      zh: '模拟传统金属活字印刷排版的数字化动力学交互海报。字母与汉字结构在模拟引力波振幅中自由压缩、延展，实现古典非线性美学。',
    },
    details: {
      challenge: {
        en: 'Simulating complex font-weight blending and physical metal collision models in standard web layouts with no layout micro-shudders.',
        zh: '在标准网页排版布局下，模拟极具质感的字重无缝淡过渡以及字粒之间的物理刚体碰撞模型，且不能产生任何微小撕裂。',
      },
      solution: {
        en: 'Crafted custom SVG-path font generators and resolved dynamic spacing calculations using standard CSS variable interpolation mapped to responsive viewports.',
        zh: '采用纯矢量 SVG 路径自定义字体描述符，通过计算各字粒包围盒并插值映射 to CSS 变量，免去重量级布局计算开销，展现完美流动感。',
      },
      duration: '3 Months',
      role: { en: 'Creative Tech Lead', zh: '创意技术负责人' },
      metrics: { en: 'Sub-millisecond typography redraw', zh: '字形高频重绘延迟低于 1 毫秒' },
    },
  },
  {
    id: 'matrix-code',
    title: {
      en: 'Matrix Topological Numeric Poster',
      zh: 'Matrix 拓扑数位动力学海报',
    },
    category: 'code',
    tag: { en: 'Vector Math Topology', zh: '矢量数学等高拓扑排版' },
    year: '2025',
    client: 'Swiss Avant-Garde Association',
    imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1200&auto=format&fit=crop',
    overview: {
      en: 'A generative vector poster executing mathematical matrices to construct real-time topological curves on responsive grid structures.',
      zh: '依据流体力学张量矩阵实时变换的算法海报系统。将网格数理坐标转化成随呼吸律动作曲线起伏的拓扑等高数字线簇。',
    },
    details: {
      challenge: {
        en: 'Preserving extremely crisp, non-blurry line density outputs across different mobile screen DPR parameters with close loop coordinate safety.',
        zh: '在各种高像素密度的屏幕上，保持复杂矢量线条处于不发虚、完全致密的线条质感，同时规避无限累增导致数据溢出崩溃。',
      },
      solution: {
        en: 'Implemented offscreen canvas buffering with custom devicePixelRatio coordinates clamping rules for real-time SVG rendering path optimization.',
        zh: '基于离屏 Canvas 缓冲区建立起高动态 DPR 自适应公式，动态剪裁超出视界外的拓扑坐标，确保在 4K 级别画幅下依旧字迹锋利。',
      },
      duration: '4 Months',
      role: { en: 'Topological Developer', zh: '拓扑算法表现设计师' },
      metrics: { en: 'Uncompromising 4K Sharpness', zh: '在视网膜屏上展现完美的像素精度' },
    },
  },
  {
    id: 'orbit-code',
    title: {
      en: 'Orbit Gravitational Typographic Poster',
      zh: 'Orbit 空间引力轨迹字效海报',
    },
    category: 'code',
    tag: { en: 'Gravitational Vector Physics', zh: '引力轨道矢量排版艺术' },
    year: '2026',
    client: 'Zurich Design Biennale',
    imageUrl: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200&auto=format&fit=crop',
    overview: {
      en: 'A systemic kinetic composition where typographic particles revolve dynamically around user coordinates, illustrating orbital decay.',
      zh: '极富美学秩序的空间轨道理化海报。排版粒子受用户鼠标及触屏焦点的引力拉涉，偏航掠过并形成优雅的螺旋形扩散微弱光轨。',
    },
    details: {
      challenge: {
        en: 'Translating gravitational orbit formulas dynamically into fluid vector transformations on canvas borders without high system resources footprint.',
        zh: '如何在完全不开启 GPU WebGL 加速的传统网页 Canvas 环境下，计算上千个自主微粒的引力偏差并实现极低功耗的长效巡航。',
      },
      solution: {
        en: 'Utilized simple Euler integration approximations and implemented viewport batch pruning loops, saving over 90% of recursive computation steps.',
        zh: '极地简化牛顿力学经典常数公式，引入近似的欧拉步进算法配合多重视口局部裁剪剔除规则，节省主线程循环 90% 的冗余微积分开销。',
      },
      duration: '3 Months',
      role: { en: 'Algorithmic Visual Artist', zh: '算法视觉艺术家' },
      metrics: { en: 'Zero processor stutter on mobile', zh: '移动端极限省电运行且无丝毫帧抖动' },
    },
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp1',
    period: '2024 - PRESENT',
    company: 'SENSORY INTELLIGENCE STUDIO',
    role: { en: 'Principal Interaction Designer', zh: '首席交互设计专家' },
    description: {
      en: 'Standardizing spatial UX layouts, algorithmic brand systems, and zero-gravity user interfaces for hyper-growth robotics and quantum terminals.',
      zh: '为主流智能机器人终端、前沿量子计算显示组件以及无重力机体空间定制界面指南与极度前瞻的动态响应系统。',
    },
  },
  {
    id: 'exp2',
    period: '2022 - 2024',
    company: 'BLACK DOT COMPUTING (TOKYO)',
    role: { en: 'Senior Creative Technologist', zh: '资深创意技术专家' },
    description: {
      en: 'Led the research and implementation of minimalist design languages, converting heavy structural architectural blueprints into highly usable CAD dashboards.',
      zh: '带领核心团队重组并制定极致中性的暗系工业系统，将沉重、晦涩的工业工程测绘图转化为流畅易用、具备极高审美的高级仪表台。',
    },
  },
  {
    id: 'exp3',
    period: '2019 - 2022',
    company: 'NEUTRAL SPACE DESIGN AGENCY',
    role: { en: 'Digital Product Designer', zh: '数字视感设计师' },
    description: {
      en: 'Crafted ultrahigh-end web architectures, conceptual portfolios, and e-commerce spaces with strong emphasis on typography, white-space, and CSS shaders.',
      zh: '为多个国际殿堂级设计厂牌、高档独立时装屋和先锋画廊定制高精度的排版页面，深耕超高留白、黄金配比排版与复杂的底层微交互特效。',
    },
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: { en: 'CREATIVE DIRECTION', zh: '创意与交互指引' },
    skills: ['Interaction Design', 'Dynamic Systems', 'Typography Engineering', '3D Visual Semantics', 'Systemic Minimalism']
  },
  {
    category: { en: 'TACTICAL CODE STACK', zh: '代码工程工具链' },
    skills: ['TypeScript / TSX', 'GLSL Shaders', 'Parametric SVGs', 'Offscreen Canvas SDKs', 'Motion React Engines']
  },
  {
    category: { en: 'ARCHITECTURAL SUITES', zh: '研发生态软件' },
    skills: ['Figma Parametrics', 'Blender / Shading Nodes', 'Adobe Typo Lab', 'VS Code Studio', 'CAD Blueprinting']
  }
];
