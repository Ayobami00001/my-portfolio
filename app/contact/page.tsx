"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="relative overflow-x-hidden bg-[#0c0e12] text-[#f6f6fc]">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#81ecff]/10 via-[#bf81ff]/10 to-[#669dff]/10" />
      <div className="pointer-events-none absolute left-[-8%] top-[10%] -z-10 h-[420px] w-[420px] rounded-full bg-[#81ecff]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-8%] bottom-[20%] -z-10 h-[380px] w-[380px] rounded-full bg-[#bf81ff]/10 blur-[120px]" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            <div>
              <span className="uppercase tracking-[0.2em] text-[#bf81ff] font-bold text-xs">
                Contact
              </span>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mt-3">
                Let’s Build{" "}
                <span className="bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] bg-clip-text text-transparent">
                  Something Great
                </span>
              </h1>

              <p className="text-[#aaabb0] text-lg mt-6 max-w-lg leading-relaxed">
                I'm always open to collaborations, freelance projects, or
                discussions about building modern web applications. If you have
                an idea, project, or opportunity, feel free to reach out.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4">

              <div className="bg-[#23262c]/60 p-6 rounded-xl border border-[#46484d]/20">
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <p className="text-[#aaabb0] text-sm">
                  ibrahimfaruqayobami@gmail.com
                </p>
              </div>

              <div className="bg-[#23262c]/60 p-6 rounded-xl border border-[#46484d]/20">
                <h3 className="font-bold text-lg mb-1">Phone</h3>
                <p className="text-[#aaabb0] text-sm">
                  09025256040
                </p>
              </div>

              <div className="bg-[#23262c]/60 p-6 rounded-xl border border-[#46484d]/20">
                <h3 className="font-bold text-lg mb-1">Location</h3>
                <p className="text-[#aaabb0] text-sm">
                  Lagos, Nigeria
                </p>
              </div>

              <div className="bg-[#23262c]/60 p-6 rounded-xl border border-[#46484d]/20">
                <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/message/CRWLNTDUJGGNI1"
                  target="_blank"
                  className="text-[#aaabb0] text-sm hover:text-[#81ecff]"
                >
                  Message me
                </a>
              </div>

            </div>

            {/* Social */}
            <div className="flex gap-6 text-sm text-[#aaabb0]">

              <a
                href="https://github.com/Ayobami00001"
                target="_blank"
                className="hover:text-[#81ecff]"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/faruq-ayobami-ibrahim-87733739a"
                target="_blank"
                className="hover:text-[#bf81ff]"
              >
                LinkedIn
              </a>

              <a
                href="https://x.com/Ayoba90060Faruq"
                target="_blank"
                className="hover:text-[#669dff]"
              >
                X
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#23262c]/60 p-10 rounded-2xl border border-[#46484d]/20 backdrop-blur-xl"
          >

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Your Name"
                  className="w-full px-5 py-4 rounded-lg bg-[#171a1f] border border-[#46484d]/20 outline-none focus:border-[#81ecff]"
                />

                <input
                  placeholder="Email Address"
                  className="w-full px-5 py-4 rounded-lg bg-[#171a1f] border border-[#46484d]/20 outline-none focus:border-[#81ecff]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Company / Organization"
                  className="w-full px-5 py-4 rounded-lg bg-[#171a1f] border border-[#46484d]/20 outline-none focus:border-[#81ecff]"
                />

                <input
                  placeholder="Project Type"
                  className="w-full px-5 py-4 rounded-lg bg-[#171a1f] border border-[#46484d]/20 outline-none focus:border-[#81ecff]"
                />
              </div>

              <input
                placeholder="Subject"
                className="w-full px-5 py-4 rounded-lg bg-[#171a1f] border border-[#46484d]/20 outline-none focus:border-[#81ecff]"
              />

              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-5 py-4 rounded-lg bg-[#171a1f] border border-[#46484d]/20 outline-none resize-none focus:border-[#81ecff]"
              />

              <button
                className="w-full bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] py-5 rounded-full font-bold text-[#005762] hover:scale-[1.02] transition"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </section>

    </main>
  );
}