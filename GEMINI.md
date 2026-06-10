# Design Portfolio — 项目状态与全局指令文档 (Project Status & Global Instructions Document)

本文件作为本设计作品集项目的开发圣经，记录了项目的核心架构、近期修改、技术决策、设计愿景以及绝对禁止偏离的非功能性约束。后续任何 AI 助理在修改项目时，必须首先读取并严格遵循此文档。

---

## 一、 项目基本信息与设计愿景 (Overview & Vision)

- **项目名称**：Design Portfolio (设计作品集，在 `metadata.json` 中定义)
- **技术栈**：React 18 + Vite + TypeScript + Tailwind CSS (新版原生 `@import "tailwindcss";` 导入) + Lucide Icons + Motion (用于流畅而克制的动画效果)。
- **核心定位与气场 (Vibe)**：高品质、极简主义。融合瑞士现代平面设计风格（双语对齐、不对称平衡、粗网格）与科技感画风（配合 JetBrains Mono 与精密的数据坐标点缀），但**极力杜绝低质科幻堆砌（Anti-AI-Slop）**。大面积的留白与极黑（#000000）画布，以凸显动态视觉媒体作品的核心。

---

## 二、 核心架构与文件索引 (Architecture & File Index)

项目采用高度模块化的单页面设计，逻辑切分合理明晰，杜绝文件臃肿：

1. `/src/types.ts`
   - 定义全域核心 TypeScript 类型，包含：
     - `Language` ('en' | 'zh')
     - `ProjectDetails` (作品深度卡片属性：挑战、方案、时长、角色、指标等)
     - `Project` (主作品模型：ID、标题、分类、年份、媒介、视频链接、图片/封面组件内容)
     - `ExperienceItem` (工作履历条目结构)
     - `SkillGroup` (技能包分组结构)
2. `/src/data.ts`
   - **核心配置中心**：承载全站中英文双语翻译字典 (`TRANSLATIONS`)。
   - 囊括了所有设计师作品数据、职业经历、专业技能以及中英本地化副本。
   - 所有图片资源均通过模块化顶层 `import` 导入，映射到数据对象，严禁硬编码未知相对网址。
3. `/src/App.tsx`
   - 入口大厅组件：控制全站语言状态、初始化触发。
   - 全局版面框架：`Header` 导航、`Cover` 封面、`Works` 作品集网格、`About` 履历、`Contact` 转化漏斗、以及标志性的轻量级 **瑞士极简页脚** (`footer`)。
   - 配备 `IntersectionObserver` 监听，根据滚动位置瞬时同步导航栏的高亮标签（Works, About, Contact 等）。
4. `/src/components/` (业务视图组件集)
   - `Header.tsx`：双语切换控制、平滑过渡的横向锚点链接导航栏。
   - `Cover.tsx`：巨型大字海报封面，奠定极致黑色视觉基调。
   - `Works.tsx`：采用 **Bento Grid（便当盒网格）** 布局的作品瀑布流，支持分类过滤(`uiux` / `brand` / `motion` / `code`)。内嵌交互弹出卡片（支持视频动态预览、项目背景深度双语解读及痛点归纳）。
   - `About.tsx`：呈现工作履历时光轴、专业技能栈。内嵌**独立的多照片浏览与管理模块 (Image 板块)**。
   - `Contact.tsx`：联系表单、复制邮箱地址交互，专为高价值转化打造。

---

## 三、 近期核心改动记录 (Recent Changelog)

