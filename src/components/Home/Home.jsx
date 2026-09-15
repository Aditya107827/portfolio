import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import profile from "../../assets/images/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaAnglesDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 overflow-hidden bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 md:left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />

      <div className="absolute bottom-20 right-10 md:right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[calc(100vh-6rem)] py-12 lg:py-0">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-5 lg:space-y-6"
          >
            <p className="text-indigo-400 text-base sm:text-lg font-medium">
              👋 Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
              Aditya Pratap Singh
            </h1>

            <div className="text-xl sm:text-2xl lg:text-3xl font-semibold min-h-[36px]">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "AI Enthusiast",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-indigo-400"
              />
            </div>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-7 sm:leading-8">
              I build responsive, scalable web applications and intelligent
              machine learning solutions using modern technologies like React,
              Node.js, MongoDB, Express.js and Python.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 items-start">
              <a
                href="/Aditya-Pratap-Singh-Resume.pdf"
                download
                className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold text-center hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Download Resume
              </a>

              <Link
                to="/contact"
                className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-slate-600 text-white text-center hover:border-cyan-400 hover:bg-slate-800 transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-3">
              <a
                href="https://github.com/Aditya107827"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-slate-400 hover:text-white text-2xl transition-all duration-300 hover:scale-110"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-singh9648/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-blue-500 text-2xl transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:adityapratap96481@gmail.com"
                aria-label="Email"
                className="text-slate-400 hover:text-cyan-400 text-2xl transition-all duration-300 hover:scale-110"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center mt-14 lg:mt-0"
          >
            <div className="relative">

              {/* React */}
              <div
                className="absolute -top-3 left-6 sm:left-10 bg-slate-800 p-3 rounded-full shadow-lg float"
                style={{ animationDelay: "0s" }}
              >
                <FaReact className="text-cyan-400 text-2xl sm:text-3xl" />
              </div>

              {/* Node */}
              <div
                className="absolute top-20 -left-5 bg-slate-800 p-3 rounded-full shadow-lg float"
                style={{ animationDelay: "0.5s" }}
              >
                <FaNodeJs className="text-green-500 text-2xl sm:text-3xl" />
              </div>

              {/* MongoDB */}
              <div
                className="absolute bottom-14 -left-3 bg-slate-800 p-3 rounded-full shadow-lg float"
                style={{ animationDelay: "1s" }}
              >
                <SiMongodb className="text-green-400 text-2xl sm:text-3xl" />
              </div>

              {/* GitHub */}
              <div
                className="absolute bottom-0 right-0 bg-slate-800 p-3 rounded-full shadow-lg float"
                style={{ animationDelay: "1.5s" }}
              >
                <FaGithub className="text-orange-500 text-2xl sm:text-3xl" />
              </div>

              {/* Glow */}
              <div className="absolute inset-0 w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-indigo-500/20 blur-3xl" />

              {/* Profile */}
              <img
                src={profile}
                alt="Aditya Pratap Singh"
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-indigo-500 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <FaAnglesDown className="text-3xl text-indigo-400" />
      </div>
    </section>
  );
};