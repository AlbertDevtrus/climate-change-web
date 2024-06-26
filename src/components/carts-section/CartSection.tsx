import { Card } from "./Card"

export const CartSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-[#BC0000] to-[#FE0000] flex items-center justify-start py-14 px-32">
      <Card 
        image="/cards-images/wildfire.avif"
        href="https://www.noaa.gov/noaa-wildfire/wildfire-climate-connection" 
        title="Why is a problem?" 
        miniTitle="Wildlife"
        paragraphs={["Just in 2023, wildfires destroyed almost 400 million hectares, claimed more than 250 lives and released 6.5 billion tons of CO2 into the atmosphere.", "The increase in these is due to drier and warmer conditions related to climate change."]}
      />
    </section>
  )
}
