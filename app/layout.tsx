import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  title: 'Jose Eliuth Torres Ortiz — Data Analyst & Data Scientist',
  description:
    'Portfolio of Jose Eliuth Torres Ortiz — Junior Data Analyst & Data Scientist. Python, SQL, Machine Learning, Power BI, ETL.',
  keywords: ['Data Analyst', 'Data Scientist', 'Python', 'Machine Learning', 'SQL', 'Power BI'],
  authors: [{ name: 'Jose Eliuth Torres Ortiz' }],
  openGraph: {
    title: 'Jose Eliuth Torres Ortiz — Data Analyst & Data Scientist',
    description: 'Portfolio of Jose Eliuth Torres Ortiz',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
