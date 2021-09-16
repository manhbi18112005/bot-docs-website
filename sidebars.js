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
      label: "Getting Started",
      collapsed: true,
      items: [
      'getting-started/designation',
      ],
    },
    {
      type: "category",
      label: "Pricing",
      collapsed: true,
      items: ['pricing/overview','pricing/self-service','pricing/full-service','pricing/pay-as-you-go'],
    },
    {
      type: "category",
      label: "Features",
      collapsed: true,
      items: ['features/feature', 'features/utility-commands', 'features/music-commands', {
          type: "category",
        label: "Music Commands",
        collapsed: true,
        items: ['features/music-commands/commands'],
      }],
    },
    {
      type: "category",
      label: "FAQ",
      collapsed: true,
      items: ['faq/delete-claim','faq/sli','faq/fractional'],
    },
    {
      type: "category",
      label: "COVID",
      collapsed: true,
      items: ['covid/sessional','covid/k-codes','covid/vaccine'],
    },
    {
      type: "doc",
      id: "comparison",
    },
  ]
};  
