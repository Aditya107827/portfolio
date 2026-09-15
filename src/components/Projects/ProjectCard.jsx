import React from 'react'
import {motion} from "framer-motion"
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'


export const ProjectCard = ({ project,index }) => {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:0.6,delay:index *0.15}}
    className='group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300'>
      {/*Project Image*/}
      <div className='relative overflow-hidden'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500' />
      </div>

      {/* Project Content*/}

      <div className='p-6'>
        <h3 className='text-xl font-bold text-white'>
          {project.title}

        </h3>
        <p className='text-slate-400 mt-3 leading-6'>
          {project.description}
        </p>

        {/*tech staack*/}
        <div className='flex flex-wrap gap-2 mt-5'>
          {project.tech.map((tech) => (
            <span
              key={tech}
              className='px-3 py-1 text-sm rounded-full bg-slate-800 text-indigo-300'>
              {tech}
            </span>
          ))}
        </div>

        {/* buttons*/}

        <div className="flex gap-3 mt-6">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-white hover:border-indigo-500 hover:text-indigo-400 transition-all duration-300"
          >
            <FaGithub/>
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300"
          >
            <FaExternalLinkAlt/>
            Live Demo
          </a>

        </div>

      </div>
    </motion.div >
  )
}
