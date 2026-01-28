// src/lib/fonts.ts
import { Inter, Lora, Poppins } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});


export const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
});

export const fontCaption = Poppins({
  subsets: ["latin"],
  weight: ["200","400","600"],
  variable: "--font-caption",
  display: "swap",
})
