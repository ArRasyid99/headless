// app/layout.tsx
import "./globals.css";
import { fontSans } from "@/lib/fonts";
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
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen antialiased", fontSans.className)}>
        {/* client dipisah */}
        {children}
      </body>
    </html>
  );
}