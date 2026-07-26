---
name: enterprise-ai-blueprint-image
description: "Generate a polished, research-backed 16:9 enterprise AI digital transformation blueprint PNG from only a company name or fuller business context. Use when the user invokes this skill with a company name, or asks for 企业数智化蓝图, AI 落地蓝图, 数字化转型架构图, 飞书 AI 协同蓝图, business architecture poster/image, or 蓝图规划感. Produces a dense four-layer business matrix, fixed three-group Feishu capability layer with official icons, five endpoints, blue-black styling, and deterministic quality validation."
---

# Enterprise AI Blueprint Image

## Overview

Generate one finished image, not React/JSX/canvas code, that turns a target company into a Feishu/Lark-centered AI digital transformation blueprint. Preserve the original blueprint logic: research the company, extract a 5-character value chain, map it across 4 business layers, and render a dense 16:9 architecture poster with consistent visual tags and grouped blueprint planning structure.

## Logo And Slogan Guardrails

Prevent brand hallucination:

- Do not display a customer logo by default.
- Display a customer logo only when the user supplies an exact logo image file, or when an official logo asset has been verified from an official company source and can be used as a visual reference.
- If there is any uncertainty about whether a logo is official, omit the logo completely.
- Do not approximate, redraw, stylize, or invent customer logos from memory.
- Do not create generic marks that look like customer logos.
- Apply the same rule to partner/product logos such as Feishu/Lark: use text labels by default unless an exact official logo asset is supplied or explicitly verified.
- The supplied Feishu logo `assets/feishu-logo-white.png` is verified for this skill and must appear once in the top-right corner. Use the exact file without redrawing, recoloring, cropping, stretching, adding effects, or separating its symbol and wordmark.

Do not display slogans:

- Do not show the customer's official slogan, mission statement, advertising tagline, or any inferred brand claim.
- Do not invent a slogan-like subtitle such as `驱动...打造...标杆`.
- Use only the main title at the top of the image.
- If extra context is needed, encode it in the internal blueprint content, not as a subtitle or slogan line.

## Reference Layout

Use the layout style represented by `assets/reference-layout.png` when visual fidelity matters:

- The page is a blueprint planning poster, not an app catalog.
- Use a large left business matrix, a fixed middle Feishu AI integration column, and a narrow right operation endpoint column.
- Each business layer has a dark navy vertical rail label with an icon and large layer name.
- Inside each layer, use grouped domain panels with a short group title and multiple small capability chips.
- Use color mainly for value-chain tag badges and a few group headers; do not turn every item into a separate colored block.
- Most small capability chips should be dark blue cards with subtle blue borders, small high-contrast icons, and concise light text.
- The visual feeling should be structured, consultative, and planned: grouped capability domains, aligned grids, strong hierarchy, no scattered app tiles.
- Use the reference image for structure only. Do not copy its light background, white cards, slogan, or logo placement.

## Output Stability Contract

Treat the following rules as fixed defaults whenever the user supplies only a company name:

- Produce one finished 3840×2160 PNG. Build and validate the composition at a 1920×1080 logical canvas, then export at 2× resolution. If the active renderer cannot capture 4K natively without clipping, capture the complete 1920×1080 composition and resample it to 3840×2160 with a high-quality image scaler; completeness takes priority over a cropped native-4K frame.
- Keep the three-column proportions near `70% / 21% / 9%`.
- Keep the four left-side layers in the order `01 战略决策层`, `02 经营管理层`, `03 业务协同层`, `04 一线与执行层`.
- Keep the middle column at exactly three groups and 21 modules from `assets/middle-column.v1.json`.
- Keep the right column at exactly five endpoints.
- Preserve the blue-black theme, official Feishu logo, and exact mapped product icons.
- Research and rewrite only the company-specific left business matrix, value-chain tags, title, and mapping labels.
- Never reduce content density merely because the source research is sparse. Use well-grounded industry abstractions and state material assumptions in the final response.
- Prefer deterministic HTML/SVG/slides composition and bitmap export when exact Chinese text, official icons, alignment, or repeatability matter. Do not let an image model redraw product icons or typeset the final architecture poster.

