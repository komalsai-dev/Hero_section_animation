import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Buy & Sell Profitable Online Businesses | Acquire.com',
  description: 'Buy or sell a profitable online business in as little as 90 days. 500k+ qualified buyers, 1,000s of vetted listings. M&A advisory, legal help, escrow, & more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/apple-touch-icon.6d7933.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32x32.343bed.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon-16x16.67bfab.png" />
        <link rel="manifest" href="/assets/site.webmanifest" />
        <link rel="mask-icon" href="/assets/img/safari-pinned-tab.add57e.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={openSans.className}>
        {children}
      </body>
    </html>
  )
}