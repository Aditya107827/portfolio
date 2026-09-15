import { SectionHeading } from "../SectionHeadiing/SectionHeading";
import profile from "../../assets/images/profile.jpeg"
import { PrimaryButton } from "../Button/PrimaryButton";
import { motion } from "framer-motion";



export const About = () => {
  return (
    <section id="about" className="scroll-mt-24 min-h-screen bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Get To Know"
          title="About Me"
        />
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-indigo-500 blur-2xl opacity-20"></div>
              <img src={profile} alt="profile" className="relative w-80 rounded-3xl border-2 border-indigo-500" />

              <div className="grid grid-cols-3 gap-4 mt-8 w-full">
                <div className="bg-slate-900 p-4 rounded-xl text-center">
                  <h2 className="text-2xl font-bold text-indigo-400">5+</h2>
                  <p className="text-slate-400 text-sm">Projects</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl text-center">
                  <h2 className="text-2xl font-bold text-indigo-400">10+</h2>
                  <p className="text-slate-400 text-sm">Skills</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl text-center">
                  <h2 className="text-2xl font-bold text-indigo-400">4th</h2>
                  <p className="text-slate-400 text-sm">Year</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right */}

          <motion.div initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6">
            <h2 className="text-4xl font-bold text-white">Hi, I'm <span className="text-indigo-400">Aditya Pratap Singh</span></h2>

            <p className="text-slate-400 leading-8">I am a B.Tech Computer Science Engineering student passionate about Full Stack Development and Machine Learning.
              I enjoy building responsive web applications, solving real-world problems, and continuously learning
              new technologies.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:-translate-y-2 hover:border-indigo-500 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white">Education</h3>
                <p className="text-slate-400 mt-2">B.Tech Computer Science Engineering</p>
              </div>
              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:-translate-y-2 hover:border-indigo-500 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white">What I Do</h3>
                <p className="text-slate-400 mt-2">Full  Stack Developer & ML Enthusiast</p>
              </div>
            </div>
            <a href="/Aditya-Pratap-Singh-Resume.pdf"
              download
              className='px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300'>Download Resume</a>
          </motion.div>




        </div>

      </div>

    </section>
  );
};

