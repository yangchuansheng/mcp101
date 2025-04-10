'use client';

import { cn } from '@/lib/utils';
import React, { forwardRef, useRef } from 'react';
import { AnimatedBeam, Circle } from '@/components/ui/animated-beam';
import { Database, Folder, Server, Globe, Cpu, LucideIcon } from 'lucide-react';
import Image from 'next/image';

export default function MCPArchitecture({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const server1Ref = useRef<HTMLDivElement>(null);
  const server2Ref = useRef<HTMLDivElement>(null);
  const server3Ref = useRef<HTMLDivElement>(null);
  const dataSource1Ref = useRef<HTMLDivElement>(null);
  const dataSource2Ref = useRef<HTMLDivElement>(null);
  const remoteServiceRef = useRef<HTMLDivElement>(null);
  const localComputerRef = useRef<HTMLDivElement>(null);
  const internetRef = useRef<HTMLDivElement>(null);

  // 协议标签组件
  const MCP_ProtocolLabel = ({ className }: { className?: string }) => (
    <div className={cn(
      "absolute px-1.5 py-0.5 bg-white/90 text-[9px] font-medium rounded-sm text-gray-600 border border-gray-200 shadow-sm z-10",
      className
    )}>
      MCP 协议
    </div>
  );

  const WEB_ProtocolLabel = ({ className }: { className?: string }) => (
    <div className={cn(
      "absolute px-1.5 py-0.5 bg-white/90 text-[9px] font-medium rounded-sm text-gray-600 border border-gray-200 shadow-sm z-10",
      className
    )}>
      Web API
    </div>
  );

  // 组容器标签组件
  const GroupLabel = ({ className, children }: { className?: string, children: React.ReactNode }) => (
    <div className={cn(
      "absolute px-2 py-0.5 bg-white/95 text-xs font-semibold rounded-md text-gray-700 border border-gray-200 shadow-sm z-20",
      className
    )}>
      {children}
    </div>
  );

  return (
    <div
      className={cn(
        'relative mx-auto flex w-full max-w-[700px] items-center justify-center overflow-hidden p-14',
        className,
      )}
      ref={containerRef}
    >
      {/* 本地电脑框 */}
      <div 
        ref={localComputerRef}
        className="absolute left-[5%] top-[6%] w-[88%] h-[83%] border-2 border-dashed border-gray-300 rounded-xl bg-gray-50/30 z-0"
      />
      
      {/* 互联网框 */}
      <div 
        ref={internetRef}
        className="absolute right-[5%] bottom-[10%] w-[25%] h-[30%] border-2 border-dashed border-gray-300 rounded-xl bg-gray-50/30 z-0"
      />
      
      {/* 组标签 */}
      <GroupLabel className="left-[10%] top-[9%]">你的计算机</GroupLabel>
      <GroupLabel className="right-[10%] bottom-[35%]">互联网</GroupLabel>

      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10 z-1">
        {/* MCP Client Host (Center) */}
        <div className="flex flex-col justify-center">
          <Circle
            ref={hostRef}
            className="h-24 w-24 border border-blue-200 bg-blue-50 shadow-lg shadow-blue-100/30"
          >
            <div className="flex flex-col items-center justify-center">
              <Cpu className="h-15 w-15 text-blue-500" />
              <span className="mt-1 text-center text-xs font-semibold text-blue-600">Host with MCP Client</span>
            </div>
          </Circle>
        </div>

        {/* MCP Servers (Right) */}
        <div className="flex flex-col justify-center gap-6">
          <Circle
            ref={server1Ref}
            className="h-20 w-20 border border-emerald-200 bg-emerald-50 p-3 shadow-md shadow-emerald-100/30"
          >
            <div className="flex flex-col items-center justify-center">
              <Server className="h-6 w-6 text-emerald-500" />
              <span className="mt-1 text-center text-[10px] text-emerald-600">Server A</span>
            </div>
          </Circle>
          <Circle
            className="h-20 w-20 border border-violet-200 bg-violet-50 p-3 shadow-md shadow-violet-100/30"
            ref={server2Ref}
          >
            <div className="flex flex-col items-center justify-center">
              <Server className="h-6 w-6 text-violet-500" />
              <span className="mt-1 text-center text-[10px] text-violet-600">Server B</span>
            </div>
          </Circle>
          <Circle
            className="h-20 w-20 border border-amber-200 bg-amber-50 p-3 shadow-md shadow-amber-100/30"
            ref={server3Ref}
          >
            <div className="flex flex-col items-center justify-center">
              <Server className="h-6 w-6 text-amber-500" />
              <span className="mt-1 text-center text-[10px] text-amber-600">Server C</span>
            </div>
          </Circle>
        </div>

        {/* Data Sources and Remote Services (Left) */}
        <div className="flex flex-col justify-center gap-6">
          <Circle
            ref={dataSource1Ref}
            className="h-20 w-20 border border-indigo-200 bg-indigo-50 p-3 shadow-md shadow-indigo-100/30"
          >
            <div className="flex flex-col items-center justify-center">
              <Database className="h-6 w-6 text-indigo-500" />
              <span className="mt-1 text-center text-[9px] leading-tight text-indigo-600">本地数据源 A</span>
            </div>
          </Circle>
          <Circle
            ref={dataSource2Ref}
            className="h-20 w-20 border border-teal-200 bg-teal-50 p-3 shadow-md shadow-teal-100/30"
          >
            <div className="flex flex-col items-center justify-center">
              <Folder className="h-6 w-6 text-teal-500" />
              <span className="mt-1 text-center text-[9px] leading-tight text-teal-600">本地数据源 B</span>
            </div>
          </Circle>
          <Circle
            ref={remoteServiceRef}
            className="h-20 w-20 border border-rose-200 bg-rose-50 p-3 shadow-md shadow-rose-100/30"
          >
            <div className="flex flex-col items-center justify-center">
              <Globe className="h-6 w-6 text-rose-500" />
              <span className="mt-1 text-center text-[9px] leading-tight text-rose-600">远程服务 C</span>
            </div>
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams for connections */}
      {/* Host to Servers */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={hostRef}
        toRef={server1Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={hostRef}
        toRef={server2Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={hostRef}
        toRef={server3Ref}
        duration={3}
      />

      {/* Servers to Data Sources */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={server1Ref}
        toRef={dataSource1Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={server2Ref}
        toRef={dataSource2Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={server3Ref}
        toRef={remoteServiceRef}
        duration={3}
      />
      
      {/* MCP Protocol Labels */}
      <MCP_ProtocolLabel className="left-[32%] top-[40%] translate-y-[-50%] rotate-[-28deg]" />
      <MCP_ProtocolLabel className="left-[32%] top-[50%] translate-y-[-50%]" />
      <MCP_ProtocolLabel className="left-[32%] top-[60%] translate-y-[-50%] rotate-[28deg]" />

      {/* WEB Protocol Labels */}
      <WEB_ProtocolLabel className="left-[66%] top-[78%] translate-y-[-50%]" />
    </div>
  );
}
