"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2022 – 2023",
    title: "Web Development Foundations",
    organization: "Self Learning",
    description:
      "Started exploring how websites and applications are built. This was the period where curiosity pushed me into learning development concepts and trying to understand the path into software engineering.",
    color: "text-[#81ecff]",
    dot: "bg-[#81ecff]",
  },
  {
    year: "2023 – Present",
    title: "Information Systems Student",
    organization: "Ladoke Akintola University of Technology (LAUTECH)",
    description:
      "Began studying Information Systems, a field that connects strongly with technology, digital systems, and software-related problem solving. This has strengthened my academic foundation alongside my technical learning.",
    color: "text-[#bf81ff]",
    dot: "bg-[#bf81ff]",
  },
  {
    year: "2024 – Present",
    title: "Full-Stack Development Training",
    organization: "SQI College of ICT",
    description:
      "Started structured software engineering training at SQI College of ICT, where I have been learning frontend development, backend logic, APIs, databases, and modern development workflows in a clearer and more practical way.",
    color: "text-[#669dff]",
    dot: "bg-[#669dff]",
  },
  {
    year: "2024 – Present",
    title: "Frontend & Project Practice",
    organization: "Personal Projects",
    description:
      "Built learning projects with React, Next.js, JavaScript, and related tools to improve my practical understanding of UI development, responsiveness, project structure, and user interaction.",
    color: "text-[#81ecff]",
    dot: "bg-[#81ecff]",
  },
];

const educationItems = [
  {
    school: "Ladoke Akintola University of Technology (LAUTECH)",
    program: "Information Systems",
    year: "2023 – Present",
  },
  {
    school: "SQI College of ICT",
    program: "Full-Stack Development Training",
    year: "2024 – Present",
  },
];

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0c0e12] text-[#f6f6fc]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#81ecff]/10 via-[#bf81ff]/10 to-[#669dff]/10" />
      <div className="pointer-events-none absolute left-[-8%] top-[12%] -z-10 h-[430px] w-[430px] rounded-full bg-[#81ecff]/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-8%] top-[48%] -z-10 h-[400px] w-[400px] rounded-full bg-[#bf81ff]/10 blur-[130px]" />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#bf81ff]">
            My Development Path
          </span>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tighter md:text-7xl">
            Experience &amp;{" "}
            <span className="bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] bg-clip-text text-transparent">
              Learning Journey
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-[#aaabb0] md:text-xl">
            My experience combines academic learning with practical development
            training. Through my studies, structured learning, and hands-on
            projects, I continue to grow into a stronger full-stack developer.
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold md:text-5xl">Timeline</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-[#81ecff] via-[#bf81ff] to-[#669dff] md:left-1/2" />

          <div className="space-y-10">
            {timelineItems.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-[2rem] border border-[#46484d]/20 bg-[rgba(35,38,44,0.6)] p-8 pl-14 backdrop-blur-xl md:mx-auto md:max-w-4xl md:pl-8">
                  <div
                    className={`absolute left-[9px] top-9 h-4 w-4 rounded-full ${item.dot} shadow-[0_0_15px_rgba(129,236,255,0.35)] md:left-1/2 md:-translate-x-[7px]`}
                  />

                  <div className="mb-3">
                    <span className={`text-sm font-bold uppercase tracking-[0.22em] ${item.color}`}>
                      {item.year}
                    </span>
                  </div>

                  <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#aaabb0]">
                    {item.organization}
                  </p>
                  <p className="leading-relaxed text-[#aaabb0]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education + Focus */}
      <section className="bg-[#111318] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-[#46484d]/20 bg-[#171a1f]/60 p-8 backdrop-blur-xl"
            >
              <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                Education
              </h2>

              <div className="space-y-6">
                {educationItems.map((item) => (
                  <div
                    key={`${item.school}-${item.program}`}
                    className="rounded-2xl border border-[#46484d]/15 bg-[#23262c]/50 p-5"
                  >
                    <h3 className="mb-2 text-lg font-bold">{item.school}</h3>
                    <p className="mb-1 text-[#aaabb0]">{item.program}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#81ecff]">
                      {item.year}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-[#46484d]/20 bg-[#171a1f]/60 p-8 backdrop-blur-xl"
            >
              <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                Current Focus
              </h2>

              <p className="mb-8 leading-relaxed text-[#aaabb0]">
                Right now, I am focused on improving my skills in modern
                full-stack development by learning and practicing Next.js,
                TypeScript, GraphQL, and better full-stack architecture. My goal
                is to become more confident in building complete applications
                that are well-structured, scalable, and ready for real-world
                use.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "TypeScript",
                  "GraphQL",
                  "Full-Stack Architecture",
                  "API Development",
                  "Responsive UI",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#46484d]/20 bg-[#23262c] px-4 py-2 text-xs uppercase tracking-wider text-[#bf81ff]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-8 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-[2rem] border border-[#46484d]/15 bg-[#171a1f] p-12 text-center md:p-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#81ecff]/10 via-transparent to-[#bf81ff]/10" />

          <div className="relative z-10">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Still learning, still growing,{" "}
              <span className="bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] bg-clip-text text-transparent">
                still building
              </span>
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#aaabb0] md:text-lg">
              My journey is still in progress, and every project, lesson, and
              challenge is helping me become a better developer. I’m open to
              opportunities that allow me to learn, contribute, and grow.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] px-8 py-4 font-bold text-[#005762] transition-transform duration-300 hover:scale-105"
              >
                Contact Me
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-[#46484d]/20 px-8 py-4 font-bold text-[#f6f6fc] transition-colors duration-300 hover:bg-[#23262c]"
              >
                View Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}