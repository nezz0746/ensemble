import ConnectButton from './ConnectButton'

const Navbar = () => {
  return (
    <nav>
      <div className="navbar bg-base-100 px-5 flex flex-row w-full justify-between border">
        <a className="btn btn-outline rounded-none text-xl">Instate</a>
        <div>
          <p className="text-lg font-bold">
            <ConnectButton />
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
