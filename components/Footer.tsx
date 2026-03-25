'use client'

import { useLanguage } from '@/context/LanguageContext'
import { t } from '@/lib/translations'

export default function Footer() {
  const { lang } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#0a0f1a', borderTop: '1px solid rgba(255,255,255,0.05)' }} className="py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
        <span>© {year} Jose Eliuth Torres Ortiz. {t.footer.rights[lang]}</span>
        <span className="flex items-center gap-1.5">
          Built with <span className="text-blue-500">Next.js</span> &amp; <span className="text-blue-500">Tailwind CSS</span>
        </span>
      </div>
    </footer>
  )
}
