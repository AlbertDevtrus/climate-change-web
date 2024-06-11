'use client';

import Link from "next/link";
import styles from './modules/nav-bar.module.css'

import { ChartIcon, EarthIcon, InfoIcon, TempIcon } from "./Icons";

export default function NavBar() {

  const moveSelector = ({target}) => {
    const { top, left, width, height } = target.getBoundingClientRect();

    const selector = document.querySelector('#selector') as HTMLElement;

    console.log(top, left, width, height)

    if(selector) {
      selector.style.setProperty('--top', `${top - (height * 0.26)}px`)
      selector.style.setProperty('--left', `${left - (width * 0.26)}px`)
    }

  }

  return (
    <>
      <div className={`bg-white w-9 h-9 rounded-full opacity-25 ${styles.selector}`} id="selector" />
      <nav className="fixed right-14 bottom-1/3">
        <ul className="flex flex-col gap-8">
          <li className="text-white" onClick={moveSelector}>
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
