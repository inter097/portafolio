'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/lib/translations'

const links = [
  { href: '#about',      key: 'about'      },
  { href: '#skills',     key: 'skills'     },
  { href: '#projects',   key: 'projects'   },
  { href: '#experience', key: 'experience' },
  { href: '#cv',         key: 'cv'         },
  { href: '#contact',    key: 'contact'    },
] as const

export default function Navbar() {
  const { lang, toggle } = useLanguage()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navBg = scrolled
    ? 'bg-[#0d1220]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5'
    : 'bg-transparent'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-white font-bold text-base tracking-wide hover:text-accent-light transition-colors"
        >
          <span className="text-accent">E</span>liuth
          <span className="text-slate-400 font-normal text-sm ml-1 hidden sm:inline">
            · Data Science
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              className="px-3 py-1.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
            >
              {t.nav[key][lang]}
            </a>
          ))}
        </nav>

        {/* Right: lang toggle + hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent/40 text-xs font-semibold text-accent hover:bg-accent/10 transition-colors"
            aria-label="Toggle language"
          >
            <span className={lang === 'es' ? 'text-white' : 'text-accent/50'}>ES</span>
            <span className="text-accent/40">/</span>
            <span className={lang === 'en' ? 'text-white' : 'text-accent/50'}>EN</span>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1220]/98 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-1">
          {links.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-2.5 px-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
            >
              {t.nav[key][lang]}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
