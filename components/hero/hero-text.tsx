import Image from "next/image";

import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","600"],
  display: "swap",
})

export default function HeroText() {
  return (
    <div className="hero-text">
      <h1>Menebarkan Sunnah Rasulullah ﷺ Membangun Umat</h1>
      <p className="text-justify">
        Masjid Muhammad Al Qosim pusat pembinaan umat, melalui dakwah dan pendidikan islam dengan berlandaskan Al-Qur’an dan Sunnah sesuai pemahaman salafus shalih.
      </p>
      <a href="/about" className="hero-button">

        <Image
        src="/icons/icon-eye.svg"
        alt=""
        width={16}
        height={16}
        className="icon-eye"
      />
        Selengkapnya
      </a>
    </div>
  );
}
