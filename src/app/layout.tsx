// src/app/layout.tsx
import './globals.css'
import { Lato } from 'next/font/google'
import localFont from 'next/font/local'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
})

const butler = localFont({
  src: './fonts/Butler-Light.woff2',
  variable: '--font-butler',
})

export const metadata = {
  title: 'Hiya Healthcare',
  description: "From women to women, unlocking the future of women's health.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${butler.variable} font-lato bg-hiya-light-beige text-hiya-dark`}
      >
        <main>{children}</main>
      </body>
    </html>
  )
}