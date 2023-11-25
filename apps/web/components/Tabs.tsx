import classNames from 'classnames'
import { useState } from 'react'

type TabsProps = {
  tabs: {
    name: string
    content: React.ReactNode
  }[]
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0)
  const names = tabs.map(({ name }) => name)

  return (
    <div
      role="tablist"
      className="tabs tabs-boxed p-4 flex-grow overflow-hidden flex flex-col gap-2 items-start"
    >
      <div className="flex flex-row w-full">
        {names.map((name, _index) => (
          <div
            key={name}
            role="tab"
            className={classNames('tab flex-grow', {
              'tab-active': name === names[activeTab],
            })}
            onClick={() => setActiveTab(_index)}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="w-full h-full overflow-scroll">
        {tabs[activeTab].content}
      </div>
    </div>
  )
}

export default Tabs
