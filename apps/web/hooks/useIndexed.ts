import { Exact, InputMaybe, Scalars } from '@instate/kit'
import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import { QueryDefinition } from '@reduxjs/toolkit/query'
import { useEffect, useState } from 'react'
import { Address, useWaitForTransaction } from 'wagmi'
import useChain from './useChain'

const useIndexed = <SubgraphQuery>(
  hash: Address | undefined,
  useQuery: UseQuery<
    QueryDefinition<
      {
        variables: Exact<{
          where?: InputMaybe<{
            transactionHash?: InputMaybe<Scalars['Bytes']['input']>
          }>
        }>
        chainId?: number | undefined
      },
      any,
      never,
      SubgraphQuery,
      'subgraphAPI'
    >
  >,
  selectFromResult: (result: SubgraphQuery) => {
    indexed: boolean
  },
  onSuccessfulIndexing?: () => void
) => {
  const { chainId } = useChain()
  const [polling, setPolling] = useState(false)

  const { isSuccess: transactionSucess, isLoading: transactionPending } =
    useWaitForTransaction({
      hash,
    })

  const { indexed } = useQuery(
    { variables: { where: { transactionHash: hash } }, chainId },
    {
      pollingInterval: polling ? 2000 : 0,
      skip: !polling || !Boolean(hash),
      selectFromResult: (result) => {
        if (!result.data) {
          return { indexed: false }
        }
        const { indexed } = selectFromResult(result.data)
        return {
          indexed,
        }
      },
    }
  )

  useEffect(() => {
    if (transactionSucess) {
      setPolling(true)
    }
  }, [transactionSucess])

  useEffect(() => {
    if (indexed) {
      onSuccessfulIndexing?.()
      setPolling(false)
    }
  }, [indexed])

  return {
    indexing: transactionPending || polling,
  }
}

export default useIndexed
