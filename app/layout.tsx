import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

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
      <html lang="pt-BR">
        <head>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-SVS378QRH3" strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SVS378QRH3');
            `}
          </Script>
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </>
    
  )
}

