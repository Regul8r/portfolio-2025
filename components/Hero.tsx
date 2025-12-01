'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { Permanent_Marker } from 'next/font/google'

const permanentMarker = Permanent_Marker({ 
  weight: '400',
  subsets: ['latin'] 
})

export default function Hero() {
  const name = "JA'MESHA"
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Map images to each character (null = no pop-up)
  const letterInfo = [
    "/badges/Portrait.png",              // J
    "/badges/A.png",                     // A
    null,                                // ' (apostrophe - no pop-up)
    "/badges/Blake.png",                 // M
    "/badges/PostIt.png",                // E
    "/badges/MotivateApp.png",           // S
    "/badges/Booniehat.png",             // H
    "/badges/RegulatorsNationlogo.png",  // A
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Interactive Name */}
          <div className="relative flex justify-center md:justify-start items-center">
          <motion.h1 
  className={`${permanentMarker.className} tracking-tighter flex`}
  style={{ 
    fontSize: 'clamp(4rem, 15vw, 12rem)',
    lineHeight: '1'
  }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {name.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className="relative inline-block cursor-pointer"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                    color: "#666",
                    transition: { duration: 0.5 }
                  }}
                >
                  {letter}
                  
                  {/* Pop-up that appears on hover (only if letterInfo exists) */}
                  {hoveredIndex === index && letterInfo[index] && (
  <motion.div
    initial={{ scale: 0, rotate: -15, y: 20, opacity: 0 }}
    animate={{ scale: 2, rotate: -8, y: -140, opacity: 1 }}
    exit={{ scale: 0, rotate: -15, y: 20, opacity: 0 }}
    transition={{ type: "spring", duration: 0.5 }}
    className="absolute left-1/2 transform -translate-x-1/2 z-10"
  >
    <Image
      src={letterInfo[index]}
      alt="Badge"
      width={400}
      height={600}
      className="drop-shadow-2xl"
    />
  </motion.div>
)}
                </motion.span>
              ))}
            </motion.h1>
          </div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-2xl text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creative Designer & Developer crafting beautiful digital experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 pt-4 justify-center md:justify-start"
          >
            <a 
              href="#projects" 
              className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
            >
              View Work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}