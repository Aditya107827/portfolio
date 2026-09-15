import React from 'react'
import {
  FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaGitAlt
} from "react-icons/fa";
import { SiLeetcode, SiMongodb } from "react-icons/si"
import profile from "../../assets/images/profile.jpeg"
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaAnglesDown } from 'react-icons/fa6';
import { PrimaryButton } from '../Button/PrimaryButton';
import { SecondaryButton } from '../Button/SecondaryButton';
import { Link } from 'react-router-dom';



export const Home = () => {
  return (
    <section id="home" className='relative min-h-screen pt-24 overflow-hidden bg-slate=950'>

      <div className='absolute top-20 left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl'></div>


      <div className='relative z-10 max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center min-h-[90vh]'>

          {/* left content */}

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className='text-indigo-400 text-lg font-medium'>
              👋 Hello, I'm
            </p>
            <h1 className='text-5xl lg:text-7xl font-bold text-white leading-tight'>
              Aditya Pratap Singh
            </h1>

            <div className='text-2xl lg:text-3xl font-semibold'>
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer", 2000,
                  "Full Stack Developer", 2000,
                  "AI Enthusiast", 2000
                ]}
                speed={50}
                repeat={Infinity}
                className='text-indigo-400' />
            </div>

            <p className='text-slate-400 text-lg max-w-xl leading-8'>
              I build responsive, scable web application and intelligent machine learning solutions
              using modern technologies like React, Node.js, MongoDB, Express.js and Python
            </p>

            <div className='flex flex-col sm:flex-row gap-4 mt-8'>
              <a href="public/Aditya-Pratap-Singh-Resume.pdf"
                download
                className='px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300'>Download Resume</a>
              <Link
                to="/contact"
                className='px-6 py-3 rounded-xl border border-slate-600 hover:border-cyan-400 hover:bg-slate-800 transition-all duration-300'
              >Contact Me</Link>


            </div>
            <div className='flex items-center gap-6 mt-8'>
              <a href="https://github.com/Aditya107827 "
                target='_blank'
                rel='noreferrer'
                className='text-slate-400 hover:text-white text-2xl transition-all duration-300 hover:scale-110'><FaGithub /></a>

              <a href="https://www.linkedin.com/in/aditya-singh9648/"
                target='_blank'
                rel='noneferrer'
                className='text-slate-400 hover:text-bllue-500 text-2xl transition-all duration-300 hover:scale-110'><FaLinkedin /></a>

              <a href="mailto:adityapratap96481@gmail.com"
                className='text-slate-400 text-2xl transition-all duration-300 hover:scale-110'><FaEnvelope /></a>
            </div>


          </motion.div>

          {/*Right Side*/}

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}

            className='flex justify-center items-center'>
            <div className='relative'>

              <div className="absolute -top-4 left-10 bg-slate-800 p-3 rounded-full sahdow-lg float" style={{ animationDelay: "0s" }}><FaReact className='text-cyan-400 text-3xl' /></div>
              <div className="absolute top-20 -left-6 bg-slate-800 p-3 rounded-full sahdow-lg float" style={{ animationDelay: "0.5s" }}><FaNodeJs className='text-green-500 text-3xl' /></div>
              <div className="absolute bottom-16 -left-4 bg-slate-800 p-3 rounded-full sahdow-lg float" style={{ animationDelay: "1s" }}><SiMongodb className='text-green-400 text-3xl' /></div>
              <div className="absolute bottom-0 right-0 bg-slate-800 p-3 rounded-full sahdow-lg float" style={{ animationDelay: "1.5s" }}><FaGithub className='text-orange-500 text-3xl' /></div>


              <div className='w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl absolute'></div>
              <img src={profile} alt="profile" className='relative w-75 h-75 object-cover rounded-full border-4 border-indigo-500 shadow-2xl' />
            </div>
          </motion.div>


        </div>
      </div>
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'><FaAnglesDown className='text-3xl text-indigo-400' /></div>
    </section>
  )
}
