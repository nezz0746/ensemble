'use client'

import type { NextPage } from 'next'

import useAppAgent from '@/hooks/useAppAgent'
import { truncateAddress } from '@/services/utils'
import { useMap } from 'react-map-gl'
import { useCallback } from 'react'
import { center as centerOfFeature } from '@turf/turf'
import { geohashToFeature, precisionToZoom } from '@/services/map_utils'
import useAppAddresses from '@/hooks/useAppAddresses'
import { useNetworkStateQuery } from '@/rtk/generated'
import useChain from '@/hooks/useChain'
import StateHeader from '@/components/StateHeader'

const Home: NextPage = () => {
  const { chainId } = useChain()
  const { mainMap } = useMap()
  const { agent } = useAppAgent()
  const { stateTile } = useAppAddresses()
  const { data: currentNetworkState } = useNetworkStateQuery({
    chainId,
    variables: { id: stateTile.toLowerCase() },
  })

  const zoomTo = useCallback(
    (geohash: string) => {
      const center = centerOfFeature(geohashToFeature(geohash)).geometry
        .coordinates as [number, number]

      if (center.length === 2) {
        mainMap?.flyTo({
          center,
          zoom: precisionToZoom[geohash.length],
          speed: 4,
        })
      }
    },
    [mainMap]
  )

  console.log(currentNetworkState)

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col flex-grow justify-between pt-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="flex-grow border-b" />
            <p className="">Current State</p>
            <div className="flex-grow border-b" />
          </div>
          <StateHeader currentNetworkState={currentNetworkState} />
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="flex-grow border-b" />
            <p className="">Local Records</p>
            <div className="flex-grow border-b" />
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2 w-full">
            {agent?.records.map(({ geohash, id }) => {
              return (
                <div
                  onClick={() => {
                    zoomTo(geohash)
                  }}
                  key={geohash}
                  className="border border-primary bg-neutral p-2 hover:bg-primary hover:cursor-pointer hover:text-neutral hover:border-black select-none"
                >
                  <p className="font-bold">{geohash}</p>
                  <p>{truncateAddress(id, 6)}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4"></div>
      </div>
    </div>
  )
}

export default Home
