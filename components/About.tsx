'use client'

import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/lib/translations'

export default function About() {
  const { lang } = useLanguage()

  return (
    <section id="about" className="py-24" style={{ background: 'rgba(21,32,53,0.4)' }}>
      <div className="section-divider" />
      <div className="max-w-5xl mx-auto px-6 pt-16">

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {t.about.title[lang]}
        </h2>
        <div className="w-12 h-1 bg-blue-500 rounded mb-10" />

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Text */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-slate-300 leading-relaxed">{t.about.p1[lang]}</p>
            <p className="text-slate-300 leading-relaxed">{t.about.p2[lang]}</p>
            <div className="flex items-center gap-2 text-sm text-slate-400 pt-2">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="text-blue-500 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Ciudad Victoria, Tamaulipas, México
            </div>
          </div>

          {/* Stats */}
          <div className="md:col-span-2 grid grid-cols-1 gap-4">
            {t.about.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-xl p-5 flex items-center gap-4"
                style={{ background: 'rgba(26,39,68,0.7)', border: '1px solid rgba(59,130,246,0.2)' }}
              >
                <span className="text-3xl font-extrabold text-blue-400">{stat.value}</span>
                <span className="text-sm text-slate-400 leading-snug">{stat.label[lang]}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
