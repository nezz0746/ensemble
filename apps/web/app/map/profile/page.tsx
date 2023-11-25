'use client'

import type { NextPage } from 'next'

import useAppAgent from '@/hooks/useAppAgent'
import { truncateAddress } from '@/services/utils'
import { useMap } from 'react-map-gl'
import { useCallback } from 'react'
import { center as centerOfFeature } from '@turf/turf'
import { geohashToFeature, precisionToZoom } from '@/services/map_utils'
import StateHeader from '@/components/StateHeader'
import Tabs from '@/components/Tabs'
import { NetworkState } from '@/rtk/generated'

const Home: NextPage = () => {
  const { mainMap } = useMap()
  const { agent } = useAppAgent()

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

  console.log({ agent })

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
                  console.log({ state })
                  return (
                    <StateHeader key={state.id} currentNetworkState={state} />
                  )
                })}
              </div>
            ),
          },
          {
            name:
              'Local Records' +
              (agent?.records.length ? ` (${agent?.records.length})` : ''),
            content: (
              <div className="grid grid-cols-2 gap-2 mt-2 w-full overflow-scroll">
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
            ),
          },
        ]}
      />
    </>
  )
}

export default Home
