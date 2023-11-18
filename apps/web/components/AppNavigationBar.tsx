import Link from "next/link";

const AppNavigationBar = () => {
  return (
    <div className="flex flex-row justify-between gap-4 items-center bg-opacity-90 p-3 bg-neutral rounded-lg">
      <div className="flex flex-row flex-grow">
        <Link href={"/map"}>
          <button className="btn">Home</button>
        </Link>
        <input
          className="input input-primary ml-4 w-full"
          placeholder="Search Network State (by tile address) or location (by geohash)"
        />
      </div>
      <div>
        <Link href={"/map/profile"}>
          <button className="btn">My Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default AppNavigationBar;
