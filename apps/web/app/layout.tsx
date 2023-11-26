'use client'

import '@/styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@rainbow-me/rainbowkit/styles.css'
import { Analytics } from '@vercel/analytics/react'
import DappProvider from '@/components/DappProvider'
import { Provider } from 'react-redux'
import { store } from '@/rtk/store'
import { Noto_Sans, Noto_Sans_Mono, Noto_Sans_Display } from 'next/font/google'

const notoSans = Noto_Sans({
  display: 'auto',
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: '500',
})

const notoSansMono = Noto_Sans_Mono({
  display: 'auto',
  subsets: ['latin'],
  variable: '--font-noto-sans-mono',
  weight: '500',
})

const notoSansDisplay = Noto_Sans_Display({
  display: 'auto',
  subsets: ['latin'],
  variable: '--font-noto-sans-display',
  weight: '500',
})

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="eng"
      className={`${notoSans.variable} ${notoSansMono.variable} ${notoSansDisplay.variable} ${notoSans.className}`}
    >
      <body className="bg-gradient-to-br from-blue-200 to-green-600">
        <Provider store={store}>
          <DappProvider>
            <main className="">{children}</main>
          </DappProvider>
        </Provider>
        <Analytics />
      </body>
    </html>
  )
}

export default Layout
