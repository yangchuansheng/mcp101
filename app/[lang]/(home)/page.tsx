import Guides from './components/guides';
import Trusted from './components/trusted';
import FeatureGrid from './components/feature-grid';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/header/hero';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import Video from '@/components/video';
import { HovermeButton } from '@/components/button/hoverme';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { appDomain } from '@/config/site';
import { languagesType } from '@/lib/i18n';
import placeholderImage from '/public/images/video.webp';

const title = {
  main: '学习 MCP，用 AI 连接万物',
  sub: '欢迎来到 MCP 101。这里提供免费的 MCP 入门文档和实用教程，助您快速掌握 AI 应用的 "USB-C接口"。',
};

export const metadata = generatePageMetadata();

export default function HomePage({
  params,
}: {
  params: { lang: languagesType };
}) {
  return (
    <div className="h-full bg-[#EBF2FF]">
      <Header lang={params.lang} />
      <main className="custom-container px-8 pt-14 md:px-[15%]">
        <Hero title={title} mainTitleEmphasis={2} getStartedLink='/docs/core/introduction' lang={params.lang}>
        </Hero>

        <div className="mb-[64px]  mt-[64px] h-[1px] bg-[#DDE7F7]"></div>
        <div className="mb-[64px]  mt-[64px]"></div>
        <FeatureGrid />
        <Guides />
      </main>
      <div className="mt-[140px] h-[1px] bg-[#DDE7F7]"></div>
      <Footer lang={params.lang} />
      <TailwindIndicator />
    </div>
  );
}
