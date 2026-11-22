# ==============================================================================
# Kanthanawit Project Startup (.Rprofile)
# Default font & theme configuration:
# - All text & graphs: IBM Plex Sans Thai Looped
# - Code: Fira Code
# ==============================================================================

.setup_project_fonts <- function() {
  font_name <- "IBM Plex Sans Thai Looped"

  # Register font via sysfonts / showtext if available
  if (requireNamespace("sysfonts", quietly = TRUE) && requireNamespace("showtext", quietly = TRUE)) {
    # Check for local TTF font files first (reliable offline & in any environment)
    candidates <- c(
      file.path("fonts", "IBMPlexSansThaiLooped-Regular.ttf"),
      file.path("..", "fonts", "IBMPlexSansThaiLooped-Regular.ttf"),
      file.path("..", "..", "fonts", "IBMPlexSansThaiLooped-Regular.ttf")
    )
    regular_file <- candidates[file.exists(candidates)][1]

    if (!is.na(regular_file) && file.exists(regular_file)) {
      bold_file <- sub("-Regular\\.ttf$", "-Bold.ttf", regular_file)
      if (!file.exists(bold_file)) bold_file <- regular_file
      try(
        sysfonts::font_add(
          family = font_name,
          regular = regular_file,
          bold = bold_file
        ),
        silent = TRUE
      )
    } else {
      # Fallback to downloading from Google Fonts
      try(
        sysfonts::font_add_google(font_name, font_name),
        silent = TRUE
      )
    }

    try(showtext::showtext_auto(), silent = TRUE)
    try(showtext::showtext_opts(dpi = 300), silent = TRUE)
  }

  # Configure ggplot2 default theme and geoms
  if (requireNamespace("ggplot2", quietly = TRUE)) {
    try({
      ggplot2::theme_set(
        ggplot2::theme_minimal(base_size = 12, base_family = font_name)
      )
      ggplot2::update_geom_defaults("text", list(family = font_name))
      ggplot2::update_geom_defaults("label", list(family = font_name))
    }, silent = TRUE)
  }
}

# Run setup immediately for any already-loaded packages
.setup_project_fonts()

# Register Hooks for ggplot2 when loaded/attached later
setHook(packageEvent("ggplot2", "onLoad"), function(...) .setup_project_fonts())
setHook(packageEvent("ggplot2", "attach"), function(...) .setup_project_fonts())
