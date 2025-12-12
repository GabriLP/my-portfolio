import localFont from 'next/font/local'
import './globals.css'

const industrialFont = localFont({
  src: '../public/font/galactic.ttf',
  variable: '--font-industrial',
  display: 'swap',
})

// Un font monospaced per i testi (usiamo Google Fonts via Next)
import { JetBrains_Mono } from 'next/font/google'
const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata = {
  title: 'Gabriele La Piana | Game Dev',
  description: 'Front End Game Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${industrialFont.variable} ${monoFont.variable}`}>
      <body>
        <div className="global-texture-overlay"></div>
        {children}
      </body>
    </html>
  )
}