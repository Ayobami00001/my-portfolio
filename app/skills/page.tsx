"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const frontendSkills = [
  {
    name: "React",
    description:
      "Building interactive and reusable user interfaces with a strong focus on component structure and smooth user experience.",
    percent: "95%",
    width: "95%",
    label: "Strongest",
    color: "from-[#81ecff] to-[#00d4ec]",
  },
  {
    name: "Next.js",
    description:
      "Using modern routing and frontend architecture to build responsive and scalable web applications.",
    percent: "85%",
    width: "85%",
    label: "Intermediate",
    color: "from-[#81ecff] to-[#00d4ec]",
  },
  {
    name: "Tailwind CSS",
    description:
      "Creating modern, responsive, and fast UI designs with utility-first styling.",
    percent: "93%",
    width: "93%",
    label: "Strongest",
    color: "from-[#81ecff] to-[#00d4ec]",
  },
  {
    name: "Bootstrap",
    description:
      "Using responsive layout systems and prebuilt UI utilities to structure interfaces quickly.",
    percent: "82%",
    width: "82%",
    label: "Confident",
    color: "from-[#81ecff] to-[#00d4ec]",
  },
  {
    name: "JavaScript",
    description:
      "Strong understanding of modern JavaScript concepts used to build dynamic web applications.",
    percent: "94%",
    width: "94%",
    label: "Strongest",
    color: "from-[#81ecff] to-[#00d4ec]",
  },
  {
    name: "TypeScript",
    description:
      "Currently improving my understanding of type safety and building more structured frontend applications.",
    percent: "72%",
    width: "72%",
    label: "Learning",
    color: "from-[#81ecff] to-[#00d4ec]",
  },
];

const backendSkills = [
  {
    name: "Node.js",
    description:
      "Using JavaScript on the backend to build server-side logic and application functionality.",
    percent: "84%",
    width: "84%",
    label: "Intermediate",
    color: "from-[#bf81ff] to-[#9c42f4]",
  },
  {
    name: "Express.js",
    description:
      "Building backend APIs and handling routes, middleware, and application logic efficiently.",
    percent: "83%",
    width: "83%",
    label: "Intermediate",
    color: "from-[#bf81ff] to-[#9c42f4]",
  },
  {
    name: "MongoDB",
    description:
      "Working with NoSQL databases to manage and structure application data.",
    percent: "80%",
    width: "80%",
    label: "Intermediate",
    color: "from-[#bf81ff] to-[#9c42f4]",
  },
  {
    name: "GraphQL",
    description:
      "Currently learning how to structure queries and work with more flexible API communication.",
    percent: "65%",
    width: "65%",
    label: "Learning",
    color: "from-[#bf81ff] to-[#9c42f4]",
  },
];

