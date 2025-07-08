"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    img: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden py-6",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-1 xmd:gap-4",
          start && "animate-scroll",
          pauseOnHover &&
            "active:[animation-play-state:paused] sm:hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <a href={item.img} key={idx} target="_blank" className="my-auto ">
            <li
              className="relative h-fit w-[244px] xmd:w-[312px] max-w-full shrink-0 rounded-md bg-background/50  dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] border shadow-lg"
              key={item.title}
            >
              <div className="xmd:p-4 p-1">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-auto object-fill object-top rounded-md max-h-82 shadow border"
                />
              </div>
              <h3 className="px-1 xmd:px-4 pb-1 pt-1 xmd:pt-0 xmd:pb-4 text-primary font-semibold text-center">
                {item.title}
              </h3>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};
