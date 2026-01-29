import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden md:px-20 bg-linear-to-br from-teal-50 to-white">
        <div className="container mx-auto mb-40 py-10 grid gap-12 items-center
                lg:grid-cols-[40%_60%]">
      {/* <div className="container mx-auto mb-40 py-10 grid lg:grid-cols-2 gap-12 items-center"> */}

        {/* TEXT */}
        <div className="relative z-10">
          <div className="hero-text">
        <h1 className="font-title mb-4 text-lg md:text-3xl lg:text-5xl dark:invert">Menebarkan Sunnah Rasulullah ﷺ Membangun Umat</h1>
        <p className="font-caption mb-10 text-justify w-2xs text-base md:text-sm lg:text-sm dark:invert">
            Masjid Muhammad Al Qosim pusat pembinaan umat, melalui dakwah dan pendidikan islam dengan berlandaskan Al-Qur’an dan Sunnah sesuai pemahaman salafus shalih.
        </p>
        </div>
          <Link
            href="/about"
            className="
           inline-flex items-center gap-2
            mt-6
            rounded-full
            bg-[#ffae00]
            px-4 py-3
            font-caption font-extralight text-xs text-white">

             <Image
                src="/icons/icon-eye.svg"
                alt=""
                width={16}
                height={16}
             />

            Selengkapnya
          </Link>
        </div>
                        {/* IMAGE STACK */}
                <div className="relative w-full max-w-xl mx-auto">

                {/* MOBILE: vertical stack */}
                <div className="flex flex-col gap-4 md:hidden">
                    <div className="relative w-[90%] aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/images/hero-img1.jpg"
                        alt="Hero utama"
                        fill
                        className="object-cover"
                        loading="eager"
                        priority
                    />
                    </div>

                    <div className="relative w-[90%] aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                        src="/images/hero-img2.jpg"
                        alt="Hero kedua"
                        fill
                        className="object-cover"
                        loading="eager"
                        priority
                    />
                    </div>
                </div>

                {/* DESKTOP: overlapping */}
                <div className="relative aspect-video hidden md:block">

                    {/* Image utama */}
                    <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src="/images/hero-img1.jpg"
                        alt="Hero utama"
                        fill
                        className="object-cover"
                        sizes="50vw"
                    />
                    </div>

                    {/* Image overlay */}
                    <div className="absolute bottom-[-25%] left-[-15%] w-[55%] h-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                        src="/images/hero-img2.jpg"
                        alt="Hero kedua"
                        fill
                        className="object-cover"
                        sizes="25vw"
                    />
                    </div>

                </div>
                </div>


      </div>
    </section>
  );
}
