'use client'

import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/lib/translations'

export default function CVSection() {
  const { lang } = useLanguage()

  return (
    <section id="cv" className="py-24" style={{ background: 'rgba(21,32,53,0.4)' }}>
      <div className="max-w-2xl mx-auto px-6 text-center">

        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
          style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)' }}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {t.cvSection.title[lang]}
        </h2>
        <p className="text-slate-400 mb-8 leading-relaxed">{t.cvSection.desc[lang]}</p>

        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
          style={{ background: '#3b82f6', boxShadow: '0 4px 20px rgba(59,130,246,0.3)' }}
        >
          <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {t.cvSection.btn[lang]}
        </a>

      </div>
    </section>
  )
}
