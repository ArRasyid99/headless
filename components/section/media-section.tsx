import { YouTubeEmbed } from "@/components/stream/youtube-embeded";

export default function SubMedia() {
  return (
    <section>

    <div className="mb-20">
        <h1 className="font-bold text-2xl mb-10 text-center md:text-lg lg:text-3xl">
         Taman - taman Surga
        </h1>
        <div className="mb-10 w-[90%] md:w-xl lg:w-3xl items-center mx-auto">
            <YouTubeEmbed videoId="p1-OzHaN3gU" title="Kajian Ahad Pekan Keempat" />
        </div>     
        
        <p className="font-caption mb-10 max-w-prose mx-auto text-center md:text-sm lg:text-lg">
        Ikuti channel kami untuk mendapatkan pembaruan konten kajian rutin dan siaran langsung dari Boja Mengaji.</p>
    
     </div>
     
    </section>
  );
}




 
