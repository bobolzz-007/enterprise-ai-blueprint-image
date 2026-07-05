---
name: enterprise-ai-blueprint-image
description: "Generate a polished 16:9 enterprise AI digital transformation blueprint image from a company name, using grouped domain panels and capability chips rather than a flat app catalog, with no slogans and no unverified logos. Use when the user asks for 企业数智化蓝图, AI 落地蓝图, 数字化转型架构图, 飞书 AI 协同蓝图, business architecture poster/image, 蓝图规划感, or wants the old React/canvas blueprint prompt converted into an image-generation workflow."
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
- Most small capability chips should be white/light cards with thin borders, small blue line icons, and concise text.
- The visual feeling should be structured, consultative, and planned: grouped capability domains, aligned grids, strong hierarchy, no scattered app tiles.

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

Assign each of the 5 value-chain tags a stable color. Use 5 distinct choices from this palette:

- purple: `#A855F7`
- blue: `#3B82F6`
- emerald/green: `#10B981` or `#22C55E`
- orange: `#F97316`
- amber: `#F59E0B`
- red: `#EF4444`

Keep each tag's color consistent across the entire image.

### 3. Build The Business Layer Model

Create 4 horizontal business layers for the left-side application matrix. Design each layer as grouped business domains, not a flat list of applications.

1. `战略决策层`: use 2 major planning blocks, normally `核心决策` and `[企业简称]数据中心`; each block contains 2-5 decision or data capabilities.
2. `经营管理层`: use 3-4 management domain panels such as `协同办公与组织`, `企业资源管理`, `综合管控大脑`, `经营分析与预警`; each panel contains several capability chips.
3. `业务协同层`: use 4-6 value-chain domain panels. Each panel corresponds to one of the 5 tags and contains 3-5 concrete business capabilities or process nodes.
4. `一线与执行层`: use 2-4 frontline execution scenario panels, each containing specific operational actions and records.

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
- Every domain panel should have a title, optional colored tag badge, and 3-6 small chips.
- The chips are not app descriptions; they are business capabilities, workflow nodes, controls, records, analytics, or AI-enabled tasks.
- Prefer capability phrasing over software names: `合同法务评审`, `供应商评估`, `进度偏差分析`, `质量隐患排查`, `客户需求识别`.

### 4. Image Composition

Use the image generation tool to create the final bitmap image. Do not output React, JSX, canvas code, HTML, SVG, or a prompt-only answer unless the user explicitly asks for code or prompt text.

Generate a professional Chinese enterprise architecture poster with these constraints:

- aspect ratio: 16:9 wide screen
- style: premium enterprise SaaS blueprint planning diagram, clean, dense, crisp, executive-ready
- canvas: no large empty areas, no awkward wrapping, no cropped text
- typography: Chinese UI text, compact labels, strong hierarchy, readable at full image size
- background: light slate/white with restrained shadows and borders
- layout: three vertical regions
- left region, about 70% width: `应用系统层（[企业简称]核心业务矩阵）`, containing the 4 horizontal business layers
- middle region, about 21% width: `飞书 AI 协同整合层`
- right region, about 9% width: `统一操作层`

Top title:

`[企业名称] X 飞书实现 AI 落地蓝图规划`

Do not include a subtitle, slogan, tagline, or brand claim under the title.

Middle region must include these Feishu/Lark capabilities as visible cards:

- `统一协同交互`
- `统一数据消费`
- `统一流程驱动`
- `统一信息分发`
- `知识问答`
- `aily伙伴`
- `智能体`
- `aily专业版`
- `工作流`
- `知识空间`
- `妙搭`
- `多维表格`
- `应用引擎`
- `AnyCross`
- `开放平台`
- `飞书项目`

Right region must include these operation endpoints:

- `PC端`
- `移动端`
- `网页端`
- `iPad`
- `H5`

Visual detail rules:
- Render domain panels as light bordered containers with a small bold header and neatly aligned chips inside.
- Use icons sparingly as small line icons beside chips or headers. Do not let icons dominate.
- Keep the whole poster mostly blue-white-slate. Use tag colors as accents only.
- Use the 5 value-chain tag badges to create vertical business-line mapping across layers.
- Avoid colored app tiles, rainbow blocks, marketing illustrations, decorative gradients, and free-floating shapes.
- Avoid a simple table. The result should feel like a planned capability blueprint with nested grouping.

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
Visual layout: three-column architecture poster, left 70% application system matrix, middle 21% Feishu AI collaboration integration layer, right 9% unified operation layer...
Value-chain tags and colors: ...
Left matrix layers as grouped domain panels and capability chips: ...
Middle layer fixed cards: ...
Right layer fixed endpoint cards: ...
Design requirements: clean light slate enterprise SaaS blueprint style, nested domain panels, compact white capability chips, sparse color accents, readable Chinese text, no large blank areas, no cropped labels, no random extra sections, no flat rainbow app catalog, no invented logos, no brand taglines.
```

## Final Response

After generating the image, show it to the user and include only concise supporting context:

- the inferred industry and 5-character value chain
- any important assumption or uncertainty
- source links used for research, when browsing was used

Do not include the full internal data model unless the user asks for it.
