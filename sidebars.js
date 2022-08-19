module.exports = {
  docs: [
    {
      type: "doc",
      id: "introduction",
    },
    {
      type: "doc",
      id: "donate",
    },
    {
      type: "category",
      label: "Features",
      collapsed: true,
      items: ['features/feature', 'features/utility-commands', 'features/other-commands', 'features/game-commands', 'features/images-generating-commands', {
          type: "category",
        label: "Music Commands",
        collapsed: true,
        items: ['features/music-commands/music-commands', 'features/music-commands/support-platforms'],
      }],
    },
    {
      type: "doc",
      id: "support",
    },
    {
      type: "doc",
      id: "faq",
    },
    {
      type: "doc",
      id: "permissions",
    },
  ]
};  
