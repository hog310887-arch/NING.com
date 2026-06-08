import { Project, ExperienceItem, SkillGroup } from './types';

import projectImg1 from './assets/images/regenerated_image_1780590527988.png';
import projectImg2 from './assets/images/regenerated_image_1780590393689.png';
import projectImg3 from './assets/images/regenerated_image_1780739720005.png';
import projectImg4 from './assets/images/regenerated_image_1780739729923.png';
import projectImg5 from './assets/images/regenerated_image_1780739735044.png';
import wechatImg678 from './assets/images/WechatIMG678.jpg';
import orbitCodeImg from './assets/images/regenerated_image_1780905481035.jpg';
import vortexCodeImg from './assets/images/regenerated_image_1780905585569.jpg';
import chronicleCodeImg from './assets/images/regenerated_image_1780905663697.jpg';
import matrixCodeImg from './assets/images/regenerated_image_1780905745231.jpg';
import novaBrandImg from './assets/images/regenerated_image_1780905897213.png';
import aeonBrandingImg from './assets/images/regenerated_image_1780905992686.png';
import aphelionVisualImg from './assets/images/regenerated_image_1780906098426.png';

export const TRANSLATIONS = {
  en: {
    navHome: 'INDEX',
    navWorks: 'PROJECTS',
    navAbout: 'ABOUT',
    navContact: 'CONTACT',
    
    heroTitle: 'DESIGNING SYSTEMIC CURIOSITY',
    heroSub: 'KANGNING SUN PERSONAL WEBSITE',
    heroStatus: 'STATUS: FRESH GRADUATE',
    heroLocation: 'INTENDED: NANJING / SUZHOU / SHANGHAI / HANGZHOU / NINGBO / XUZHOU',
    heroTime: 'SYS_TIME: ',
    heroRole: 'KANGNING SUN',
    
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

    aboutTitle: 'LIMITLESS CREATIVITY / PROACTIVE DISPOSITION',
    aboutBio1: 'I am a recent graduate in Digital Media Art Design. As a young creator passionate about design, I am always curious about new things and eager to express my creativity and ideas through visual design.',
    aboutBio2: 'During my studies, I systematically learned professional courses such as visual design, motion poster design, brand design, and new media visuals. I am proficient in design software like Photoshop, Illustrator, and After Effects, and can independently complete creative planning, visual design, and outputs. In my spare time, I have also self-taught various AI image/video generation tools such as OpenAI, Midjourney, Gemini AI Studio, Jimeng, and Keling, which can be flexibly applied to work. My graduation project focused on wasteland-style dynamic poster design, which continuously honed my design thinking, aesthetic sense, and execution capabilities.',
    aboutBio3: 'In life, I am outgoing, positive, and optimistic. I enjoy communicating with others and relish the collision of inspiration brought by teamwork. Facing new tasks and challenges, I am proactive in learning and courageous in trying to break out of comfort zones. I believe design is not only visual expression but also a medium of communication, and I hope to inject fresh energy into every project with my youthful perspective, rich creativity, and dedicated attitude.',
    aboutBio4: 'Although I am a newcomer to the professional world, I am full of passion for design and look forward to continuous growth in my future career, aspiring to become a designer with both creativity and high execution capabilities.',
    
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
    heroStatus: '当前状态：应届生',
    heroLocation: '意向城市：南京、苏州、上海、杭州、宁波、徐州（江浙沪）',
    heroTime: '系统时间：',
    heroRole: '孙康宁',
    
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

    aboutTitle: '创意无限、积极进取',
    aboutBio1: '我是一名数字媒体艺术设计专业应届毕业生。作为一名热爱设计的年轻创作者，我始终对新鲜事物保持好奇心，也乐于把自己的创意和想法通过视觉设计表达出来。',
    aboutBio2: '在校期间，我系统学习了视觉设计、动态海报设计、品牌设计、新媒体视觉等专业课程，熟练掌握Photoshop、Illustrator、After Effects等设计软件，能够独立完成创意策划、视觉设计与作品输出。在空闲时间，我也自学了很多ai图像/视频生成软件，比如open AI、midjourney、gemini ai stuido、即梦、可灵等。可以灵活运用于工作。毕业设计聚焦于废土风格动态海报设计，在项目实践中不断提升了自己的设计思维、审美能力和执行能力。',
    aboutBio3: '生活中的我性格开朗、积极乐观，喜欢与人交流，也享受团队协作带来的灵感碰撞。面对新的任务和挑战，我愿意主动学习、勇于尝试，不断突破自己的舒适圈。我相信设计不仅是视觉表达，更是一种沟通方式，而我希望用年轻的视角、丰富的创意和认真的态度，为每一个项目注入新的活力。',
    aboutBio4: '虽然我是一名职场新人，但我对设计充满热情，也期待在未来的工作中不断成长，成为一名兼具创意与执行力的设计师。',
    
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
      en: 'Spiny Garden',
      zh: '刺骨花园',
    },
    category: 'uiux',
    tag: { en: '3D Motion Design', zh: '3D动态设计' },
    year: '2026',
    client: 'Chronos Lab Inc.',
    imageUrl: projectImg1,
    videoUrl: 'https://videotourl.com/videos/1780758599466-ed5e9bfa-3df8-4a0e-a606-ba28165a8d54.mp4',
    overview: {
      en: "Presents a futuristic and surreal 'Cyber Nature' style, cleverly blending icy, crystal-clear textures with organic plant growth animations to spark a quiet, dreamlike visual experience.",
      zh: '呈现了一种未来感与超现实色彩的“赛博自然”风格，巧妙地运用冰冷剔透的水晶材质与有机的植物生长动画，碰撞出一种静谧且梦幻的视觉体验。',
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
      en: 'Innocence: Out of Control Frame Rate',
      zh: '童真·帧频失控',
    },
    category: 'brand',
    tag: { en: 'AE Effects Video', zh: 'ae特效视频' },
    year: '2026',
    client: 'Aeon Labs Corp.',
    imageUrl: aeonBrandingImg,
    videoUrl: 'https://videotourl.com/videos/1780812829435-719b0088-f6bf-443d-bb8a-7271b86cf7a7.mp4',
    overview: {
      en: 'Using aggressive time remapping, ghosting, and frame-dropping/tearing of 3D cartoon assets in AE, a concrete animation is deconstructed into a grotesque, pulsating, and visually striking dynamic video sequence.',
      zh: '通过在AE中对3D卡通素材进行暴力的时间重映射、残影与抽帧撕裂处理，将具体的动画解构为一个怪诞、舞动且富于视觉冲击力的动态影像。',
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
      en: 'Little Witch Vegetarian Tripe Ad Video',
      zh: '小魔女素毛肚广告拍摄',
    },
    category: 'motion',
    tag: { en: 'Short Video Ads', zh: '短视频广告' },
    year: '2026',
    client: 'Aphelion Sound Technologies',
    imageUrl: aphelionVisualImg,
    videoUrl: 'https://videotourl.com/videos/1780812605728-421a55c4-6539-4dc4-bed1-3e5a66b58a0d.mp4',
    overview: {
      en: 'Responsible for photography, editing, color grading, packaging, and post-production.',
      zh: '负责摄影，剪辑，调色，包装，后期等',
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
      en: 'Spiny Blossoms',
      zh: '刺骨生花',
    },
    category: 'uiux',
    tag: { en: '3D Motion Design', zh: '3D动态设计' },
    year: '2026',
    client: 'Zenith Space Instruments',
    imageUrl: projectImg2,
    videoUrl: 'https://videotourl.com/videos/1780762194484-e0bc8959-5b74-410f-9d5c-a3a7abdc7e30.mp4',
    overview: {
      en: 'The video presents an ultimate wasteland aesthetic, using cracked scorched earth, bone-like mutated plants, and mottled rusted typography to create a desolate, ruined yet struggling end-of-world atmosphere.',
      zh: '该视频呈现了一种极致的废土美，通过干裂的焦土、白骨般的异化植物与斑驳的生锈的字体，营造出一种荒凉、破败却又在绝境中挣扎生长的末日氛围',
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
      en: 'Dawn: Fantasy City Palaces',
      zh: '破晓·幻城宫阙',
    },
    category: 'brand',
    tag: { en: 'AE Effects Video', zh: 'ae特效视频' },
    year: '2026',
    client: 'Nova Tech Entertainment',
    imageUrl: novaBrandImg,
    videoUrl: 'https://videotourl.com/videos/1780812933951-a901346f-c302-4b2f-9e16-ede3a1cc3401.mp4',
    overview: {
      en: 'Presents a visual style combining Eastern fantasy and modern lighting accents, cleverly using space mask transitions and high-intensity volumetric lighting to transform calm, heavy traditional red-walled ancient architecture into highly impactful, surrealistic dynamic images.',
      zh: '呈现了一种东方奇幻与现代光影点缀组成的视觉风格，巧妙运用空间遮罩的推拉与高强度的体积光照明爆发，将沉稳厚重的传统红墙古建转化为瞬息冲击力的超现实动态影像。',
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
    id: 'prism-posters',
    title: {
      en: 'Roaming Echoes',
      zh: '遗音漫游',
    },
    category: 'code',
    tag: { en: 'Dynamic Poster', zh: '动态海报' },
    year: '2026',
    client: 'Experimental Typography Biennale',
    imageUrl: wechatImg678,
    videoUrl: 'https://videotourl.com/videos/1780808363485-31d829cb-ab99-4059-844c-ee4e40153c0c.mp4',
    overview: {
      en: 'In a wasteland environment, the voice archives of past civilizations play on a loop like glitched time, yet they remain the sole hope of the apocalypse.',
      zh: '在废土环境下，过去文明的声音存档像时间在循环播放会出现故障，但这是末日唯一的希望',
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
      en: 'Decaying Energy, Withered Flower',
      zh: '残能朽花',
    },
    category: 'uiux',
    tag: { en: '3D Motion Design', zh: '3D动态设计' },
    year: '2026',
    client: 'Elysian Future Reality',
    imageUrl: projectImg3,
    videoUrl: 'https://videotourl.com/videos/1780764820903-200cb1a3-6021-41ba-ac1d-def7c64c808d.mp4',
    overview: {
      en: 'An instant transition from cold, polished industrial materials to rusted ruins and rubble-filled wasteland, creating a desolate, fractured visual tension filled with industrial decay.',
      zh: '从冷峻光洁的工业材质向铁锈斑驳、瓦砾遍地的废墟瞬间转变，营造出一种荒芜、破败且充满工业衰亡感的视觉张力',
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
    id: 'orion-spheres',
    title: {
      en: 'Abyssal Swimming Bone',
      zh: '深渊游骨',
    },
    category: 'uiux',
    tag: { en: '3D Motion Design', zh: '3D动态设计' },
    year: '2026',
    client: 'Metropolitan Digital Museum',
    imageUrl: projectImg4,
    videoUrl: 'https://videotourl.com/videos/1780763453380-fea6a7a9-8320-45f2-aa4c-a75644921f6a.mp4',
    overview: {
      en: 'Presents a style blending deep-sea claustrophobia and bionic machinery, creating a dynamic homepage with cold-shining metallic fishbones.',
      zh: '表演了一种深海幽闭与仿生机械融合的风格，将泛着冷光的金属鱼骨动态首页',
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
      en: 'Wasteland Spectral Soul',
      zh: '瓦墟游魂',
    },
    category: 'uiux',
    tag: { en: '3D Motion Design', zh: '3D动态设计' },
    year: '2026',
    client: 'Dimension Shift Labs',
    imageUrl: projectImg5,
    videoUrl: 'https://videotourl.com/videos/1780763891551-41df17e6-59fa-42c6-b8ce-76d852de1a77.mp4',
    overview: {
      en: 'Presents an extraordinary blend of virtual and reality, colliding a rough, realistic red brick and rubble background with rhythmically flickering, light, translucent fishbone remains to create an aesthetic where life looms and breathes like a ghost in ruined relics.',
      zh: '呈现了一种超超的虚实组合风格，将粗糙写实的红砖碎石背景与带有节奏性闪烁的轻盈、半透明鱼骨残骸相碰撞，营造出一种生命在破败遗迹中如幽灵般隐现、呼吸的美学。',
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
      en: 'Erosive Melody',
      zh: '锈蚀旋律',
    },
    category: 'code',
    tag: { en: 'Dynamic Poster', zh: '动态海报' },
    year: '2026',
    client: 'Self-Initiated Prototype',
    imageUrl: vortexCodeImg,
    videoUrl: 'https://videotourl.com/videos/1780809217854-946cb820-d700-4b7f-97cf-0877a54451d9.mp4',
    overview: {
      en: "The spirit remains, but the medium has rotted—in a wasteland environment, the 'cultural remains' after the collapse of civilization turn music into structures of scrap metal.",
      zh: '精神仍在，但载体已腐烂——在废土环境下，文明崩塌后的“文化遗骸” 音乐变成“废铁结构”',
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
      en: 'Dusty Movement',
      zh: '沙尘乐章',
    },
    category: 'code',
    tag: { en: 'Dynamic Poster', zh: '动态海报' },
    year: '2026',
    client: 'Tokyo Typography Club',
    imageUrl: chronicleCodeImg,
    videoUrl: 'https://videotourl.com/videos/1780811161443-7aee044a-d1fc-4a39-a81c-e7fc8c8328fa.mp4',
    overview: {
      en: "In a wasteland environment, the drums are like the 'rhythms of war' resembling the heartbeat of survival.",
      zh: '在废土环境下，鼓像“战争节奏”像生存的心跳“',
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
      en: 'Fractured Station',
      zh: '断裂电台',
    },
    category: 'code',
    tag: { en: 'Dynamic Poster', zh: '动态海报' },
    year: '2026',
    client: 'Swiss Avant-Garde Association',
    imageUrl: matrixCodeImg,
    videoUrl: 'https://videotourl.com/videos/1780811742134-76eca650-9fe8-4bf2-8279-8cac6310511e.mp4',
    overview: {
      en: 'In the wasteland, the radio is a highly symbolic icon. It represents the bridge of communication for past human civilization, the last echo of order, and the sole hope for survivors to find one another.',
      zh: '在废土世界中，电台是一个极具代表性的符号。它象征着旧人类文明的沟通桥梁、秩序的余音，以及幸存者寻找同类的唯一希望。',
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
      en: 'Eroded Light Score',
      zh: '蚀光乐谱',
    },
    category: 'code',
    tag: { en: 'Dynamic Poster', zh: '动态海报' },
    year: '2026',
    client: 'Zurich Design Biennale',
    imageUrl: orbitCodeImg,
    videoUrl: 'https://videotourl.com/videos/1780811941769-03614b84-943f-411b-b35b-08f2134864a2.mp4',
    overview: {
      en: 'In a wasteland environment, music transforms into a stream of energy, decaying like information through space. The light is being eroded by its surroundings, yet it blazes on, radiant.',
      zh: '在废土环境下音乐变成能量流，像信息在空间中腐蚀。光芒正在被环境侵蚀，却依然耀眼。',
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
