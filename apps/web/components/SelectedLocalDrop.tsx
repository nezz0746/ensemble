'use client'

import { useLocalDrop } from '@/context/localDropContext'
import useMapUtils from '@/hooks/useMapUtils'
import { useEffect, useMemo } from 'react'
import { Address, useContractWrite, useWaitForTransaction } from 'wagmi'
import {
  localErc721ABI,
  useLocalErc721TotalSupply,
  usePrepareAccountV3Execute,
} from 'wagmi-config'
import { encodeFunctionData } from 'viem'
import { useLocalAccount } from '@instate/kit'
import { MapPinIcon } from '@heroicons/react/24/outline'

const SelectedLocalDrop = ({ address }: { address?: Address }) => {
  const { flyToGeohash } = useMapUtils()
  const { selected } = useLocalDrop()

  const { data: supply } = useLocalErc721TotalSupply({
    address: selected?.id,
  })

  useEffect(() => {
    if (selected) {
      flyToGeohash(selected.geohash)
    }
  }, [selected])

  if (!selected || !address) return null

  return (
    <div className="flex flex-row gap-4 p-3 border rounded-md border-primary bg-base-100">
      <div className="relative h-56 w-56 flex-shrink-0">
        <div className="flex absolute top-2 bg-primary bg-opacity-60 left-2 flex-row items-center border gap-2 p-1 rounded-md border-primary">
          <MapPinIcon className="w-3 h-3 stroke-neutral" />
          <p className="text-neutral text-xs">{selected.geohash}</p>
        </div>
        <img
          src={selected.metadata?.imageGateway}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <p className="text-2xl">{selected?.metadata?.name}</p>
          <div className="flex flex-col ">
            <div className="flex flex-row justify-between items-center">
              <p>Price </p>
              <p>FREE</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p>Minted </p>
              {/* Ininity symbol */}
              <p>{supply?.toString()}</p>
            </div>
          </div>
        </div>
        <LocalDropButtons
          nftAddress={selected?.id}
          address={address}
          geohash={selected.geohash}
        />
      </div>
    </div>
  )
}

type LocalCase = 'create-account' | 'switch-account' | 'mint'

type LocalDropButtonProps = {
  address: Address
  geohash: string
  nftAddress: Address
}

const LocalDropButtons = ({
  address,
  geohash,
  nftAddress,
}: LocalDropButtonProps) => {
  const {
    isHere,
    hasBeenHere,
    localAccount,
    createLocalAccount,
    createAccountLoading,
    switchLocalAccount,
  } = useLocalAccount()

  const localCase: LocalCase = useMemo(() => {
    if (!isHere(geohash) && !hasBeenHere(geohash)) {
      return 'create-account'
    } else if (!isHere(geohash) && hasBeenHere(geohash)) {
      return 'switch-account'
    } else {
      return 'mint'
    }
  }, [geohash, localAccount, hasBeenHere])

  const accountAddress = localAccount?.id?.toLowerCase()

  const canMint = isHere(geohash) && hasBeenHere(geohash)

  return (
    <div className="flex flex-col gap-2">
      <div>
        {!canMint && (
          <>
            {localCase === 'create-account' && (
              <p className="text-sm mb-1 text-justify">
                You&apos;ve never visted this location, create your local
                account now:
              </p>
            )}
            <button
              onClick={() => {
                if (localCase === 'create-account') {
                  createLocalAccount(geohash)
                } else if (localCase === 'switch-account') {
                  switchLocalAccount(geohash)
                }
              }}
              disabled={createAccountLoading}
              className="btn btn-primary  w-full"
            >
              {createAccountLoading && (
                <span className="loading loading-spinner bg-primary loading-xs"></span>
              )}
              {localCase === 'create-account'
                ? 'Create Local Account'
                : 'Switch Location'}
            </button>
          </>
        )}
      </div>
      <div>
        {nftAddress && accountAddress && (
          <MintButton
            disabled={!canMint}
            tokenAddress={nftAddress}
            rootAddress={address}
            accountAddress={accountAddress}
          />
        )}
      </div>
    </div>
  )
}

type MintButtonProps = {
  disabled: boolean
  tokenAddress: Address
  rootAddress: Address
  accountAddress: Address
}

const MintButton = ({
  disabled,
  tokenAddress,
  rootAddress,
  accountAddress,
}: MintButtonProps) => {
  const { config, isError } = usePrepareAccountV3Execute({
    address: accountAddress,
    args: [
      tokenAddress,
      BigInt(0),
      encodeFunctionData({
        abi: localErc721ABI,
        functionName: 'mint',
        args: [
          {
            rootAgent: rootAddress,
            // @ts-ignore
            localAccount: accountAddress,
          },
        ],
      }),
      0,
    ],
    enabled: Boolean(rootAddress && accountAddress),
  })

  const { data, isLoading: pendingConfirm, write } = useContractWrite(config)

  const { isLoading: pendingTx } = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    <button
      disabled={disabled || isError || pendingConfirm || pendingTx}
      onClick={() => {
        write && write()
      }}
      className="btn btn-primary  w-full"
    >
      {(pendingConfirm || pendingTx) && (
        <span className="loading loading-spinner bg-primary loading-xs"></span>
      )}
      Mint
    </button>
  )
}

export default SelectedLocalDrop
