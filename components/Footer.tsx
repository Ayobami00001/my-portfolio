"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-[#46484d]/20 bg-[#0c0e12]">

      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#81ecff]/5 via-[#bf81ff]/5 to-[#669dff]/5" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 py-12 md:flex-row">
        
        {/* Logo */}
        <Link
          href="/"
          className="bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] bg-clip-text text-xl font-bold text-transparent"
        >
          devfaruq
        </Link>

        {/* Copyright */}
        <p className="text-xs uppercase tracking-[0.05em] text-[#bf81ff] text-center">
          © 2026 devfaruq. Crafted with precision.
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.05em]">
          
          <a
            href="https://x.com/Ayoba90060Faruq"
            target="_blank"
            rel="noreferrer"
            className="text-[#f6f6fc]/50 transition-all duration-300 hover:-translate-y-1 hover:text-[#81ecff]"
          >
            Twitter
          </a>

          <a
            href="https://github.com/Ayobami00001"
            target="_blank"
            rel="noreferrer"
            className="text-[#f6f6fc]/50 transition-all duration-300 hover:-translate-y-1 hover:text-[#bf81ff]"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/faruq-ayobami-ibrahim-87733739a?utm_source=share_via&utm_content=profile"
            target="_blank"
            rel="noreferrer"
            className="text-[#f6f6fc]/50 transition-all duration-300 hover:-translate-y-1 hover:text-[#669dff]"
          >
            LinkedIn
          </a>

          <a
            href="#top"
            className="text-[#f6f6fc]/50 transition-all duration-300 hover:-translate-y-1 hover:text-[#81ecff]"
          >
            Back to Top
          </a>

        </div>
      </div>
    </footer>
  );
}