import Navbar     from '@/components/Navbar'
import Hero       from '@/components/Hero'
import About      from '@/components/About'
import Skills     from '@/components/Skills'
import Projects   from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact    from '@/components/Contact'
import Footer     from '@/components/Footer'
import { RoleProvider } from '@/context/RoleContext'
import type { Role } from '@/lib/translations'

export default async function Page({ searchParams }: { searchParams: Promise<{ v?: string }> }) {
  const params = await searchParams
  const role: Role = params?.v === 'ds' ? 'ds' : 'de'
  return (
    <RoleProvider initial={role}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </RoleProvider>
  )
}
