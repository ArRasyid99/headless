import YouTubeLite from "../stream/youtube-embeded";
import Link from "next/link";


export default function SubMedia() {
  return (
    <section>

    <div className="mb-20">
        <h1 className="font-bold text-2xl mb-10 text-center md:text-lg lg:text-3xl">
         Taman - taman Surga
        </h1>
        <div className=" container mx-auto mb-10 md:w-xl lg:w-3xl">
            <YouTubeLite videoId="p1-OzHaN3gU"/>
        </div>     
        
        <p className="font-caption mb-2 max-w-prose mx-auto text-center md:text-sm lg:text-lg">
        Ikuti channel kami untuk mendapatkan pembaruan konten kajian rutin dan siaran langsung dari Boja Mengaji.</p>
        
        <div className="flex justify-center mb-10">
           <Link
              href="https://www.youtube.com/@bojamengaji"
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-[#ff0000]
                px-5 py-3
                text-xs text-white"
            >
            
              ▶ Subscribe
            </Link>
        </div>
        
     </div>
     
    </section>
  );
}




 
