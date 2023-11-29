'use client'

import useChain from '@/hooks/useChain'
import { useLocalTokensQuery } from '@instate/kit'
import Link from 'next/link'

const AppHomePage = () => {
  const { chainId } = useChain()
  const { data } = useLocalTokensQuery({ variables: { first: 100 }, chainId })

  return (
    <div className="overflow-scroll">
      <div className="bg-base-200 flex flex-col gap-8  p-4 rounded-md">
        <h1 className="text-4xl text-center font-sans-display">
          🌐 InstateScan
        </h1>
        <div>
          <p>Welcome to the InstateScan</p>
          Here you can:
          <ul className="list-disc list-inside">
            <li>
              View you Instate profile & check you{' '}
              <span className="font-bold">local accounts</span>
            </li>
            <li>Explore existing network states</li>
          </ul>
        </div>
        <Link
          href={'/map/local-drops'}
          className="border p-4 rounded-md flex flex-col gap-2 bg-neutral border-primary hover:bg-base-100 hover:cursor-pointer select-none"
        >
          <p className="text-primary">NEW ! Featured Local Mints 🌐 </p>
          <p>Discover & mint Local NFTs from around the globe !</p>
          <div className="grid grid-cols-4 gap-2">
            {data?.localTokens.map(({ geohash, metadata }) => {
              return (
                <div className="rounded-md overflow-hidden" key={geohash}>
                  <img src={metadata?.imageGateway} className="h-full w-full" />
                </div>
              )
            })}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default AppHomePage
