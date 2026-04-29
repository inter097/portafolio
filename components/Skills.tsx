'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useRole } from '@/context/RoleContext'
import { t, roleContent } from '@/lib/translations'

export default function Skills() {
  const { lang } = useLanguage()
  const { role } = useRole()
  const order = roleContent[role].skillGroupOrder
  const groups = [...t.skills.groups].sort((a, b) => {
    const ai = order.indexOf((a as any).id ?? '')
    const bi = order.indexOf((b as any).id ?? '')
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  })

  return (
    <section id="skills" className="py-24" style={{ background: '#0d1220' }}>
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {t.skills.title[lang]}
        </h2>
        <div className="w-12 h-1 bg-blue-500 rounded mb-10" />

        <div className="flex flex-col gap-8">
          {groups.map((group) => (
            <div key={group.label.en}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
                {group.label[lang]}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 p-4 rounded-xl hover:border-blue-500/30 transition-colors duration-200 cursor-default"
                    style={{ background: 'rgba(26,39,68,0.6)', border: '1px solid rgba(255,255,255,0.07)' }}
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
          ))}
        </div>

      </div>
    </section>
  )
}
