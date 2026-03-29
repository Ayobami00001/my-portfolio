"use client";

import { motion } from "framer-motion";

export default function HirePage() {
  return (
    <main className="pt-32 relative overflow-hidden">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <span className="uppercase tracking-widest text-[#81ecff] bg-[#81ecff]/10 px-4 py-1 rounded-full border border-[#81ecff]/20 text-xs">
            Available for Opportunities
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight max-w-4xl">
            Let&apos;s Build the{" "}
            <span className="bg-gradient-to-r from-[#81ecff] via-[#669dff] to-[#bf81ff] bg-clip-text text-transparent">
              Future of Tech
            </span>{" "}
            Together.
          </h1>

          <p className="text-[#aaabb0] max-w-2xl">
            I am a Full-Stack Engineer and Student at{" "}
            <span className="text-white font-semibold">
              SQI College of ICT
            </span>
            , bridging the gap between rigorous academic theory and
            high-performance industrial application.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-gradient-to-r from-[#81ecff] to-[#bf81ff] px-8 py-4 rounded-full font-bold text-[#005762]">
              Download CV
            </button>
            <button className="border border-[#46484d]/30 px-8 py-4 rounded-full font-bold">
              Start a Discussion
            </button>
          </div>
        </motion.div>
      </section>

      {/* WHY HIRE ME */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-32">
        <div className="grid md:grid-cols-12 gap-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-[#23262c]/60 p-10 rounded-xl border border-[#46484d]/20"
          >
            <h2 className="text-3xl font-bold mb-6">Why Hire Me?</h2>

            <p className="text-[#aaabb0] mb-8 max-w-xl">
              I don&apos;t just write code; I architect solutions. Combining the
              innovative mindset of an SQI scholar with practical full-stack
              expertise, I deliver products that are scalable, secure, and
              user-centric.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg">Full-Stack Mastery</h4>
                <p className="text-sm text-[#aaabb0]">
                  Seamless integration from frontend to backend.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg">Problem Solver</h4>
                <p className="text-sm text-[#aaabb0]">
                  Analytical approach to complex systems.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-4 flex flex-col gap-6">
            {["Full-Time Roles", "Freelance Projects", "Consulting"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-[#23262c]/60 p-6 rounded-xl border border-[#46484d]/20"
              >
                <h3 className="font-bold text-lg">{item}</h3>
                <p className="text-sm text-[#aaabb0]">
                  {item === "Full-Time Roles" &&
                    "Ready to integrate into engineering teams."}
                  {item === "Freelance Projects" &&
                    "End-to-end delivery for startups."}
                  {item === "Consulting" &&
                    "Technical strategy and architecture guidance."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I BRING */}
      <section className="bg-[#111318] py-24 mb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">

          <h2 className="text-4xl font-bold mb-12">
            What I Bring to the Table
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              "Clean Code",
              "Scalable Architecture",
              "Rapid Prototyping",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -6 }}
                className="space-y-4"
              >
                <h3 className="font-bold text-xl">{item}</h3>
                <p className="text-[#aaabb0] text-sm">
                  High-quality engineering with real-world impact.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="p-16 rounded-xl bg-[#23262c]/60 border border-[#46484d]/20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to launch your next big idea?
          </h2>

          <p className="text-[#aaabb0] mb-10 max-w-xl mx-auto">
            I&apos;m currently accepting applications for new projects and
            opportunities.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#81ecff] text-[#005762] px-10 py-5 rounded-full font-bold">
              Email Me
            </button>

            <button className="border border-[#46484d]/30 px-10 py-5 rounded-full font-bold">
              Book a Call
            </button>
          </div>
        </motion.div>
      </section>

    </main>
  );
}