'use client'

import type { NextPage } from 'next'
import useAppAgent from '@/hooks/useAppAgent'
import { truncateAddress } from '@/services/utils'
import StateHeader from '@/components/StateHeader'
import Tabs from '@/components/Tabs'
import { NetworkState } from '@instate/kit'
import AccountNFTs from '@/components/LocalAccountNFTs'

const Home: NextPage = () => {
  const { agent } = useAppAgent()

  return (
    <>
      <Tabs
        tabs={[
          {
            name:
              'Local Accounts' +
              (agent?.records.length ? ` (${agent?.records.length})` : ''),
            content: (
              <div className="flex flex-col gap-2 mt-2 w-full overflow-scroll">
                {agent?.records.map(({ geohash, id }) => {
                  return (
                    <div
                      key={geohash}
                      className="bg-base-300 flex flex-col gap-2 p-2 text-base-content rounded-md select-none"
                    >
                      <div className="flex flex-row items-center justify-between">
                        <p className="font-bold text-lg font-sans-display">
                          Local Account:{' '}
                          <span className="text-primary">{geohash}</span>
                        </p>
                        <p className="font-thin underline">
                          {truncateAddress(id, 6)}
                        </p>
                      </div>
                      <AccountNFTs account={id} />
                    </div>
                  )
                })}
              </div>
            ),
          },
          {
            name:
              'Network States' +
              (agent?.states.length ? ` (${agent?.states.length})` : ''),
            content: (
              <div className="w-full overflow-scroll">
                {agent?.states.map((stateAgent) => {
                  const state = stateAgent?.state as NetworkState

                  return (
                    <StateHeader key={state.id} currentNetworkState={state} />
                  )
                })}
              </div>
            ),
          },
        ]}
      />
    </>
  )
}

export default Home