1. **作品图片更新联动 (Image Update Synchronization)**
   - 配合用户多次生成的定制作品图片，在 `/src/data.ts` 中引入并绑定了最新的高质量图像资产：
     - `orbitCodeImg` (`regenerated_image_1780905481035.jpg`)
     - `vortexCodeImg` (`regenerated_image_1780905585569.jpg`)
     - `chronicleCodeImg` (`regenerated_image_1780906663697.jpg`) -> 绑定至 `chronicle-code` 作品卡片。
     - `matrixCodeImg` (`regenerated_image_1780905745231.jpg`) -> 绑定至 `matrix-code` 瑞士先锋海报。
     - `novaBrandImg` (`regenerated_image_1780905897213.png`) -> 绑定至 `nova-brand` 作品。
     - `aeonBrandingImg` (`regenerated_image_1780905992686.png`) -> 绑定至 `aeon-branding` 创意视频作品。
     - `aphelionVisualImg` (`regenerated_image_1780906098426.png`) -> 绑定至 `aphelion-visual` 音频科技视觉短片。
2. **About 模块——Image板块恢复与预加载 (About Section Photo Wall Restored)**
   - 彻底重新激活并修正了 “About” 模块中的照片展示墙（即 Image 切换/详情板块）。
   - 默认直接填充加载了 5 张预加载的高清本地人物与生活照（`[photo1, photo3, photo4, photo5, photo6]`），免除空白占位风险，恢复极致人情味与创意故事感。
3. **Contact 模块极简净化 (Contact Section Cleanup)**
   - 遵从用户指令，**完全移除了**原 Contact 模块底部的不必要的技术社交图标外链卡片（如硬编码的 Github_NET、Linkedin_NET 等），恢复极致安静、高贵而专注的单项联络体验。

---

## 四、 全局研发铁律与非功能约束 (Non-negotiable Rules)

任何后续的代码演进，**必须**严格遵循下述规则：

### 1. 范围自律与克制：不增加未经请求的特性 (Scope Discipline)
- **拒绝过度工程 / 拒绝自我显摆 (No Tech-Larping)**：绝对不要自作聪明地添加诸如“背景白噪音合成器”、“终端系统实时系统日志 (SYS_LOG)”、“在线状态指示灯 (● ONLINE)”、“AI 创意对话总结框” 等累赘性功能。作品集只要静谧、极简、精雕细琢。
- 每一个新设计元素或交互组件都必须能在用户的直接诉求中找到来源。
- 页面的纯黑背景（`#000000`）和留白，是设计的核心奢侈品，切勿塞满多余的信息。

### 2. 双语严格完整性 (Bilingual Completeness)
- 不论是新增还是改写 `data.ts` 的项目信息（或全局翻译字段），**必须同时且严谨提供** `en` (英语) 与 `zh` (中文) 文本。英文字符确保排版留斜体或高亮字，中文字符通顺且富有设计感，杜绝粗制滥造的机翻感。

### 3. 照片资产模块化导入 (Modular Asset Imports)
- 每当下发新的图片生成文件到 `/src/assets/images/`，**必须**在 `data.ts` 的头部使用标准的模块化 `import` 语法导入，严禁在页面或配置字典里写死相对路径（如直接写 `"./assets/images/xxx.png"`），以防 Vite 打包后路径丢失。

### 4. 保持交互的微动感 (Purposeful Animation)
- 仅使用 `motion/react` 提供克制好懂、舒适优雅的位移（y-axis slide） or 渐隐 (Fade-in)。霍华德效果 and 交互必须快、准、有视觉确认感。移动端点击热区（Touch target）不得低于 44px。

### 5. 单页面布局锁定 (Structure Lock)
- 严禁引入深层的多页面或左侧多 tab 抽屉。页面就是由 `Header` + `Cover` + `Works（含弹出详情层）` + `About` + `Contact` + `Footer` 组成的长滚式结构，任何子模块点击即在当前页内原位切换或以遮罩浮层呈现。

---

## 五、 常用诊断流程 (Diagnostics)

如果未来开发中报告了编译或样式错误，执行以下方案：
1. 运行 `npm run lint` 来侦测任何意外引入的 TypeScript 类型错漏或缺失的 import 行为。
2. 运行 `npm run build` 检验整体打包管道在生成最终 `dist/` 资源包时是否有模块打包拦截。
3. 保证所有的第三方图标始终仅从 `lucide-react` 引用，不要引入其它图标包。
