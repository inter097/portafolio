'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Lang } from '@/lib/translations'

interface LanguageContextType {
  lang: Lang
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  const toggle = () => setLang(l => (l === 'es' ? 'en' : 'es'))
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
