import HistorySection from "@/components/historic-section/HistorySection";
import NavBar from "@/components/NavBar";
import { CartSection } from "@/components/carts-section/CartSection";
import MaxTemp from "@/components/MaxTemp";
import { InfoSection } from "@/components/info-section/InfoSection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <MaxTemp />
      <InfoSection />
      <HistorySection />
      <CartSection />
    </main>
  );
}
