'use client';
import React from 'react';
import { BentoCard } from './feature-grid/bentogrid';
import { Integrations } from './feature-grid/integrations';
import { AnimateElement } from '@/components/ui/animated-wrapper';

export default function FeatureGrid() {
  return (
    <AnimateElement type="slideUp">
      <div>
        <div className="text-center text-base font-bold text-black sm:text-4xl">
          每个人都能创造自己的 MCP Server
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-1">
          <BentoCard
            eyebrow="标准化"
            title="AI 领域的 “USB-C接口”"
            description="模型上下文协议（MCP） 就像是为 AI 模型量身定制的 “USB-C接口”，可以标准化地连接 AI 系统与各类外部工具和数据源。就像 USB-C 接口让你的电脑更容易连接各种设备一样，MCP 让 AI 模型更简单地获取数据、工具与服务。"
            image="/images/home/mcp-architecture.png"
            imageAlt="MCP 是什么"
            imageFit="contain"
            className="max-lg:rounded-t-4xl lg:rounded-tl-4xl lg:col-span-3"
          />
          <BentoCard
            eyebrow="大爆发"
            title="开放生态"
            description="MCP 作为开放协议，允许任何开发者为其产品创建 MCP 服务器。这意味着整个生态将快速扩展，形成类似 HTTP 和 REST API 的网络效应，推动模型与应用场景的无缝融合。"
            graphic={<Integrations />}
            className="lg:rounded-bl-4xl lg:col-span-3"
          />
        </div>
      </div>
    </AnimateElement>
  );
}
