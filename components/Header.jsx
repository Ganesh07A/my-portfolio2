"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      id="home"
      variants={container}
      initial="hidden"
      animate="show"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      {/* Profile Image */}
      <motion.img
        src="/assets/pofile-pic.jpg"
        alt=""
        className="rounded-full w-32"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Greeting */}
      <motion.h3
        variants={item}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I&apos;m Ganesh Suvarnakar
        <motion.img
          src="/assets/hand-icon.png"
          alt=""
          className="w-6 mb-1"
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 3 }}
        />
      </motion.h3>

      {/* Main Heading */}
      <motion.h1
        variants={item}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Full Stack Developer & AI Enthusiast.
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={item}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I am a Full Stack Developer & AI Enthusiast. Building scalable web apps
        and intelligent systems.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={item}
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          contact me
          <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
        </motion.a>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="../assets/Ganesh-Suvarnakar-Resume.pdf"
            download
            className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white"
          >
            my resume
            <img
              src="/assets/download-icon.png"
              alt=""
              className="w-4 dark:invert"
            />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
