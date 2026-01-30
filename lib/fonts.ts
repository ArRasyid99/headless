
import { Open_Sans, Lora, Poppins, Amiri,} from "next/font/google";

export const fontSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});


export const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500"],
  display: "swap",
});

export const fontCaption = Poppins({
  subsets: ["latin"],
  weight: ["200","400","600"],
  variable: "--font-caption",
  display: "swap",
})

export const fontArabic = Amiri({
  subsets: ["arabic"],
  weight: ["700"],
  variable: "--font-arabic",
  display: "swap",
});

