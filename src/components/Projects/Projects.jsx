import {SectionHeading} from "../SectionHeadiing/SectionHeading"
import { projects } from "../../data/projects"
import {ProjectCard} from "./ProjectCard"
import React from 'react'

export const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 min-h-screen bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Things I've Built"
        title="Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map ((project,index)=>(<ProjectCard
            key={project.id}
            project={project}
            index={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}
