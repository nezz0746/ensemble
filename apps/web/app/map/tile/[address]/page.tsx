'use client'

import StateHeader from '@/components/StateHeader'
import Tabs from '@/components/Tabs'
import useNetworkState from '@/hooks/useNetworkState'
import { MapPinIcon, UserIcon } from '@heroicons/react/24/outline'
import { NextPage } from 'next'

type TilePageProps = { params: { address: string } }

const TilePage: NextPage<TilePageProps> = ({ params: { address } }) => {
  const { currentNetworkState } = useNetworkState(address)

  // Remove duplicates
  const regions = currentNetworkState?.networkState?.agents
    ?.map(({ agent }) => agent?.currentGeohash)
    .filter((value, index, self) => self.indexOf(value) === index)

  return (
    <>
      <StateHeader currentNetworkState={currentNetworkState?.networkState} />
      <Tabs
        tabs={[
          {
            name: 'Citizens',
            content: (
              <div className="flex overflow-scroll flex-col w-full gap-2">
                {currentNetworkState?.networkState?.agents?.map(({ agent }) => {
                  return (
                    <div
                      className="w-full border flex flex-row items-center justify-between p-2"
                      key={agent?.id}
                    >
                      <div className="flex flex-row items-center">
                        <UserIcon className="w-6 h-6 mr-2" />
                        <p>{agent?.id}</p>
                      </div>
                      <p>{agent?.currentGeohash}</p>
                    </div>
                  )
                })}
              </div>
            ),
          },
          {
            name: 'Regions',
            content: (
              <div className="flex overflow-scroll flex-col w-full gap-2">
                {regions?.map((value) => (
                  <div
                    key={value}
                    className="w-full border flex flex-row items-center p-2"
                  >
                    <MapPinIcon className="w-6 h-6 mr-2" />
                    {value}
                  </div>
                ))}
              </div>
            ),
          },
        ]}
      />
    </>
  )
}

export default TilePage
