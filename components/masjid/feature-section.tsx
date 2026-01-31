"use client"

import { useRef } from "react"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
import { BookOpen, Heart, Users, HandCoins } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Belajar Al-Qur’an",
    desc: "Tahsin, Belajar tajwid, dan Mentadaburinya",
  },
  {
    icon: Users,
    title: "Shalat Sunnah Setelah Wudhu",
    desc: "2 Rakaat setelah wudhu",
  },
  {
    icon: Heart,
    title: "Dzikir Pagi Petang",
    desc: "Membaca dzikir waktu pagi dan petang",
  },
  {
    icon: Users,
    title: "Shalat Dhuha",
    desc: "2 Rakaat di waktu dhuha",
  },
  {
    icon: Users,
    title: "Puasa Sunnah",
    desc: "Puasa Senin - Kamis dan Ayyamul bidh",
  },
  {
    icon: HandCoins,
    title: "Sedekah",
    desc: "Berinfaq dengan harta",
  },
    {
    icon: Users,
    title: "Shalat Rawatib",
    desc: "Shalat sunnah pada waktu rawatib",
  },
  
]

export default function FeatureSection() {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <section className="py-10 px-5">
      <div className="container mx-auto">

        {/* Header */}
        <div className="mb-12 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold dark:invert">
            Amalan Sunnah
          </h2>
          <p className="mt-4 text-muted-foreground">
            Semoga Allah Ta’ala memudahkan kita untuk memperhatikan amal ibadah sunnah, setelah menyempurnakan ibadah yang bersifat wajib.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          plugins={[autoplay.current]}
          opts={{ align: "start", loop: true}}
          className="w-full"
        >
          <CarouselContent>
            {features.map((item, i) => (
              <CarouselItem
                key={i}
                className="basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <Card className="h-full rounded-2xl hover:shadow-md transition">
                  <CardContent className="flex flex-col items-center text-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>

                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </section>
  )
}
