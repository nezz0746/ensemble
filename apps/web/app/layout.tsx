'use client'

import '@/styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@rainbow-me/rainbowkit/styles.css'
import { Analytics } from '@vercel/analytics/react'
import DappProvider from '@/components/DappProvider'
import { Provider } from 'react-redux'
import { store } from '@/rtk/store'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
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
