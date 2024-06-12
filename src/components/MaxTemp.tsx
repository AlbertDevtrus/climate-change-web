import { KoHo } from "next/font/google";
import styles from './modules/max-temp.module.css'

const koho = KoHo({weight: '300', subsets: ['latin']})

export default function MaxTemp() {
  return (
    <section className='bg-[#6F0000] h-screen w-full text-[#FFF5F5] flex flex-col items-center justify-center'>
      <h1 className={`${koho.className} text-[25vw] tracking-tighter`}>40</h1>
      <div className={styles.celcius} />
      <span className="text-opacity-50 text-white relative bottom-16 text-lg">London</span>
    </section>
  )
}
