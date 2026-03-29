"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const { scrollYProgress } = useScroll();

  const heroGlowY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.85]);

  return (
    <main className="relative overflow-x-hidden bg-[#0c0e12] text-[#f6f6fc]">
  <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#81ecff]/15 via-[#bf81ff]/15 to-[#669dff]/15" />
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 md:px-8">
        {/* Animated background glows */}
        <motion.div
          style={{ y: heroGlowY }}
          className="absolute inset-0 -z-10 overflow-hidden"
        >
<div className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-[#81ecff] opacity-15 blur-[80px]" />
<div className="absolute top-1/2 -right-20 h-[500px] w-[500px] rounded-full bg-[#bf81ff] opacity-15 blur-[80px]" />
<div className="absolute -bottom-20 left-1/3 h-[500px] w-[500px] rounded-full bg-[#669dff] opacity-10 blur-[80px]" />
        </motion.div>

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="z-10 max-w-5xl text-center"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block rounded-full border border-[#81ecff]/20 bg-[#81ecff]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#81ecff]"
          >
            Building Modern Web Experiences
          </motion.span>

          <motion.h1
  variants={fadeUp}
  transition={{ duration: 0.7 }}
  className="mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
>
  Hi, I&apos;m{" "}
  <span className="bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] bg-clip-text text-transparent">
    Ibrahim Faruq
  </span>
</motion.h1>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mb-8 text-xl font-semibold text-[#bf81ff] sm:text-2xl md:text-4xl"
          >
            Full-Stack Developer &amp; SQI Student
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-[#aaabb0] sm:text-lg md:text-xl"
          >
            I build modern, responsive, reliable, and scalable web applications
            and websites using Next.js, React, Node.js, Express, MongoDB,
            GraphQL, Tailwind CSS, TypeScript, and Bootstrap—focused on clean
            architecture, smooth user experiences, and real-world performance.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mb-14 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/projects"
              className="rounded-full bg-gradient-to-r from-[#81ecff] to-[#bf81ff] px-8 py-4 font-extrabold text-[#005762] shadow-[0_0_30px_rgba(129,236,255,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(129,236,255,0.28)]"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-[#46484d]/20 bg-[rgba(35,38,44,0.6)] px-8 py-4 font-extrabold text-[#f6f6fc] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-[#23262c]"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 text-[#aaabb0] sm:gap-6"
          >
            <a
              href="https://github.com/Ayobami00001"
              target="_blank"
              rel="noreferrer"
              className="text-sm uppercase tracking-widest transition-colors hover:text-[#81ecff]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/faruq-ayobami-ibrahim-87733739a?utm_source=share_via&utm_content=profil"
              target="_blank"
              rel="noreferrer"
              className="text-sm uppercase tracking-widest transition-colors hover:text-[#bf81ff]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ibrahimfaruqayobami@gmail.com"
              className="text-sm uppercase tracking-widest transition-colors hover:text-[#669dff]"
            >
              Email
            </a>
            <a
              href="https://x.com/Ayoba90060Faruq"
              target="_blank"
              rel="noreferrer"
              className="text-sm uppercase tracking-widest transition-colors hover:text-[#81ecff]"
            >
              X
            </a>
            <a
              href="https://wa.me/message/CRWLNTDUJGGNI1"
              target="_blank"
              rel="noreferrer"
              className="text-sm uppercase tracking-widest transition-colors hover:text-[#25D366]"
            >
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="relative bg-[#111318] px-6 py-24 md:px-8 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35 }}
            className="group relative w-full md:w-1/2"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#81ecff]/20 to-[#bf81ff]/20 blur-3xl transition-all group-hover:blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#46484d]/10">
              <img
                src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1774666411/1774665978277_tmxvfy.jpg"
                alt="Developer portrait"
                className="h-full w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
              />
            </div>
          </motion.div>

          <div className="w-full md:w-1/2">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#bf81ff]">
              About Me
            </h3>

            <h2 className="mb-8 text-4xl font-extrabold tracking-tight md:text-5xl">
              Building digital solutions with clean logic and modern design.
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-[#aaabb0]">
              I am Ibrahim Faruq, a passionate full-stack developer and student
              at SQI College of ICT. I enjoy transforming ideas into functional,
              visually polished, and scalable digital products. My focus is on
              writing clean code, building reliable backend systems, and
              delivering interfaces that feel modern, smooth, and user-friendly.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-8 border-y border-[#46484d]/10 py-8">
              <div>
                <div className="mb-1 text-3xl font-black text-[#81ecff]">
                  Full-Stack
                </div>
                <div className="text-xs uppercase tracking-widest text-[#aaabb0]">
                  Development Focus
                </div>
              </div>

              <div>
                <div className="mb-1 text-3xl font-black text-[#bf81ff]">
                  SQI
                </div>
                <div className="text-xs uppercase tracking-widest text-[#aaabb0]">
                  College of ICT
                </div>
              </div>

              <div>
                <div className="mb-1 text-3xl font-black text-[#669dff]">
                  Modern UI
                </div>
                <div className="text-xs uppercase tracking-widest text-[#aaabb0]">
                  Responsive Interfaces
                </div>
              </div>

              <div>
                <div className="mb-1 text-3xl font-black text-[#81ecff]">
                  Scalable
                </div>
                <div className="text-xs uppercase tracking-widest text-[#aaabb0]">
                  Backend Systems
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-bold text-[#81ecff] transition-all hover:gap-4"
            >
              READ FULL STORY <span>→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SKILLS PREVIEW */}
      <section className="px-6 py-24 md:px-8 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#81ecff]">
                Tech Stack
              </h3>
              <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                Tools I Use
              </h2>
            </div>

            <p className="hidden max-w-xs text-right text-[#aaabb0] md:block">
              Building modern products with frontend precision and backend
              reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="rounded-[2rem] border border-[#46484d]/10 bg-[rgba(35,38,44,0.6)] p-8 backdrop-blur-xl md:col-span-2"
            >
              <h4 className="mb-4 text-2xl font-bold">Frontend Development</h4>
              <p className="mb-8 text-[#aaabb0]">
                Creating responsive, accessible, and modern user interfaces with
                smooth interactions and clean component architecture.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Bootstrap",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#46484d]/10 bg-[#23262c] px-4 py-2 text-xs uppercase tracking-wider text-[#f6f6fc]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="rounded-[2rem] border border-[#46484d]/10 bg-[#171a1f] p-8"
            >
              <h4 className="mb-4 text-2xl font-bold">Backend &amp; Data</h4>
              <p className="mb-6 text-[#aaabb0]">
                Building APIs, managing databases, and structuring full-stack
                systems for real-world applications.
              </p>

              <ul className="space-y-3 text-xs uppercase tracking-widest text-[#f6f6fc]/70">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#bf81ff]" />
                  Node.js / Express.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#bf81ff]" />
                  MongoDB
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#bf81ff]" />
                  GraphQL
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="rounded-[2rem] border border-[#46484d]/10 bg-[#171a1f] p-8"
            >
              <h4 className="mb-4 text-2xl font-bold">Workflow</h4>
              <p className="mb-6 text-[#aaabb0]">
                Writing structured code, learning continuously, and improving
                project quality from idea to deployment.
              </p>

              <div className="flex flex-wrap gap-2">
                {["GitHub", "Responsive Design", "UI Logic"].map((tool) => (
                  <span
                    key={tool}
                    className="rounded bg-[#669dff]/10 px-3 py-1 text-[10px] font-black uppercase tracking-tight text-[#669dff]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.35 }}
              className="group relative h-64 overflow-hidden rounded-[2rem] border border-[#46484d]/10 md:col-span-2"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHZaPmwoL6JgrwKzOiQ5r4dCo0NVd0lVl84f4DnRcN4GxQ1eyuT26biUFnUWTkKn6LDpfpdXldXjYUEnEa7fE7orulQ_pTSQKTb6Vulqjqd_xH7yUVtztRKXYVdmE5VNNtsd08CpebAW_6aI9z9_yh379JUwdCJ_KHvX4qUS6Fu8kNyq82RkBcBHgUFY6XhNFMa2a4d5jx583Kgi_lm5Yaao_9ihelQvrcN7Tq_TAzGWNnAJfTo7qqxp5Hgi17rUhL9MFSD24MqTvp"
                alt="Abstract technology background"
                className="h-full w-full object-cover brightness-50 transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-black tracking-tight text-[#f6f6fc]/20 transition-colors group-hover:text-[#81ecff]/40 md:text-4xl">
                  DEVFARUQ STACK
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-28 md:px-8 md:py-40">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bf81ff]/5 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-10 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Ready to bring your{" "}
            <span className="bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] bg-clip-text text-transparent">
              next idea
            </span>{" "}
            to life?
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-[#aaabb0] md:text-xl">
            I’m open to collaborations, freelance opportunities, and meaningful
            projects where clean code, scalable architecture, and modern design
            matter.
          </p>

          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 rounded-full bg-[#f6f6fc] px-10 py-5 font-black text-[#0c0e12] transition-all duration-300 hover:scale-105"
            >
              Let&apos;s Work Together <span>→</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
