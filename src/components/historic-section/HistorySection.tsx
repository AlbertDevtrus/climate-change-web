import HistoricChart from "./HistoricChart";

export default function HistorySection() {
  return (
    <section className="h-screen bg-gradient-to-b from-[#6F0000] to-[#BC0000] flex items-center justify-center" id="historic-chart">
      <HistoricChart />
    </section>
  )
}
