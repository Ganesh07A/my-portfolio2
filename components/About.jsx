"use client";
import { motion } from "framer-motion";

export default function About() {
  const tools = [
    { name: "Python", icon: "/assets/Python.png" },
    { name: "React", icon: "/assets/react.svg" },
    { name: "Next.js", icon: "/assets/Next.js.png" },
    { name: "Django", icon: "/assets/Node.js.png" },
    { name: "FastAPI", icon: "/assets/FastAPI.png" },
    { name: "PostgresSQL", icon: "/assets/PostgresSQL.png" },
  ];

  const data = [
    {
      name: "Languages",
      icon1: "/assets/code-icon.png",
      icon2: "/assets/code-icon-dark.png",
      description: "Python, JavaScript, SQL, HTML, CSS",
    },
    {
      name: "Education",
      icon1: "/assets/edu-icon.png",
      icon2: "/assets/edu-icon-dark.png",
      description: "B.Tech in Computer Science",
    },
    {
      name: "Projects",
      icon1: "/assets/project-icon.png",
      icon2: "/assets/project-icon-dark.png",
      description: "Built AI Chatbots & Full Stack Apps",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Section Heading */}
      <motion.h4
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-max mx-auto relative"
        >
          <img
            src="./assets/about2-me-pic.jpeg"
            alt=""
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />

          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-cyan-100 w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center"
          >
            <img
              src="/assets/programmer.png"
              alt=""
              className="w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo">
            I am a passionate Full Stack Developer and AI Enthusiast pursuing my
            B.Tech. I specialize in building intelligent systems using Python,
            Django, and Next.js, with a focus on MLOps and scalable web
            applications.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {data.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:shadow-lg dark:hover:bg-darkHover/50"
              >
                <img
                  src={item.icon1}
                  alt=""
                  className="w-7 mt-3 dark:hidden"
                />
                <img
                  src={item.icon2}
                  alt=""
                  className="w-7 mt-3 hidden dark:block"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ul>

          {/* Tools */}
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
            Tools I use
          </h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {tools.map((tool) => (
              <motion.li
                key={tool.name}
                whileHover={{ y: -6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer"
              >
                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
