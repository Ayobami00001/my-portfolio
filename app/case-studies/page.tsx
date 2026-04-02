"use client";

import { motion } from "framer-motion";

type Accent = "cyan" | "purple" | "blue" | "pink";

type CaseStudy = {
  title: string;
  project: string;
  status: string;
  accent: Accent;
  challenge: string;
  solution: string;
  takeaway: string;
  icon: string;
};

type TimelineStep = {
  phase: string;
  time: string;
  title: string;
  text: string;
  accent: Accent;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Authentication & Route Protection",
    project: "DevFaruq Clothing E-Commerce",
    status: "Core System",
    accent: "cyan",
    challenge:
      "Building a secure authentication flow for both normal users and admin users without exposing protected pages or backend routes.",
    solution:
      "I used JWT authentication, protected routes, and role-based checks to separate user access from admin access. I also made sure tokens were stored and sent properly for authenticated requests.",
    takeaway:
      "Authentication is not only about login. It also involves protecting pages, validating users, and controlling access correctly.",
    icon: "🔐",
  },
  {
    title: "Deployment & Refresh 404 Fix",
    project: "Portfolio / Frontend Deployment",
    status: "Solved",
    accent: "purple",
    challenge:
      "After deploying the frontend, navigating to pages worked normally, but refreshing pages like collection or project routes caused 404 errors.",
    solution:
      "I investigated the difference between client-side navigation and direct browser refresh in production. I corrected the routing setup and deployment behavior so routes could resolve properly after refresh.",
    takeaway:
      "Something that works locally may still fail in production if deployment routing is not configured properly.",
    icon: "🚀",
  },
  {
    title: "Email Service Configuration",
    project: "Backend Integration",
    status: "Backend Fix",
    accent: "blue",
    challenge:
      "The email system failed because the API key was missing or not properly loaded in the environment, which prevented actions like verification and email delivery.",
    solution:
      "I corrected the environment variable setup, checked how the email service was initialized, and made sure the backend could access the API key both locally and after deployment.",
    takeaway:
      "Third-party services depend heavily on proper environment configuration and careful deployment setup.",
    icon: "📧",
  },
  {
    title: "Image Upload & Cloud Storage",
    project: "Admin Dashboard / Product Management",
    status: "Implementation",
    accent: "pink",
    challenge:
      "Handling product image uploads across the admin dashboard and backend was difficult because files needed to be processed, uploaded, and stored correctly.",
    solution:
      "I integrated file upload middleware and cloud storage so product images could be uploaded from the admin side and stored safely for display across the application.",
    takeaway:
      "File upload features require coordination between frontend forms, backend processing, and cloud storage configuration.",
    icon: "🖼️",
  },
  {
    title: "Cart & Checkout State Flow",
    project: "DevFaruq Clothing E-Commerce",
    status: "UI Logic",
    accent: "cyan",
    challenge:
      "Managing cart data, checkout inputs, and user interactions across multiple components became difficult as the application grew.",
    solution:
      "I improved the way state was handled so updates stayed consistent across components, making the shopping flow smoother and reducing UI bugs.",
    takeaway:
      "Good state management improves both user experience and maintainability in frontend applications.",
    icon: "🛒",
  },
  {
    title: "Working Across Client, Admin, and Backend",
    project: "Full-Stack Architecture",
    status: "Ongoing Growth",
    accent: "purple",
    challenge:
      "Building separate client, admin, and backend systems introduced complexity in project structure, API communication, and feature coordination.",
    solution:
      "I organized the project into clear sections and focused on separating responsibilities, which made it easier to manage features and debug data flow across the full stack.",
    takeaway:
      "Real-world full-stack work requires thinking beyond single pages and understanding how different parts of a system work together.",
    icon: "⚙️",
  },
];

const timeline: TimelineStep[] = [
  {
    phase: "The Problem",
    time: "Step 1",
    title: "A blocker appears during development",
    text: "A feature breaks, deployment fails, or a part of the application stops behaving the way I expect.",
    accent: "cyan",
  },
  {
    phase: "Investigation",
    time: "Step 2",
    title: "I isolate the actual cause",
    text: "I review logs, inspect the code flow, compare local and deployed behavior, and narrow the issue down instead of guessing.",
    accent: "purple",
  },
  {
    phase: "Implementation",
    time: "Step 3",
    title: "I apply and test the fix",
    text: "I update the code, improve the structure, and verify that the solution works properly across the relevant parts of the project.",
    accent: "blue",
  },
  {
    phase: "Learning",
    time: "Step 4",
    title: "I document what the issue taught me",
    text: "Each solved problem improves my understanding of architecture, deployment, debugging, or frontend and backend integration.",
    accent: "pink",
  },
];

const accentStyles: Record<
  Accent,
  {
    badge: string;
    glow: string;
    iconBox: string;
    titleHover: string;
    border: string;
    dot: string;
  }
