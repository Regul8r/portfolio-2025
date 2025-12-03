'use client'

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-12 px-6 bg-white">
      {/* Centered container with reduced max-width */}
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6"> 
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full space-y-4 text-center" // <<< ADDED text-center
        >
          {/* Header */}
          <h2 className="text-3xl font-bold mb-4">
            A Blend of Creativity and Discipline
          </h2>
          
          {/* Preface */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">Preface</h3>
            <p className="text-md text-gray-600 leading-normal">
              It all started with two books: a sketchbook and a soldier's handbook.
            </p>
            <p className="text-md text-gray-600 leading-normal">
              One taught me creativity. 🎨
              <br />
              The other taught me discipline. 🫡
            </p>
            <p className="text-md text-gray-600 leading-normal pt-2">
              Today, I combine both by creating and improving products, processes, and ideas through curiosity, discipline, and practical problem solving.
            </p>
          </div>

          {/* Introduction */}
          <div className="pt-4">
            <h3 className="text-lg font-semibold text-gray-700">Introduction</h3>
            <p className="text-md text-gray-800 leading-normal font-medium">
              I’m a U.S. Army Veteran turned aspiring 🤞Design Engineer, blending structure with imagination. Currently pursuing my M.Eng. in Design, Technology & Innovation at Duke University. I’m passionate about designing for and with people because technology and innovation are ultimately about shaping a future that includes everyone.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
