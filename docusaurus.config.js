// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LingmoOS Document Site', 
  tagline: 'Explore. Learn. Master. Unleash the Power of LingmoOS here!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lingmoos.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/lingmo-documentation',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LingmoOS', // Usually your GitHub org/user name.
  projectName: 'lingmo-documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/LingmoOS/lingmo-documentation/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/LingmoOS/lingmo-documentation/blob/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'LingmoOS Documentation',
        logo: {
          alt: 'LingmoOS Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'userTutorialSidebar',
            position: 'left',
            label: 'User Guides',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/build_status', label: 'Status', position: 'left'},
          {to: 'http://lingmo-bug-tracker.unaux.com/', label: 'Report Bugs', position: 'right'},
          {
            href: 'https://github.com/LingmoOS/lingmo-documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/user_guides/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'OurLingmo',
                href: 'https://bbs.lingmo.org',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/wYGytYRQ',
              },
              {
                label: 'QQ',
                href: 'https://qm.qq.com/q/1OCrcUxtqo',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Report Bugs',
                to: 'http://lingmo-bug-tracker.unaux.com/',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/LingmoOS',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LingmOS Team. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
