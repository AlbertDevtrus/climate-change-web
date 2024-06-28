import { Card } from "./Card"

const cards = [
  {
    id: 1,
    title: "Why is a problem?",
    image: "/cards-images/wildfire.avif",
    href: "https://www.noaa.gov/noaa-wildfire/wildfire-climate-connection", 
    miniTitle: "Wildlife",
    paragraphs: ["Just in 2023, wildfires destroyed almost 400 million hectares, claimed more than 250 lives and released 6.5 billion tons of CO2 into the atmosphere.", "The increase in these is due to drier and warmer conditions related to climate change."],
  },
  {
    id: 2,
    title: "HOW TO SOLVE IT?",
    image: "/cards-images/red-panda.jpg",
    href: "https://www.nrdc.org/stories/how-you-can-stop-global-warming", 
    miniTitle: "CARBON FOOTPRINT",
    paragraphs: ["Reduce your carbon footprint, walking or cycling instead of driving reduces greenhouse gas emissions.", "For longer distances, consider traveling by train or bus. And carpool whenever possible."],
  },
  {
    id: 3,
    title: "WHAT ARE WE DOING?",
    image: "/cards-images/paris-agreement.png",
    href: "https://www.un.org/en/climatechange/paris-agreement", 
    miniTitle: "PARIS AGREEMENT",
    paragraphs: ["The Agreement includes commitments from all countries to reduce their emissions and work together to adapt to the impacts of climate change, and calls on countries to strengthen their commitments over time. ", "Although it is still not enough, we have hope for the future."],
  },
]

export const CartSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#BC0000] to-[#FE0000] flex flex-col items-center justify-start py-14 px-32 gap-10">
      
      {
        cards.map(card => (
          <Card 
            key={card.id}
            image={card.image}
            href={card.href} 
            title={card.title}
            miniTitle={card.miniTitle}
            paragraphs={card.paragraphs}
          />
        ))
      }

    </section>
  )
}
