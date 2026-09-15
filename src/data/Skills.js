import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiMysql, SiPostman, SiPython, SiScikitlearn } from "react-icons/si";
export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
    ]
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Python", icon: SiPython, color: "text-yellow-400" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "text-orange-500" },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    ]
  }
];