'use client'

import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/lib/translations'

export default function Hero() {
  const { lang } = useLanguage()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-pattern"
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1220] via-[#0d1220]/80 to-[#0d1220]" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-700/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-xs text-accent-light font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
          {lang === 'es' ? 'Disponible para nuevas oportunidades' : 'Open to new opportunities'}
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
          <span className="gradient-text">Jose Eliuth</span>
          <br />
          <span className="text-white">Torres Ortiz</span>
        </h1>

        {/* Title */}
        <p className="text-accent-light text-lg sm:text-xl font-semibold mb-5 tracking-wide">
          {t.hero.title[lang]}
        </p>

        {/* Bio */}
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.bio[lang]}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-accent hover:bg-accent-dark text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            {t.hero.cta1[lang]}
          </a>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-accent/40 hover:border-accent text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200 hover:bg-accent/10 hover:-translate-y-0.5"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t.hero.cta2[lang]}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600">
          <span className="text-xs tracking-widest uppercase">scroll</span>
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="animate-bounce"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
