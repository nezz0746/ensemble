import useChain from '@/hooks/useChain'
import { OwnedNft } from 'alchemy-sdk'
import { useEffect, useState } from 'react'
import { getAlchemyNFT } from 'shared-config'

const AccountNFTs = ({ account }: { account?: string }) => {
  const { chainId } = useChain()
  const [nfts, setNfts] = useState<OwnedNft[] | null>(null)
  const [nftsLoading, setNftsLoading] = useState(false)

  const fetchNFTs = async () => {
    if (!account) return

    setNftsLoading(true)

    const nfts = getAlchemyNFT(chainId)

    const { ownedNfts } = await nfts.getNftsForOwner(account)

    setNfts(ownedNfts)

    setNftsLoading(false)
  }

  useEffect(() => {
    fetchNFTs()
  }, [account])

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
      ) : nftsLoading ? (
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
