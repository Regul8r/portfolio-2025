'use client'

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Project } from '@/types/project'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  const [filter, setFilter] = useState('All')
  
  const categories = useMemo(() => {
    const uniqueCategories = new Set(projects.map(p => p.category));
    return ['All', ...Array.from(uniqueCategories)];
  }, [projects]);
  
  const filteredProjects = useMemo(() => {
    return filter === 'All' 
      ? projects 
      : projects.filter(p => p.category === filter)
  }, [filter, projects]);
  
  return (
    <section id="projects" className="py-12 px-6 bg-gray-50"> 
      <div className="max-w-7xl mx-auto">
        {/* Header: Ensure text is centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Selected Work
          </h2>
        </motion.div>

        {/* Filter Buttons: Centered using justify-center */}
        <motion.div 
          className="flex flex-wrap gap-4 mb-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category
                  ? 'bg-black text-white text-sm'
                  : 'bg-gray-100 text-gray-800 text-sm hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid: Single card, centered with smaller max-width */}
        <div className="grid grid-cols-1 gap-6 max-w-xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all h-full"
              >
                
                {/* Image Section */}
                <div className="p-4"> 
                    <div className="relative w-full aspect-[4/3] mb-0 overflow-hidden rounded-lg bg-gray-100 border border-gray-100 shadow-inner">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        key={project.image} 
                      />
                    </div>
                </div>

                {/* Content Section: Syntax corrected */}
                <div className="p-4 pt-0 space-y-2 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <h3 className="text-xl font-bold group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-gray-500 text-sm">({project.year})</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm">
                    {project.description}
                  </p>
                  
                  {/* Tags: Centered using justify-center on the flex container */}
                  <div className="flex flex-wrap gap-1 pt-1 justify-center">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-gray-100 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
