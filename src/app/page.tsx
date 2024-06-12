import HistorySection from "@/components/HistorySection";
import MaxTemp from "@/components/MaxTemp";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <MaxTemp />
      <HistorySection />
    </main>
  );
}
