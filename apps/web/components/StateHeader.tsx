import { NetworkStateQuery } from '@instate/kit'
import { truncateAddress } from '@/services/utils'
import { DocumentTextIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import useChain from '@/hooks/useChain'
import useMapUtils from '@/hooks/useMapUtils'
import { useAccount } from 'wagmi'
import { usePosition } from '@/hooks/usePosition'
import useAppAgent from '@/hooks/useAppAgent'
import { useEffect } from 'react'
import classNames from 'classnames'
import MoveButton from './MoveButton'

type StateHeaderProps = {
  currentNetworkState?: NetworkStateQuery['networkState']
  firstMove?: boolean
}

const StateHeader = ({ currentNetworkState, firstMove }: StateHeaderProps) => {
  const { chain } = useChain()
  const { flyToGeohash } = useMapUtils()
  const { address } = useAccount()
  const { setPrecision, position } = usePosition()
  const { geohashes, refetch } = useAppAgent()

  useEffect(() => {
    flyToGeohash(position.geohash)
  }, [position.precision])

  if (!currentNetworkState) return null

  return (
    <div className="flex flex-row gap-4  p-4 bg-opacity-90 bg-neutral-900 rounded-lg">
      <div className="flex-shrink-0">
        <img
          className="w-16 h-16 aspect-square mt-1"
          src={currentNetworkState?.metadata?.imageGateway}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="relative flex flex-col gap-2">
          {firstMove && (
            <div className="absolute top-0 left-0 overflow-hidden bg-gray-800 text-center z-10 bg-opacity-80 flex flex-col items-center justify-center w-full h-full">
              <p className="font-bold">
                You have not joined {currentNetworkState?.metadata?.name} yet !
                Place your marker on the map where you want to move and click:
                Settle in
              </p>
            </div>
          )}
          <div className="flex justify-between flex-row">
            <div>
              <p className="text-xl font-sans-display font-bold ">
                {currentNetworkState?.metadata?.name}
              </p>
              <p className="font-thin">
                founded by{' '}
                <span>{truncateAddress(currentNetworkState?.creator, 5)}</span>
              </p>
            </div>
            <div>
              <div className="border border-primary flex flex-row items-center justify-center gap-2 p-1">
                <UserGroupIcon className="w-5 h-5" />
                {currentNetworkState?.population}
              </div>
            </div>
          </div>
          <p className="text-sm text-justify">
            {currentNetworkState?.metadata?.description}
          </p>
          <div className="flex flex-row justify-end gap-2">
            <button
              onClick={() => {
                window.open(
                  chain?.blockExplorers?.default.url +
                    '/address/' +
                    currentNetworkState.verifier,
                  '_blank'
                )
              }}
              className="btn btn-outline btn-sm"
            >
              <div className="w-5 h-5 relative">
                <svg
                  width="123"
                  height="123"
                  viewBox="0 0 123 123"
                  className="fill-current h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M25.79 58.4149C25.7901 57.7357 25.9244 57.0633 26.1851 56.4361C26.4458 55.809 26.8278 55.2396 27.3092 54.7605C27.7907 54.2814 28.3619 53.9021 28.9903 53.6444C29.6187 53.3867 30.2918 53.2557 30.971 53.2589L39.561 53.2869C40.9305 53.2869 42.244 53.831 43.2124 54.7994C44.1809 55.7678 44.725 57.0813 44.725 58.4509V90.9309C45.692 90.6439 46.934 90.3379 48.293 90.0179C49.237 89.7962 50.0783 89.262 50.6805 88.5019C51.2826 87.7418 51.6102 86.8006 51.61 85.8309V45.5409C51.61 44.1712 52.154 42.8576 53.1224 41.889C54.0908 40.9204 55.4043 40.3762 56.774 40.3759H65.381C66.7506 40.3762 68.0641 40.9204 69.0325 41.889C70.0009 42.8576 70.545 44.1712 70.545 45.5409V82.9339C70.545 82.9339 72.7 82.0619 74.799 81.1759C75.5787 80.8462 76.2441 80.2941 76.7122 79.5886C77.1803 78.8832 77.4302 78.0555 77.431 77.2089V32.6309C77.431 31.2615 77.9749 29.9481 78.9431 28.9797C79.9113 28.0113 81.2245 27.4672 82.5939 27.4669H91.201C92.5706 27.4669 93.884 28.0109 94.8525 28.9794C95.8209 29.9478 96.365 31.2613 96.365 32.6309V69.3399C103.827 63.9319 111.389 57.4279 117.39 49.6069C118.261 48.4717 118.837 47.1386 119.067 45.7267C119.297 44.3148 119.174 42.8678 118.709 41.5149C115.931 33.5227 111.516 26.1983 105.745 20.0105C99.974 13.8228 92.9749 8.90785 85.1955 5.58032C77.4161 2.2528 69.0277 0.585938 60.5671 0.686416C52.1065 0.786893 43.7601 2.6525 36.062 6.16383C28.3638 9.67517 21.4834 14.7549 15.8611 21.078C10.2388 27.401 5.99842 34.8282 3.41131 42.8842C0.824207 50.9401 -0.0526487 59.4474 0.836851 67.8617C1.72635 76.276 4.36263 84.4119 8.57696 91.7489C9.31111 93.0145 10.3912 94.0444 11.6903 94.7175C12.9894 95.3906 14.4536 95.679 15.911 95.5489C17.539 95.4059 19.566 95.2029 21.976 94.9199C23.0251 94.8008 23.9937 94.2999 24.6972 93.5126C25.4008 92.7253 25.7901 91.7067 25.791 90.6509L25.79 58.4149Z" />
                  <path d="M25.6021 110.51C34.6744 117.11 45.3959 121.072 56.5802 121.957C67.7646 122.841 78.9757 120.615 88.9731 115.523C98.9705 110.431 107.364 102.673 113.226 93.1068C119.087 83.5405 122.188 72.539 122.185 61.3197C122.185 59.9197 122.12 58.5347 122.027 57.1577C99.808 90.2957 58.7831 105.788 25.604 110.505" />
                </svg>
              </div>
              Verifier
            </button>
            <button
              className="btn btn-outline btn-sm"
              onClick={() => {
                window.open(
                  currentNetworkState?.metadata?.manifestoGateway,
                  '_blank'
                )
              }}
            >
              <DocumentTextIcon className="w-5 h-5" />
              Manifesto
            </button>
          </div>
        </div>
        <div className="border-b border-base-100 py-1 my-1" />
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
              disabled={geohashes.includes(position.geohash)}
              onMoveSuccess={() => {
                refetch()
              }}
              name={firstMove ? 'Settle in ! ' + position.geohash : 'Move'}
            />
          </div>
        </div>{' '}
      </div>
    </div>
  )
}

export default StateHeader
