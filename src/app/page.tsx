import ReferalSection from "./components/ReferalSection/ReferalSection";
import StoreSection from "./components/StoreSection/StoreSection";
import "./styles/global.scss";

export default function Home() {
  return (
    <main>
      <ReferalSection />
      <StoreSection />
    </main>
  );
}
