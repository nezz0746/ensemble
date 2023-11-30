'use client'

import Map, { MapProvider } from 'react-map-gl'
import { commonLocations } from '@/services/constants'
import AccountMarker from '@/components/Map/AccountMarker'
import FogLayer from '@/components/Map/Fog'
import AppNavigationBar from '@/components/AppNavigationBar'
import AppMapControls from '@/components/AppMapControls'
import usePath from '@/hooks/usePath'
import NetworkStateLayers from '@/components/Map/NetworkStateLayers'
import { ConnectButton } from '@instate/kit'
import LocalDropFocusRegion from '@/components/Map/FocusedRegion'
import { LocalDropProvider } from '@/context/localDropContext'

const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

type HomeProps = {
  children: React.ReactNode
}

const Home = ({ children }: HomeProps) => {
  const { isProfile, isTile, isLocalDrops } = usePath()

  return (
    <MapProvider>
      <LocalDropProvider>
        <div className="h-screen flex flex-row gap-2">
          <div className="w-[50%] relative">
            <Map
              id="mainMap"
              mapboxAccessToken={token}
              projection={{ name: 'globe' }}
              initialViewState={commonLocations.paris}
              style={{
                width: '100%',
                height: '100%',
              }}
              mapStyle="mapbox://styles/nezz0746/closnc6ke00qa01nz5uvf7yad"
            >
              <div className="z-20 absolute top-0 p-3 w-full">
                <AppNavigationBar />
              </div>
              <AccountMarker />
              {isProfile && <FogLayer />}
              {isLocalDrops && <LocalDropFocusRegion />}
              {isTile && <NetworkStateLayers />}
              <div className="absolute w-full bottom-0 p-3">
                <AppMapControls />
              </div>
            </Map>
          </div>
          <div className="w-[50%]">
            <div className="h-full flex py-6 px-2 flex-col gap-4">
              <ConnectButton />
              {children}
            </div>
          </div>
        </div>
      </LocalDropProvider>
    </MapProvider>
  )
}

export default Home
