import { usePosition } from '@/hooks/usePosition'
import { commonLocations } from '@/services/constants'
import { useEffect } from 'react'
import { useMap } from 'react-map-gl'

const AccountZoomEffects = () => {
  const {
    position: { precision },
  } = usePosition()
  const { mainMap } = useMap()

  useEffect(() => {
    return () => {
      mainMap?.flyTo({
        center: [
          commonLocations.paris.longitude,
          commonLocations.paris.latitude,
        ],
        zoom: commonLocations.paris.zoom,
        speed: 5,
      })
    }
  }, [precision])

  return null
}

export default AccountZoomEffects
