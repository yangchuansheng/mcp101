'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useId, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Marquee } from '../marquee';
import { tiles } from './integrations/tiles';

function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length;
  let randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function Card(card: { icon: JSX.Element; bg: JSX.Element }) {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        // opacity: 1,
        transition: { delay: Math.random() * 2, ease: 'easeOut', duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 1 }}
      animate={controls}
      className={cn(
        'relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4',
        // light styles
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        // dark styles
        'transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      )}
    >
      {card.icon}
      {card.bg}
    </motion.div>
  );
}

export function Integrations() {
  const [randomTiles1, setRandomTiles1] = useState<typeof tiles.line1>([]);
  const [randomTiles2, setRandomTiles2] = useState<typeof tiles.line2>([]);
  const [randomTiles3, setRandomTiles3] = useState<typeof tiles.line3>([]);
  const [randomTiles4, setRandomTiles4] = useState<typeof tiles.line1>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensures this runs client-side
      setRandomTiles1(shuffleArray([...tiles.line1]));
      setRandomTiles2(shuffleArray([...tiles.line2]));
      setRandomTiles3(shuffleArray([...tiles.line3]));
      setRandomTiles4(shuffleArray([...tiles.line4]));
    }
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee reverse className="-delay-[200ms] [--duration:10s]" repeat={5}>
          {randomTiles1.map((review, idx) => (
            <Card key={idx} {...review} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:25s]" repeat={5}>
          {randomTiles2.map((review, idx) => (
            <Card key={idx} {...review} />
          ))}
        </Marquee>
        <Marquee reverse className="-delay-[200ms] [--duration:20s]" repeat={5}>
          {randomTiles3.map((review, idx) => (
            <Card key={idx} {...review} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:30s]" repeat={5}>
          {randomTiles4.map((review, idx) => (
            <Card key={idx} {...review} />
          ))}
        </Marquee>
        <Marquee reverse className="-delay-[200ms] [--duration:20s]" repeat={5}>
          {randomTiles3.map((review, idx) => (
            <Card key={idx} {...review} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:30s]" repeat={5}>
          {randomTiles4.map((review, idx) => (
            <Card key={idx} {...review} />
          ))}
        </Marquee>
        <div className="absolute ">
          <div className="absolute inset-0 -z-10 rounded-full  bg-background opacity-40 blur-xl dark:bg-background" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-background to-70% dark:to-background" />
      </div>
    </div>
  );
}
