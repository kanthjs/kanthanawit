# Kanth's Personal Website

Source of my personal website, rebuilt from scratch on Quarto and grown one page at a time.

## Tech Stack

- **Framework**: [Quarto](https://quarto.org/)
- **Styling**: `styles.scss` layered over Quarto's Bootstrap theme
- **Fonts**: IBM Plex Sans Thai Looped (all text, UI, and ggplot2 figures), Fira Code (code)
- **Hosting**: GitHub Pages at [kanthanawit.in.th](https://kanthanawit.in.th), rendered and deployed by GitHub Actions on every push to `main`

## Structure

```text
/
├── _quarto.yml     # Site config: navbar, theme, render list
├── styles.scss     # Theme
├── header.html     # Google Fonts <link> tags
├── .github/workflows/publish.yml # Render + deploy to GitHub Pages
├── CNAME           # Custom domain (kanthanawit.in.th)
├── index.qmd       # Home page
├── about/index.qmd # About Me
└── images/         # Static images
```

New pages must be added to `project.render` in `_quarto.yml` (and to the navbar if wanted).

## Commands

| Command          | What it does                  |
| :--------------- | :---------------------------- |
| `quarto preview` | Live-reload dev server        |
| `quarto render`  | Build the site into `_site/`  |
