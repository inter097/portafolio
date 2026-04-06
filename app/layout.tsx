import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Jose Eliuth Torres Ortiz — Data Analyst & Data Engineer',
  description:
    'Portfolio of Jose Eliuth Torres Ortiz — Data Analyst & Data Engineer. Python, SQL, ETL pipelines, Power BI, PostgreSQL, Machine Learning. Open to remote positions.',
  keywords: [
    'Data Analyst', 'Data Engineer', 'Python', 'SQL', 'ETL',
    'Machine Learning', 'Power BI', 'PostgreSQL', 'Streamlit',
    'Remote Data Jobs', 'Jose Eliuth Torres Ortiz',
  ],
  authors: [{ name: 'Jose Eliuth Torres Ortiz' }],
  openGraph: {
    title: 'Jose Eliuth Torres Ortiz — Data Analyst & Data Engineer',
    description:
      'Data Analyst & Data Engineer with 3+ years of experience. Python, SQL, ETL, Power BI, ML. Open to remote positions.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
