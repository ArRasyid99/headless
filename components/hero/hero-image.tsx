import Image from "next/image";
export default function HeroImage() {
  return (
    <div className="hero-image">
      <Image
  src="/images/masjid-img.webp"
  alt="Hero Image"
  width={920}
  height={680}
  className="max-w-full h-auto rounded-xl"
/>
    </div>
  );
}