## Default Dark Theme

The default visual theme is the blue-black specification in `assets/dark-theme.v1.json`. Read it before composing or rendering.

- Use a deep blue-black canvas, dark navy regions, layered dark-blue panels, and restrained blue/cyan accents.
- Do not generate a white, light gray, or predominantly light background unless the user explicitly requests a light variant.
- Apply the exact theme tokens consistently rather than selecting new dark colors for every generation.
- Primary text uses near-white; secondary text uses blue-gray. Normal text must reach at least 4.5:1 contrast and large text at least 3:1 against its immediate background.
- Domain panels and capability chips must remain visually separable through luminance, border, and spacing. Do not rely on shadow alone.
- Use brighter dark-theme tag colors from the theme manifest. Keep each value-chain tag color stable throughout the poster.
- Preserve official product icon colors. Never recolor or invert a supplied product icon. If an icon has insufficient contrast, place the unchanged icon on a compact neutral/light translucent backing tile with padding.
- Generic line icons may use `#60A5FA`, `#22D3C5`, or near-white according to their local background.
- Connector lines must remain visible but subordinate to text; use medium blue with controlled opacity.
- Avoid pure black expanses, neon overload, glowing text, cyberpunk decoration, busy gradients, and low-contrast gray-on-navy text.

### Feishu Logo Placement

- Place `assets/feishu-logo-white.png` once at the top-right of the final canvas.
- At 1920×1080, render it 120-170 px wide, preserve its aspect ratio, and maintain clear space of at least 35% of the logo height on all sides.
- Align it with the title band, not inside the right operation column.
- Do not place other content behind it. Do not add a white container unless the dark background fails to provide a clean edge.

## Official Feishu Product Icons

The official icon library is stored in `assets/feishu-official-icons/` and its canonical mapping is `assets/feishu-official-icons/manifest.json`.
The fixed middle-column specification is stored in `assets/middle-column.v1.json`.

- Always read the manifest before composing the middle Feishu column.
- Treat `assets/middle-column.v1.json` as authoritative for module count, order, labels, capability descriptions, icon files, and permitted icon reuse.
- Match cards by the canonical Chinese product name or the manifest's `aliases` map.
- Use the exact local PNG referenced by `file`; never redraw, recolor, approximate, or replace a mapped product icon with an AI-generated icon.
- The icon catalog is fixed and must not be changed by company research or industry context.
- If a requested product has no manifest entry, use a text-only card and report the missing mapping. Do not invent an icon.
- Preserve the icon's original aspect ratio and transparent background. Render it inside a square 24-32 px visual box without cropping.

The catalog contains two official groups verified from `feishu.cn` navigation on 2026-07-26:

- `协同办公`: 23 fixed products.
- `业务工具`: 10 fixed products.

It also contains user-confirmed custom assets such as `知识问答` and `豆包企业版`. Preserve their supplied files exactly.

Do not use the reference-layout image as an icon source. It is layout inspiration only.

## Workflow

### 1. Understand the Target

Start from the company name the user provides. If the request includes industry, business units, target customer, brand colors, or internal system names, treat those as higher-priority context than general web results.

Research current company and industry information before deciding the blueprint. Prefer official company pages, annual reports, product pages, credible news, and industry sources. If browsing is unavailable, proceed from user-provided context and state the assumption briefly.

Extract:
- company short name
- industry name
- core business model
- major operational pain points
- 5 one-character value-chain tags, such as `研/产/供/销/服` or `投/融/建/管/营`

### 2. Assign Tag Colors

Assign each of the 5 value-chain tags a stable color. For the default dark theme, use 5 distinct choices from this palette:

