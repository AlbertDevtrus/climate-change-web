import HistoricChart from "./HistoricChart";

export default function HistorySection() {
  return (
    <section className="h-[150vh] bg-gradient-to-b from-[#6F0000] to-[#FE0000] flex items-center justify-center" id="historic-chart">
      <HistoricChart />
    </section>
  )
}
