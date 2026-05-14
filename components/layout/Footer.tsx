"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, legalLinks, navLinks, socialLinks } from "@/lib/data";
import logoImg from "@/assets/Tessera new.png";

export function Footer() {
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#050505]">
      <div className="site-container py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 md:gap-3" aria-label="Tessera Studio home">
              <Image
                src={logoImg}
                alt="Tessera Logo"
                className="h-11 w-11 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain"
              />
              <span className="font-display text-2xl md:text-3xl font-bold tracking-[-0.05em]">Tessera Studio</span>
            </Link>
            <p className="mt-5 max-w-sm leading-7 text-white/[0.56]">
              Premium brands, websites and growth systems for businesses ready to move with more
              precision.
            </p>
            <div className="mt-5 grid gap-2 text-sm text-white/[0.52]">
              <a href={`mailto:${company.email}`} className="transition hover:text-white">
                {company.email}
              </a>
              <p>{company.location}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:col-span-2 lg:grid-cols-2">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-white/[0.42]">Navigate</h3>
              <div className="mt-5 grid gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/[0.62] transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-white/[0.42]">Social</h3>
              <div className="mt-5 grid gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/[0.62] transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.08] pt-6 text-sm text-white/[0.36] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Tessera Studio. All rights reserved.</p>
          <div className="flex gap-5">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white/70">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
