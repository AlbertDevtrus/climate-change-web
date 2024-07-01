import Image from 'next/image'
import { Maven_Pro } from "next/font/google";
import { ArrowLink } from '../icons';

const mavenPro = Maven_Pro({ subsets: ["latin"] });

interface Props {
  image: string,
  href: string,
  title: string,
  miniTitle: string,
  paragraphs: string[],  
}

export const Card = ( { image, href, title, miniTitle, paragraphs }: Props ) => {
  return (
    <article className={`${mavenPro.className} h-[85vh] w-5/6 overflow-hidden rounded-[30px] relative p-16 flex flex-col justify-between`}>
      <h2 className='text-slate-50 z-10 relative font-semibold uppercase text-6xl text-balance w-2/5 h-1/3 self-start tracking-tighter'>
        {title}
      </h2>
      <div className='w-full text-slate-50 z-10 relative flex items-end justify-between'>
        <a 
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-white text-black px-5 py-1 rounded-3xl text-lg font-medium flex items-center gap-3 transition-all duration-300 tracking-tighter hover:bg-gray-300 ml-10'
        >
          Learn more
          <div>
            <ArrowLink size="15" />
          </div>
        </a>
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
    
    </article>
  )
}
