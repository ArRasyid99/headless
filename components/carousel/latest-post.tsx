"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Post } from "@/lib/wordpress.d";
import { CarouselCard } from "@/components/carousel/carousel-card";

export function PostCardCarousel({ posts }: { posts: Post[] }) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={6}
      slidesPerView="auto"
      centeredSlides={false}
      slidesOffsetBefore={24}
      slidesOffsetAfter={24}
      className="w-full"
    >
      {posts.map((post) => (
        <SwiperSlide
          key={post.id}
          className="w-70! h-full pl-25"
        >
          <CarouselCard post={post} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
