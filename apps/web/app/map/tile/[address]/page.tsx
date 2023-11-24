'use client'

import StateHeader from '@/components/StateHeader'
import useChain from '@/hooks/useChain'
import { useNetworkStateQuery } from '@/rtk/generated'
import { NextPage } from 'next'

type TilePageProps = { params: { address: string } }

const TilePage: NextPage<TilePageProps> = ({ params: { address } }) => {
  const { chainId } = useChain()
  const { data: currentNetworkState } = useNetworkStateQuery({
    chainId,
    variables: { id: address },
  })
  return (
    <div>
      <StateHeader currentNetworkState={currentNetworkState} />
    </div>
  )
}

export default TilePage
