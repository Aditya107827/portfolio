import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pb-10">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo / Name */}
          <div>
            <h2 className="text-xl font-bold text-white">
              Aditya<span className="text-indigo-400">.</span>
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Building ideas into digital experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com/Aditya107827"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-singh9648/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>

            <a
              href="https://leetcode.com/u/adi_357/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-yellow-400 transition-colors"
            >
              <SiLeetcode className="text-xl" />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-8 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Aditya. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};