import React from 'react';
import { siteConfig, templateDomain } from '@/config/site';
import Link from 'fumadocs-core/link';
import { cn } from '@/lib/utils';
import { DiscordIcon, GithubIcon, BilibiliIcon, WechatIcon } from '../ui/icons';
import { languagesType, i18n } from '@/lib/i18n';

interface FooterLinkColumnProps {
  children: React.ReactNode;
}

const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({ children }) => (
  <div className="flex flex-col justify-center space-y-4">{children}</div>
);

interface FooterLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  className,
  children,
}) => (
  <Link
    href={href}
    className={cn(
      'hover:underline-decoration-4 hover:underline-color-[#005B9C] text-sm font-medium text-custom-secondary-text hover:text-[#005B9C] hover:underline hover:underline-offset-4',
      className,
    )}
  >
    {children}
  </Link>
);

// Define footer link structure
type FooterLinkType = {
  textKey: string;
  urlKey: string;
  isExternal?: boolean;
};

type FooterCategoryType = {
  titleKey?: string;
  links: FooterLinkType[];
};

// Define footer categories and links (without translation text)
const FooterLinksData: Record<string, FooterCategoryType> = {
  resources: {
    titleKey: 'resourcesTitle',
    links: [
      { textKey: 'docs', urlKey: 'docsUrl', isExternal: false },
      { textKey: 'appStore', urlKey: 'appStoreUrl', isExternal: false }
    ]
  },
  products: {
    titleKey: 'productsTitle',
    links: [
      { textKey: 'sealos', urlKey: 'sealosUrl', isExternal: true },
      { textKey: 'devbox', urlKey: 'devboxUrl', isExternal: true },
      { textKey: 'fastgpt', urlKey: 'fastgptUrl', isExternal: true }
    ]
  },
  legal: {
    links: [
      { textKey: 'termsOfService', urlKey: 'termsOfServiceUrl', isExternal: false },
      { textKey: 'privacyPolicy', urlKey: 'privacyPolicyUrl', isExternal: false },
      { textKey: 'cookiePolicy', urlKey: 'cookiePolicyUrl', isExternal: false }
    ]
  }
};

// Define translations for footer text and URLs
export const footerTranslations: Record<languagesType, Record<string, string>> = {
  en: {
    // Category titles
    resourcesTitle: 'Resources',
    productsTitle: 'Products',
    
    // Link texts
    docs: 'Docs',
    appStore: 'Blog',
    sealos: 'Sealos',
    devbox: 'DevBox',
    fastgpt: 'FastGPT',
    contactUs: 'Contact Us',
    copyright: 'Copyright © 2024 MCP101. All rights reserved.',
    
    // URLs
    docsUrl: '/docs/core/introduction',
    appStoreUrl: '/blog',
    sealosUrl: 'https://sealos.io',
    devboxUrl: 'https://sealos.io/devbox',
    fastgptUrl: 'https://tryfastgpt.ai',
    contactUsUrl: 'mailto:contact@sealos.io',
  },
  'zh-cn': {
    // Category titles
    resourcesTitle: '资源',
    productsTitle: '产品',
    
    // Link texts
    docs: '文档',
    appStore: '博客',
    sealos: 'Sealos',
    devbox: 'DevBox',
    fastgpt: 'FastGPT',
    aiproxy: 'AI Proxy',
    case: '案例',
    forum: '社区',
    contactUs: '联系我们',
    copyright: 'Copyright © 2024 MCP101. All rights reserved.',
    
    // URLs - keeping the same URLs as English but can be customized if needed
    docsUrl: '/docs/core/introduction',
    appStoreUrl: '/blog',
    sealosUrl: 'https://sealos.run',
    devboxUrl: 'https://sealos.run/devbox',
    fastgptUrl: 'https://fastgpt.cn',
    aiproxyUrl: 'https://sealos.run/aiproxy',
    contactUsUrl: 'https://fael3z0zfze.feishu.cn/share/base/form/shrcn5oHHTKCf3VREMKOhEy6fmf',
    caseUrl: '/case',
    forumUrl: 'https://forum.sealos.run',
  },
};

// Generate the footer links with translated text and URLs
const getFooterLinks = (lang: languagesType) => {
  const translations = footerTranslations[lang];
  
  const productLinks = [...FooterLinksData.products.links];
  if (lang === 'zh-cn') {
    productLinks.push({ textKey: 'aiproxy', urlKey: 'aiproxyUrl', isExternal: false });
  }
  
  return {
    resources: {
      title: FooterLinksData.resources.titleKey ? translations[FooterLinksData.resources.titleKey] : '',
      links: FooterLinksData.resources.links.map(link => ({
        text: translations[link.textKey],
        url: translations[link.urlKey],
        isExternal: link.isExternal
      }))
    },
    products: {
      title: FooterLinksData.products.titleKey ? translations[FooterLinksData.products.titleKey] : '',
      links: productLinks.map(link => ({
        text: translations[link.textKey],
        url: translations[link.urlKey],
        isExternal: link.isExternal
      }))
    },
    legal: {
      links: FooterLinksData.legal.links.map(link => ({
        text: translations[link.textKey],
        url: translations[link.urlKey],
        isExternal: link.isExternal
      }))
    },
    copyright: translations.copyright
  };
};

interface FooterProps {
  lang?: languagesType;
}

const Footer = async ({ lang = i18n.defaultLanguage as languagesType }: FooterProps) => {
  const footerLinks = getFooterLinks(lang);
  
  return (
    <div className="relative w-full pt-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between text-sm max-xl:px-8 lg:flex-row">
        <div>
          <div className="mb-4 mr-4 md:flex">
            <Link
              href={'/'}
              aria-label={siteConfig.name}
              title={siteConfig.name}
              className="flex items-center gap-2 font-bold"
            >
              <img
                alt={siteConfig.name}
                src="/logo.svg"
                className="h-7 w-7"
                width={48}
                height={48}
              />
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </Link>
          </div>
          <div className="mt-3 text-xs font-medium text-custom-secondary-text sm:text-sm">
            {siteConfig.tagline}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 items-start gap-10 lg:mt-0">
          <FooterLinkColumn>
            <div className="text-base font-semibold uppercase text-black hover:text-black hover:no-underline">
              {footerLinks.resources.title}
            </div>
            {footerLinks.resources.links.map((link, index) => (
              <FooterLink key={index} href={link.url}>
                {link.text}
              </FooterLink>
            ))}
          </FooterLinkColumn>
          <FooterLinkColumn>
            <div className="text-base font-semibold uppercase text-black hover:text-black hover:no-underline">
              {footerLinks.products.title}
            </div>
            {footerLinks.products.links.map((link, index) => (
              <FooterLink key={index} href={link.url}>
                {link.text}
              </FooterLink>
            ))}
          </FooterLinkColumn>
        </div>
      </div>

      <div className="mt-16 h-[1px] w-full bg-[#DDE7F7]"></div>
      <div className="mx-auto flex max-w-7xl justify-between px-2 pb-6 pl-2 pt-4">
        <div className="flex items-center space-x-2 text-[10px] font-normal text-custom-secondary-text md:text-sm">
          {footerLinks.legal.links.map((link, index) => (
            <FooterLink
              key={index}
              className="text-[10px] font-normal text-custom-secondary-text md:text-sm"
              href={link.url}
            >
              {link.text}
            </FooterLink>
          ))}
          <div>{footerLinks.copyright}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