- purple: `#C084FC`
- blue: `#60A5FA`
- emerald/green: `#34D399`
- orange: `#FB923C`
- amber: `#FBBF24`
- red: `#F87171`

Keep each tag's color consistent across the entire image.

### 3. Build The Business Layer Model

Create 4 horizontal business layers for the left-side application matrix. Design each layer as grouped business domains, not a flat list of applications.

1. `01 战略决策层`: use exactly 2 major planning blocks, normally `核心决策` and `[企业简称]数据中心`; each block contains 5 decision or data capabilities by default.
2. `02 经营管理层`: use exactly 4 balanced management domain panels such as `协同办公与组织`, `企业资源管理`, `人才运营`, `经营分析与预警`; each panel contains 5 capabilities by default.
3. `03 业务协同层`: use 5 value-chain domain panels by default, one for each tag; use 4-6 only when the real business model clearly requires it. Each panel contains 5 concrete capabilities or process nodes by default.
4. `04 一线与执行层`: use 4 balanced frontline scenario panels by default; use 4-5 when required by the business. Each panel contains 4-6 operational actions or records.

Density and balance rules:

- Target 70-80 total left-side capability chips, normally 75. Do not exceed 85 unless the user explicitly prefers density over readability; never deliver fewer than 60 without explaining why the company genuinely lacks additional business scope.
- Prioritize legibility over maximum module count. At the 1920×1080 logical canvas, left-side capability labels must be at least 14 px with medium or semibold weight, panel headers at least 16 px, and semantic icons at least 16 px. Never shrink capability text below 14 px to fit more modules.
- Fill each domain panel vertically. Avoid a large empty lower half inside any panel.
- Keep sibling panels equal height and visually balanced.
- Use approximate layer-height proportions `15% / 22% / 36% / 27%`, then adjust within ±4 percentage points according to content.
- Keep capability names concise, normally 2-8 Chinese characters and at most 10 when needed for precision.
- Do not pad density with synonyms, generic buzzwords, or repeated capabilities.

Tagging rule:
- The 5 tags are classification dimensions, not one-time labels.
- Repeat the same tag on every relevant domain panel across `业务协同层` and `一线与执行层`.
- Do not tag only 5 panels. Most business domain panels should have a tag.
- Skip tags only for pure strategy modules and purely functional management modules such as generic collaboration or ERP.
- Put the colored tag badge on the domain panel title area, not on every small capability chip.
- Keep panel names short, usually 4-10 Chinese characters. Keep capability chip names 2-8 Chinese characters.

Frontline execution rule:
- `一线与执行层` must be business-specific and action-specific, not organization-specific.
- Do not use names of units, stores, campuses, departments, subsidiaries, schools, or branches as frontline cards.
- Use operational scenarios and verbs instead, such as `门店履约`, `现场巡检`, `收银核销`, `客户接待`, `实验预约`, `课堂签到`, `工单上报`, `设备点检`, `内容采编`, `物料入库`, `施工打卡`, `运维巡检`.
- If the company has many locations or departments, abstract them into shared frontline processes rather than listing each unit.

Domain panel structure:
- Every domain panel should have a title, optional colored tag badge, and the capability count required above.
- The chips are not app descriptions; they are business capabilities, workflow nodes, controls, records, analytics, or AI-enabled tasks.
- Prefer capability phrasing over software names: `合同法务评审`, `供应商评估`, `进度偏差分析`, `质量隐患排查`, `客户需求识别`.
- Give every capability chip one restrained 14-18 px semantic line icon. Use generic blue/cyan icons for concepts such as people, document, data, analysis, risk, task, finance, schedule, workflow, knowledge, and location.
- Keep semantic icon usage stable inside one image. Never use a Feishu product icon as a generic business-capability icon.

### 4. Image Composition

Use the image generation tool to create the final bitmap image. Do not output React, JSX, canvas code, HTML, SVG, or a prompt-only answer unless the user explicitly asks for code or prompt text.

