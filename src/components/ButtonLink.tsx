import { ArrowLink } from './icons'

interface Props {
  href: string;
  text?: string;
}

export const ButtonLink = ({ href, text = 'Learn more' }: Props) => {
  return (
    <a 
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='text-slate-200 px-5 py-1 rounded-3xl text-lg font-medium flex items-center gap-3 transition-all duration-[400ms] tracking-tighter border-2 border-white border-opacity-60 bg-white bg-opacity-0 hover:bg-opacity-[0.08]'
    >
      {text}
      <div>
        <ArrowLink size="15" />
      </div>
    </a>
  )
}
