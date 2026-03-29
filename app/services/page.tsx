"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    description:
      "I build responsive and modern user interfaces using React, Next.js, Tailwind CSS, Bootstrap, and JavaScript, with a focus on usability, clean structure, and smooth interaction.",
    color: "text-[#81ecff]",
    bg: "bg-[#81ecff]/10",
    border: "border-[#81ecff]/20",
    tags: ["React", "Next.js", "Tailwind", "Bootstrap"],
  },
  {
    title: "Full-Stack Web Development",
    description:
      "I build complete web applications by connecting frontend interfaces with backend logic, APIs, and databases to create practical and scalable solutions.",
    color: "text-[#bf81ff]",
    bg: "bg-[#bf81ff]/10",
    border: "border-[#bf81ff]/20",
    tags: ["Node.js", "Express", "MongoDB", "Full Stack"],
    featured: true,
  },
  {
    title: "API Integration",
    description:
      "I connect applications to REST APIs and GraphQL services so data can move smoothly between frontend and backend systems.",
    color: "text-[#669dff]",
    bg: "bg-[#669dff]/10",
    border: "border-[#669dff]/20",
    tags: ["REST API", "GraphQL", "Integration"],
  },
  {
    title: "UI Implementation",
    description:
      "I turn design ideas into clean, reusable, and responsive frontend code while keeping layouts organized and user-friendly.",
    color: "text-[#81ecff]",
    bg: "bg-[#81ecff]/10",
    border: "border-[#81ecff]/20",
    tags: ["UI", "Components", "Responsive"],
  },
  {
    title: "Responsive Web Design",
    description:
      "I create layouts that work smoothly across desktop, tablet, and mobile devices while maintaining consistency and readability.",
    color: "text-[#bf81ff]",
    bg: "bg-[#bf81ff]/10",
    border: "border-[#bf81ff]/20",
    tags: ["Mobile First", "Responsive", "Cross Device"],
  },
];

export default function ServicesPage() {
  const featuredService = services.find((service) => service.featured);
  const otherServices = services.filter((service) => !service.featured);

  return (
    <main className="relative overflow-x-hidden bg-[#0c0e12] text-[#f6f6fc]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#81ecff]/10 via-[#bf81ff]/10 to-[#669dff]/10" />
      <div className="pointer-events-none absolute top-[-10%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-[#81ecff]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[-5%] -z-10 h-[400px] w-[400px] rounded-full bg-[#bf81ff]/10 blur-[100px]" />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#bf81ff]">
            My Expertise
          </span>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tighter md:text-7xl">
            Services{" "}
            <span className="bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] bg-clip-text text-transparent">
              I Offer
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-[#aaabb0] md:text-xl">
            I provide modern web development services focused on responsive
            design, clean code, and scalable solutions for real-world needs.
          </p>
        </motion.div>
      </section>

      {/* Featured service */}
      {featuredService && (
        <section className="mx-auto max-w-7xl px-6 pb-16 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] border border-[#46484d]/20 bg-[rgba(35,38,44,0.6)] p-8 backdrop-blur-xl lg:p-10"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="mb-4 inline-block rounded-full border border-[#bf81ff]/20 bg-[#bf81ff]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#bf81ff]">
                  Featured Service
                </span>

                <h2 className="mb-5 text-3xl font-bold md:text-4xl">
                  {featuredService.title}
                </h2>

                <p className="mb-6 max-w-2xl text-base leading-relaxed text-[#aaabb0] md:text-lg">
                  {featuredService.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {featuredService.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#46484d]/20 bg-[#171a1f] px-4 py-2 text-xs uppercase tracking-wider text-[#aaabb0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-[2rem] border border-[#46484d]/15 bg-[#171a1f] p-8">
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#bf81ff]/15 blur-3xl" />
                  <div className="relative z-10">
                    <h3 className="mb-4 text-2xl font-bold text-[#bf81ff]">
                      What this includes
                    </h3>
                    <ul className="space-y-4 text-sm leading-relaxed text-[#aaabb0]">
                      <li>• Frontend and backend connection</li>
                      <li>• API and database integration</li>
                      <li>• Scalable application structure</li>
                      <li>• Responsive user interface</li>
                      <li>• Real-world project workflow</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {otherServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-[#46484d]/20 bg-[rgba(35,38,44,0.6)] p-8 backdrop-blur-xl"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${service.bg} ${service.color}`}
              >
                <span className="text-2xl">✦</span>
              </div>

              <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>

              <p className="mb-8 leading-relaxed text-[#aaabb0]">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${service.border} ${service.color}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-32 md:px-8">
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
              Ready to start your{" "}
              <span className="bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] bg-clip-text text-transparent">
                next project?
              </span>
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#aaabb0] md:text-lg">
              I’m open to collaborations, freelance work, and opportunities to
              build useful digital products.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] px-8 py-4 font-bold text-[#005762] transition-transform duration-300 hover:scale-105"
              >
                Let&apos;s Talk
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