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
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 md:gap-3" aria-label="Tessera Studio home">
              <Image
                src={logoImg}
                alt="Tessera Studio Logo"
                className="h-11 w-11 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain"
              />
              <span className="font-display text-2xl md:text-3xl font-bold tracking-[-0.05em]">Tessera Studio</span>
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-white/[0.62] text-sm">
              Premium brands, websites and growth systems for businesses ready to move with more precision.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={socialLinks.find((link) => link.label === "Instagram")?.href || "https://www.instagram.com/tesserastudio.in/"}
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-white/[0.62] transition duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5 fill-current transition group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1FsDbawjnN/"
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-white/[0.62] transition duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 fill-current transition group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://wa.me/919985741421"
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-white/[0.62] transition duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5 fill-current transition group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.45L0 24zm6.59-4.846c1.6.95 3.167 1.45 4.792 1.452 5.532 0 10.032-4.502 10.035-10.037.002-2.68-1.038-5.198-2.93-7.09C16.552 1.58 14.04 1.54 11.993 1.54 6.466 1.54 1.966 6.042 1.962 11.578c-.002 1.708.455 3.376 1.411 4.88l-.997 3.64 3.738-.98c1.554.848 3.125 1.258 4.73 1.258zm9.355-6.536c-.276-.138-1.636-.807-1.89-.897-.253-.09-.438-.135-.623.138-.184.275-.714.897-.875 1.08-.16.182-.322.204-.598.067-.276-.138-1.168-.43-2.223-1.373-.822-.733-1.378-1.64-1.54-1.916-.16-.275-.017-.424.12-.562.124-.124.276-.322.415-.483.138-.16.184-.275.276-.46.09-.184.045-.345-.023-.483-.067-.138-.623-1.503-.853-2.053-.223-.538-.49-.463-.673-.473l-.574-.01c-.198-.002-.52.073-.79.37-.27.297-1.033 1.01-1.033 2.463 0 1.453 1.058 2.858 1.206 3.056.148.198 2.083 3.18 5.048 4.46.705.305 1.255.487 1.684.623.71.226 1.356.194 1.868.118.57-.085 1.636-.668 1.867-1.318.23-.65.23-1.21.16-1.318-.07-.11-.258-.207-.534-.344z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-white/[0.42]">Navigate</h3>
              <div className="mt-5 grid gap-3 text-sm">
                <Link href="/" className="text-white/[0.62] transition hover:text-white">
                  Home
                </Link>
                <Link
                  href="/#services"
                  onClick={(e) => handleNavClick(e, "/#services")}
                  className="text-white/[0.62] transition hover:text-white"
                >
                  Services
                </Link>
                <Link
                  href="/#process"
                  onClick={(e) => handleNavClick(e, "/#process")}
                  className="text-white/[0.62] transition hover:text-white"
                >
                  How It Works
                </Link>
                <Link
                  href="/#partners"
                  onClick={(e) => handleNavClick(e, "/#partners")}
                  className="text-white/[0.62] transition hover:text-white"
                >
                  Who We Partner With
                </Link>
                <Link
                  href="/#portfolio"
                  onClick={(e) => handleNavClick(e, "/#portfolio")}
                  className="text-white/[0.62] transition hover:text-white"
                >
                  Portfolio
                </Link>
                <Link href="/contact" className="text-white/[0.62] transition hover:text-white">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-white/[0.42]">Services</h3>
              <div className="mt-5 grid gap-3 text-sm">
                <Link href="/website-development-bangalore" className="text-white/[0.62] transition hover:text-white">
                  Website Design & Development
                </Link>
                <Link href="/branding-services" className="text-white/[0.62] transition hover:text-white">
                  Branding & Visual Identity
                </Link>
                <Link href="/lead-generation-systems" className="text-white/[0.62] transition hover:text-white">
                  Digital Marketing
                </Link>
                <Link href="/ai-automation-services" className="text-white/[0.62] transition hover:text-white">
                  AI Automation Systems
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-white/[0.42]">Get in Touch</h3>
              <div className="mt-5 grid gap-4 text-sm text-white/[0.62]">
                <div className="flex items-start gap-3">
                  <svg className="h-[18px] w-[18px] shrink-0 text-violet mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=COWRKS%20Whitefield%2C%20NXT%20Tower%201B%2C%20Block%201B%2C%20EPIP%20Industrial%20Area%20Whitefield%20Road%2C%20Hobli%2C%20near%20SAP%20Labs%2C%20Krishnarajapuram%2C%20Bengaluru%2C%20Karnataka%20560066"
                    target="_blank"
                    rel="noreferrer"
                    className="leading-relaxed transition hover:text-white"
                  >
                    Block 1B, Near SAP Labs,<br />Whitefield, Bengaluru – 560066
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="h-[18px] w-[18px] shrink-0 text-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href="mailto:contact@tesseraweb.in"
                    className="transition hover:text-white"
                  >
                    contact@tesseraweb.in
                  </a>
                </div>
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
