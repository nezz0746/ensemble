'use client'

import Link from 'next/link'
import Image from 'next/image'
import ConnectButton from '@/components/ConnectButton'
import { githubLink, notionDocLink, telegramLink } from '@/services/links'

const Page = () => {
  const linkTo = (url: string) => {
    window.open(url, '_blank')
  }
  return (
    <>
      <div className="p-3 flex-col hidden md:flex">
        <nav className="navbar z-10 bg-white bg-opacity-30">
          <div className="bg-opacity-100 flex flex-row justify-between w-full">
            <Link href={'/'}>
              <button className="btn">Home</button>
            </Link>
            <div className="hidden md:flex">
              <ConnectButton />
            </div>
          </div>
        </nav>
      </div>
      <div className="bg-transparent flex flex-col text-center min-h-[100vh] md:min-h-[90vh] p-3 md:p-4">
        <div className="relative flex-grow flex flex-row gap-4 md:mb-4">
          <div className="w-full md:w-1/2">
            {/* INSTATE PROTOCOL */}
            <div className="w-full h-full p-4 flex flex-col justify-center items-center bg-base-100 rounded-lg">
              <div className="flex flex-col gap-10">
                <h1 className="text-4xl md:text-6xl font-sans-display font-bold">
                  Instate Protocol
                </h1>
                <h1 className="text-2xl md:text-4xl font-sans-display">
                  Localized web3
                </h1>
                <h3 className="font-sans">
                  Build with local accounts or our network state toolbox{' '}
                </h3>
                <div className="flex flex-col md:flex-row gap-2 justify-between">
                  <button
                    className="btn btn-primary flex-grow"
                    onClick={() => {
                      linkTo(githubLink)
                    }}
                  >
                    <Image
                      src="/github.png"
                      height={24}
                      width={24}
                      alt="github"
                    />
                    Github
                  </button>
                  <button
                    className="btn btn-primary flex-grow"
                    onClick={() => {
                      linkTo(notionDocLink)
                    }}
                  >
                    <Image
                      src="/notion.png"
                      height={24}
                      width={24}
                      alt="github"
                    />
                    Docs
                  </button>
                  <button
                    className="btn btn-primary flex-grow"
                    onClick={() => {
                      linkTo(telegramLink)
                    }}
                  >
                    <Image
                      src="/telegram.svg"
                      height={24}
                      width={24}
                      alt="github"
                    />
                    Telegram
                  </button>
                </div>
                <div className="md:hidden">
                  <p className="text-xs">
                    Connect on desktop to browse 🌐 InstateScan, our local
                    account & NS explorer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 hidden md:flex">
            <div className="w-full h-full flex flex-col justify-center items-center bg-base-300 rounded-lg">
              <div className=" flex flex-col gap-10">
                <h1 className="text-6xl font-sans-mono">🌐 InstateScan</h1>
                <h2 className="font-sans">
                  Manage your local accounts & browse existing network states
                </h2>
                <Link href={'/map'}>
                  <button className="btn btn-secondary w-full">
                    Launch App
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
