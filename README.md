# Kanth's Personal Website

Source of my personal website, rebuilt from scratch on Quarto and grown one page at a time.

## Tech Stack

- **Framework**: [Quarto](https://quarto.org/)
- **Styling**: `styles.scss` layered over Quarto's Bootstrap theme
- **Fonts**: Trirong (headings), IBM Plex Sans Thai (body), Fira Code (code)
- **Hosting**: Netlify, rendered with `@quarto/netlify-plugin-quarto` on every push

## Structure

```text
/
├── _quarto.yml     # Site config: navbar, theme, render list
├── styles.scss     # Theme
├── header.html     # Google Fonts <link> tags
├── netlify.toml    # Deploy config (publish = _site)
├── index.qmd       # Home page
├── cv/index.qmd    # CV
└── images/         # Static images
```

New pages must be added to `project.render` in `_quarto.yml` (and to the navbar if wanted).

## Commands

| Command          | What it does                  |
| :--------------- | :---------------------------- |
| `quarto preview` | Live-reload dev server        |
| `quarto render`  | Build the site into `_site/`  |
