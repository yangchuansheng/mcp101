'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

function Marker({
  src,
  alt,
  top,
  offset,
  delay,
}: {
  src: string;
  alt: string;
  top: number;
  offset: number;
  delay: number;
}) {
  return (
    <motion.div
      variants={{
        idle: { scale: 0, opacity: 0, rotateX: 0, rotate: 0, y: 0 },
        active: { y: [-20, 0, 4, 0], scale: [0.75, 1], opacity: [0, 1] },
      }}
      transition={{ duration: 0.25, delay, ease: 'easeOut' }}
      style={{ '--offset': `${offset}px`, top } as React.CSSProperties}
      className="absolute left-[calc(50%+var(--offset))] size-[38px] drop-shadow-[0_3px_1px_rgba(0,0,0,.15)]"
    >
      <svg fill="none" viewBox="0 0 38 38" className="absolute size-full">
        <path
          d="M29.607 5.193c5.858 5.857 5.858 15.355 0 21.213l-9.9 9.9-.707.706-.708-.708-9.899-9.898c-5.857-5.858-5.857-15.356 0-21.213 5.858-5.858 15.356-5.858 21.214 0Z"
          className="fill-black/5 dark:fill-white/5"
        />
        <path
          d="m28.9 25.698-9.9 9.9-9.9-9.9C3.634 20.232 3.634 11.367 9.1 5.9 14.569.432 23.433.432 28.9 5.9c5.467 5.468 5.467 14.332 0 19.8Z"
          className="fill-white dark:fill-black"
        />
      </svg>
      <Image
        alt={alt}
        src={src}
        className="absolute left-[7px] top-[4px] size-6 rounded-full"
        width={1024}
        height={1024}
      />
    </motion.div>
  );
}

export function Map() {
  return (
    <div aria-hidden="true" className="relative size-full">
      <div className="absolute inset-0 bg-[url(/images/map.png)] bg-[length:530px_430px] bg-[center_-75px] bg-no-repeat [mask-image:linear-gradient(to_bottom,black_50%,transparent)]" />
      <div className="absolute inset-0">
        <Marker
          src="/images/faces/male-1.jpg"
          alt="Male Face 1"
          top={96}
          offset={-128}
          delay={0.15}
        />
        <Marker
          src="/images/faces/female-1.jpg"
          alt="Female Face 1"
          top={160}
          offset={-16}
          delay={0.4}
        />
        <Marker
          src="/images/faces/male-2.jpg"
          alt="Male Face 2"
          top={144}
          offset={96}
          delay={0.3}
        />
        <Marker
          src="/images/faces/male-3.jpg"
          alt="Male Face 3"
          top={192}
          offset={64}
          delay={0.6}
        />
        <Marker
          src="/images/faces/female-2.jpg"
          alt="Female Face 2"
          top={224}
          offset={-32}
          delay={0.8}
        />
        <Marker
          src="/images/faces/female-3.jpg"
          alt="Female Face 3"
          top={30}
          offset={-40}
          delay={0.25}
        />
      </div>
    </div>
  );
}
