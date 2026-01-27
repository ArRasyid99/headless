import "./hero.css";
import HeroText from "@/components/hero/hero-text";
import HeroImage from "@/components/hero/hero-image";

export default function Hero() {
  return (
    <section className="hero">
      <HeroText />
      <HeroImage />
    </section>
  );
}
