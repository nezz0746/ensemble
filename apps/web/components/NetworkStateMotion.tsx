import { usePosition } from '@/hooks/usePosition'
import classNames from 'classnames'
import MoveButton from './MoveButton'
import { useAccount } from 'wagmi'
import useAppAgent from '@/hooks/useAppAgent'
import { NetworkStateQuery } from '@instate/kit'
import { useEffect } from 'react'
import useMapUtils from '@/hooks/useMapUtils'

type NetworkStateMotionProps = {
  currentNetworkState: NetworkStateQuery['networkState']
}

const NetworkStateMotion = ({
  currentNetworkState,
}: NetworkStateMotionProps) => {
  const { flyToGeohash } = useMapUtils()
  const { address } = useAccount()
  const { setPrecision, position } = usePosition()
  const { refetch } = useAppAgent()

  useEffect(() => {
    flyToGeohash(position.geohash)
  }, [position.precision])

  return (
    <div className="flex flex-row justify-between gap-4 items-center ">
      <p className="text-xl">Motion:</p>
      <div className="font-display w-full flex flex-row items-center">
        <div className="flex-grow ml-10">
          <input
            type="range"
            min={2}
            max={6}
            value={position.precision}
            onChange={(e) => {
              setPrecision(parseInt(e.target.value))
            }}
            className={classNames('range range-xs', {
              'range-primary': position.precision < 5,
              'range-warning': position.precision >= 5,
            })}
            step={1}
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-end">
        <MoveButton
          address={address}
          tile={currentNetworkState?.id}
          geohash={position.geohash}
          onMoveSuccess={() => {
            refetch()
          }}
        />
      </div>
    </div>
  )
}

export default NetworkStateMotion
