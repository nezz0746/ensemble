'use client'

import SelectedLocalDrop from '@/components/SelectedLocalDrop'
import { useLocalDrop } from '@/context/localDropContext'
import useChain from '@/hooks/useChain'
import { useLocalTokensQuery } from '@instate/kit'
import React from 'react'
import { useAccount } from 'wagmi'

const LocalDropPage = () => {
  const { chainId } = useChain()
  const { address } = useAccount()
  const { data } = useLocalTokensQuery({ variables: { first: 100 }, chainId })
  const { setSelected } = useLocalDrop()

  return (
    <div className="h-full">
      <div className="bg-base-200 h-full flex flex-col overflow-scroll gap-8  p-4 rounded-md">
        <SelectedLocalDrop address={address} />
        <div className="grid grid-cols-5 gap-2  pb-10">
          {data?.localTokens.map((localToken) => {
            const { metadata } = localToken

            return (
              <div
                key={localToken.id}
                className="rounded-md hover:cursor-pointer overflow-hidden hover:shadow-xl hover:shadow-primary hover:scale-105"
                onClick={() => {
                  setSelected(localToken)
                }}
              >
                <img src={metadata?.imageGateway} className="h-full w-full" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LocalDropPage
