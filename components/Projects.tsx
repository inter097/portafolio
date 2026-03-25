'use client'

import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/lib/translations'
import { useInView } from '@/hooks/useInView'

const badgeColors: Record<string, string> = {
  Producción:         'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  Production:         'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  'Ingeniería de Datos': 'bg-blue-500/15 text-blue-400 border-blue-500/25',
  'Data Engineering': 'bg-blue-500/15 text-blue-400 border-blue-500/25',
  Investigación:      'bg-violet-500/15 text-violet-400 border-violet-500/25',
  Research:           'bg-violet-500/15 text-violet-400 border-violet-500/25',
}

export default function Projects() {
  const { lang } = useLanguage()
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="py-24 bg-navy-mid/30">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${inView ? 'visible' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {t.projects.title[lang]}
          </h2>
          <div className="w-12 h-1 bg-accent rounded mb-10" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, i) => {
            const badge = project.badge[lang]
            const badgeClass = badgeColors[badge] ?? 'bg-slate-500/15 text-slate-400 border-slate-500/25'
            return (
              <div
                key={project.id}
                className={`flex flex-col rounded-2xl border border-white/6 bg-navy-DEFAULT/50 hover:border-accent/25 hover:bg-navy-DEFAULT/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 reveal reveal-delay-${i + 1} ${inView ? 'visible' : ''}`}
              >
                {/* Card header */}
                <div className="p-6 pb-4 flex items-start justify-between gap-3">
                  <h3 className="text-white font-bold text-base leading-snug">
                    {project.name}
                  </h3>
                  <span
                    className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeClass}`}
                  >
                    {badge}
                  </span>
                </div>

                {/* Description */}
                <p className="px-6 text-slate-400 text-sm leading-relaxed flex-1">
                  {project.desc[lang]}
                </p>

                {/* Tags */}
                <div className="px-6 pt-4 pb-3 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-6 pb-5 pt-2 border-t border-white/5 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light font-medium transition-colors"
                  >
                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {t.projects.viewGithub[lang]}
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
