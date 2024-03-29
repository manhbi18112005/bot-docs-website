// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { externalLinkProcessor } = require("./tools/utils/externalLink");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "No Name Studio",
  tagline: "No Name Studio VN",
  url: "http://bot.nnsvn.me",

  staticDirectories: ["static"],
  favicon: "https://cdn.nnsvn.me/img/brand/logo.svg",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "manhbi18112005",
  projectName: "bot-docs-website",
  trailingSlash: false,
  onBrokenLinks: /** @type {import('@docusaurus/types').ReportingSeverity} */ (
    "throw"
  ),
  onBrokenMarkdownLinks:
    /** @type {import('@docusaurus/types').ReportingSeverity} */ ("throw"),
  customFields: {
    markdownOptions: {
      html: true,
    },
    gaGtag: true,
    repoUrl: "https://github.com/manhbi18112005",
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: /** @type {import('@docusaurus/types').PresetConfig[]} */ ([
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          //path: '../docs',
          sidebarPath: "./sidebarsDocs.js",
          rehypePlugins: [externalLinkProcessor],
          disableVersioning: true,
        },
        blog: {
          blogTitle: "No Name Bot Blog",
          blogDescription: "Get the latest news about No Name Bot",
          postsPerPage: 15,
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          showReadingTime: true, // When set to false, the "x min read" won't be shown
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} No Name Studio.`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: 'G-KDC153NL83',
          anonymizeIP: true,
        },
      }),
    ],
  ]),
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [],
        createRedirects(existingPath) {
          if (!existingPath.endsWith("/")) {
            return `${existingPath}/`;
          }

          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
    [
      "docusaurus-gtm-plugin",
      {
        id: "G-KDC153NL83",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        sidebarPath: require.resolve("./sidebarsCommunity.js"),
        // ... other options
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
      docs: {
        versionPersistence: "localStorage",
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        hideOnScroll: true,
        title: "No Name Studio",
        logo: {
          alt: "No Name Studio Logo",
          src: "img/title.png",
          srcDark: "img/title.png",
        },
        items: [
          { to: "docs", label: "Docs", position: "left" }, // or position: 'right'
          { to: "blog", label: "News", position: "left" }, // or position: 'right'
          { to: "community", label: "Community", position: "left" }, // or position: 'right'
          {
            type: "docsVersionDropdown",
            position: "left",
            dropdownItemsAfter: [
              {
                href: "https://en.bot.nnsvn.me",
                label: "EN",
              },
              {
                href: "https://vn.bot.nnsvn.me",
                label: "VI",
              },
            ],
          },
          {
            href: "https://github.com/manhbi18112005/New-Website",
            label: "GitHub",
            title: "View on GitHub",
            position: "right",
            className: "icon",
          },
          {
            href: "https://discord.com/invite/nCQbSag",
            label: "Discord",
            title: "Chat on Discord",
            position: "right",
            className: "icon",
          },
          {
            href: "https://cp.nnsvn.me/dashboard",
            label: "Dashboard",
            title: "No Name Bot Main App",
            position: "right",
            className: "icon",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Guides",
            items: [
              {
                label: "Introduction",
                to: "/docs/",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "Careers",
                href: "mailto:myt@nonamestudip.xyz",
              },
              {
                label: "Privacy Policy",
                to: "/privacy",
              },
              {
                label: "Terms of use",
                to: "/term",
              },
            ],
          },
          {
            title: "Contact us",
            items: [
              {
                label: "Email",
                href: "mailto:support.team@nnsvn.me",
              },
              {
                label: "Github",
                href: "https://github.com/No-Name-Studio-VN",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/nonamestudiovn",
              },
              {
                label: "Discord",
                href: "https://discord.gg/nCQbSag",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} No Name Studio`,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        defaultLanguage: "typescript",
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
        additionalLanguages: ["docker", "log"],
      },
    }),
};

module.exports = config;
