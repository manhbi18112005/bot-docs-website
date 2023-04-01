export default {
  "title": "No Name Studio",
  "tagline": "No Name Studio VN",
  "url": "http://www.nonamestudio.xyz",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.png",
  "organizationName": "No Name Studio VN",
  "projectName": "docs",
  "customFields": {
    "users": [
      {
        "name": "No Name Studio",
        "icon": "title.png",
        "infoLink": "https://bot.nonamestudio.xyz/discord",
        "infoTitle": "Discord Server of No Name Studio",
        "pinned": true
      }
    ]
  },
  "themeConfig": {
    "navbar": {
      "title": "No Name Studio",
      "logo": {
        "alt": "No Name Studio Logo",
        "src": "img/favicon.png"
      },
      "items": [
        {
          "href": "https://github.com/No-Name-Studio-VN",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Guides",
          "items": [
            {
              "label": "Introduction",
              "to": "/docs/"
            }
          ]
        },
        {
          "title": "Company",
          "items": [
            {
              "label": "Careers",
              "href": "mailto:myt@nonamestudip.xyz"
            },
            {
              "label": "Privacy Policy",
              "to": "/privacy"
            },
            {
              "label": "Terms of use",
              "to": "/term"
            }
          ]
        },
        {
          "title": "Contact us",
          "items": [
            {
              "label": "Email",
              "href": "mailto:support.team@nonamestudio.xyz"
            },
            {
              "label": "Github",
              "href": "https://github.com/No-Name-Studio-VN"
            },
            {
              "label": "Facebook",
              "href": "https://www.facebook.com/nonamestudiovn"
            },
            {
              "label": "Discord",
              "href": "https://discord.gg/nCQbSag"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2023 No Name Studio"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "C:\\Users\\ASUS_ROG\\Desktop\\New-Website\\sidebars.js",
          "routeBasePath": "/docs"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "C:\\Users\\ASUS_ROG\\Desktop\\New-Website\\src\\css\\custom.css"
        },
        "sitemap": {
          "changefreq": "weekly",
          "priority": 0.5,
          "trailingSlash": false
        }
      }
    ]
  ],
  "plugins": [
    "@docusaurus/plugin-ideal-image",
    [
      "C:\\Users\\ASUS_ROG\\Desktop\\New-Website\\node_modules\\docusaurus-gtm-plugin\\index.js",
      {
        "id": "GTM-T2SJLRG"
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};