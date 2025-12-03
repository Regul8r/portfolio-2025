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

  const letterInfo = [
    "/badges/Portrait.png",
    "/badges/A.png",
    null,
    "/badges/Blake.png",
    "/badges/MotivateApp.png",
    "/badges/PostIt.png",
    "/badges/Booniehat.png",
    "/badges/RegulatorsNationlogo.png",
  ]

  return (
    <section 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F3F4F6' }}  // 👈 Inline style - should work!
    >
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12 md:space-y-16 lg:space-y-20"
        >
          {/* Interactive Name */}
          <div className="relative flex justify-center md:justify-start items-center flex-wrap">
            <motion.h1 
              className={`${permanentMarker.className} flex flex-wrap justify-center md:justify-start`}
              style={{ 
                fontSize: 'clamp(3rem, 12vw, 12rem)',
                lineHeight: '1.1'  // 👈 Removed letterSpacing
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {name.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className="relative inline-block cursor-pointer"
                  style={{ 
                    width: 'clamp(2rem, 8vw, 8rem)',  // 👈 Narrower = closer letters
                    height: 'clamp(3rem, 12vw, 12rem)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  {/* Letter (fades out on hover) */}
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ opacity: hoveredIndex === index ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {letter}
                  </motion.span>
                  
                  {/* Image (fades in on hover) */}
                  {hoveredIndex === index && letterInfo[index] && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Image
                        src={letterInfo[index]}
                        alt="Badge"
                        width={200}
                        height={300}
                        className="drop-shadow-2xl object-contain max-w-full max-h-full"
                      />
                    </motion.div>
                  )}
                </motion.span>
              ))}
            </motion.h1>
          </div>
          
          

         

{/* Buttons Container */}
<motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            // <<< CHANGED pt-4 to pt-10 for more space below the hero content
            className="flex flex-col sm:flex-row gap-3 pt-10 justify-center md:justify-start" 
          >
            {/* 1. Case Study (Primary Button) */}
            <a 
              href="#projects" 
              className="bg-black text-white px-5 py-2.5 rounded-lg transition-all text-center text-sm
                hover:bg-gray-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Case Study
            </a>
            
            {/* 2. Get in Touch (Secondary Button) */}
            <a 
              href="#contact" 
              className="border-2 border-black text-black px-5 py-2.5 rounded-lg transition-all text-center text-sm
                hover:bg-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
</div>
    </section>
  )
}