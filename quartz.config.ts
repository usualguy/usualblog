import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration - Minimal Blog
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Anton's Blog",
    pageTitleSuffix: "",
    enableSPA: false,
    enablePopovers: false,
    analytics: {
      provider: "plausible",
      plausibleDomain: "usualblog.github.io",
    },
    locale: "en-US",
    baseUrl: "usualblog.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "systemFonts",
      cdnCaching: true,
      typography: {
        header: "system-ui",
        body: "system-ui",
        code: "monospace",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#f5f5f5",
          gray: "#cccccc",
          darkgray: "#666666",
          dark: "#333333",
          secondary: "#0066cc",
          tertiary: "#666666",
          highlight: "rgba(0, 102, 204, 0.1)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#1a1a1a",
          lightgray: "#2a2a2a",
          gray: "#555555",
          darkgray: "#aaaaaa",
          dark: "#eeeeee",
          secondary: "#66b3ff",
          tertiary: "#aaaaaa",
          highlight: "rgba(102, 179, 255, 0.1)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
    ],
  },
}

export default config
