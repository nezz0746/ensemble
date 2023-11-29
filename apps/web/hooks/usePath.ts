import { usePathname } from 'next/navigation'

const usePath = () => {
  const pathName = usePathname()

  const isProfile = pathName.includes('/profile')
  const isTile = pathName.includes('/tile')
  const isLocalDrops = pathName.includes('/local-drops')

  return { isProfile, isTile, isLocalDrops }
}

export default usePath
