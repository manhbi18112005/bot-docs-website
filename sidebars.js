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
      items: ['features/feature', 'features/utility-commands', 'features/other-commands', 'features/game-commands', {
          type: "category",
        label: "Music Commands",
        collapsed: true,
        items: ['features/music-commands/music-commands'],
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
