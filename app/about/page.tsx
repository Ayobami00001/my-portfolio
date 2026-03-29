"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <main className="relative overflow-x-hidden bg-[#0c0e12] text-[#f6f6fc]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#81ecff]/10 via-[#bf81ff]/10 to-[#669dff]/10" />
      <div className="pointer-events-none absolute -left-20 top-20 -z-10 h-[400px] w-[400px] rounded-full bg-[#81ecff]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[350px] w-[350px] rounded-full bg-[#bf81ff]/10 blur-[120px]" />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="mb-6 inline-block rounded-full border border-[#81ecff]/20 bg-[#81ecff]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#81ecff]">
              Who I Am
            </span>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-7xl">
              About{" "}
              <span className="bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] bg-clip-text text-transparent">
                Ibrahim Faruq
              </span>
            </h1>

            <p className="mb-8 max-w-3xl text-base leading-relaxed text-[#aaabb0] sm:text-lg md:text-xl">
              Hi, I’m Ibrahim Faruq, a Full-Stack Developer and student at SQI
              College of ICT. I enjoy building modern web applications that are
              scalable, responsive, and designed for real-world use. My focus is
              on creating digital products that combine clean structure, modern
              design, and reliable performance.
            </p>

            <p className="max-w-3xl text-base leading-relaxed text-[#aaabb0] sm:text-lg">
              I am passionate about improving my skills, solving practical
              problems with technology, and growing into a developer who can
              build impactful products for people and businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="group relative mx-auto max-w-md">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#81ecff]/20 via-[#bf81ff]/15 to-[#669dff]/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#46484d]/20 bg-[#171a1f]/60 p-4 backdrop-blur-xl">
                <img
                  src="https://res.cloudinary.com/dyzdckuxi/image/upload/v1774667213/Gemini_Generated_Image_vq1jm6vq1jm6vq1j_hx1yni.png"
                  alt="Profile preview"
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#111318] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-7"
            >
              <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-5xl">
                My Journey
              </h2>

              <div className="space-y-6 text-[#aaabb0] text-base leading-relaxed sm:text-lg">
                <p>
                  My journey into software development began with a strong
                  curiosity about how digital products are built. I wanted to
                  understand the logic behind websites, applications, and the
                  systems people use every day.
                </p>

                <p>
                  In 2022, while I was around the University of Ibadan
                  environment, I started searching for a place where I could
                  learn software development properly. I spent about a year
                  trying to understand the path, but I was still confused and
                  not fully getting the kind of structured knowledge I needed.
                </p>

                <p>
                  Because of that, I began researching online for one of the
                  best tech schools in Nigeria, and that was when I discovered
                  SQI College of ICT. I became determined to study there, and
                  with the support of my parents, I was able to start my journey
                  at SQI in 2024.
                </p>

                <p>
                  SQI helped transform my curiosity into structured engineering
                  knowledge. It gave me a clearer understanding of frontend and
                  backend development, better problem-solving ability, and a
                  more disciplined approach to building software.
                </p>

                <p>
                  In 2023, I also gained admission into Ladoke Akintola
                  University of Technology (LAUTECH), where I study Information
                  Systems, a field closely connected to technology. That has
                  helped strengthen both my academic and practical interest in
                  software engineering.
                </p>

                <p>
                  Today, I am focused on becoming a highly skilled full-stack
                  developer who can build useful, scalable, and professional
                  digital products for real-world needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="rounded-[2rem] border border-[#46484d]/20 bg-[#171a1f]/60 p-8 backdrop-blur-xl">
                <h3 className="mb-6 text-2xl font-bold text-[#81ecff]">
                  Core Strengths
                </h3>

                <div className="space-y-5">
                  {[
                    "Full-Stack Development",
                    "Clean Code Architecture",
                    "API Development",
                    "Modern UI Design",
                    "Problem Solving",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#46484d]/15 bg-[#23262c]/60 px-5 py-4"
                    >
                      <p className="font-semibold text-[#f6f6fc]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-5xl">
              Learning Timeline
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                year: "2022",
                title: "Started Exploring Software Development",
                text: "Began researching how websites and digital products are built, with a strong interest in learning software development properly.",
                color: "#81ecff",
              },
              {
                year: "2023",
                title: "Admission into LAUTECH",
                text: "Gained admission into Ladoke Akintola University of Technology (LAUTECH) to study Information Systems, a discipline related to technology and digital systems.",
                color: "#bf81ff",
              },
              {
                year: "2024",
                title: "Started Learning at SQI College of ICT",
                text: "Joined SQI College of ICT, where my curiosity became more structured and practical through proper training in modern software development.",
                color: "#669dff",
              },
              {
                year: "Now",
                title: "Growing as a Full-Stack Developer",
                text: "Focused on building reliable, scalable, and responsive web applications while improving my skills in frontend, backend, APIs, and modern development workflows.",
                color: "#81ecff",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-[2rem] border border-[#46484d]/20 bg-[#171a1f]/60 p-8 backdrop-blur-xl"
              >
                <div className="mb-3 text-sm font-bold uppercase tracking-[0.22em]" style={{ color: item.color }}>
                  {item.year}
                </div>
                <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                <p className="leading-relaxed text-[#aaabb0]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-[#111318] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              Technologies I Work With
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-[#aaabb0] sm:text-lg">
              These are the main tools and technologies I use to build modern
              web applications and improve my workflow as a full-stack
              developer.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "GraphQL",
              "Tailwind CSS",
              "Bootstrap",
              "Git / GitHub",
              "JavaScript",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-[#46484d]/20 bg-[#23262c]/60 px-5 py-4 text-center font-semibold text-[#f6f6fc] backdrop-blur-xl"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY + FUTURE */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-[#46484d]/20 bg-[#171a1f]/60 p-8 backdrop-blur-xl"
            >
              <h3 className="mb-5 text-2xl font-bold text-[#81ecff]">
                My Developer Philosophy
              </h3>
              <p className="text-base leading-relaxed text-[#aaabb0] sm:text-lg">
                I believe software should not only work well but also feel
                intuitive, fast, and reliable. My goal is to build systems that
                are clean, maintainable, user-friendly, and scalable enough for
                real-world growth. I value structure, clarity, and continuous
                improvement in every project I work on.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-[#46484d]/20 bg-[#171a1f]/60 p-8 backdrop-blur-xl"
            >
              <h3 className="mb-5 text-2xl font-bold text-[#bf81ff]">
                My Future Goal
              </h3>
              <p className="text-base leading-relaxed text-[#aaabb0] sm:text-lg">
                My goal is to grow into a world-class software engineer who can
                contribute to impactful products, build scalable systems, and
                solve meaningful problems with technology. I want to keep
                learning, keep improving, and work on products that create real
                value for users and businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}