import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FoodAtlas - Otimize seu Restaurante com IA',
  description: 'Transforme dados em decisões estratégicas e operacionais com o poder do seu próprio assistente inteligente.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GoogleAnalytics gaId="G-1234567890" />
      <html lang="pt-BR">
        <body className={inter.className}>{children}</body>
      </html>
      <GoogleAnalytics gaId="G-SVS378QRH3" />
    </>
    
  )
}

