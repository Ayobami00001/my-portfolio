"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Todo List",
    type: "Frontend Project",
    description:
      "A task management application designed to help users organize daily activities efficiently. Built to practice form handling, state management, and interactive UI development.",
    technologies: ["React", "JavaScript", "CSS", "Vercel"],
    live: "https://todo-list-five-gamma-36.vercel.app/",
    github: "https://github.com/Ayobami00001/Todo-list",
    featured: false,
    image:
      "https://res.cloudinary.com/dyzdckuxi/image/upload/v1775162152/Screenshot_from_2026-04-02_21-35-27_kfntgz.png",
  },
  {
    name: "Love Calculator",
    type: "Frontend Project",
    description:
      "A simple interactive project where users enter two names to check compatibility in a fun way. It helped me practice working with user inputs, UI feedback, and creating small interactive web experiences.",
    technologies: ["React", "JavaScript", "CSS", "Vercel"],
    live: "https://my-love-rouge.vercel.app/",
    github: "https://github.com/Ayobami00001/my-love",
    featured: false,
    image:
      "https://res.cloudinary.com/dyzdckuxi/image/upload/v1775161714/Screenshot_from_2026-04-02_21-27-48_gxr5u9.png",
  },
  {
    name: "My Printivo Clone",
    type: "UI Clone Project",
    description:
      "A frontend clone of the Printivo interface created during my level one learning stage. This project helped me improve my layout skills, styling accuracy, and ability to recreate real-world website interfaces.",
    technologies: ["HTML", "CSS", "JavaScript", "Frontend Practice"],
    live: "https://my-printivo.vercel.app",
    github: "https://github.com/Ayobami00001/my-printivo",
    featured: false,
    image:
      "https://res.cloudinary.com/dyzdckuxi/image/upload/v1775162000/Screenshot_from_2026-04-02_21-32-45_qs3n3h.png",
  },
  {
  name: "DevFaruq Clothing Store",
  type: "Full-Stack E-Commerce",
  description:
    "A full-stack clothing e-commerce platform with a client-facing store, admin dashboard, and backend API. Users can browse products, add to cart, and interact with a modern UI, while admins manage products and inventory through a dedicated dashboard.",
  technologies: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Cloudinary",
  ],
  live: "https://clothing-store-by-devfaruq.vercel.app",
  github: "https://github.com/Ayobami00001/Clothing-Store.git",
  featured: true,
  image: "https://res.cloudinary.com/dyzdckuxi/image/upload/v1775161468/Screenshot_from_2026-04-02_21-22-30_flikiz.png",
},
{
  name: "DevFaruq Portfolio",
  type: "Personal Portfolio",
  description:
    "A modern developer portfolio built with Next.js and Tailwind CSS to showcase my projects, skills, and experience. It features smooth animations, responsive design, and a clean UI focused on user experience.",
  technologies: [
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Vercel",
    "Typescript",
  ],
  live: "https://my-portfolio-pink-one-68.vercel.app",
  github: "https://github.com/Ayobami00001/my-portfolio.git",
  featured: false,
  image: "https://res.cloudinary.com/dyzdckuxi/image/upload/v1775162879/Screenshot_from_2026-04-02_21-47-38_pmxkcy.png",
},
];

export default function ProjectsPage() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className="relative overflow-x-hidden bg-[#0c0e12] text-[#f6f6fc]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#81ecff]/10 via-[#bf81ff]/10 to-[#669dff]/10" />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#bf81ff]">
            Learning Projects & Practice Builds
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-7xl">
            Projects That{" "}
            <span className="bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] bg-clip-text text-transparent">
              Reflect My Growth
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-[#aaabb0]">
            These projects represent my learning journey as a developer. They
            show how I practice building interactive user interfaces, solving
            real problems with code, and improving my frontend and full-stack
            development skills step by step.
          </p>
        </motion.div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="mx-auto mb-24 max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-[#81ecff]/20 via-[#bf81ff]/20 to-[#669dff]/20 opacity-60 blur-2xl transition duration-1000 group-hover:opacity-100" />

            <div className="relative flex min-h-[500px] flex-col overflow-hidden rounded-[2rem] border border-[#46484d]/20 bg-[rgba(35,38,44,0.6)] backdrop-blur-xl lg:flex-row">
              <div className="overflow-hidden lg:w-3/5">
                <img
                  alt={featuredProject.name}
                  src={featuredProject.image}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12 lg:w-2/5">
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[#81ecff]/20 bg-[#81ecff]/10 px-3 py-1 text-[10px] uppercase tracking-wider text-[#81ecff]">
                    Featured
                  </span>
                  <span className="rounded-full bg-[#23262c] px-3 py-1 text-[10px] uppercase tracking-wider text-[#aaabb0]">
                    {featuredProject.type}
                  </span>
                </div>

                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                  {featuredProject.name}
                </h2>

                <p className="mb-8 text-base leading-relaxed text-[#aaabb0] md:text-lg">
                  {featuredProject.description}
                </p>

                <div className="mb-10 flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-[#171a1f] px-3 py-1 text-xs text-[#aaabb0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  {featuredProject.live && (
                    <a
                      href={featuredProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] px-6 py-3 text-sm font-bold text-[#005762] transition-all hover:scale-105"
                    >
                      Live Preview
                    </a>
                  )}

                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#46484d]/30 px-6 py-3 text-sm font-bold transition-colors hover:bg-[#1d2025]"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Other Projects */}
      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-8">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">More Projects</h2>
          <div className="text-xs uppercase tracking-widest text-[#aaabb0]">
            Showing <span className="text-[#81ecff]">{projects.length}</span>{" "}
            Projects
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[2rem] border border-[#46484d]/20 bg-[rgba(35,38,44,0.6)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={project.name}
                  src={project.image}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute right-4 top-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#46484d]/20 bg-[rgba(35,38,44,0.6)] text-sm backdrop-blur-xl transition-all hover:bg-[#81ecff] hover:text-[#005762]"
                  >
                    {"</>"}
                  </a>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-4 flex gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#81ecff]">
                    {project.type}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold">{project.name}</h3>

                <p className="mb-6 text-sm leading-relaxed text-[#aaabb0]">
                  {project.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-[#23262c] px-2 py-1 text-[10px] text-[#aaabb0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#81ecff] transition-transform hover:translate-x-1"
                    >
                      Live Demo <span>→</span>
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#bf81ff] transition-transform hover:translate-x-1"
                  >
                    GitHub <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}