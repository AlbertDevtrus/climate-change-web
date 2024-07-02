"use client";

import Link from "next/link";

import React, { useEffect } from "react";
import { motion, useAnimate, useMotionValue } from "framer-motion";
import { TempIcon, ChartIcon, InfoIcon, EarthIcon } from "./icons/Icons";

import { getLocomotiveScroll } from "@/utilitys/locomotiveScroll";

export default function NavBar() {
  const [scope, animate] = useAnimate();
  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const moveSelector = async (e: React.MouseEvent<HTMLElement>, href?: string) => {
    const target = e.target as HTMLElement;

    const parent = target.closest("li");
    const { top, left, width, height } = parent!.getBoundingClientRect();

    const selector = document.querySelector("#selector");
    const { top: topSelector } = selector!.getBoundingClientRect();

    if (topSelector > top) {
      animate(
        scope.current,
        {
          y: top - height * -0.1,
          x: left - width * 0.26,
          scaleX: [1, 0.8],
          scaleY: [1, 1.3],
        },
        { duration: 0 }
      );

      animate(
        scope.current,
        {
          y: top - height * 0.26,
          x: left - width * 0.26,
          scaleX: [0.8, 1],
          scaleY: [1.3, 1],
        },
        { duration: 0.6 }
      );
    } else {
      animate(
        scope.current,
        {
          y: top - height * 0.9,
          x: left - width * 0.26,
          scaleX: [1, 0.8],
          scaleY: [1, 1.3],
        },
        { duration: 0 }
      );

      animate(
        scope.current,
        {
          y: top - height * 0.26,
          x: left - width * 0.26,
          scaleX: [0.8, 1],
          scaleY: [1.3, 1],
        },
        { duration: 0.6 }
      );
    }

    const locomotiveScroll = await getLocomotiveScroll();

    locomotiveScroll.scrollTo(href)
  };

  useEffect(() => {
    const link = document.querySelector(".first");

    const { top, left, width, height } = link!.getBoundingClientRect();

    animate(
      scope.current,
      { y: top - height * 0.26, x: left - width * 0.26 },
      { duration: 0 }
    );
    animate(scope.current, { opacity: 0.25 }, { duration: 0.5 });
  }, [animate, scope]);

  return (
    <>
      <motion.div
        className={`bg-white w-9 h-9 rounded-full opacity-0 fixed`}
        ref={scope}
        id="selector"
        style={{
          scaleX: scale.x,
          scaleY: scale.y,
        }}
      />
      <nav className="fixed right-14 bottom-1/3">
        <ul className="flex flex-col gap-8">
          <li className="text-white first" onClick={(e) => moveSelector(e, '#max-temp')}>
            <a href="#max-temp">
              <TempIcon />
            </a>
          </li>
          <li className="text-white" onClick={(e) => moveSelector(e, '#historic-chart')}>
            <Link href="#historic-chart">
              <ChartIcon />
            </Link>
          </li>
          <li className="text-white" onClick={(e) => moveSelector(e, '#carts-section')}>
            <Link href="#carts-section">
              <InfoIcon />
            </Link>
          </li>
          <li className="text-white" onClick={(e) => moveSelector(e, '#max-temp')}>
            <Link href="#">
              <EarthIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
