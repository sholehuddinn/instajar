"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const socialMedias = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/sholehuddinn/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5c0 3.3-2.45 5.75-5.75 5.75h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5c2.07 0 3.75-1.68 3.75-3.75v-8.5C20 5.68 18.32 4 16.25 4h-8.5zm8.25 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4.25 1.5a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 2a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5z" />
      </svg>
    ),
  },
  {
    name: "Github",
    url: "https://github.com/sholehuddinn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 0C5.373 0 0 5.373 0 12c0 5.302 
      3.438 9.8 8.205 11.387.6.111.82-.261.82-.58 
      0-.287-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61C4.422 
      17.07 3.633 16.7 3.633 16.7c-1.087-.743.083-.728.083-.728 
      1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 
      1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 
      0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 
      0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.403c1.02.005 
      2.047.138 3.003.403 2.29-1.552 3.297-1.23 
      3.297-1.23.654 1.653.242 2.873.118 3.176.77.84 
      1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 
      5.92.43.37.823 1.102.823 2.222 
      0 1.606-.015 2.898-.015 3.293 0 .321.218.694.825.576C20.565 
      21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-fajar-sholehuddin-maulana-putra-b901572a1/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8 18v-7H5v7h3zm-1.5-8.3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM19 18v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4h3z" />
      </svg>
    ),
  },
];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % socialMedias.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-yellow-400 py-16 px-4 text-center relative overflow-hidden">
        {/* Wave Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-[50px]"
          >
            <path
              d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              fill="#fff"
            />
          </svg>
        </div>

        {/* Emoji Background */}
        <div className="absolute inset-0 opacity-10 text-[10rem] pointer-events-none select-none flex justify-center items-center animate-pulse">
          ⭐️
        </div>

        <motion.div
          className="max-w-5xl mx-auto z-10 relative"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Foto Profil */}
          <motion.div
            className="flex justify-center mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/image/aku.jpg"
              alt="Profile of Muhammad Fajar"
              className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Muhammad Fajar Sholehuddin Maulana Putra
          </h1>

          <p className="text-lg md:text-xl text-gray-800 mb-6 max-w-2xl mx-auto">
            Instajar is a simple and modern web application built using Next.js,
            designed to showcase posts uploaded by participants of a training
            program. Each participant can upload their content — including
            images, captions, and usernames — which will then be displayed
            publicly on the platform. Instajar serves as both a learning project
            and a creative space where users can explore each other’s work,
            interact with posts, and understand how dynamic content works in a
            real-world Next.js environment.
          </p>

          <div className="flex justify-center space-x-4">
            <Link
              href="/"
              className="bg-white text-orange-600 px-6 py-3 rounded-md font-semibold shadow hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-orange-700 transition"
            >
              Login
            </Link>
          </div>
        </motion.div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-[50px]"
          >
            <path
              d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              fill="#fff"
            />
          </svg>
        </div>
      </section>

      <div className="w-full max-w-xs mx-auto overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.a
            key={socialMedias[index].name}
            href={socialMedias[index].url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 p-6 bg-orange-600 rounded-lg shadow-lg cursor-pointer select-none"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
          >
            {socialMedias[index].icon}
            <span className="text-lg font-semibold text-white">
              {socialMedias[index].name}
            </span>
          </motion.a>
        </AnimatePresence>
      </div>

      {/* Info Section */}
      <section className="py-16 px-6 bg-white text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          For developers, by developers
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 max-w-2xl mx-auto mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Instajar is an <span className="text-orange-600">open community</span>{" "}
          for anyone that codes. We help you get answers to your toughest coding
          questions, share knowledge with your coworkers in private, and find
          your next dream job.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Training Next.js",
              desc: "About Training Next.js And Learning with HIMATIFTA Togather until mastering this training",
              link: "/about",
              color: "blue",
              label: "Find Out Now",
            },
            {
              title: "Show Project",
              desc: "Browse all uploaded projects and get inspired. See images, captions, and usernames in real-time.",
              link: "/list-project",
              color: "orange",
              label: "Find Now",
            },
            {
              title: "Upload Project",
              desc: "Upload your project with image, caption, and name — then share it with everyone instantly.",
              link: "/send-form",
              color: "blue",
              label: "Upload Now",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 shadow rounded-lg p-6 hover:shadow-lg transition hover:scale-105"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <Link
                href={item.link}
                className={`text-white bg-${item.color}-600 px-4 py-2 rounded hover:bg-${item.color}-950 transition`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 Pelatihan Next.js. Semua Hak Dilindungi.</p>
      </footer> */}
    </div>
  );
}

export default Home;
