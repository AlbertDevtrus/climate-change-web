import Image from "next/image"
import { Lexend, Maven_Pro } from "next/font/google"
import { ButtonLink } from "../ButtonLink"

const lexend = Lexend({ subsets: ['latin'], weight: ['400', '700'] })
const mavenPro = Maven_Pro({ subsets: ['latin'], weight: ['400'] })

export const InfoSection = () => {
  return (
    <section className="relative h-screen snap-start snap-always flex flex-col justify-end bg-[#6F0000] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[65%] bg-black bg-opacity-60 z-10 flex items-end justify-center">
        <h1 className={`${lexend.className} text-9xl text-white tracking-wider`}>WARNING</h1>
      </div>
      <Image 
        className="w-full object-cover absolute top-0 left-0 h-[65%] object-center"
        src={"/images/factories.jpg"} 
        alt={"factories"}
        width={2000}      
        height={1100}      
        quality={100}
      />
      <div className="h-[35%] pt-10 pb-14 flex items-start z-20">
        <div className="w-2/5 flex justify-center items-center ">
          <ButtonLink href="#" text="More info" />
        </div>
        <div className={`${mavenPro.className} w-3/5 text-white self-end`}>
          <p className="w-full pr-52 mb-5 text-pretty">
            Global surface temperature has increased faster since 1970 than during any other 50-year period over at least the past 2000 years. If carbon dioxide emissions continue on their current course, temperatures could rise by up to 4.4°C by the end of the century.
          </p>
          <p className="w-full pr-60 text-pretty">
            The hottest year in two centuries was 2023, since we have records.
            And the actual year 2024 is predicted to break that record!
          </p>
        </div>
      </div>
    </section>
  )
}
