module.exports = {
  docs: [
      'quick-start/quick-start',
      {
          type: 'category',
          label: 'Introduction',
          collapsed: false,
          link: {
              type: 'doc',
              id: 'introduction/introduction',
          },
          items: [
              'introduction/setting-up',
          ],
      },
      {
          type: 'category',
          label: 'Features',
          link: {
              type: 'generated-index',
              title: 'Features',
              slug: '/features',
              keywords: ['features'],
          },
          items: [
              {
                  type: 'autogenerated',
                  dirName: 'features',
              },
          ],
      },
      {
          type: 'category',
          label: 'FAQ & Troubleshooting',
          link: {
              type: 'generated-index',
              title: 'FAQ & Troubleshooting',
              slug: '/faq',
              keywords: ['faq', 'troubleshooting'],
          },
          items: [
              {
                  type: 'autogenerated',
                  dirName: 'faq',
              },
          ],
      },
  ],
};