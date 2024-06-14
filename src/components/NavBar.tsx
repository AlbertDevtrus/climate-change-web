"use client";

import Link from "next/link";

import { ChartIcon, EarthIcon, InfoIcon, TempIcon } from "./Icons";
import React, { useEffect } from "react";
import {
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";

export default function NavBar() {
  const [scope, animate] = useAnimate();
  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const moveSelector = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;

    const parent = target.closest("li");
    const { top, left, width, height } = parent!.getBoundingClientRect();

    const selector = document.querySelector("#selector");
    const { top: topSelector } = selector!.getBoundingClientRect();

    console.log(top, topSelector);

    if (topSelector > top) {
      animate(scope.current, {
        y: top - height * -0.1,
        x: left - width * 0.26,
        scaleX: [1, 0.8],
        scaleY: [1, 1.3],
      }, {duration: 0});

      animate(scope.current, {
        y: (top - (height * 0.26)),
        x: (left - (width * 0.26)),
        scaleX: [0.8, 1],
        scaleY: [1.3, 1]
      }, {duration: 0.6})

    } else {
      animate(scope.current, {
        y: top - height * 0.9,
        x: left - width * 0.26,
        scaleX: [1, 0.8],
        scaleY: [1, 1.3],
      }, {duration: 0});

      animate(scope.current, {
        y: top - height * 0.26,
        x: left - width * 0.26,
        scaleX: [0.8, 1],
        scaleY: [1.3, 1],
      }, {duration: 0.6})
    }
  };

  useEffect(() => {
    const link = document.querySelector(".first");

    const { top, left, width, height } = link!.getBoundingClientRect();

    animate(scope.current, { y: top - height * 0.26, x: left - width * 0.26 });
  }, [animate, scope]);

  return (
    <>
      <motion.div
        className={`bg-white w-9 h-9 rounded-full opacity-25 fixed`}
        ref={scope}
        id="selector"
        style={{
          scaleX: scale.x,
          scaleY: scale.y,
        }}
      />
      <nav className="fixed right-14 bottom-1/3">
        <ul className="flex flex-col gap-8">
          <li className="text-white first" onClick={moveSelector}>
            <Link href="#max-temp">
              <TempIcon />
            </Link>
          </li>
          <li className="text-white" onClick={moveSelector}>
            <Link href="#historic-chart">
              <ChartIcon />
            </Link>
          </li>
          <li className="text-white" onClick={moveSelector}>
            <Link href="#">
              <InfoIcon />
            </Link>
          </li>
          <li className="text-white" onClick={moveSelector}>
            <Link href="#">
              <EarthIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
