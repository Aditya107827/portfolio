import React from 'react'
import { SectionHeading } from "../../components/SectionHeadiing/SectionHeading"
import { skillCategories } from '../../data/Skills'


export const Skills = () => {



  return (
    <section id="skills" className='scroll-mt-24 min-h-screen bg-slate-950 py-24'>
      <div className='max-w-7xl mx-auto px-6'>
        <SectionHeading subtitle="Technologies I worked with"
          title="Skills" />

        <div className='space-y-10'>
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h2 className='text-2xl font-bold text-white mb-4'>{category.title}</h2>


              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-xl p-6 text-center hover:border-indigo-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
                    >
                      <Icon className={`text-5xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 ${skill.color}`} />

                      <p className="text-white font-medium">
                        {skill.name}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
