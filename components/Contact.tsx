'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-black text-white flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold">
            Let's Work<br />Together
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl">
            Have a project in mind? Let's create something amazing.
          </p>

          <div className="space-y-6">
            <motion.a
              href="mailto:your.email@example.com"
              className="block text-3xl md:text-4xl font-medium hover:text-gray-400 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              jamesha.s.robinson@gmail.com
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-6 pt-8"
            >
          
              <a 
                href="https://linkedin.com/in/jamesharobinson" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-gray-400 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/regul8r" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-gray-400 transition-colors"
              >
                GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-12 border-t border-gray-800"
          >
            <p className="text-gray-500">
              © 2025 Ja'Mesha Robinson. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}