'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Role = 'de' | 'ds'

interface RoleContextType {
  role: Role
  setRole: (r: Role) => void
}

const RoleContext = createContext<RoleContextType>({ role: 'de', setRole: () => {} })

export function RoleProvider({ children, initial = 'de' }: { children: ReactNode; initial?: Role }) {
  const [role, setRole] = useState<Role>(initial)
  return <RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>
}

export const useRole = () => useContext(RoleContext)