> = {
  cyan: {
    badge: "border-[#81ecff]/20 bg-[#81ecff]/10 text-[#81ecff]",
    glow: "hover:shadow-[0_0_40px_rgba(129,236,255,0.10)]",
    iconBox: "bg-[#81ecff]/10 text-[#81ecff]",
    titleHover: "group-hover:text-[#81ecff]",
    border: "border-l-[#81ecff]",
    dot: "bg-[#81ecff] shadow-[0_0_18px_rgba(129,236,255,0.55)]",
  },
  purple: {
    badge: "border-[#bf81ff]/20 bg-[#bf81ff]/10 text-[#bf81ff]",
    glow: "hover:shadow-[0_0_40px_rgba(191,129,255,0.10)]",
    iconBox: "bg-[#bf81ff]/10 text-[#bf81ff]",
    titleHover: "group-hover:text-[#bf81ff]",
    border: "border-l-[#bf81ff]",
    dot: "bg-[#bf81ff] shadow-[0_0_18px_rgba(191,129,255,0.55)]",
  },
  blue: {
    badge: "border-[#669dff]/20 bg-[#669dff]/10 text-[#669dff]",
    glow: "hover:shadow-[0_0_40px_rgba(102,157,255,0.10)]",
    iconBox: "bg-[#669dff]/10 text-[#669dff]",
    titleHover: "group-hover:text-[#669dff]",
    border: "border-l-[#669dff]",
    dot: "bg-[#669dff] shadow-[0_0_18px_rgba(102,157,255,0.55)]",
  },
  pink: {
    badge: "border-pink-400/20 bg-pink-400/10 text-pink-300",
    glow: "hover:shadow-[0_0_40px_rgba(244,114,182,0.10)]",
    iconBox: "bg-pink-400/10 text-pink-300",
    titleHover: "group-hover:text-pink-300",
    border: "border-l-pink-300",
    dot: "bg-pink-300 shadow-[0_0_18px_rgba(244,114,182,0.55)]",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="relative overflow-x-hidden bg-[#0c0e12] text-[#f6f6fc]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#81ecff]/10 via-[#bf81ff]/10 to-[#669dff]/10" />
      <div className="pointer-events-none absolute left-[-120px] top-20 -z-10 h-72 w-72 rounded-full bg-[#81ecff]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-120px] -z-10 h-72 w-72 rounded-full bg-[#bf81ff]/10 blur-[120px]" />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#bf81ff]">
            Problem Solving & Debugging
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-7xl">
            Development{" "}
            <span className="bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] bg-clip-text text-transparent">
              Case Studies
            </span>
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-[#aaabb0] md:text-xl">
            A closer look at the real challenges I have faced while building
            full-stack and frontend projects, and how I approached solving them
            through debugging, restructuring, testing, and continuous learning.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 md:px-8">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Real Problems I Solved
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#aaabb0] md:text-base">
              These case studies focus on practical development issues such as
              authentication, deployment, file uploads, state management, and
              backend integration.
            </p>
          </div>

          <div className="text-xs uppercase tracking-widest text-[#aaabb0]">
            Showing{" "}
            <span className="text-[#81ecff]">{caseStudies.length}</span> Case
            Studies
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {caseStudies.map((item, index) => {
            const style = accentStyles[item.accent];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
                className={`group overflow-hidden rounded-[2rem] border border-[#46484d]/20 bg-[rgba(35,38,44,0.6)] p-8 backdrop-blur-xl transition-all duration-500 ${style.glow}`}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${style.iconBox}`}
                  >
                    <span>{item.icon}</span>
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${style.badge}`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#aaabb0]">
                  {item.project}
                </p>

                <h3
                  className={`mb-6 text-2xl font-bold tracking-tight transition-colors ${style.titleHover}`}
                >
                  {item.title}
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#81ecff]">
                      The Challenge
                    </h4>
                    <p className="text-sm leading-relaxed text-[#d8d8de] md:text-base">
                      {item.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#bf81ff]">
                      The Solution
                    </h4>
                    <p className="text-sm leading-relaxed text-[#d8d8de] md:text-base">
                      {item.solution}
                    </p>
                  </div>

                  <div className="border-t border-[#46484d]/20 pt-5">
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#669dff]">
                      What I Learned
                    </h4>
                    <p className="text-sm italic leading-relaxed text-[#aaabb0] md:text-base">
                      {item.takeaway}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#81ecff]">
            My Process
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            How I Approach a Problem
          </h2>
          <p className="text-base leading-relaxed text-[#aaabb0] md:text-lg">
            My debugging process usually moves from identifying the issue, to
            isolating the root cause, implementing the fix, and learning from
            the result so the next problem becomes easier to solve.
          </p>
        </motion.div>

        <div className="relative space-y-10">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-[#46484d]/30 md:left-1/2" />

          {timeline.map((step, index) => {
            const style = accentStyles[step.accent];

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`relative flex flex-col gap-6 md:items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-[46%]">
                  <div
                    className={`rounded-[2rem] border border-[#46484d]/20 bg-[rgba(35,38,44,0.6)] p-6 backdrop-blur-xl md:p-8 ${index % 2 === 0 ? "border-l-4" : "border-r-4"} ${style.border}`}
                  >
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#aaabb0]">
                      {step.time} · {step.phase}
                    </p>
                    <h3 className="mb-3 text-xl font-bold md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-[#aaabb0]">
                      {step.text}
                    </p>
                  </div>
                </div>

                <div
                  className={`absolute left-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full md:left-1/2 ${style.dot}`}
                />

                <div className="hidden md:block md:w-[46%]" />
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-[2rem] border border-[#46484d]/20 bg-[rgba(35,38,44,0.6)] p-10 text-center backdrop-blur-xl md:p-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#81ecff]/5 via-transparent to-[#bf81ff]/5" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#bf81ff]">
              Let’s Build Something Great
            </p>
            <h2 className="mb-5 text-3xl font-extrabold tracking-tight md:text-5xl">
              Want to see more of my work?
            </h2>
            <p className="mb-8 text-base leading-relaxed text-[#aaabb0] md:text-lg">
              You can explore my projects, learn more about my background, or
              reach out if you want to collaborate on something meaningful.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/projects"
                className="rounded-full bg-gradient-to-r from-[#81ecff] via-[#bf81ff] to-[#669dff] px-6 py-3 text-sm font-bold text-[#005762] transition-all hover:scale-105"
              >
                View Projects
              </a>

              <a
                href="/hire-me"
                className="rounded-full border border-[#46484d]/30 px-6 py-3 text-sm font-bold transition-colors hover:bg-[#1d2025]"
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}