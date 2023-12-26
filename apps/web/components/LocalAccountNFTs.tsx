import useChain from '@/hooks/useChain'
import { useListAccountNFTsQuery } from '@instate/kit'

const AccountNFTs = ({ account }: { account?: string }) => {
  const { chainId } = useChain()
  const { data: nfts, isLoading } = useListAccountNFTsQuery({
    chainId,
    account,
  })

  return (
    <>
      {Number(nfts?.length) > 0 ? (
        nfts?.map((nft) => {
          return (
            <div
              key={nft.contract.address + nft.tokenId}
              className="border border-primary relative bg-base-100 rounded-md w-[150px] h-[150px] overflow-hidden"
            >
              <div className="bottom-0 p-2 absolute left-0 bg-black bg-opacity-40 whitespace-nowrap">
                <p className="text-xs font-bold text-primary text-ellipsis">
                  {nft.contract.name}
                </p>
              </div>
              <img src={nft.image.thumbnailUrl} className="object-cover" />
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
    </>
  )
}

export default AccountNFTs
