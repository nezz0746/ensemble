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
  disabled?: boolean
  onMoveSuccess?: () => void
}

const MoveButton = ({
  address,
  tile,
  geohash,
  disabled,
  onMoveSuccess = () => {},
}: MoveButtonProps) => {
  const { config, isError, isLoading } = usePrepareMapMove({
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
    }
  )

  return (
    <button
      onClick={() => {
        write && write()
      }}
      disabled={isError || isLoading || pendingConfirm || indexing || disabled}
      className={classNames('btn font-display', {})}
    >
      {(pendingConfirm || indexing) && (
        <span className="loading loading-spinner bg-primary loading-xs"></span>
      )}
      Move
    </button>
  )
}

export default MoveButton
