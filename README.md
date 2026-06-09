# Joe's Caffè — Menu

A static, mobile-first digital menu for **Joe's Caffè** (Tunis). Scan a QR code → see the full menu. No app, no build step.

🔗 **Live:** https://fadihachani.github.io/joes-caffe/

## Editing the menu

All content lives in [`menu-data.js`](menu-data.js) — no coding beyond filling in items:

- **`CATS`** — the categories and their items. Each item is `{ n: name, p: price, d?: description, img?: photo }`. Prices are in Tunisian Dinar, format `X.XXX`.
- **`GROUPS`** — the top tab bar (groups categories so the nav stays short on phones).
- **`SIGNATURES`** — the featured photo cards at the top (decorative, no price).

Edit, save, refresh. No build needed.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page shell + fonts |
| `styles.css` | Dark espresso + gold theme (Direction A) |
| `app.js` | Renders the menu, sticky scroll-spy nav |
| `menu-data.js` | **Menu content — edit this** |
| `qr.html` | QR code generator for the menu URL |
| `img/` | Food photos |

## Running locally

```bash
python3 -m http.server 8742
# open http://localhost:8742/index.html
```

## Deploying

Hosted on GitHub Pages from the `main` branch (root). Push to `main` and the live site updates automatically.
