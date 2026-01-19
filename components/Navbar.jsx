"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const navRef = useRef();
  const navLinkRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (scrollY > 50) {
        navRef.current.classList.add(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );
        navLinkRef.current.classList.remove(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50"
        );
      } else {
        navRef.current.classList.remove(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );
        navLinkRef.current.classList.add(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50"
        );
      }
    };

    window.addEventListener("scroll", onScroll);

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        ref={navRef}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50"
      >
        <Link href="#" className="text-3xl font-serif">
          GS
        </Link>

        {/* Desktop Menu */}
        <ul
          ref={navLinkRef}
          className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/30 dark:bg-transparent"
        >
          {["Home", "About me", "Achievements", "My Work", "Contact me"].map(
            (item, i) => (
              <motion.li
                key={i}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href={`#${item.split(" ")[0].toLowerCase()}`}
                  className="hover:text-gray-500 dark:hover:text-gray-300 transition"
                >
                  {item}
                </a>
              </motion.li>
            )
          )}
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src="/assets/moon_icon.png"
              alt=""
              className="w-5 dark:hidden"
            />
            <img
              src="/assets/sun_icon.png"
              alt=""
              className="w-5 hidden dark:block"
            />
          </motion.button>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-3 px-8 py-1.5 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full ml-4 font-Ovo dark:border-white/30"
          >
            Contact
          </motion.a>

          <button className="block md:hidden ml-3" onClick={() => setIsOpen(true)}>
            <img
              src="/assets/menu-black.png"
              alt=""
              className="w-6 dark:hidden"
            />
            <img
              src="/assets/menu-white.png"
              alt=""
              className="w-6 hidden dark:block"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 font-Ovo dark:bg-darkHover dark:text-white"
          >
            <div
              className="absolute right-6 top-6 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </div>

            {["Home", "About me", "Skills", "My Work", "Contact me"].map(
              (item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={`#${item.split(" ")[0].toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              )
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
