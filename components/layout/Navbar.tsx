"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/Tessera new.png";

function Logo() {
  return (
    <Link href="/" aria-label="Tessera Studio home" className="flex items-center gap-2 md:gap-3">
      <Image
        src={logoImg}
        alt="Tessera Studio Logo"
        className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain"
        priority
      />
      <span className="font-display text-xl md:text-2xl font-bold tracking-[-0.05em]">Tessera Studio</span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50"
    >
      <div
        className={cn(
          "site-container flex items-center justify-between rounded-full border px-4 py-3 transition duration-300",
          scrolled
            ? "border-white/10 bg-[#090909]/78 shadow-2xl shadow-black/30 backdrop-blur-2xl"
            : "border-white/5 bg-white/[0.025] backdrop-blur-md"
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/[0.64] transition hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <MagneticButton
            href="/#contact"
            variant="secondary"
            size="sm"
            onClick={(e) => handleNavClick(e as any, "/#contact")}
          >
            Book a Call
          </MagneticButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] md:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className={cn("h-0.5 w-5 bg-white transition", open && "translate-y-2 rotate-45")} />
            <span className={cn("h-0.5 w-5 bg-white transition", open && "opacity-0")} />
            <span className={cn("h-0.5 w-5 bg-white transition", open && "-translate-y-2 -rotate-45")} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            className="site-container mt-3 rounded-[2rem] border border-white/10 bg-[#090909]/92 p-5 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <nav className="grid gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block rounded-2xl px-4 py-4 text-lg font-semibold text-white/78 hover:bg-white/[0.06] hover:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <MagneticButton
              href="/#contact"
              className="mt-4 w-full"
              size="lg"
              onClick={(e) => handleNavClick(e as any, "/#contact")}
            >
              Book a Call
            </MagneticButton>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

