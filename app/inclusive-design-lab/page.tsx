'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function InclusiveDesignLabCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Floating Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          href="/"
          className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full hover:bg-gray-50 transition-all shadow-lg"
        >
          <span className="text-xl">←</span>
          <span className="font-medium">Back</span>
        </Link>
      </div>

      {/* Hero Section - No Image */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              Featured Case Study
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Inclusive Design Lab
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
              Are you designing with everyone in mind?
            </p>
            
            <p className="text-lg text-gray-600 mb-10 max-w-3xl leading-relaxed">
              An interactive toolkit that helps designers experience accessibility challenges firsthand through real-world simulations and tasks.
            </p>

            <a 
              href="https://inclusive-design-lab.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all font-semibold shadow-lg"
            >
              View Live Project 
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Project Info Cards */}
      <section className="py-12 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Role</div>
              <div className="text-base md:text-lg font-bold">Designer & Developer</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Timeline</div>
              <div className="text-base md:text-lg font-bold">3 Weeks</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tools</div>
              <div className="text-base md:text-lg font-bold">React, Next.js</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Status</div>
              <div className="text-base md:text-lg font-bold text-green-600">Live</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* Overview */}
          <section>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Overview</h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                After learning about design ethics and inclusive design principles at Duke, I realized many designers intellectually understand accessibility but haven't experienced the challenges firsthand.
              </p>
              <p>
                The Inclusive Design Lab bridges this gap by providing interactive simulations that let designers experience what it's like to use interfaces with various accessibility challenges.
              </p>
            </div>
          </section>

          {/* The Problem */}
          <section className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-orange-500"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Problem</h2>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 md:p-12 rounded-3xl border border-red-100">
              <p className="text-xl md:text-2xl text-gray-900 leading-relaxed font-medium mb-4">
                Designers often learn about accessibility guidelines but struggle to empathize with users who face these challenges daily.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Reading about color contrast ratios is different from trying to read low-contrast text.
              </p>
            </div>
          </section>

          {/* The Solution */}
          <section>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Solution</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
              The Inclusive Design Lab provides hands-on accessibility tasks that simulate real-world conditions:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "🎨", title: "Color & Contrast", desc: "Test readability for users with color blindness" },
                { icon: "👆", title: "Tap Target Comfort", desc: "Experience button size with limited dexterity" },
                { icon: "📱", title: "Task Flow Clarity", desc: "Understand cognitive load in user journeys" },
                { icon: "🧠", title: "Real-Life Simulations", desc: "Experience actual user conditions" }
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-6 md:p-8 bg-white border-2 border-gray-200 rounded-3xl hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Philosophy Quote */}
          <section className="relative py-12 md:py-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl"></div>
            <div className="relative p-8 md:p-12">
              <div className="text-5xl text-blue-200 mb-4">"</div>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                Technology and innovation are ultimately about shaping a future that includes everyone.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Empathy without experience is incomplete.
              </p>
            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-4xl md:text-5xl font-bold mb-10">Impact & Learnings</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-6">What Worked ✓</h3>
                <ul className="space-y-4 text-base text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600">•</span><span>Interactive simulations are more impactful than reading guidelines</span></li>
                  <li className="flex gap-3"><span className="text-green-600">•</span><span>Users reported aha moments experiencing challenges firsthand</span></li>
                  <li className="flex gap-3"><span className="text-green-600">•</span><span>Sparked conversations about inclusive design at Duke</span></li>
                </ul>
              </div>

              <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Key Learnings 💡</h3>
                <ul className="space-y-4 text-base text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600">•</span><span>Accessibility is a mindset shift, not a checklist</span></li>
                  <li className="flex gap-3"><span className="text-blue-600">•</span><span>Design education needs experiential learning</span></li>
                  <li className="flex gap-3"><span className="text-blue-600">•</span><span>Army discipline + design thinking creates impact</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="p-10 bg-gray-900 text-white rounded-3xl">
            <h2 className="text-3xl font-bold mb-6">Next Steps</h2>
            <div className="space-y-3 text-base text-gray-300">
              <p>→ Add screen reader navigation tasks</p>
              <p>→ Create certification badges</p>
              <p>→ Partner with Duke design program</p>
              <p>→ Develop mobile app version</p>
            </div>
          </section>

        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience It Yourself</h2>
          <p className="text-xl mb-10 text-blue-100">
            Try the interactive accessibility tasks.
          </p>
          <a 
            href="https://inclusive-design-lab.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-all text-lg font-bold shadow-2xl"
          >
            Launch Inclusive Design Lab
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 px-6 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all font-semibold"
          >
            <span>←</span>
            Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  )
}
