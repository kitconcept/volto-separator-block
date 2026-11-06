---
block: separator
---

Draws a horizontal line that separates the blocks before and after it on the page. The line has no content of its own. Its settings only change how the line looks.

The block stores its settings in `styles`. Each setting is optional: a block without `styles` shows a full-width line, aligned to the left, with no short line.

### Fields

- `styles.blockWidth`: `default` or `narrow`. Sets the width of the block. `default` is used when the field is left out.
- `styles.shortLine`: `true` to draw a short line, `false` or left out for a line across the block.
- `styles.align`: the alignment of the short line, `left` when left out. It is used only when `styles.shortLine` is `true`.

### Example

```json
{
  "@type": "separator",
  "styles": {
    "blockWidth": "narrow",
    "shortLine": true,
    "align": "left"
  }
}
```
