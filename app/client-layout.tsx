"use client";

import dynamic from "next/dynamic";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

const Nav = dynamic(
  () => import("@/components/layout/navigation"),
  { ssr: false }
);

const Footer = dynamic(
  () => import("@/components/layout/footer"),
  { ssr: false }
);

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Nav />
      {children}
      <Footer />

      <Analytics />
      <Toaster position="top-center" richColors />
    </ThemeProvider>
  );
}
