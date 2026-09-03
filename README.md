# Kanth's Personal Website & Playbook

Welcome to the source code of my personal website! This site serves as my digital playbook where I document and share my work, thoughts, and interests.

## 🌟 Overview

This website is built to showcase and organize various aspects of my professional and personal life:

- **Academic Research & Projects:** Detailed information about my research work, agricultural studies, and conference posters.
- **My Gists:** A collection of short scripts, code snippets, and data analysis tools, primarily focusing on **R**.
- **Writing:** Blog posts, articles, and notes on topics I'm currently exploring or working on.
- **Talks:** Slides and recordings from talks I have given.
- **Apps & Packages:** Software applications and R packages I have developed or contributed to.

## 🛠 Tech Stack

- **Framework**: [Quarto](https://quarto.org/) — publishing system for content-driven websites, with R code chunks available in any post.
- **Styling**: a single [Sass](https://sass-lang.com/) file (`styles.scss`) layered over Quarto's Bootstrap theme.
- **Fonts**: [Trirong](https://fonts.google.com/specimen/Trirong) (headings), [IBM Plex Sans Thai](https://fonts.google.com/specimen/IBM+Plex+Sans+Thai) (body), [Fira Code](https://fonts.google.com/specimen/Fira+Code) (code) — all carry Thai glyphs.
- **Hosting**: Netlify, which renders the site with `@quarto/netlify-plugin-quarto` on every push.

## 📂 Project Structure

```text
/
├── _quarto.yml         # Site config: navbar, theme, render list
├── styles.scss         # Theme colors, typography, layout rules
├── header.html         # Google Fonts <link> tags
├── netlify.toml        # Deploy config (publish = _site)
├── index.qmd           # Home page (two-column)
├── cv/index.qmd        # CV
├── images/             # All static images
├── writing/            # Blog: index.qmd (listing) + one dir per post
├── projects/           # academic/ and mygists/ subgroups
├── apps/               # Shiny / Streamlit apps
├── r-packages/         # R package pages
├── talks/              # Talks
└── _site/              # Build output (git-ignored)
```

## ✍️ Adding Content

Every section is a directory holding a listing page (`index.qmd`) plus one directory per entry. The URL follows the path, so `writing/my-post/index.qmd` is served at `/writing/my-post/`.

| Directory     | URL                         | Listing style | Key frontmatter                       |
| :------------ | :-------------------------- | :------------ | :------------------------------------ |
| `writing/`    | `/writing/<slug>/`          | list + RSS    | `title`, `description`, `date`, `image`, `categories` |
| `projects/`   | `/projects/<group>/<slug>/` | list          | `title`, `description`, `categories`  |
| `apps/`       | `/apps/<slug>/`             | grid          | `title`, `description`, `image`, `link-out` |
| `r-packages/` | `/r-packages/<slug>/`       | grid          | `title`, `description`, `image`, `link-out` |
| `talks/`      | `/talks/`                   | —             | `title`                               |

To publish a new post:

1. Drop the cover image in `images/`.
2. Create `writing/<slug>/index.qmd`:

   ```yaml
   ---
   title: "ชื่อเรื่อง"
   description: "สรุปสั้น ๆ ที่โผล่ในหน้า list"
   date: 2026-09-02
   image: /images/cover.png
   categories: [Rstats, Statistics]
   ---
   ```

3. Write the body. Callouts use Quarto syntax:

   ```markdown
   ::: {.callout-warning}
   ## ข้อควรระวัง
   เนื้อหา
   :::
   ```

   Available types: `note`, `tip`, `warning`, `important`, `caution`. Add `collapse="true"` to fold it.

4. `quarto preview` to check, then commit and push — Netlify renders and deploys.

Because these are `.qmd` files, any post can execute R directly:

````markdown
```{r}
library(ggplot2)
ggplot(mtcars, aes(wt, mpg)) + geom_point()
```
````

## 🧞 Commands

| Command                     | Action                                            |
| :-------------------------- | :------------------------------------------------ |
| `quarto preview`            | Live-reloading local preview at `localhost:4200`  |
| `quarto render`             | Build the whole site into `./_site/`              |
| `quarto render writing/foo` | Render a single page                              |
| `quarto check`              | Diagnose the local Quarto/R installation          |

There is no npm build script. Netlify runs no build command of its own: the
render happens in the `onBuild` step of `@quarto/netlify-plugin-quarto`, which
writes to `_site`. Setting a build command in the Netlify UI would override
`netlify.toml` and pre-empt the plugin, so leave that field empty.

## 🎨 Design

Layout is deliberately plain: a narrow 840px reading column, a 20px root font size, and a three-colour palette. All three colours live at the top of `styles.scss` — change them and the whole site follows:

```scss
$theme-paper:  #f5f4ed;  // background
$theme-ink:    #1f2a1c;  // text
$theme-green:  #5a7247;  // accent
```

The home page is a two-column intro (`index.qmd` with `page-layout: custom`), styled by the `.home` rules in `styles.scss`.

## 📄 License

This repository is primarily for personal use. Content and writing are strictly mine, but feel free to refer to the code blocks or gists for your own use.
