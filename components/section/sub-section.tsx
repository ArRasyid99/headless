
import "./section.css"
import { HijriCalendar } from "@/components/calender/hijriyah-calender";
import { QuotesRotator } from "@/components/section/quotes";

export default function SubHeader() {
  return (
    <section className="section-sub">
    <div> 
    <h1 className="text-2xl font-bold mb-5">
     Kalender
    </h1> 
    <p className="mb-4">Kalender hijriyah dilengkapi dengan pengingat ayyamul bidh.</p>
     <div className="w-full overflow-x-auto">
       <HijriCalendar />  
     </div>     
     </div>

     <div>
    <h1 className="text-2xl font-bold mb-5">
        Kutipan Hadits
    </h1> 
    <p className="mb-4">Menyajikan hadits-hadits shahih pilihan. Semoga kita bisa mengambil pelajaran dan meneladani kemuliaan beliau, Shalallahu ‘Alaihi Wa Sallam.</p>
    <div className="w-full overflow-x-auto">
        <QuotesRotator />
     </div>     
        
     </div>
     
    </section>
  );
}




 
