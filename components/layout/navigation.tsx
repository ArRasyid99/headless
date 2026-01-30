import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ClientOnly } from "@/components/utils/client-only";
import { MobileNav } from "@/components/nav/mobile-nav";
import { NavScroll } from "@/components/nav/nav-scroll";

import { mainMenu } from "@/lib/menu.config";
import { siteConfig } from "@/lib/site.config";
import { cn } from "@/lib/utils";
import Logo from "@/public/icons/bojamengaji.ico";
import YKBM from "@/public/icons/ykbm.ico";

interface NavProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export default function Navigation({ className, children, id }: NavProps) {
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
            className="flex items-center gap-1 transition-opacity hover:opacity-75"
          >
            <Image
              src={Logo}
              alt="Logo"
              width={56}
              height={56}
              className="w-15 h-auto"
            />
             <Image
              src={YKBM}
              alt="Yayasan Kajian Boja Mengaji"
              width={48}
              height={48}
              className="w-13 h-auto"
            
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
  <Button asChild className="hidden sm:flex dark:invert">
            <Link href="/wakaf/peluang-jariyah">Wakaf</Link>
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