const workflowSkills = [
  {
    name: "Git / GitHub",
    description:
      "Using version control for project tracking, collaboration, and code management.",
    percent: "88%",
    width: "88%",
    label: "Workflow",
    color: "from-[#669dff] to-[#0070ea]",
  },
  {
    name: "Responsive Design",
    description:
      "Building layouts that work well across desktop, tablet, and mobile devices.",
    percent: "90%",
    width: "90%",
    label: "Strong",
    color: "from-[#669dff] to-[#0070ea]",
  },
  {
    name: "API Integration",
    description:
      "Connecting frontend applications with backend APIs and external services.",
    percent: "82%",
    width: "82%",
    label: "Growing",
    color: "from-[#669dff] to-[#0070ea]",
  },
  {
    name: "UI Implementation",
    description:
      "Translating design ideas into clean, reusable, and responsive frontend components.",
    percent: "89%",
    width: "89%",
    label: "Strong",
    color: "from-[#669dff] to-[#0070ea]",
  },
];

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0c0e12] text-[#f6f6fc]">
      {/* Global background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#81ecff]/10 via-[#bf81ff]/10 to-[#669dff]/10" />
      <div className="pointer-events-none absolute left-[-10%] top-[10%] -z-10 h-[420px] w-[420px] rounded-full bg-[#81ecff]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-8%] top-[45%] -z-10 h-[380px] w-[380px] rounded-full bg-[#bf81ff]/10 blur-[120px]" />

      <section className="mx-auto max-w-7xl px-6 pt-20 md:px-8">
        {/* Hero */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#bf81ff]">
            Technical Expertise
          </span>

          <h1 className="mb-8 text-5xl font-extrabold leading-tight tracking-tighter sm:text-6xl md:text-8xl">
            Skills &amp;{" "}
            <span className="bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] bg-clip-text text-transparent">
              Tools I Use
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-[#aaabb0] md:text-xl">
            I use modern frontend and backend technologies to build responsive,
            scalable, and user-friendly web applications.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Frontend */}
          <div className="space-y-8 md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-2 flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#81ecff]/10 text-[#81ecff]">
                <span className="text-xl">◉</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                Frontend Skills
              </h2>
            </motion.div>

            {frontendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="rounded-[2rem] border border-[#46484d]/20 bg-[rgba(35,38,44,0.6)] p-8 backdrop-blur-xl"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="rounded-lg bg-[#23262c] px-4 py-3 text-sm font-bold text-[#81ecff]">
                    {skill.name}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#81ecff]/60">
                    {skill.label}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold">{skill.name}</h3>
                <p className="mb-6 text-sm leading-relaxed text-[#aaabb0]">
                  {skill.description}
                </p>

                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#aaabb0]">
                    Progress
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#81ecff]/70">
                    {skill.percent}
                  </span>
                </div>

                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#171a1f]">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: skill.width }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Backend */}
          <div className="space-y-8 md:col-span-4 md:mt-16">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-2 flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#bf81ff]/10 text-[#bf81ff]">
                <span className="text-xl">◆</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                Backend Skills
              </h2>
            </motion.div>

            {backendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="rounded-[2rem] border border-[#46484d]/20 bg-[rgba(35,38,44,0.6)] p-8 backdrop-blur-xl"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="rounded-lg bg-[#23262c] px-4 py-3 text-sm font-bold text-[#bf81ff]">
                    {skill.name}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#bf81ff]/60">
                    {skill.label}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold">{skill.name}</h3>
                <p className="mb-6 text-sm leading-relaxed text-[#aaabb0]">
                  {skill.description}
                </p>

                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#aaabb0]">
                    Progress
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#bf81ff]/70">
                    {skill.percent}
                  </span>
                </div>

                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#171a1f]">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: skill.width }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Workflow */}
          <div className="space-y-8 md:col-span-4 md:mt-32">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-2 flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#669dff]/10 text-[#669dff]">
                <span className="text-xl">▣</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                Workflow &amp; Tools
              </h2>
            </motion.div>

            {workflowSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="rounded-[2rem] border border-[#46484d]/20 bg-[rgba(35,38,44,0.6)] p-8 backdrop-blur-xl"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="rounded-lg bg-[#23262c] px-4 py-3 text-sm font-bold text-[#669dff]">
                    {skill.name}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#669dff]/60">
                    {skill.label}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold">{skill.name}</h3>
                <p className="mb-6 text-sm leading-relaxed text-[#aaabb0]">
                  {skill.description}
                </p>

                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#aaabb0]">
                    Progress
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#669dff]/70">
                    {skill.percent}
                  </span>
                </div>

                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#171a1f]">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: skill.width }}
                  />
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-[#46484d]/20 bg-gradient-to-br from-[#23262c] to-[#171a1f] p-8 text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#81ecff]/20">
                <span className="text-3xl text-[#81ecff]">✦</span>
              </div>
              <h4 className="mb-2 text-lg font-bold">Always Learning</h4>
              <p className="text-xs leading-relaxed text-[#aaabb0]">
                Currently learning Next.js, TypeScript, GraphQL, and improving
                my understanding of full-stack architecture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology section */}
      <section className="mx-auto mt-36 max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-[#46484d]/20 bg-[rgba(35,38,44,0.6)] p-10 backdrop-blur-xl md:p-12"
        >
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Methodology &amp; Design
              </h2>
              <p className="text-[#aaabb0]">
                Beyond code, I focus on the overall product experience using
                practical workflows and modern development practices.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:col-span-2">
              {[
                "Git / GitHub",
                "Responsive Design",
                "API Integration",
                "UI Implementation",
                "Problem Solving",
                "Frontend Architecture",
                "Backend Logic",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#46484d]/25 bg-[#171a1f] px-5 py-3 text-sm font-medium text-[#81ecff] transition-colors hover:bg-[#81ecff]/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-4xl px-6 md:px-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-[#81ecff]/20 blur-3xl" />
            <h2 className="relative mb-12 text-4xl font-black md:text-6xl">
              Ready to scale?
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <button className="rounded-full bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] px-10 py-5 text-lg font-bold text-[#005762] shadow-[0_0_25px_rgba(129,236,255,0.25)] transition-transform duration-300 hover:scale-105">
              Let&apos;s Build Together
            </button>

            <button className="rounded-full border border-[#46484d]/30 px-10 py-5 text-lg font-bold transition-colors hover:bg-[#23262c]">
              Download CV
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}