Generate a professional Chinese enterprise architecture poster with these constraints:

- aspect ratio: 16:9 wide screen
- style: premium enterprise SaaS blueprint planning diagram, clean, dense, crisp, executive-ready
- canvas: no large empty areas, no awkward wrapping, no cropped text
- typography: Chinese UI text, compact labels, strong hierarchy, readable at full image size
- background: deep blue-black `#050B18` to `#081426`, with dark navy layered regions and crisp blue borders
- layout: three vertical regions
- left region, about 70% width: `应用系统层（[企业简称]核心业务矩阵）`, containing the 4 horizontal business layers
- middle region, about 21% width: `飞书 AI 协同整合层`
- right region, about 9% width: `统一操作层`

Top title:

`[企业名称] X 飞书实现 AI 落地蓝图规划`

Do not include a subtitle, slogan, tagline, or brand claim under the title.
Place the exact supplied Feishu logo `assets/feishu-logo-white.png` at the top-right of the title band.

Middle region must be split into three visibly titled groups:

1. `协同办公`: `智能会议纪要`, `即时消息`, `云文档`, `视频会议`, `知识库`, `审批`, `日历`, `邮箱`, `任务`, `豆包企业版`, `知识问答`.
2. `业务 AI 应用`: `智能体`, `aily专业版`, `工作流`, `知识空间`, `妙搭`, `多维表格`, `应用引擎`, `飞书项目`.
3. `数据集成`: `AnyCross`, `开放平台`.

Add a concise mapping label to each group: collaboration supports strategy, management, and frontline collaboration; business AI applications support the company's five-character value chain; data integration connects core systems and the enterprise data center.

Middle-column stability rule:

- Render exactly the three groups and 21 modules defined in `assets/middle-column.v1.json`, preserving group order and module order within each group. Do not add, remove, rename, merge, or reorder cards.
- `豆包企业版` is the universal office Agent entry and must use `assets/feishu-official-icons/doubao-enterprise.png`.
- Resolve product icons through `assets/feishu-official-icons/manifest.json` aliases. Required alias resolution includes `云文档 → 文档`, `审批/工作流 → 飞书审批`, `知识空间 → 知识库`, `aily专业版/智能体 → 飞书 aily`, `妙搭 → 飞书妙搭`, `AnyCross → 飞书集成平台`, `应用引擎 → 飞书 aPaaS`, and `开放平台 → 飞书开发套件`.
- Repeated aliases may intentionally share one official product icon. Keep their displayed blueprint labels unchanged while using the mapped official icon.

Right region must include these operation endpoints:

- `PC端`
- `移动端`
- `网页端`
- `iPad`
- `H5`

Visual detail rules:
- Render domain panels as layered dark-blue bordered containers with a small bold light header and neatly aligned dark capability chips inside.
- Put one small semantic line icon inside every left-side capability chip. Keep it subordinate to the label and use a consistent blue/cyan stroke style.
- Keep the whole poster blue-black/navy with near-white text and blue/cyan structural accents. Use tag colors as accents only.
- Use the 5 value-chain tag badges to create vertical business-line mapping across layers.
- Show `01`, `02`, `03`, and `04` on the four left-side vertical rails.
- Add visible but restrained blue dashed bidirectional connectors between each left business layer and the middle Feishu layer.
- Add visible but restrained blue dashed bidirectional connectors between the middle Feishu layer and all five right-side endpoints.
- Align connectors to the vertical centers of the corresponding layers or endpoint cards. Do not let lines cross text or icons.
- Avoid colored app tiles, rainbow blocks, marketing illustrations, decorative gradients, and free-floating shapes.
- Avoid a simple table. The result should feel like a planned capability blueprint with nested grouping.
- Do not ask the image generation model to recreate Feishu product icons. Supply the local official icon assets as references or composite them deterministically after generation.
- If the image tool cannot guarantee exact asset placement, generate the left business area separately and assemble the middle/right columns with SVG, HTML, slides, or another deterministic renderer before exporting the final bitmap.

