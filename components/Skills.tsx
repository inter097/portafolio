'use client'

import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/lib/translations'
import { useInView } from '@/hooks/useInView'

export default function Skills() {
  const { lang } = useLanguage()
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="py-24" style={{ background: '#0d1220' }}>
      <div className="max-w-5xl mx-auto px-6">

        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {t.skills.title[lang]}
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded mb-10" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {t.skills.list.map((skill, i) => (
            <div
              key={skill.name}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.5s ease ${80 + i * 50}ms, transform 0.5s ease ${80 + i * 50}ms`,
                background: 'rgba(26,39,68,0.6)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              className="group flex items-center gap-3 p-4 rounded-xl hover:border-blue-500/30 transition-colors duration-200 cursor-default"
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold"
                style={{ background: skill.bg, color: skill.color }}
              >
                {skill.letter}
              </div>
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
