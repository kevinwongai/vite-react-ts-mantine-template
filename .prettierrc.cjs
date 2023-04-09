module.exports = {
  singleQuote: true,
  importOrder: [
    '^vite',
    '^react',
    '^mantine',
    '<THIRD_PARTY_MODULES>',
    'components/',
    'pages/',
    'hooks/',
    'utils/',
    '@/(.*)',
    '^[./]',
  ],
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
};