## Image Prompt Pattern

When calling the image generation tool, provide a single consolidated prompt that includes:

- company and industry summary
- exact title only; explicitly forbid subtitles and slogans
- logo handling instruction: no logos unless exact official assets are supplied or verified
- 5 value-chain tags with fixed colors
- four-layer grouped domain model with tag assignments and capability chips
- required Feishu/Lark middle layer and endpoint right layer
- strong instruction that the output is an architecture blueprint image with legible Chinese text

Use this compact structure:

```text
Create a 16:9 premium Chinese enterprise AI digital transformation blueprint image for [company].
Title: ...
No subtitle. No slogan. No customer logo unless an exact official logo asset is supplied or verified; if uncertain, omit logos entirely.
Use the exact supplied Feishu logo asset assets/feishu-logo-white.png once at the top-right; preserve its aspect ratio and clear space; do not redraw or recolor it.
Visual layout: three-column architecture poster, left 70% application system matrix, middle 21% Feishu AI collaboration integration layer, right 9% unified operation layer...
Value-chain tags and colors: ...
Left matrix layers as grouped domain panels and capability chips: ...
Middle layer fixed cards: ...
Right layer fixed endpoint cards: ...
Official icon requirement: use the exact local assets resolved from assets/feishu-official-icons/manifest.json; never generate or approximate product icons. Use generic line icons only for left-side business capability chips.
Dark theme: load and follow assets/dark-theme.v1.json. Deep blue-black canvas, layered navy panels, near-white primary text, blue-gray secondary text, blue/cyan structural accents, minimum 4.5:1 normal-text contrast. Preserve official icon colors; use a compact backing tile when an unchanged icon needs more contrast.
Design requirements: premium dark enterprise SaaS blueprint style, nested domain panels, compact dark capability chips, sparse color accents, readable Chinese text, no large blank areas, no cropped labels, no random extra sections, no flat rainbow app catalog, no invented logos, no brand taglines, no cyberpunk glow overload.
```

Before delivery, validate the middle column:

- All 21 modules are present once across exactly three groups.
- Group order and module order within each group match `assets/middle-column.v1.json`.
- Every module uses the exact `icon` path declared by the manifest.
- Every mapped product card uses the manifest file assigned to its canonical name.
- No official icon is substituted with an AI-generated lookalike.
- No `New` badge, menu decoration, promotional graphic, or customer-specific content is used as a product icon.
- The canvas follows `assets/dark-theme.v1.json`; normal text passes 4.5:1 contrast against its immediate background.
- The exact Feishu logo appears once at the top-right, is uncropped, and has no overlapping content.

Validate the whole poster:

- Logical canvas is exactly 1920×1080 with no horizontal or vertical overflow; final PNG metadata is exactly 3840×2160.
- The four left layers show `01-04` in order.
- The left matrix contains 60-85 non-duplicative capability chips, preferably 70-80, with 75 as the default.
- Left capability labels are at least 14 px on the logical canvas, use medium or semibold weight, and remain readable at 100% zoom.
- Every left capability chip has one semantic line icon.
- Strategy has 2 panels; management has 4; business collaboration normally has 5; frontline normally has 4.
- No panel has a visibly empty lower half unless required by an intentional layout exception.
- Four left-to-middle connectors and five middle-to-right connectors are visible, aligned, and subordinate.
- All image assets load successfully; no official product icon is missing.
- No label is cropped, wrapped awkwardly, or rendered too small to read at full resolution.

## Final Response

After generating the image, show it to the user and include only concise supporting context:

- the inferred industry and 5-character value chain
- any important assumption or uncertainty
- source links used for research, when browsing was used

Do not include the full internal data model unless the user asks for it.
