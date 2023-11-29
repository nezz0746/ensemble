import { Address, useWaitForTransaction, useContractWrite } from 'wagmi'
import { toHex } from 'viem'
import { usePrepareMapMove } from 'wagmi-config'
import classNames from 'classnames'
import { useEffect } from 'react'

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

  const { data, write, isLoading: pendingConfirm } = useContractWrite(config)

  const { isLoading: pendingTx, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  useEffect(() => {
    if (isSuccess) {
      onMoveSuccess()
    }
  }, [isSuccess])

  return (
    <button
      onClick={() => {
        write && write()
      }}
      disabled={isError || isLoading || pendingConfirm || pendingTx || disabled}
      className={classNames('btn font-display', {})}
    >
      {(pendingConfirm || pendingTx) && (
        <span className="loading loading-spinner bg-primary loading-xs"></span>
      )}
      Move
    </button>
  )
}

export default MoveButton
