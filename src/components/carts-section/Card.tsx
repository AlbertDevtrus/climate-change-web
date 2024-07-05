'use client';

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import { Maven_Pro } from "next/font/google";

import { ArrowLink } from '../icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ButtonLink } from '../ButtonLink';


const mavenPro = Maven_Pro({ subsets: ["latin"] });

interface Props {
  image: string,
  href: string,
  title: string,
  miniTitle: string,
  paragraphs: string[],  
}

export const Card = ( { image, href, title, miniTitle, paragraphs }: Props ) => {

  const container = useRef(null);
  const vertMargin = 8;
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["0 1", "1 1"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  
  return (
      <motion.article
        ref={container}
        className={`${mavenPro.className} sticky h-[84vh] w-11/12 overflow-hidden rounded-[30px] p-16 flex flex-col justify-between`}
        style={{
          top: `${vertMargin}vh`,
          height: `${100 - 2 * vertMargin}vh`,
          scale: scale,
        }}
      >
        <h2 className='text-slate-50 z-10 relative font-semibold uppercase text-6xl text-balance w-2/5 h-1/3 self-start tracking-tighter'>
          {title}
        </h2>
        <div className='w-full text-slate-50 z-10 relative flex items-end justify-between'>
          <div className='ml-10'>
            <ButtonLink href={href} />

          </div>
          <div className='w-52 bg-[#3D3D3D] bg-opacity-40 p-6 rounded-3xl'>
            <h3 className='uppercase font-semibold text-3xl text-center'>{miniTitle}</h3>
            {
              paragraphs.map((paragraph, i) => (
                <p key={i} className='text-pretty text-sm opacity-70 tracking-tighter leading-4 pt-4'>
                  {paragraph}
                </p>
              ))
            }
          </div>
        </div>
        <Image 
          src={image}
          alt={`Photo for the topic ${miniTitle}`}
          width={5000}
          height={5000}
          className='h-full w-full object-cover z-0 absolute top-0 left-0'
        />
        <div className='h-full w-full bg-black bg-opacity-40 z-0 absolute top-0 left-0' />
      </motion.article>
  )
}
