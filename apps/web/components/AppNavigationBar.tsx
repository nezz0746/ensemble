import useNetworkStates from '@/hooks/useNetworkStates'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'

const AppNavigationBar = () => {
  const [inputFocused, setInputFocused] = useState(false)
  const { networkStates } = useNetworkStates()
  const blurTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const { push } = useRouter()

  return (
    <div className="flex flex-row justify-between gap-2 items-center bg-opacity-90 p-3 bg-neutral rounded-lg">
      <div className="flex flex-row">
        <Link href={'/map'}>
          <button className="btn">Home</button>
        </Link>
      </div>
      <div className="flex-grow relative">
        <input
          onFocus={() => {
            clearTimeout(blurTimeoutRef.current)
            setInputFocused(true)
          }}
          onBlur={() => {
            blurTimeoutRef.current = setTimeout(() => {
              setInputFocused(false)
            }, 200)
          }}
          className="input input-primary w-full"
          placeholder="Search Network State (by tile address) or location (by geohash)"
        />
        {inputFocused && (
          <div className="absolute mt-2 rounded-md border border-primary overflow-hidden bg-neutral z-20 w-full">
            {networkStates.map((state) => {
              return (
                <div
                  key={state.id}
                  className="cursor-pointer p-2 hover:bg-neutral-600"
                  onClick={() => {
                    clearTimeout(blurTimeoutRef.current)
                    push('/map/tile/' + state.id)
                    setInputFocused(false)
                  }}
                >
                  <div className="flex flex-row justify-between items-center gap-2">
                    <div className="flex flex-row gap-2">
                      <div className="flex-shrink-0">
                        <img
                          className="w-16 h-16 aspect-square mt-1"
                          src={state?.metadata?.imageGateway}
                        />
                      </div>
                      <div>
                        <p className="text-lg">{state?.metadata?.name}</p>
                        <p>
                          {state?.metadata?.description.substring(0, 100)}...
                        </p>
                      </div>
                    </div>
                    <div className="border border-primary flex flex-row h-full items-center justify-center gap-2 p-2">
                      <UserGroupIcon className="w-8 h-8" />
                      {state?.population}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
      <div>
        <Link href={'/map/profile'}>
          <button className="btn">My Profile</button>
        </Link>
      </div>
    </div>
  )
}

export default AppNavigationBar
