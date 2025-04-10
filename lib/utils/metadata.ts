import { blogAuthors, domain, siteConfig } from '@/config/site';
import { blog } from '@/lib/source';
import { source } from '@/lib/source';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

const ogImageApi = `${siteConfig.url.base}/api/og`;

const siteName = siteConfig.name;

export async function generateBlogMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const blogImageApi = `${ogImageApi}/blog/`;
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  const isRootPage = !params.slug || params.slug.length === 0;

  if (!page && !isRootPage) notFound();

  let url = `${siteConfig.url.base}/blog`;
  let docTitle = 'Sealos Blog';
  let imageUrl = blogImageApi + docTitle;
  let description = 'Sealos Blog';
  let keywords = ['Sealos', 'Blog'];

  if (page) {
    url = `${siteConfig.url.base}/blog/${page.slugs.join('/')}`;
    imageUrl = blogImageApi + page.data.title;
    docTitle = `${page.data.title} | Sealos Blog`;
    description = page.data.description;
  }

  return {
    metadataBase: new URL(siteConfig.url.base),
    title: {
      absolute: docTitle,
    },
    description: description,
    keywords: keywords,
    alternates: {
      canonical: `${domain}/blog/${params.slug || ''}`,
    },
    openGraph: {
      url,
      title: docTitle,
      description: description,
      tags: keywords,
      images: imageUrl,
      authors: page
        ? page.data.authors.map((author) => blogAuthors[author].name)
        : undefined,
      siteName: siteName,
      type: page ? 'article' : 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitterHandle,
      title: docTitle,
      description: description,
      images: imageUrl,
    },
  };
}

export function generateDocsMetadata({
  params,
}: {
  params: { lang: string; slug?: string[] };
}) {
  const docsImageApi = `${ogImageApi}/docs/`;

  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const fullPathTitle = page.slugs
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' > ');

  const url = `${siteConfig.url.base}/docs/${page.slugs.join('/')}`;
  const imageUrl =
    docsImageApi +
    (fullPathTitle ? fullPathTitle.toUpperCase() : 'Sealos Docs');

  const isRootPage = !params.slug || params.slug.length === 0;
  const docTitle = isRootPage
    ? 'Sealos Docs'
    : `${fullPathTitle} | Sealos Docs`;

  return {
    metadataBase: new URL(siteConfig.url.base),
    title: {
      absolute: docTitle,
    },
    description: page.data.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      url,
      title: docTitle,
      description: page.data.description,
      images: imageUrl,
      siteName: siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitterHandle,
      title: docTitle,
      description: page.data.description,
      images: imageUrl,
    },
  } satisfies Metadata;
}

export function generatePageMetadata(
  options: {
    title?: string;
    description?: string;
    keywords?: string[];
    pathname?: string | null;
  } = {},
): Metadata {
  const websiteImageApi = `${ogImageApi}/website/`;
  const title = options.title
    ? `${options.title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;
  const description = options.description
    ? options.description
    : siteConfig.description;
  const keywords = options.keywords ? options.keywords : siteConfig.keywords;
  const getImage = options.pathname
    ? options.pathname.replace(/^\/+/, '')
    : undefined;
  const imageUrl = websiteImageApi + (getImage || 'default');

  return {
    title: title,
    description: description,
    keywords: keywords,
    // alternates: {
    //   canonical: siteConfig.url.base,
    // },
    openGraph: {
      type: 'website',
      // url: siteConfig.url.base,
      siteName: siteName,
      title: title,
      description: description,
      images: [imageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [imageUrl],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
    },
    metadataBase: new URL(siteConfig.url.base),
  };
}
