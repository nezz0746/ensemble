import { usePathname } from 'next/navigation'

const usePath = () => {
  const pathName = usePathname()

  const isProfile = pathName.includes('/profile')
  const isTile = pathName.includes('/tile')

  return { isProfile, isTile }
}

export default usePath
