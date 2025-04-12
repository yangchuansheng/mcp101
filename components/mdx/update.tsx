'use client';

import React from 'react';

interface UpdateProps {
  label: string;
  description: string;
  children: React.ReactNode;
}

export function Update({ label, description, children }: UpdateProps) {
  // Generate an ID from the label for anchor linking
  const id = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div
      className="flex flex-col relative items-start w-full lg:flex-row gap-2 lg:gap-6 py-8 update-container"
      id={id}
    >
      {/* Left column with date and description */}
      <div className="lg:sticky top-[var(--scroll-mt)] group flex flex-col w-full lg:w-[160px] items-start flex-shrink-0 justify-start">
        {/* Anchor link */}
        <div className="absolute">
          <a
            href={`#${id}`}
            className="-ml-10 flex items-center opacity-0 border-0 group-hover:opacity-100"
            aria-label="Navigate to changelog"
          >
            <div className="w-6 h-6 rounded-md flex items-center justify-center shadow-sm text-gray-400 dark:text-white/50 dark:bg-background-dark dark:brightness-[1.35] dark:ring-1 dark:hover:brightness-150 bg-white ring-1 ring-gray-400/30 dark:ring-gray-700/25 hover:ring-gray-400/60 dark:hover:ring-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="gray" height="12px" viewBox="0 0 576 512">
                <path d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
              </svg>
            </div>
          </a>
        </div>

        {/* Date label */}
        <div
          className="cursor-pointer px-2 py-1 rounded-lg text-sm flex items-center flex-grow-0 justify-center font-medium bg-primary/10 text-primary dark:text-primary-light"
        >
          {label}
        </div>

        {/* Description */}
        <div
          className="px-1 text-secondary dark:text-secondary-light mt-3 text-sm max-w-[160px] break-words"
        >
          {description}
        </div>
      </div>

      {/* Right column with content */}
      <div className="flex-1 overflow-hidden px-0.5 max-w-full">
        <div className="prose-sm">
          {children}
        </div>
      </div>
    </div>
  );
}
