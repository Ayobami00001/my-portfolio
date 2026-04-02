"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  {href : "/case-studies", label: "Challenges" },
  
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0c0e12]/70 backdrop-blur-xl shadow-[0_8px_40px_rgba(129,236,255,0.08)]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#81ecff]/5 via-[#bf81ff]/5 to-[#669dff]/5" />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-5 lg:px-8">
          <Link
            href="/"
            className="bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] bg-clip-text text-lg font-black tracking-tighter text-transparent sm:text-xl lg:text-2xl"
          >
            devfaruq
          </Link>

          <nav className="hidden items-center font-semibold tracking-tight md:flex md:gap-4 md:text-xs lg:gap-8 lg:text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActive
                      ? "relative whitespace-nowrap text-[#81ecff] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-[#81ecff] after:via-[#bf81ff] after:to-[#669dff]"
                      : "whitespace-nowrap text-[#f6f6fc]/70 transition-colors duration-300 hover:text-[#81ecff]"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/hire-me"
              className="whitespace-nowrap rounded-full bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] px-4 py-2 text-sm font-bold text-[#005762] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(129,236,255,0.3)] lg:px-6"
            >
                Contact Me
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f6f6fc] transition hover:bg-white/10 md:hidden"
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                  mobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              className="fixed inset-x-4 top-[84px] z-50 rounded-3xl border border-white/10 bg-[#111318]/95 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] md:hidden"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`rounded-2xl px-4 py-3 text-base font-semibold transition ${
                        isActive
                          ? "bg-gradient-to-r from-[#81ecff]/15 via-[#bf81ff]/15 to-[#669dff]/15 text-[#81ecff]"
                          : "text-[#f6f6fc]/80 hover:bg-white/5 hover:text-[#f6f6fc]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <Link
                  href="/hire-me"
                  className="mt-3 flex items-center justify-center rounded-full bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] px-6 py-3 font-bold text-[#005762] transition-all duration-300 hover:scale-[1.02]"
                >
                  Contact Me
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}