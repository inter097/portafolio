'use client'

import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/lib/translations'

export default function Experience() {
  const { lang } = useLanguage()

  return (
    <section id="experience" className="py-24" style={{ background: '#0d1220' }}>
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {t.experience.title[lang]}
        </h2>
        <div className="w-12 h-1 bg-blue-500 rounded mb-10" />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #3b82f6, rgba(59,130,246,0.2), transparent)' }}
          />

          <div className="ml-14 relative">
            {/* Dot */}
            <div
              className="absolute -left-[2.3rem] top-1.5 w-4 h-4 rounded-full border-2 border-blue-500"
              style={{ background: '#0d1220', boxShadow: '0 0 8px rgba(59,130,246,0.5)' }}
            />

            {/* Card */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(26,39,68,0.6)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-white font-bold text-base">{t.experience.role[lang]}</h3>
                  <p className="text-blue-400 text-sm font-medium mt-0.5">{t.experience.company[lang]}</p>
                </div>
                <span
                  className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 rounded-full px-3 py-1.5"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {t.experience.period[lang]}
                </span>
              </div>

              <ul className="space-y-2.5">
                {t.experience.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {bullet[lang]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
