const math = require('remark-math')
const katex = require('rehype-katex')
module.exports = {
  title: '전기책',
  tagline: '나를 위한 전기책',
  url: 'https://ElectricityBook.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'ElectricityBook', // Usually your GitHub org/user name.
  projectName: 'ElectricityBook.github.io', // Usually your repo name.
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    navbar: {
      title: '전기책',
      logo: {
        alt: '전기책',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Books',
          position: 'left',
          items: [
            {
              to: 'docs/Electromagnetism/introduction',
              label: '전기자기학',
            },
            {
              label: '전기회로',
              to: 'docs/ElectricCircuits/introduction',
            },
            {
              label: '제어공학',
              to: 'docs/ControlEngineering/introduction',
            },
            {
              label: '전기기기',
              to: 'docs/ElectricMachinery/introduction',
            },
            {
              label: '전력공학',
              to: 'docs/ElectricPowerSystem/introduction',
            },
            {
              label: '전기응용 및 공사재료',
              to: 'docs/ElectricApplication/introduction',
            },
            {
              label: '전기설비기술기준',
              to: 'docs/KEC/introduction',
            },
            // ... more items
          ],
          
        },
        {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Books',
          items: [
            {
              label: '전기자기학',
              to: 'docs/Electromagnetism/introduction',
            },
            {
              label: '전기회로',
              to: 'docs/ElectricCircuits/introduction',
            },
            {
              label: '제어공학',
              to: 'docs/ControlEngineering/introduction',
            },
            {
              label: '전기기기',
              to: 'docs/ElectricMachinery/introduction',
            },
            {
              label: '전력공학',
              to: 'docs/ElectricPowerSystem/introduction',
            },
            {
              label: '전기응용 및 공사재료',
              to: 'docs/ElectricApplication/introduction',
            },
            {
              label: '전기설비기술기준',
              to: 'docs/KEC/introduction',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ElectricityBook/ElectricityBook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ElectricityBook. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ElectricityBook/ElectricityBook/edit/master/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ElectricityBook/ElectricityBook/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
