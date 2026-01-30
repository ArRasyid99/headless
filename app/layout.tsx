// app/layout.tsx
import "./globals.css";
import { fontSans, fontSerif, fontCaption, fontArabic} from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/site.config";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Masjid Muhammad Al Qosim",
  description: "A starter template for Next.js with WordPress as a headless CMS.",
  metadataBase: new URL(siteConfig.site_domain),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={cn("min-h-screen antialiased", fontSans.className,
        fontSerif.variable, fontCaption.variable, fontArabic.variable,
      )}>
        {/* client dipisah */}
        {children}
      </body>
    </html>
  );
}