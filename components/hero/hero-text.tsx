import Image from "next/image";




export default function HeroText() {
  return (
    <div className="hero-text">
      <h1 className="font-title mb-4 text-2xl md:text-3xl lg:text-5xl">Menebarkan Sunnah Rasulullah ﷺ Membangun Umat</h1>
      <p className="font-caption mb-10 text-justify text-base md:text-sm lg:text-sm">
        Masjid Muhammad Al Qosim pusat pembinaan umat, melalui dakwah dan pendidikan islam dengan berlandaskan Al-Qur’an dan Sunnah sesuai pemahaman salafus shalih.
      </p>
            <a
          href="/about"
          className="
            inline-flex items-center gap-2
            mt-6
            rounded-full
            bg-[#ffae00]
            px-4 py-3
            font-caption font-extralight text-xs text-white
          "
        >
          <Image
            src="/icons/icon-eye.svg"
            alt=""
            width={16}
            height={16}
          />
          Selengkapnya
        </a>

         

    </div>
  );
}
