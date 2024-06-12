'use client';

import Link from "next/link";
import styles from './modules/nav-bar.module.css'

import { ChartIcon, EarthIcon, InfoIcon, TempIcon } from "./Icons";
import React, { useEffect } from "react";

// TODO: Change the form of selector when moving

export default function NavBar() {

  const moveSelector = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    
    const parent = target.closest('li');
    const { top, left, width, height } = parent!.getBoundingClientRect();

    const selector = document.querySelector('#selector') as HTMLElement;

    if(selector) {
      selector.style.setProperty('--top', `${top - (height * 0.26)}px`)
      selector.style.setProperty('--left', `${left - (width * 0.26)}px`)
    }
  }

  useEffect(() => {
    const link = document.querySelector('.first');

    const { top, left, width, height } = link!.getBoundingClientRect();

    const selector = document.querySelector('#selector') as HTMLElement;

    if(selector) {
      selector.style.setProperty('--top', `${top - (height * 0.26)}px`)
      selector.style.setProperty('--left', `${left - (width * 0.26)}px`)
    }
  }, []);

  return (
    <>
      <div className={`bg-white w-9 h-9 rounded-full opacity-25 ${styles.selector}`} id="selector" />
      <nav className="fixed right-14 bottom-1/3">
        <ul className="flex flex-col gap-8">
          <li className="text-white first" onClick={moveSelector}>
            <Link href='#'>
              <TempIcon />
            </Link>
          </li>
          <li className="text-white" onClick={moveSelector}>
            <Link href='#'>
              <ChartIcon />
            </Link>
          </li>
          <li className="text-white" onClick={moveSelector}>
            <Link href='#'>
              <InfoIcon />
            </Link>
          </li>
          <li className="text-white" onClick={moveSelector}>
            <Link href='#'>
              <EarthIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
