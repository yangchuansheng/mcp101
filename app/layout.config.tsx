import { templateDomain } from '@/config/site';
import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { languagesType } from '@/lib/i18n';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  i18n: false,
  disableThemeSwitch: true,
  nav: {
    title: (
      <div className="flex items-center gap-1">
        <img alt="MCP Logo" src="/logo.svg" />
        <span className="hidden text-base font-bold md:block">MCP 101</span>
      </div>
    ),
  },
  githubUrl: 'https://github.com/yangchuansheng/mcp101',
  links: [
  ],
};

// Define the basic structure of navigation links
type HeaderLinkType = {
  textKey: string;
  urlKey: string;
  isExternal?: boolean;
};

// Define the basic navigation link data (without translation text and localized URLs)
export const HeaderLinksData: HeaderLinkType[] = [
  {
    textKey: 'docs',
    urlKey: 'docsUrl',
    isExternal: false,
  },
  // {
  //   textKey: 'pricing',
  //   urlKey: 'pricingUrl',
  //   isExternal: false,
  // },
  {
    textKey: 'blog',
    urlKey: 'blogUrl',
    isExternal: false,
  },
];

// Define translations for each language's navigation links texts and URLs
export const navTranslations: Record<languagesType, Record<string, string>> = {
  en: {
    // Button texts
    devbox: 'DevBox',
    appStore: 'App Store',
    docs: 'Docs',
    blog: 'Blog',
    contact: 'Contact',
    getStarted: 'Get Started',

    // URLs
    devboxUrl: '/devbox',
    appStoreUrl: templateDomain,
    docsUrl: '/docs/core',
    blogUrl: '/blog',
    contactUrl: 'mailto:contact@sealos.io',
  },
  'zh-cn': {
    // Button texts
    devbox: 'DevBox',
    appStore: '应用商店',
    docs: '文档',
    blog: '博客',
    contact: '联系我们',
    getStarted: '开始学习',

    // URLs
    devboxUrl: '/devbox',
    appStoreUrl: templateDomain,
    docsUrl: '/docs/core',
    blogUrl: '/blog',
    contactUrl:
      'https://fael3z0zfze.feishu.cn/share/base/form/shrcn5oHHTKCf3VREMKOhEy6fmf',
  },
};

// Generate navigation links with translated text and URLs using the language parameter
export const getHeaderLinks = (lang: languagesType) => {
  return HeaderLinksData.map((link) => ({
    text: navTranslations[lang][link.textKey],
    url: navTranslations[lang][link.urlKey],
    isExternal: link.isExternal,
  }));
};

// Maintain backwards compatibility with default English navigation links
export const HeaderLinks = HeaderLinksData.map((link) => ({
  text: navTranslations.en[link.textKey],
  url: navTranslations.en[link.urlKey],
  isExternal: link.isExternal,
}));
