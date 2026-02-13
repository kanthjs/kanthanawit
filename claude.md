# Claude Work Guidelines for AstroWind (Thai)

## Project Overview

- **Name**: AstroWind (Thai Fork by ThaiUI) - Personal Portfolio/Blog
- **Type**: Astro 4.0 + Tailwind CSS static site template
- **Purpose**: Personal portfolio/blog website with full Thai language support (components already optimized)
- **Status**: Beta v1.0.0-beta.33 (forked from AstroWind)
- **Key Features**:
  - Blog system (MDX) with categories & tags
  - SEO-optimized, Analytics, Sitemap generation
  - Thai fonts pre-configured (Anuphan, Noto Sans Thai)
  - Dark mode support
  - Production-ready PageSpeed scores
  - Components pre-optimized for Thai language

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, favicons, styles
│   │   └── styles/tailwind.css
│   ├── components/
│   │   ├── blog/        # Blog-specific components
│   │   ├── common/      # Reusable components
│   │   ├── ui/          # UI components
│   │   └── widgets/     # Page widgets (Header, Footer, etc.)
│   ├── content/
│   │   └── post/        # Blog posts in .md or .mdx
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages (Astro file-based routing)
│   ├── utils/           # Utility functions
│   ├── config.yaml      # Site configuration
│   └── navigation.js    # Navigation config
├── astro.config.mjs     # Astro configuration
├── package.json
└── eslint.config.js
```

## Key Commands

```bash
npm run dev           # Start dev server (localhost:3000)
npm run build         # Build for production (./dist/)
npm run preview       # Preview production build locally
npm run format        # Format code with Prettier
npm run lint:eslint   # Run ESLint
npm start             # Alias for npm run dev
```

## Configuration

- **Main config**: `src/config.yaml` - Site name, SEO metadata, blog settings, analytics, theme
- **Design customization**:
  - `src/components/CustomStyles.astro` - Component styling
  - `src/assets/styles/tailwind.css` - Tailwind styles
- **Tailwind**: Configured in `astro.config.mjs` via `@astrojs/tailwind`

## Content Management

- **Blog posts**: Stored in `src/content/post/` as `.md` or `.mdx` files
- **Format**: Supports YAML frontmatter for metadata (title, date, category, tags, etc.)
- **Features**: Automatic RSS feed, categories, tags, related posts widget
- **Permalink pattern**: Currently set to `/%slug%` in config.yaml

## Tech Stack

- **Framework**: Astro 4.0 (SSG with partial hydration support)
- **Styling**: Tailwind CSS 3.4
- **Content**: MDX support via @astrojs/mdx
- **Fonts**: Thai fonts (Anuphan, Noto Sans Thai) via @fontsource-variable
- **Icons**: astro-icon with Iconify
- **Plugins**:
  - @astrojs/sitemap - Auto sitemap generation
  - @astrojs/rss - RSS feed
  - @astrojs/partytown - Third-party scripts
  - astro-embed - Media embeds
  - unpic - Universal image CDN

## Development Guidelines

1. **Naming conventions**: Follow existing patterns (camelCase for JS, kebab-case for CSS classes)
2. **Components**: Use `.astro` components by default, React/Vue only when needed
3. **Styling**: Use Tailwind CSS classes, avoid inline styles
4. **Images**: Use Astro's Image component or unpic for optimization
5. **Content**: Add blog posts to `src/content/post/` with proper frontmatter

## Customization for Personal Portfolio

When converting from template to personal website, update these:

- **Site metadata**: Edit `src/config.yaml`
  - Site name, URL, description
  - Social media links
  - Google Analytics ID (if using)
- **Personal content**: Replace demo pages in `src/pages/`
  - About page with your bio
  - Portfolio/projects section
  - Contact information
- **Styling**: Customize in `src/components/CustomStyles.astro` and `src/assets/styles/tailwind.css`
- **Blog posts**: Add your posts to `src/content/post/` with YAML frontmatter

## Git & Commits

- **Main branch**: main (production)
- **Commit style**: Clear, descriptive messages
- **Scope**: Keep commits focused on single changes
- **Testing**: Run `npm run lint:eslint` and `npm run format` before committing

## Important Notes

- **Blog limitation**: Currently only works with `prerender = true` (static generation)
- **Output modes**: Supports `static`, `hybrid`, and `server` modes in astro.config.mjs
- **Next version**: AstroWind 2.0 in development - team requesting feedback
- **Thai support**: Project includes Thai fonts and language support built-in

## Before You Start

1. Run `npm install` to install dependencies (already done if node_modules exists)
2. Check `src/config.yaml` for current configuration
3. Review existing pages in `src/pages/` to understand patterns
4. Review existing components in `src/components/` for styling patterns

## Useful Patterns

- **Dynamic routes**: Use `[...page].astro` for pagination
- **Layouts**: Apply via `layout` property in Astro components
- **MDX**: Can include React components in markdown blog posts
- **Dark mode**: Configured via `ui.theme` in config.yaml

---

Last updated: 2026-02-13
