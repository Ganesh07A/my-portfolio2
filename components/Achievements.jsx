"use client";
import { motion } from "framer-motion";

export default function Achievements() {
  const skills = [
    {
      name: "AI & Machine Learning",
      icon: "/assets/graphics-icon.png",
      description:
        "Building intelligent agents, RAG pipelines, and predictive models using Python, TensorFlow, and LangChain.",
    },
    {
      name: "Full Stack Development",
      icon: "/assets/web-icon.png",
      description:
        "Developing scalable web applications with Next.js, React, Django, and FastAPI, integrated with SQL databases.",
    },
    {
      name: "Data Structures & Algorithms",
      icon: "/assets/ui-icon.png",
      description:
        "Strong problem-solving skills with a focus on Arrays, Matrices, and dynamic programming in Python.",
    },
    {
      name: "Achievements",
      icon: "/assets/mobile-icon.png",
      description:
        "Winner of Smart India Hackathon (internal) and solved 50+ problems on LeetCode.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div id="achievements" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Heading */}
      <motion.h4
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I bring to the table
      </motion.h4>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-5xl font-Ovo"
      >
        Technical Proficiency
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I combine advanced AI knowledge with robust full-stack engineering to
        build modern, intelligent solutions.
      </motion.p>

      {/* Skill Cards */}
      <div className="grid grid-cols-auto gap-6 my-10">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover hover:shadow-lg dark:hover:shadow-white/20"
          >
            <img src={skill.icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {skill.name}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
