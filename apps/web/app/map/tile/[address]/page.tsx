"use client";

import { NextPage } from "next";

type TilePageProps = { params: { address: string } };

const TilePage: NextPage<TilePageProps> = ({ params: { address } }) => {
  return <div>Tile Page: {address}</div>;
};

export default TilePage;
