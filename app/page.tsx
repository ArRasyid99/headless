import ClientLayout from "./client-layout";

import SubHeader from "@/components/section/sub-section";
import SubAmalan from "@/components/section/amalan-section";
import Hero from "@/components/hero/hero";
import Donasi from "@/components/section/donasi-section";





// This page is using the craft.tsx component and design system
export default function Home() {
   

  return (

    <ClientLayout>
    
    <Hero />
    <SubHeader />
    <SubAmalan />
    <Donasi />
    
 
    </ClientLayout>
  );
}



