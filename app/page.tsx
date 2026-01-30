import ClientLayout from "./client-layout";

import SubHeader from "@/components/section/sub-section";
import SubAmalan from "@/components/section/amalan-section";
import Hero from "@/components/hero/hero";
import Donasi from "@/components/section/donasi-section";


import FeatureSection from "@/components/masjid/feature-section";

import BlogSection from "@/components/masjid/blog-section";






// This page is using the craft.tsx component and design system
export default function Home() {
   

  return (

    <ClientLayout>
    <section className="px-20 sm:px-2 md:px-10 lg:px-20"> 
    <Hero />
    <SubHeader />
    <FeatureSection />
    <BlogSection/>
    </section>
    <SubAmalan />
    <Donasi />
    
 
    </ClientLayout>
  );
}



