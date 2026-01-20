"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Work() {
  const work = [
    {
      name: "CampusBuddy",
      description:
        "AI-Powered Digital Campus Assistant. Automates student queries and campus navigation.",
      bgImage: "/assets/project1.png",
      repoLink: "https://github.com/Ganesh07A/campus-buddy",
      liveLink: "https://campus-buddy07.vercel.app/",
    },
    {
      name: "Sahayak AI",
      description:
        "Personal AI Chatbot built with Python & LangChain. Handles context-aware conversations.",
      bgImage: "/assets/project2.jpg",
      repoLink: "https://github.com/Ganesh07A/Sahayak-chatbot",
      liveLink: "#",
    },
    {
      name: "Smart Assessment",
      description:
        "Online examination platform with AI proctoring and automated grading systems.",
      bgImage: "/assets/work-3.png",
      repoLink: "https://github.com/Ganesh07A/Smart-Assesment-Platform",
      liveLink: "#",
    },
    {
      name: "Portfolio Website",
      description:
        "Modern portfolio built with Next.js and Tailwind CSS to showcase my journey.",
      bgImage: "/assets/project4.png",
      repoLink: "https://github.com/ganesh07a/my-portfolio2",
      liveLink: "#",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div id="my" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Heading */}
      <motion.h4
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-5xl font-Ovo"
      >
        Latest Projects
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Explore my journey in building scalable web applications and intelligent
        AI systems.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
        {work.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 dark:border-white/20 group"
          >
            {/* Image */}
            <div
              className="h-64 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <motion.a
                  href={project.repoLink}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 text-center py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-100 transition text-sm font-medium text-gray-700"
                >
                  GitHub
                </motion.a>

                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 text-center py-2 px-4 rounded-full bg-black text-white hover:bg-gray-800 transition text-sm font-medium flex items-center justify-center gap-2"
                >
                  Live Demo
                  <img
                    src="/assets/right-arrow-white.png"
                    alt=""
                    className="w-3"
                  />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="https://github.com/ganesh07a"
          target="_blank"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white"
        >
          View more on GitHub
          <img
            src="/assets/right-arrow-bold.png"
            alt=""
            className="w-4 dark:hidden"
          />
          <img
            src="/assets/right-arrow-bold-dark.png"
            alt=""
            className="w-4 hidden dark:block"
          />
        </Link>
      </motion.div>
    </div>
  );
}
