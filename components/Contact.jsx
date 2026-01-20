"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const hCaptcha = event.target.querySelector(
      'textarea[name=h-captcha-response]'
    )?.value;

    if (!hCaptcha) {
      setResult("Please fill out captcha field");
      return;
    }

    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_ACCESS_KEY
    );

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult(res.message);
      event.target.reset();
    } else {
      setResult(res.message);
    }
  };

  function CaptchaLoader() {
    const captchadiv = document.querySelectorAll('[data-captcha="true"]');
    if (captchadiv.length) {
      captchadiv.forEach((item) => {
        if (!item.dataset.sitekey) {
          item.dataset.sitekey =
            "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
        }
      });

      const script = document.createElement("script");
      script.src =
        "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }

  useEffect(() => {
    CaptchaLoader();
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
    >
      {/* Heading */}
      <motion.h4
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with me
      </motion.h4>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-5xl font-Ovo"
      >
        Get in touch
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I&apos;d love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto"
      >
        <input
          type="hidden"
          name="subject"
          value="Ganesh Suvarnakar - New form Submission"
        />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="px-3 py-2 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30 focus:ring-2 focus:ring-black/30"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="px-3 py-2 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30 focus:ring-2 focus:ring-black/30"
          />
        </div>

        <textarea
          rows="6"
          name="message"
          required
          placeholder="Enter your message"
          className="w-full px-4 py-2 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30 focus:ring-2 focus:ring-black/30"
        />

        {/* CAPTCHA (NO animation here) */}
        <div className="h-captcha mb-6 max-w-full" data-captcha="true"></div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="py-2 px-8 w-max flex items-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-300 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover"
        >
          Submit now
          <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
        </motion.button>

        <p className="mt-4 text-center">{result}</p>
      </motion.form>
    </div>
  );
}
