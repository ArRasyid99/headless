import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ClientOnly } from "@/components/utils/client-only";
import { MobileNav } from "@/components/nav/mobile-nav";
import { NavScroll } from "@/components/nav/nav-scroll";

import { mainMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";
import Logo from "@/public/bojamengaji.svg";
import YKBM from "@/public/YKBM.svg";

interface NavProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export function Nav({ className, children, id }: NavProps) {
  return (
    <NavScroll>
      <nav
        id={id}
        className={cn(
          "border-b",
          className
        )}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-4 transition-opacity hover:opacity-75"
          >
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={26}
              style={{
               width: '42',   // Jika Anda menggunakan CSS untuk mengubah ukuran
               height: '26',  // TAMBAHKAN INI agar aspek rasio terjaga
             }}
             
              className="w-20 h-10 dark:invert"
            />
             <Image
              src={YKBM}
              alt="Yayasan Kajian Boja Mengaji"
              width={42}
              height={26}
               style={{
               width: '42',   // Jika Anda menggunakan CSS untuk mengubah ukuran
               height: '26',  // TAMBAHKAN INI agar aspek rasio terjaga
             }}
               className="w-8 h-15"
            
            />
            <span className="font-poppins text-sm font-semibold">
              {siteConfig.site_name}
            </span>
          </Link>

          {children}

          <div className="flex items-center gap-2">
            <div className="mx-2 hidden md:flex">
              {Object.entries(mainMenu).map(([label, href]) => (
                <Button key={href} asChild variant="ghost" size="sm">
                  <Link href={href}>
                    {label.charAt(0).toUpperCase() + label.slice(1)}
                  </Link>
                </Button>
              ))}
            </div>
  <Button asChild className="hidden sm:flex">
            <Link href="https://github.com/9d8dev/next-wp">Get Started</Link>
          </Button>

            <ClientOnly>
              <MobileNav />
            </ClientOnly>
          </div>
        </div>
      </nav>
    </NavScroll>
  );
}
