# Enterprise AI Blueprint Image

Generate polished 16:9 enterprise AI digital transformation blueprint images from a company name.

This Codex skill researches a target company, extracts a five-character value chain, maps it across four business layers, and produces a dense Feishu/Lark-centered architecture poster with grouped business domains and capability chips.

## What It Creates

- A finished 16:9 bitmap image, not React, JSX, canvas, HTML, SVG, or prompt-only output.
- A three-column enterprise architecture poster:
  - application system matrix
  - Feishu AI collaboration integration layer
  - unified operation endpoint layer
- Four business layers:
  - strategic decision layer
  - management layer
  - business collaboration layer
  - frontline execution layer
- Consistent value-chain tag badges and colors.

## Guardrails

- No customer logos unless exact official assets are supplied or verified.
- No invented, approximated, or stylized logos.
- No slogans, subtitles, taglines, or inferred brand claims.
- No flat app catalogs, rainbow tiles, decorative gradients, or marketing illustrations.

## Installation

Copy this folder into your Codex skills directory:

```bash
cp -R enterprise-ai-blueprint-image ~/.codex/skills/
```

Then invoke it with:

```text
$enterprise-ai-blueprint-image 目标公司名称
```

Example:

```text
$enterprise-ai-blueprint-image 业之峰
```

## Files

- `SKILL.md`: the full skill instructions.
- `agents/openai.yaml`: skill display metadata.
- `assets/reference-layout.png`: reference layout used for visual fidelity.
