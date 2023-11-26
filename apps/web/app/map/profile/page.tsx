'use client'

import type { NextPage } from 'next'

import useAppAgent from '@/hooks/useAppAgent'
import { truncateAddress } from '@/services/utils'
import StateHeader from '@/components/StateHeader'
import Tabs from '@/components/Tabs'
import { NetworkState } from '@/rtk/generated'
import useMapUtils from '@/hooks/useMapUtils'

const Home: NextPage = () => {
  const { flyToGeohash } = useMapUtils()
  const { agent } = useAppAgent()

  return (
    <>
      <Tabs
        tabs={[
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
          {
            name:
              'Local Accounts' +
              (agent?.records.length ? ` (${agent?.records.length})` : ''),
            content: (
              <div className="grid grid-cols-2 gap-2 mt-2 w-full overflow-scroll">
                {agent?.records.map(({ geohash, id }) => {
                  return (
                    <div
                      onClick={() => {
                        flyToGeohash(geohash)
                      }}
                      key={geohash}
                      className="bg-base-300 p-2 text-base-content rounded-md hover:bg-primary hover:cursor-pointer hover:text-primary-content hover:border-black select-none"
                    >
                      <p className="font-bold text-lg font-sans-display">
                        {geohash}
                      </p>
                      <p className="font-thin">{truncateAddress(id, 6)}</p>
                    </div>
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
