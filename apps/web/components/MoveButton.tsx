import { Address, useContractWrite } from 'wagmi'
import { toHex } from 'viem'
import { usePrepareMapMove } from 'wagmi-config'
import classNames from 'classnames'
import {
  NetworkStateTravelsQuery,
  useNetworkStateTravelsQuery,
} from '@instate/kit'
import useIndexed from '@/hooks/useIndexed'

interface MoveButtonProps {
  address?: Address
  tile: Address
  geohash: string
  onMoveSuccess?: () => void
  name?: string
}

const MoveButton = ({
  address,
  tile,
  geohash,
  onMoveSuccess = () => {},
  name = 'Move',
}: MoveButtonProps) => {
  const { config, isError, isLoading, refetch } = usePrepareMapMove({
    args: [address as Address, tile, geohash, toHex('')],
    enabled: !!address,
  })

  const {
    data: txData,
    write,
    isLoading: pendingConfirm,
  } = useContractWrite(config)

  const { indexing } = useIndexed<NetworkStateTravelsQuery>(
    txData?.hash,
    useNetworkStateTravelsQuery,
    ({ networkStateTravels }) => ({
      indexed: Boolean(networkStateTravels.length),
    }),
    () => {
      onMoveSuccess()
      refetch()
    }
  )

  return (
    <button
      onClick={() => {
        write && write()
      }}
      disabled={isError || isLoading || pendingConfirm || indexing}
      className={classNames('btn font-display', {})}
    >
      {(pendingConfirm || indexing) && (
        <span className="loading loading-spinner bg-primary loading-xs"></span>
      )}
      {name}
    </button>
  )
}

export default MoveButton
