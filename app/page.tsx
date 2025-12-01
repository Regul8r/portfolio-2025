import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'
import projectsData from '@/data/projects.json'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects projects={projectsData.projects} />
      <Contact />
    </main>
  )
}