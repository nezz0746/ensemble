import useChain from '@/hooks/useChain'
import { useListAccountNFTsQuery } from '@instate/kit'

const AccountNFTs = ({ account }: { account?: string }) => {
  const { chainId } = useChain()
  const { data: nfts, isLoading } = useListAccountNFTsQuery({
    chainId,
    account,
  })

  return (
    <div className="flex flex-row gap-3">
      {Number(nfts?.length) > 0 ? (
        nfts?.map((nft) => {
          return (
            <div
              key={nft.contract.address + nft.tokenId}
              className="border border-primary bg-base-100 w-44 rounded-md overflow-hidden"
            >
              <img src={nft.image.thumbnailUrl} className="" />
              <div className="p-2 text-xs">
                <p className="font-bold">{nft.name}</p>
                <p>#{parseInt(nft.tokenId) + 1}</p>
              </div>
            </div>
          )
        })
      ) : isLoading ? (
        <div className="w-full text-center">
          <span className="loading loading-spinner bg-primary loading-xs"></span>
        </div>
      ) : (
        <p>Nothing here yet</p>
      )}
    </div>
  )
}

export default AccountNFTs
