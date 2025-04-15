import { GetStartedButton } from '@/components/ui/shiny-button';
import { ReactNode } from 'react';
import { languagesType, i18n } from '@/lib/i18n';
import { ImagePopup } from '@/components/ui/image-popup';

// Translation object for button text
const buttonTranslations: Record<languagesType, string> = {
  'en': 'Get Started',
  'zh-cn': '开始学习'
};

interface HeroProps {
  children?: ReactNode;
  title: {
    main: string;
    sub: string;
  };
  mainTitleEmphasis: number;
  getStartedLink: string;
  buttonTitle?: string;
  lang?: languagesType;
}

export default function Hero({
  children,
  title,
  mainTitleEmphasis,
  getStartedLink,
  buttonTitle,
  lang = i18n.defaultLanguage as languagesType
}: HeroProps) {
  const { partialTitle, highlightTitle } = splitTitle(
    title.main,
    mainTitleEmphasis,
  );

  // Use provided buttonTitle or get from translations based on language
  const buttonText = buttonTitle || buttonTranslations[lang];

  return (
    <section className="pt-12 sm:pt-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          <p className="font-pj mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
            {partialTitle}
            <span className="relative inline-flex sm:inline">
              <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-30 blur-lg filter"></span>
              <span className="relative"> {highlightTitle}</span>
            </span>
          </p>
          <br />
          <h1 className="font-inter px-6 text-lg text-gray-600">{title.sub}</h1>

          <div className="mt-9 flex items-center justify-center space-x-5">
            <GetStartedButton
              className="w-1/4 px-8 py-3 text-lg font-bold"
              link={getStartedLink}
              title={buttonText}
            />
            {/* <a
              href="#"
              title=""
              className="font-pj mt-4 inline-flex w-full items-center justify-center rounded-xl border-2 border-gray-400 px-6 py-3 text-lg font-bold text-gray-900 transition-all duration-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white focus:border-gray-900 focus:bg-gray-900 focus:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:mt-0 sm:w-auto"
              role="button"
            >
              <svg
                className="mr-2 h-5 w-5"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Watch free demo
            </a> */}
          </div>

          <div className="font-inter mt-8 text-sm text-gray-500">
          <ImagePopup
              imageSrc="/images/mcp-group-qrcode.jpg"
              imageAlt="MCP 开技术交流群二维码"
              title="加入 MCP 技术交流群： 迈出 MCP 开发第一步"
              description={
                <>
                  <p className="mb-4">扫描二维码加入我们的社群，开启你的 MCP 开发之旅！</p>
                  <div className="mb-2 flex items-center">
                    <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl font-bold">1</div>
                    <div>
                      <p className="font-bold">入群时请介绍： 1） 你的编程经验； 2） 想要开发的 MCP 应用。</p>
                    </div>
                  </div>
                  <div className="mb-2 flex items-center">
                    <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl font-bold">2</div>
                    <div>
                      <p className="font-bold">我们会在社群里面实战用 MCP 来操作各种云资源。</p>
                    </div>
                  </div>
                </>
              }
              qrCodeCaption="群聊：MCP 技术交流群"
            >
              <span className="underline cursor-pointer">加入 MCP 技术交流群：迈出 MCP 应用开发的第一步</span>
            </ImagePopup>
          </div>
        </div>
      </div>

      <div>{children}</div>
    </section>
  );
}

function splitTitle(str: string, numLastWords: number) {
  let words = str.trim().split(/\s+/); // Split string into words
  if (words.length === 0 || numLastWords <= 0)
    return { partialTitle: str, extractedWord: '' };

  // Ensure we don't try to take more words than exist
  numLastWords = Math.min(numLastWords, words.length);

  // Get the last numLastWords words
  let extractedWords = words.splice(-numLastWords);

  return {
    partialTitle: words.join(' '),
    highlightTitle: extractedWords.join(' '),
  };
}
