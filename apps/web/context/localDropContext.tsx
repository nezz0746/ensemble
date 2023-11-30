import { LocalTokensQuery } from '@instate/kit'
import { createContext, useContext, useState } from 'react'

type LocalDropStore = {
  selected: LocalTokensQuery['localTokens'][0] | null
  setSelected: (selected: LocalTokensQuery['localTokens'][0] | null) => void
}

const LocalDropContext = createContext<LocalDropStore>({
  selected: null,
  setSelected: () => {},
})

type LocalDropProviderProps = {
  children: React.ReactNode
}

const LocalDropProvider = ({ children }: LocalDropProviderProps) => {
  const [selected, setSelected] = useState<
    LocalTokensQuery['localTokens'][0] | null
  >(null)

  return (
    <LocalDropContext.Provider value={{ selected, setSelected }}>
      {children}
    </LocalDropContext.Provider>
  )
}

const useLocalDrop = () => {
  const context = useContext(LocalDropContext)

  console.log(context)

  if (context.selected === undefined) {
    throw new Error('useLocalDrop must be used within a LocalDropProvider')
  }

  return context
}

export { LocalDropProvider, useLocalDrop }
