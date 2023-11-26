const AppHomePage = () => {
  return (
    <div className="h-full">
      <div className="bg-base-200 h-full flex flex-col gap-8  p-4 rounded-md">
        <h1 className="text-4xl text-center font-sans-display">
          🌐 InstateScan
        </h1>
        <p>Welcome to the InstateScan</p>
        Here you can:
        <ul className="list-disc list-inside">
          <li>
            View you Instate profile & check you{' '}
            <span className="font-bold">local accounts</span>
          </li>
          <li>Explore existing network states</li>
        </ul>
      </div>
    </div>
  )
}

export default AppHomePage
