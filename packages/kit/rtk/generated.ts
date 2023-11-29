import { subgraphAPI } from './subgraph';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
};

export type Agent = {
  __typename?: 'Agent';
  currentGeohash: Scalars['String']['output'];
  id: Scalars['Bytes']['output'];
  records: Array<LocalRecord>;
  states: Array<StateAgent>;
};


export type AgentRecordsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LocalRecord_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LocalRecord_Filter>;
};


export type AgentStatesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StateAgent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StateAgent_Filter>;
};

export type Agent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Agent_Filter>>>;
  currentGeohash?: InputMaybe<Scalars['String']['input']>;
  currentGeohash_contains?: InputMaybe<Scalars['String']['input']>;
  currentGeohash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentGeohash_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentGeohash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentGeohash_gt?: InputMaybe<Scalars['String']['input']>;
  currentGeohash_gte?: InputMaybe<Scalars['String']['input']>;
  currentGeohash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentGeohash_lt?: InputMaybe<Scalars['String']['input']>;
  currentGeohash_lte?: InputMaybe<Scalars['String']['input']>;
  currentGeohash_not?: InputMaybe<Scalars['String']['input']>;
  currentGeohash_not_contains?: InputMaybe<Scalars['String']['input']>;
  currentGeohash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentGeohash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentGeohash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentGeohash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentGeohash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentGeohash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentGeohash_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentGeohash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Agent_Filter>>>;
  records_?: InputMaybe<LocalRecord_Filter>;
  states_?: InputMaybe<StateAgent_Filter>;
};

export enum Agent_OrderBy {
  CurrentGeohash = 'currentGeohash',
  Id = 'id',
  Records = 'records',
  States = 'states'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type LocalRecord = {
  __typename?: 'LocalRecord';
  geohash: Scalars['String']['output'];
  id: Scalars['Bytes']['output'];
  localRecordERC721: Scalars['String']['output'];
  owner: Agent;
  transactionHash: Scalars['Bytes']['output'];
};

export type LocalRecord_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LocalRecord_Filter>>>;
  geohash?: InputMaybe<Scalars['String']['input']>;
  geohash_contains?: InputMaybe<Scalars['String']['input']>;
  geohash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_ends_with?: InputMaybe<Scalars['String']['input']>;
  geohash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_gt?: InputMaybe<Scalars['String']['input']>;
  geohash_gte?: InputMaybe<Scalars['String']['input']>;
  geohash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  geohash_lt?: InputMaybe<Scalars['String']['input']>;
  geohash_lte?: InputMaybe<Scalars['String']['input']>;
  geohash_not?: InputMaybe<Scalars['String']['input']>;
  geohash_not_contains?: InputMaybe<Scalars['String']['input']>;
  geohash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  geohash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  geohash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  geohash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_starts_with?: InputMaybe<Scalars['String']['input']>;
  geohash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  localRecordERC721?: InputMaybe<Scalars['String']['input']>;
  localRecordERC721_contains?: InputMaybe<Scalars['String']['input']>;
  localRecordERC721_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  localRecordERC721_ends_with?: InputMaybe<Scalars['String']['input']>;
  localRecordERC721_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  localRecordERC721_gt?: InputMaybe<Scalars['String']['input']>;
  localRecordERC721_gte?: InputMaybe<Scalars['String']['input']>;
  localRecordERC721_in?: InputMaybe<Array<Scalars['String']['input']>>;
  localRecordERC721_lt?: InputMaybe<Scalars['String']['input']>;
  localRecordERC721_lte?: InputMaybe<Scalars['String']['input']>;
  localRecordERC721_not?: InputMaybe<Scalars['String']['input']>;
  localRecordERC721_not_contains?: InputMaybe<Scalars['String']['input']>;
  localRecordERC721_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  localRecordERC721_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  localRecordERC721_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  localRecordERC721_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  localRecordERC721_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  localRecordERC721_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  localRecordERC721_starts_with?: InputMaybe<Scalars['String']['input']>;
  localRecordERC721_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<LocalRecord_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Agent_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum LocalRecord_OrderBy {
  Geohash = 'geohash',
  Id = 'id',
  LocalRecordErc721 = 'localRecordERC721',
  Owner = 'owner',
  OwnerCurrentGeohash = 'owner__currentGeohash',
  OwnerId = 'owner__id',
  TransactionHash = 'transactionHash'
}

export type LocalToken = {
  __typename?: 'LocalToken';
  geohash: Scalars['String']['output'];
  id: Scalars['Bytes']['output'];
  metadata?: Maybe<LocalTokenMetadata>;
  uri: Scalars['String']['output'];
};

export type LocalTokenMetadata = {
  __typename?: 'LocalTokenMetadata';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  imageGateway: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type LocalTokenMetadata_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LocalTokenMetadata_Filter>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  imageGateway?: InputMaybe<Scalars['String']['input']>;
  imageGateway_contains?: InputMaybe<Scalars['String']['input']>;
  imageGateway_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  imageGateway_ends_with?: InputMaybe<Scalars['String']['input']>;
  imageGateway_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  imageGateway_gt?: InputMaybe<Scalars['String']['input']>;
  imageGateway_gte?: InputMaybe<Scalars['String']['input']>;
  imageGateway_in?: InputMaybe<Array<Scalars['String']['input']>>;
  imageGateway_lt?: InputMaybe<Scalars['String']['input']>;
  imageGateway_lte?: InputMaybe<Scalars['String']['input']>;
  imageGateway_not?: InputMaybe<Scalars['String']['input']>;
  imageGateway_not_contains?: InputMaybe<Scalars['String']['input']>;
  imageGateway_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  imageGateway_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  imageGateway_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  imageGateway_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  imageGateway_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  imageGateway_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  imageGateway_starts_with?: InputMaybe<Scalars['String']['input']>;
  imageGateway_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_gt?: InputMaybe<Scalars['String']['input']>;
  image_gte?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_lt?: InputMaybe<Scalars['String']['input']>;
  image_lte?: InputMaybe<Scalars['String']['input']>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<LocalTokenMetadata_Filter>>>;
};

export enum LocalTokenMetadata_OrderBy {
  Description = 'description',
  Id = 'id',
  Image = 'image',
  ImageGateway = 'imageGateway',
  Name = 'name'
}

export type LocalToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LocalToken_Filter>>>;
  geohash?: InputMaybe<Scalars['String']['input']>;
  geohash_contains?: InputMaybe<Scalars['String']['input']>;
  geohash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_ends_with?: InputMaybe<Scalars['String']['input']>;
  geohash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_gt?: InputMaybe<Scalars['String']['input']>;
  geohash_gte?: InputMaybe<Scalars['String']['input']>;
  geohash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  geohash_lt?: InputMaybe<Scalars['String']['input']>;
  geohash_lte?: InputMaybe<Scalars['String']['input']>;
  geohash_not?: InputMaybe<Scalars['String']['input']>;
  geohash_not_contains?: InputMaybe<Scalars['String']['input']>;
  geohash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  geohash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  geohash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  geohash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_starts_with?: InputMaybe<Scalars['String']['input']>;
  geohash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_?: InputMaybe<LocalTokenMetadata_Filter>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_gt?: InputMaybe<Scalars['String']['input']>;
  metadata_gte?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_lt?: InputMaybe<Scalars['String']['input']>;
  metadata_lte?: InputMaybe<Scalars['String']['input']>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<LocalToken_Filter>>>;
  uri?: InputMaybe<Scalars['String']['input']>;
  uri_contains?: InputMaybe<Scalars['String']['input']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_gt?: InputMaybe<Scalars['String']['input']>;
  uri_gte?: InputMaybe<Scalars['String']['input']>;
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_lt?: InputMaybe<Scalars['String']['input']>;
  uri_lte?: InputMaybe<Scalars['String']['input']>;
  uri_not?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum LocalToken_OrderBy {
  Geohash = 'geohash',
  Id = 'id',
  Metadata = 'metadata',
  MetadataDescription = 'metadata__description',
  MetadataId = 'metadata__id',
  MetadataImage = 'metadata__image',
  MetadataImageGateway = 'metadata__imageGateway',
  MetadataName = 'metadata__name',
  Uri = 'uri'
}

export type NetworkState = {
  __typename?: 'NetworkState';
  agents: Array<StateAgent>;
  baseURI: Scalars['String']['output'];
  creator: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  metadata?: Maybe<NetworkStateMetadata>;
  population: Scalars['BigInt']['output'];
  travels: Array<NetworkStateTravel>;
  verifier: Scalars['Bytes']['output'];
};


export type NetworkStateAgentsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StateAgent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StateAgent_Filter>;
};


export type NetworkStateTravelsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NetworkStateTravel_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NetworkStateTravel_Filter>;
};

export type NetworkStateMetadata = {
  __typename?: 'NetworkStateMetadata';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  imageGateway: Scalars['String']['output'];
  manifesto: Scalars['String']['output'];
  manifestoGateway: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type NetworkStateMetadata_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NetworkStateMetadata_Filter>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  imageGateway?: InputMaybe<Scalars['String']['input']>;
  imageGateway_contains?: InputMaybe<Scalars['String']['input']>;
  imageGateway_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  imageGateway_ends_with?: InputMaybe<Scalars['String']['input']>;
  imageGateway_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  imageGateway_gt?: InputMaybe<Scalars['String']['input']>;
  imageGateway_gte?: InputMaybe<Scalars['String']['input']>;
  imageGateway_in?: InputMaybe<Array<Scalars['String']['input']>>;
  imageGateway_lt?: InputMaybe<Scalars['String']['input']>;
  imageGateway_lte?: InputMaybe<Scalars['String']['input']>;
  imageGateway_not?: InputMaybe<Scalars['String']['input']>;
  imageGateway_not_contains?: InputMaybe<Scalars['String']['input']>;
  imageGateway_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  imageGateway_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  imageGateway_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  imageGateway_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  imageGateway_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  imageGateway_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  imageGateway_starts_with?: InputMaybe<Scalars['String']['input']>;
  imageGateway_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_gt?: InputMaybe<Scalars['String']['input']>;
  image_gte?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_lt?: InputMaybe<Scalars['String']['input']>;
  image_lte?: InputMaybe<Scalars['String']['input']>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manifesto?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway_contains?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway_ends_with?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway_gt?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway_gte?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manifestoGateway_lt?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway_lte?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway_not?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway_not_contains?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manifestoGateway_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway_starts_with?: InputMaybe<Scalars['String']['input']>;
  manifestoGateway_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manifesto_contains?: InputMaybe<Scalars['String']['input']>;
  manifesto_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manifesto_ends_with?: InputMaybe<Scalars['String']['input']>;
  manifesto_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manifesto_gt?: InputMaybe<Scalars['String']['input']>;
  manifesto_gte?: InputMaybe<Scalars['String']['input']>;
  manifesto_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manifesto_lt?: InputMaybe<Scalars['String']['input']>;
  manifesto_lte?: InputMaybe<Scalars['String']['input']>;
  manifesto_not?: InputMaybe<Scalars['String']['input']>;
  manifesto_not_contains?: InputMaybe<Scalars['String']['input']>;
  manifesto_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manifesto_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  manifesto_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manifesto_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manifesto_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  manifesto_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manifesto_starts_with?: InputMaybe<Scalars['String']['input']>;
  manifesto_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<NetworkStateMetadata_Filter>>>;
};

export enum NetworkStateMetadata_OrderBy {
  Description = 'description',
  Id = 'id',
  Image = 'image',
  ImageGateway = 'imageGateway',
  Manifesto = 'manifesto',
  ManifestoGateway = 'manifestoGateway',
  Name = 'name'
}

export type NetworkStateTravel = {
  __typename?: 'NetworkStateTravel';
  account: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  nextGeohash: Scalars['String']['output'];
  previousGeohash: Scalars['String']['output'];
  state: NetworkState;
};

export type NetworkStateTravel_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<NetworkStateTravel_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nextGeohash?: InputMaybe<Scalars['String']['input']>;
  nextGeohash_contains?: InputMaybe<Scalars['String']['input']>;
  nextGeohash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nextGeohash_ends_with?: InputMaybe<Scalars['String']['input']>;
  nextGeohash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nextGeohash_gt?: InputMaybe<Scalars['String']['input']>;
  nextGeohash_gte?: InputMaybe<Scalars['String']['input']>;
  nextGeohash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nextGeohash_lt?: InputMaybe<Scalars['String']['input']>;
  nextGeohash_lte?: InputMaybe<Scalars['String']['input']>;
  nextGeohash_not?: InputMaybe<Scalars['String']['input']>;
  nextGeohash_not_contains?: InputMaybe<Scalars['String']['input']>;
  nextGeohash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nextGeohash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nextGeohash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nextGeohash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nextGeohash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nextGeohash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nextGeohash_starts_with?: InputMaybe<Scalars['String']['input']>;
  nextGeohash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<NetworkStateTravel_Filter>>>;
  previousGeohash?: InputMaybe<Scalars['String']['input']>;
  previousGeohash_contains?: InputMaybe<Scalars['String']['input']>;
  previousGeohash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  previousGeohash_ends_with?: InputMaybe<Scalars['String']['input']>;
  previousGeohash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousGeohash_gt?: InputMaybe<Scalars['String']['input']>;
  previousGeohash_gte?: InputMaybe<Scalars['String']['input']>;
  previousGeohash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  previousGeohash_lt?: InputMaybe<Scalars['String']['input']>;
  previousGeohash_lte?: InputMaybe<Scalars['String']['input']>;
  previousGeohash_not?: InputMaybe<Scalars['String']['input']>;
  previousGeohash_not_contains?: InputMaybe<Scalars['String']['input']>;
  previousGeohash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  previousGeohash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  previousGeohash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousGeohash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  previousGeohash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  previousGeohash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousGeohash_starts_with?: InputMaybe<Scalars['String']['input']>;
  previousGeohash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  state_?: InputMaybe<NetworkState_Filter>;
  state_contains?: InputMaybe<Scalars['String']['input']>;
  state_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  state_ends_with?: InputMaybe<Scalars['String']['input']>;
  state_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  state_gt?: InputMaybe<Scalars['String']['input']>;
  state_gte?: InputMaybe<Scalars['String']['input']>;
  state_in?: InputMaybe<Array<Scalars['String']['input']>>;
  state_lt?: InputMaybe<Scalars['String']['input']>;
  state_lte?: InputMaybe<Scalars['String']['input']>;
  state_not?: InputMaybe<Scalars['String']['input']>;
  state_not_contains?: InputMaybe<Scalars['String']['input']>;
  state_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  state_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  state_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  state_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  state_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  state_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  state_starts_with?: InputMaybe<Scalars['String']['input']>;
  state_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum NetworkStateTravel_OrderBy {
  Account = 'account',
  Id = 'id',
  NextGeohash = 'nextGeohash',
  PreviousGeohash = 'previousGeohash',
  State = 'state',
  StateBaseUri = 'state__baseURI',
  StateCreator = 'state__creator',
  StateId = 'state__id',
  StatePopulation = 'state__population',
  StateVerifier = 'state__verifier'
}

export type NetworkState_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  agents_?: InputMaybe<StateAgent_Filter>;
  and?: InputMaybe<Array<InputMaybe<NetworkState_Filter>>>;
  baseURI?: InputMaybe<Scalars['String']['input']>;
  baseURI_contains?: InputMaybe<Scalars['String']['input']>;
  baseURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  baseURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  baseURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  baseURI_gt?: InputMaybe<Scalars['String']['input']>;
  baseURI_gte?: InputMaybe<Scalars['String']['input']>;
  baseURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  baseURI_lt?: InputMaybe<Scalars['String']['input']>;
  baseURI_lte?: InputMaybe<Scalars['String']['input']>;
  baseURI_not?: InputMaybe<Scalars['String']['input']>;
  baseURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  baseURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  baseURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  baseURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  baseURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  baseURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  baseURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  baseURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  baseURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator?: InputMaybe<Scalars['Bytes']['input']>;
  creator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  creator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_?: InputMaybe<NetworkStateMetadata_Filter>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_gt?: InputMaybe<Scalars['String']['input']>;
  metadata_gte?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_lt?: InputMaybe<Scalars['String']['input']>;
  metadata_lte?: InputMaybe<Scalars['String']['input']>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<NetworkState_Filter>>>;
  population?: InputMaybe<Scalars['BigInt']['input']>;
  population_gt?: InputMaybe<Scalars['BigInt']['input']>;
  population_gte?: InputMaybe<Scalars['BigInt']['input']>;
  population_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  population_lt?: InputMaybe<Scalars['BigInt']['input']>;
  population_lte?: InputMaybe<Scalars['BigInt']['input']>;
  population_not?: InputMaybe<Scalars['BigInt']['input']>;
  population_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  travels_?: InputMaybe<NetworkStateTravel_Filter>;
  verifier?: InputMaybe<Scalars['Bytes']['input']>;
  verifier_contains?: InputMaybe<Scalars['Bytes']['input']>;
  verifier_gt?: InputMaybe<Scalars['Bytes']['input']>;
  verifier_gte?: InputMaybe<Scalars['Bytes']['input']>;
  verifier_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  verifier_lt?: InputMaybe<Scalars['Bytes']['input']>;
  verifier_lte?: InputMaybe<Scalars['Bytes']['input']>;
  verifier_not?: InputMaybe<Scalars['Bytes']['input']>;
  verifier_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  verifier_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum NetworkState_OrderBy {
  Agents = 'agents',
  BaseUri = 'baseURI',
  Creator = 'creator',
  Id = 'id',
  Metadata = 'metadata',
  MetadataDescription = 'metadata__description',
  MetadataId = 'metadata__id',
  MetadataImage = 'metadata__image',
  MetadataImageGateway = 'metadata__imageGateway',
  MetadataManifesto = 'metadata__manifesto',
  MetadataManifestoGateway = 'metadata__manifestoGateway',
  MetadataName = 'metadata__name',
  Population = 'population',
  Travels = 'travels',
  Verifier = 'verifier'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  agent?: Maybe<Agent>;
  agents: Array<Agent>;
  localRecord?: Maybe<LocalRecord>;
  localRecords: Array<LocalRecord>;
  localToken?: Maybe<LocalToken>;
  localTokenMetadata: Array<LocalTokenMetadata>;
  localTokens: Array<LocalToken>;
  networkState?: Maybe<NetworkState>;
  networkStateMetadata: Array<NetworkStateMetadata>;
  networkStateTravel?: Maybe<NetworkStateTravel>;
  networkStateTravels: Array<NetworkStateTravel>;
  networkStates: Array<NetworkState>;
  recordTileCreated?: Maybe<RecordTileCreated>;
  recordTileCreateds: Array<RecordTileCreated>;
  recordTileEntered?: Maybe<RecordTileEntered>;
  recordTileEntereds: Array<RecordTileEntered>;
  roleAdminChanged?: Maybe<RoleAdminChanged>;
  roleAdminChangeds: Array<RoleAdminChanged>;
  roleGranted?: Maybe<RoleGranted>;
  roleGranteds: Array<RoleGranted>;
  roleRevoked?: Maybe<RoleRevoked>;
  roleRevokeds: Array<RoleRevoked>;
  stateAgent?: Maybe<StateAgent>;
  stateAgents: Array<StateAgent>;
  tileCreated?: Maybe<TileCreated>;
  tileCreateds: Array<TileCreated>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAgentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Agent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Agent_Filter>;
};


export type QueryLocalRecordArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLocalRecordsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LocalRecord_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LocalRecord_Filter>;
};


export type QueryLocalTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLocalTokenMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LocalTokenMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LocalTokenMetadata_Filter>;
};


export type QueryLocalTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LocalToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LocalToken_Filter>;
};


export type QueryNetworkStateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNetworkStateMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NetworkStateMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NetworkStateMetadata_Filter>;
};


export type QueryNetworkStateTravelArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNetworkStateTravelsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NetworkStateTravel_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NetworkStateTravel_Filter>;
};


export type QueryNetworkStatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NetworkState_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NetworkState_Filter>;
};


export type QueryRecordTileCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRecordTileCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RecordTileCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RecordTileCreated_Filter>;
};


export type QueryRecordTileEnteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRecordTileEnteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RecordTileEntered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RecordTileEntered_Filter>;
};


export type QueryRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleAdminChanged_Filter>;
};


export type QueryRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleGranted_Filter>;
};


export type QueryRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleRevoked_Filter>;
};


export type QueryStateAgentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStateAgentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StateAgent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StateAgent_Filter>;
};


export type QueryTileCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTileCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TileCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TileCreated_Filter>;
};

export type RecordTileCreated = {
  __typename?: 'RecordTileCreated';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  creator: Scalars['Bytes']['output'];
  geohash: Scalars['String']['output'];
  id: Scalars['Bytes']['output'];
  tileAddress: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RecordTileCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RecordTileCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creator?: InputMaybe<Scalars['Bytes']['input']>;
  creator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  creator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  geohash?: InputMaybe<Scalars['String']['input']>;
  geohash_contains?: InputMaybe<Scalars['String']['input']>;
  geohash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_ends_with?: InputMaybe<Scalars['String']['input']>;
  geohash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_gt?: InputMaybe<Scalars['String']['input']>;
  geohash_gte?: InputMaybe<Scalars['String']['input']>;
  geohash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  geohash_lt?: InputMaybe<Scalars['String']['input']>;
  geohash_lte?: InputMaybe<Scalars['String']['input']>;
  geohash_not?: InputMaybe<Scalars['String']['input']>;
  geohash_not_contains?: InputMaybe<Scalars['String']['input']>;
  geohash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  geohash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  geohash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  geohash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_starts_with?: InputMaybe<Scalars['String']['input']>;
  geohash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RecordTileCreated_Filter>>>;
  tileAddress?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tileAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RecordTileCreated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Creator = 'creator',
  Geohash = 'geohash',
  Id = 'id',
  TileAddress = 'tileAddress',
  TransactionHash = 'transactionHash'
}

export type RecordTileEntered = {
  __typename?: 'RecordTileEntered';
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  geohash: Scalars['String']['output'];
  id: Scalars['Bytes']['output'];
  recipient: Scalars['Bytes']['output'];
  tileAddress: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RecordTileEntered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<RecordTileEntered_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  geohash?: InputMaybe<Scalars['String']['input']>;
  geohash_contains?: InputMaybe<Scalars['String']['input']>;
  geohash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_ends_with?: InputMaybe<Scalars['String']['input']>;
  geohash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_gt?: InputMaybe<Scalars['String']['input']>;
  geohash_gte?: InputMaybe<Scalars['String']['input']>;
  geohash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  geohash_lt?: InputMaybe<Scalars['String']['input']>;
  geohash_lte?: InputMaybe<Scalars['String']['input']>;
  geohash_not?: InputMaybe<Scalars['String']['input']>;
  geohash_not_contains?: InputMaybe<Scalars['String']['input']>;
  geohash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  geohash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  geohash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  geohash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  geohash_starts_with?: InputMaybe<Scalars['String']['input']>;
  geohash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RecordTileEntered_Filter>>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tileAddress?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tileAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RecordTileEntered_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Geohash = 'geohash',
  Id = 'id',
  Recipient = 'recipient',
  TileAddress = 'tileAddress',
  TransactionHash = 'transactionHash'
}

export type RoleAdminChanged = {
  __typename?: 'RoleAdminChanged';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newAdminRole: Scalars['Bytes']['output'];
  previousAdminRole: Scalars['Bytes']['output'];
  role: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RoleAdminChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleAdminChanged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newAdminRole?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newAdminRole_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_not?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RoleAdminChanged_Filter>>>;
  previousAdminRole?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_gt?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_gte?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousAdminRole_lt?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_lte?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_not?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdminRole_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role?: InputMaybe<Scalars['Bytes']['input']>;
  role_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_gt?: InputMaybe<Scalars['Bytes']['input']>;
  role_gte?: InputMaybe<Scalars['Bytes']['input']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_lt?: InputMaybe<Scalars['Bytes']['input']>;
  role_lte?: InputMaybe<Scalars['Bytes']['input']>;
  role_not?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RoleAdminChanged_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewAdminRole = 'newAdminRole',
  PreviousAdminRole = 'previousAdminRole',
  Role = 'role',
  TransactionHash = 'transactionHash'
}

export type RoleGranted = {
  __typename?: 'RoleGranted';
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  role: Scalars['Bytes']['output'];
  sender: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RoleGranted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<RoleGranted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RoleGranted_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']['input']>;
  role_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_gt?: InputMaybe<Scalars['Bytes']['input']>;
  role_gte?: InputMaybe<Scalars['Bytes']['input']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_lt?: InputMaybe<Scalars['Bytes']['input']>;
  role_lte?: InputMaybe<Scalars['Bytes']['input']>;
  role_not?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RoleGranted_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Role = 'role',
  Sender = 'sender',
  TransactionHash = 'transactionHash'
}

export type RoleRevoked = {
  __typename?: 'RoleRevoked';
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  role: Scalars['Bytes']['output'];
  sender: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RoleRevoked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<RoleRevoked_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RoleRevoked_Filter>>>;
  role?: InputMaybe<Scalars['Bytes']['input']>;
  role_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_gt?: InputMaybe<Scalars['Bytes']['input']>;
  role_gte?: InputMaybe<Scalars['Bytes']['input']>;
  role_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  role_lt?: InputMaybe<Scalars['Bytes']['input']>;
  role_lte?: InputMaybe<Scalars['Bytes']['input']>;
  role_not?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RoleRevoked_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Role = 'role',
  Sender = 'sender',
  TransactionHash = 'transactionHash'
}

export type StateAgent = {
  __typename?: 'StateAgent';
  agent: Agent;
  id: Scalars['Bytes']['output'];
  state: NetworkState;
};

export type StateAgent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  agent?: InputMaybe<Scalars['String']['input']>;
  agent_?: InputMaybe<Agent_Filter>;
  agent_contains?: InputMaybe<Scalars['String']['input']>;
  agent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agent_ends_with?: InputMaybe<Scalars['String']['input']>;
  agent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agent_gt?: InputMaybe<Scalars['String']['input']>;
  agent_gte?: InputMaybe<Scalars['String']['input']>;
  agent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agent_lt?: InputMaybe<Scalars['String']['input']>;
  agent_lte?: InputMaybe<Scalars['String']['input']>;
  agent_not?: InputMaybe<Scalars['String']['input']>;
  agent_not_contains?: InputMaybe<Scalars['String']['input']>;
  agent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  agent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  agent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  agent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  agent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  agent_starts_with?: InputMaybe<Scalars['String']['input']>;
  agent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<StateAgent_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<StateAgent_Filter>>>;
  state?: InputMaybe<Scalars['String']['input']>;
  state_?: InputMaybe<NetworkState_Filter>;
  state_contains?: InputMaybe<Scalars['String']['input']>;
  state_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  state_ends_with?: InputMaybe<Scalars['String']['input']>;
  state_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  state_gt?: InputMaybe<Scalars['String']['input']>;
  state_gte?: InputMaybe<Scalars['String']['input']>;
  state_in?: InputMaybe<Array<Scalars['String']['input']>>;
  state_lt?: InputMaybe<Scalars['String']['input']>;
  state_lte?: InputMaybe<Scalars['String']['input']>;
  state_not?: InputMaybe<Scalars['String']['input']>;
  state_not_contains?: InputMaybe<Scalars['String']['input']>;
  state_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  state_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  state_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  state_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  state_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  state_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  state_starts_with?: InputMaybe<Scalars['String']['input']>;
  state_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum StateAgent_OrderBy {
  Agent = 'agent',
  AgentCurrentGeohash = 'agent__currentGeohash',
  AgentId = 'agent__id',
  Id = 'id',
  State = 'state',
  StateBaseUri = 'state__baseURI',
  StateCreator = 'state__creator',
  StateId = 'state__id',
  StatePopulation = 'state__population',
  StateVerifier = 'state__verifier'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  agent?: Maybe<Agent>;
  agents: Array<Agent>;
  localRecord?: Maybe<LocalRecord>;
  localRecords: Array<LocalRecord>;
  localToken?: Maybe<LocalToken>;
  localTokenMetadata: Array<LocalTokenMetadata>;
  localTokens: Array<LocalToken>;
  networkState?: Maybe<NetworkState>;
  networkStateMetadata: Array<NetworkStateMetadata>;
  networkStateTravel?: Maybe<NetworkStateTravel>;
  networkStateTravels: Array<NetworkStateTravel>;
  networkStates: Array<NetworkState>;
  recordTileCreated?: Maybe<RecordTileCreated>;
  recordTileCreateds: Array<RecordTileCreated>;
  recordTileEntered?: Maybe<RecordTileEntered>;
  recordTileEntereds: Array<RecordTileEntered>;
  roleAdminChanged?: Maybe<RoleAdminChanged>;
  roleAdminChangeds: Array<RoleAdminChanged>;
  roleGranted?: Maybe<RoleGranted>;
  roleGranteds: Array<RoleGranted>;
  roleRevoked?: Maybe<RoleRevoked>;
  roleRevokeds: Array<RoleRevoked>;
  stateAgent?: Maybe<StateAgent>;
  stateAgents: Array<StateAgent>;
  tileCreated?: Maybe<TileCreated>;
  tileCreateds: Array<TileCreated>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAgentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Agent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Agent_Filter>;
};


export type SubscriptionLocalRecordArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLocalRecordsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LocalRecord_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LocalRecord_Filter>;
};


export type SubscriptionLocalTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLocalTokenMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LocalTokenMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LocalTokenMetadata_Filter>;
};


export type SubscriptionLocalTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LocalToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LocalToken_Filter>;
};


export type SubscriptionNetworkStateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNetworkStateMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NetworkStateMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NetworkStateMetadata_Filter>;
};


export type SubscriptionNetworkStateTravelArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNetworkStateTravelsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NetworkStateTravel_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NetworkStateTravel_Filter>;
};


export type SubscriptionNetworkStatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NetworkState_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NetworkState_Filter>;
};


export type SubscriptionRecordTileCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRecordTileCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RecordTileCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RecordTileCreated_Filter>;
};


export type SubscriptionRecordTileEnteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRecordTileEnteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RecordTileEntered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RecordTileEntered_Filter>;
};


export type SubscriptionRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleAdminChanged_Filter>;
};


export type SubscriptionRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleGranted_Filter>;
};


export type SubscriptionRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleRevoked_Filter>;
};


export type SubscriptionStateAgentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStateAgentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StateAgent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StateAgent_Filter>;
};


export type SubscriptionTileCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTileCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TileCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TileCreated_Filter>;
};

export type TileCreated = {
  __typename?: 'TileCreated';
  baseURI: Scalars['String']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  creator: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  tileAddress: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  verifier: Scalars['Bytes']['output'];
};

export type TileCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TileCreated_Filter>>>;
  baseURI?: InputMaybe<Scalars['String']['input']>;
  baseURI_contains?: InputMaybe<Scalars['String']['input']>;
  baseURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  baseURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  baseURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  baseURI_gt?: InputMaybe<Scalars['String']['input']>;
  baseURI_gte?: InputMaybe<Scalars['String']['input']>;
  baseURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  baseURI_lt?: InputMaybe<Scalars['String']['input']>;
  baseURI_lte?: InputMaybe<Scalars['String']['input']>;
  baseURI_not?: InputMaybe<Scalars['String']['input']>;
  baseURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  baseURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  baseURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  baseURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  baseURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  baseURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  baseURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  baseURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  baseURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creator?: InputMaybe<Scalars['Bytes']['input']>;
  creator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  creator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TileCreated_Filter>>>;
  tileAddress?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tileAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tileAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  verifier?: InputMaybe<Scalars['Bytes']['input']>;
  verifier_contains?: InputMaybe<Scalars['Bytes']['input']>;
  verifier_gt?: InputMaybe<Scalars['Bytes']['input']>;
  verifier_gte?: InputMaybe<Scalars['Bytes']['input']>;
  verifier_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  verifier_lt?: InputMaybe<Scalars['Bytes']['input']>;
  verifier_lte?: InputMaybe<Scalars['Bytes']['input']>;
  verifier_not?: InputMaybe<Scalars['Bytes']['input']>;
  verifier_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  verifier_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TileCreated_OrderBy {
  BaseUri = 'baseURI',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Creator = 'creator',
  Id = 'id',
  TileAddress = 'tileAddress',
  TransactionHash = 'transactionHash',
  Verifier = 'verifier'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type AgentQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
  agent_records_skip?: InputMaybe<Scalars['Int']['input']>;
  agent_records_first?: InputMaybe<Scalars['Int']['input']>;
  agent_records_orderBy?: InputMaybe<LocalRecord_OrderBy>;
  agent_records_orderDirection?: InputMaybe<OrderDirection>;
  agent_records_where?: InputMaybe<LocalRecord_Filter>;
  agent_states_skip?: InputMaybe<Scalars['Int']['input']>;
  agent_states_first?: InputMaybe<Scalars['Int']['input']>;
  agent_states_orderBy?: InputMaybe<StateAgent_OrderBy>;
  agent_states_orderDirection?: InputMaybe<OrderDirection>;
  agent_states_where?: InputMaybe<StateAgent_Filter>;
  agent_states_states_state_state_travels_skip?: InputMaybe<Scalars['Int']['input']>;
  agent_states_states_state_state_travels_first?: InputMaybe<Scalars['Int']['input']>;
  agent_states_states_state_state_travels_orderBy?: InputMaybe<NetworkStateTravel_OrderBy>;
  agent_states_states_state_state_travels_orderDirection?: InputMaybe<OrderDirection>;
  agent_states_states_state_state_travels_where?: InputMaybe<NetworkStateTravel_Filter>;
}>;


export type AgentQuery = { __typename?: 'Query', agent?: { __typename?: 'Agent', id: any, currentGeohash: string, records: Array<{ __typename?: 'LocalRecord', id: any, geohash: string, localRecordERC721: string, transactionHash: any }>, states: Array<{ __typename?: 'StateAgent', id: any, state: { __typename?: 'NetworkState', id: any, verifier: any, creator: any, baseURI: string, population: any, metadata?: { __typename?: 'NetworkStateMetadata', id: string, name: string, description: string, image: string, imageGateway: string, manifesto: string, manifestoGateway: string } | null, travels: Array<{ __typename?: 'NetworkStateTravel', id: any, account: any, previousGeohash: string, nextGeohash: string }> } }> } | null };

export type AgentsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Agent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Agent_Filter>;
  block?: InputMaybe<Block_Height>;
  agents_records_skip?: InputMaybe<Scalars['Int']['input']>;
  agents_records_first?: InputMaybe<Scalars['Int']['input']>;
  agents_records_orderBy?: InputMaybe<LocalRecord_OrderBy>;
  agents_records_orderDirection?: InputMaybe<OrderDirection>;
  agents_records_where?: InputMaybe<LocalRecord_Filter>;
  agents_states_skip?: InputMaybe<Scalars['Int']['input']>;
  agents_states_first?: InputMaybe<Scalars['Int']['input']>;
  agents_states_orderBy?: InputMaybe<StateAgent_OrderBy>;
  agents_states_orderDirection?: InputMaybe<OrderDirection>;
  agents_states_where?: InputMaybe<StateAgent_Filter>;
  agents_states_states_state_state_travels_skip?: InputMaybe<Scalars['Int']['input']>;
  agents_states_states_state_state_travels_first?: InputMaybe<Scalars['Int']['input']>;
  agents_states_states_state_state_travels_orderBy?: InputMaybe<NetworkStateTravel_OrderBy>;
  agents_states_states_state_state_travels_orderDirection?: InputMaybe<OrderDirection>;
  agents_states_states_state_state_travels_where?: InputMaybe<NetworkStateTravel_Filter>;
}>;


export type AgentsQuery = { __typename?: 'Query', agents: Array<{ __typename?: 'Agent', id: any, currentGeohash: string, records: Array<{ __typename?: 'LocalRecord', id: any, geohash: string, localRecordERC721: string, transactionHash: any }>, states: Array<{ __typename?: 'StateAgent', id: any, state: { __typename?: 'NetworkState', id: any, verifier: any, creator: any, baseURI: string, population: any, metadata?: { __typename?: 'NetworkStateMetadata', id: string, name: string, description: string, image: string, imageGateway: string, manifesto: string, manifestoGateway: string } | null, travels: Array<{ __typename?: 'NetworkStateTravel', id: any, account: any, previousGeohash: string, nextGeohash: string }> } }> }> };

export type StateAgentQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
  stateAgent_state_state_travels_skip?: InputMaybe<Scalars['Int']['input']>;
  stateAgent_state_state_travels_first?: InputMaybe<Scalars['Int']['input']>;
  stateAgent_state_state_travels_orderBy?: InputMaybe<NetworkStateTravel_OrderBy>;
  stateAgent_state_state_travels_orderDirection?: InputMaybe<OrderDirection>;
  stateAgent_state_state_travels_where?: InputMaybe<NetworkStateTravel_Filter>;
  stateAgent_agent_agent_records_skip?: InputMaybe<Scalars['Int']['input']>;
  stateAgent_agent_agent_records_first?: InputMaybe<Scalars['Int']['input']>;
  stateAgent_agent_agent_records_orderBy?: InputMaybe<LocalRecord_OrderBy>;
  stateAgent_agent_agent_records_orderDirection?: InputMaybe<OrderDirection>;
  stateAgent_agent_agent_records_where?: InputMaybe<LocalRecord_Filter>;
}>;


export type StateAgentQuery = { __typename?: 'Query', stateAgent?: { __typename?: 'StateAgent', id: any, state: { __typename?: 'NetworkState', id: any, verifier: any, creator: any, baseURI: string, population: any, metadata?: { __typename?: 'NetworkStateMetadata', id: string, name: string, description: string, image: string, imageGateway: string, manifesto: string, manifestoGateway: string } | null, travels: Array<{ __typename?: 'NetworkStateTravel', id: any, account: any, previousGeohash: string, nextGeohash: string }> }, agent: { __typename?: 'Agent', id: any, currentGeohash: string, records: Array<{ __typename?: 'LocalRecord', id: any, geohash: string, localRecordERC721: string, transactionHash: any }> } } | null };

export type StateAgentsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StateAgent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StateAgent_Filter>;
  block?: InputMaybe<Block_Height>;
  stateAgents_state_state_travels_skip?: InputMaybe<Scalars['Int']['input']>;
  stateAgents_state_state_travels_first?: InputMaybe<Scalars['Int']['input']>;
  stateAgents_state_state_travels_orderBy?: InputMaybe<NetworkStateTravel_OrderBy>;
  stateAgents_state_state_travels_orderDirection?: InputMaybe<OrderDirection>;
  stateAgents_state_state_travels_where?: InputMaybe<NetworkStateTravel_Filter>;
  stateAgents_agent_agent_records_skip?: InputMaybe<Scalars['Int']['input']>;
  stateAgents_agent_agent_records_first?: InputMaybe<Scalars['Int']['input']>;
  stateAgents_agent_agent_records_orderBy?: InputMaybe<LocalRecord_OrderBy>;
  stateAgents_agent_agent_records_orderDirection?: InputMaybe<OrderDirection>;
  stateAgents_agent_agent_records_where?: InputMaybe<LocalRecord_Filter>;
}>;


export type StateAgentsQuery = { __typename?: 'Query', stateAgents: Array<{ __typename?: 'StateAgent', id: any, state: { __typename?: 'NetworkState', id: any, verifier: any, creator: any, baseURI: string, population: any, metadata?: { __typename?: 'NetworkStateMetadata', id: string, name: string, description: string, image: string, imageGateway: string, manifesto: string, manifestoGateway: string } | null, travels: Array<{ __typename?: 'NetworkStateTravel', id: any, account: any, previousGeohash: string, nextGeohash: string }> }, agent: { __typename?: 'Agent', id: any, currentGeohash: string, records: Array<{ __typename?: 'LocalRecord', id: any, geohash: string, localRecordERC721: string, transactionHash: any }> } }> };

export type NetworkStateQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
  networkState_agents_skip?: InputMaybe<Scalars['Int']['input']>;
  networkState_agents_first?: InputMaybe<Scalars['Int']['input']>;
  networkState_agents_orderBy?: InputMaybe<StateAgent_OrderBy>;
  networkState_agents_orderDirection?: InputMaybe<OrderDirection>;
  networkState_agents_where?: InputMaybe<StateAgent_Filter>;
  networkState_agents_agents_agent_agent_records_skip?: InputMaybe<Scalars['Int']['input']>;
  networkState_agents_agents_agent_agent_records_first?: InputMaybe<Scalars['Int']['input']>;
  networkState_agents_agents_agent_agent_records_orderBy?: InputMaybe<LocalRecord_OrderBy>;
  networkState_agents_agents_agent_agent_records_orderDirection?: InputMaybe<OrderDirection>;
  networkState_agents_agents_agent_agent_records_where?: InputMaybe<LocalRecord_Filter>;
  networkState_travels_skip?: InputMaybe<Scalars['Int']['input']>;
  networkState_travels_first?: InputMaybe<Scalars['Int']['input']>;
  networkState_travels_orderBy?: InputMaybe<NetworkStateTravel_OrderBy>;
  networkState_travels_orderDirection?: InputMaybe<OrderDirection>;
  networkState_travels_where?: InputMaybe<NetworkStateTravel_Filter>;
}>;


export type NetworkStateQuery = { __typename?: 'Query', networkState?: { __typename?: 'NetworkState', id: any, verifier: any, creator: any, baseURI: string, population: any, metadata?: { __typename?: 'NetworkStateMetadata', id: string, name: string, description: string, image: string, imageGateway: string, manifesto: string, manifestoGateway: string } | null, agents: Array<{ __typename?: 'StateAgent', id: any, agent: { __typename?: 'Agent', id: any, currentGeohash: string, records: Array<{ __typename?: 'LocalRecord', id: any, geohash: string, localRecordERC721: string, transactionHash: any }> } }>, travels: Array<{ __typename?: 'NetworkStateTravel', id: any, account: any, previousGeohash: string, nextGeohash: string }> } | null };

export type NetworkStatesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NetworkState_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NetworkState_Filter>;
  block?: InputMaybe<Block_Height>;
  networkStates_agents_skip?: InputMaybe<Scalars['Int']['input']>;
  networkStates_agents_first?: InputMaybe<Scalars['Int']['input']>;
  networkStates_agents_orderBy?: InputMaybe<StateAgent_OrderBy>;
  networkStates_agents_orderDirection?: InputMaybe<OrderDirection>;
  networkStates_agents_where?: InputMaybe<StateAgent_Filter>;
  networkStates_agents_agents_agent_agent_records_skip?: InputMaybe<Scalars['Int']['input']>;
  networkStates_agents_agents_agent_agent_records_first?: InputMaybe<Scalars['Int']['input']>;
  networkStates_agents_agents_agent_agent_records_orderBy?: InputMaybe<LocalRecord_OrderBy>;
  networkStates_agents_agents_agent_agent_records_orderDirection?: InputMaybe<OrderDirection>;
  networkStates_agents_agents_agent_agent_records_where?: InputMaybe<LocalRecord_Filter>;
  networkStates_travels_skip?: InputMaybe<Scalars['Int']['input']>;
  networkStates_travels_first?: InputMaybe<Scalars['Int']['input']>;
  networkStates_travels_orderBy?: InputMaybe<NetworkStateTravel_OrderBy>;
  networkStates_travels_orderDirection?: InputMaybe<OrderDirection>;
  networkStates_travels_where?: InputMaybe<NetworkStateTravel_Filter>;
}>;


export type NetworkStatesQuery = { __typename?: 'Query', networkStates: Array<{ __typename?: 'NetworkState', id: any, verifier: any, creator: any, baseURI: string, population: any, metadata?: { __typename?: 'NetworkStateMetadata', id: string, name: string, description: string, image: string, imageGateway: string, manifesto: string, manifestoGateway: string } | null, agents: Array<{ __typename?: 'StateAgent', id: any, agent: { __typename?: 'Agent', id: any, currentGeohash: string, records: Array<{ __typename?: 'LocalRecord', id: any, geohash: string, localRecordERC721: string, transactionHash: any }> } }>, travels: Array<{ __typename?: 'NetworkStateTravel', id: any, account: any, previousGeohash: string, nextGeohash: string }> }> };

export type NetworkStateMetadataQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NetworkStateMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NetworkStateMetadata_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type NetworkStateMetadataQuery = { __typename?: 'Query', networkStateMetadata: Array<{ __typename?: 'NetworkStateMetadata', id: string, name: string, description: string, image: string, imageGateway: string, manifesto: string, manifestoGateway: string }> };

export type NetworkStateTravelQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
  networkStateTravel_state_state_agents_skip?: InputMaybe<Scalars['Int']['input']>;
  networkStateTravel_state_state_agents_first?: InputMaybe<Scalars['Int']['input']>;
  networkStateTravel_state_state_agents_orderBy?: InputMaybe<StateAgent_OrderBy>;
  networkStateTravel_state_state_agents_orderDirection?: InputMaybe<OrderDirection>;
  networkStateTravel_state_state_agents_where?: InputMaybe<StateAgent_Filter>;
  networkStateTravel_state_state_agents_agents_agent_agent_records_skip?: InputMaybe<Scalars['Int']['input']>;
  networkStateTravel_state_state_agents_agents_agent_agent_records_first?: InputMaybe<Scalars['Int']['input']>;
  networkStateTravel_state_state_agents_agents_agent_agent_records_orderBy?: InputMaybe<LocalRecord_OrderBy>;
  networkStateTravel_state_state_agents_agents_agent_agent_records_orderDirection?: InputMaybe<OrderDirection>;
  networkStateTravel_state_state_agents_agents_agent_agent_records_where?: InputMaybe<LocalRecord_Filter>;
}>;


export type NetworkStateTravelQuery = { __typename?: 'Query', networkStateTravel?: { __typename?: 'NetworkStateTravel', id: any, account: any, previousGeohash: string, nextGeohash: string, state: { __typename?: 'NetworkState', id: any, verifier: any, creator: any, baseURI: string, population: any, metadata?: { __typename?: 'NetworkStateMetadata', id: string, name: string, description: string, image: string, imageGateway: string, manifesto: string, manifestoGateway: string } | null, agents: Array<{ __typename?: 'StateAgent', id: any, agent: { __typename?: 'Agent', id: any, currentGeohash: string, records: Array<{ __typename?: 'LocalRecord', id: any, geohash: string, localRecordERC721: string, transactionHash: any }> } }> } } | null };

export type NetworkStateTravelsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NetworkStateTravel_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NetworkStateTravel_Filter>;
  block?: InputMaybe<Block_Height>;
  networkStateTravels_state_state_agents_skip?: InputMaybe<Scalars['Int']['input']>;
  networkStateTravels_state_state_agents_first?: InputMaybe<Scalars['Int']['input']>;
  networkStateTravels_state_state_agents_orderBy?: InputMaybe<StateAgent_OrderBy>;
  networkStateTravels_state_state_agents_orderDirection?: InputMaybe<OrderDirection>;
  networkStateTravels_state_state_agents_where?: InputMaybe<StateAgent_Filter>;
  networkStateTravels_state_state_agents_agents_agent_agent_records_skip?: InputMaybe<Scalars['Int']['input']>;
  networkStateTravels_state_state_agents_agents_agent_agent_records_first?: InputMaybe<Scalars['Int']['input']>;
  networkStateTravels_state_state_agents_agents_agent_agent_records_orderBy?: InputMaybe<LocalRecord_OrderBy>;
  networkStateTravels_state_state_agents_agents_agent_agent_records_orderDirection?: InputMaybe<OrderDirection>;
  networkStateTravels_state_state_agents_agents_agent_agent_records_where?: InputMaybe<LocalRecord_Filter>;
}>;


export type NetworkStateTravelsQuery = { __typename?: 'Query', networkStateTravels: Array<{ __typename?: 'NetworkStateTravel', id: any, account: any, previousGeohash: string, nextGeohash: string, state: { __typename?: 'NetworkState', id: any, verifier: any, creator: any, baseURI: string, population: any, metadata?: { __typename?: 'NetworkStateMetadata', id: string, name: string, description: string, image: string, imageGateway: string, manifesto: string, manifestoGateway: string } | null, agents: Array<{ __typename?: 'StateAgent', id: any, agent: { __typename?: 'Agent', id: any, currentGeohash: string, records: Array<{ __typename?: 'LocalRecord', id: any, geohash: string, localRecordERC721: string, transactionHash: any }> } }> } }> };

export type LocalRecordQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
  localRecord_owner_owner_states_skip?: InputMaybe<Scalars['Int']['input']>;
  localRecord_owner_owner_states_first?: InputMaybe<Scalars['Int']['input']>;
  localRecord_owner_owner_states_orderBy?: InputMaybe<StateAgent_OrderBy>;
  localRecord_owner_owner_states_orderDirection?: InputMaybe<OrderDirection>;
  localRecord_owner_owner_states_where?: InputMaybe<StateAgent_Filter>;
  localRecord_owner_owner_states_states_state_state_travels_skip?: InputMaybe<Scalars['Int']['input']>;
  localRecord_owner_owner_states_states_state_state_travels_first?: InputMaybe<Scalars['Int']['input']>;
  localRecord_owner_owner_states_states_state_state_travels_orderBy?: InputMaybe<NetworkStateTravel_OrderBy>;
  localRecord_owner_owner_states_states_state_state_travels_orderDirection?: InputMaybe<OrderDirection>;
  localRecord_owner_owner_states_states_state_state_travels_where?: InputMaybe<NetworkStateTravel_Filter>;
}>;


export type LocalRecordQuery = { __typename?: 'Query', localRecord?: { __typename?: 'LocalRecord', id: any, geohash: string, localRecordERC721: string, transactionHash: any, owner: { __typename?: 'Agent', id: any, currentGeohash: string, states: Array<{ __typename?: 'StateAgent', id: any, state: { __typename?: 'NetworkState', id: any, verifier: any, creator: any, baseURI: string, population: any, metadata?: { __typename?: 'NetworkStateMetadata', id: string, name: string, description: string, image: string, imageGateway: string, manifesto: string, manifestoGateway: string } | null, travels: Array<{ __typename?: 'NetworkStateTravel', id: any, account: any, previousGeohash: string, nextGeohash: string }> } }> } } | null };

export type LocalRecordsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LocalRecord_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LocalRecord_Filter>;
  block?: InputMaybe<Block_Height>;
  localRecords_owner_owner_states_skip?: InputMaybe<Scalars['Int']['input']>;
  localRecords_owner_owner_states_first?: InputMaybe<Scalars['Int']['input']>;
  localRecords_owner_owner_states_orderBy?: InputMaybe<StateAgent_OrderBy>;
  localRecords_owner_owner_states_orderDirection?: InputMaybe<OrderDirection>;
  localRecords_owner_owner_states_where?: InputMaybe<StateAgent_Filter>;
  localRecords_owner_owner_states_states_state_state_travels_skip?: InputMaybe<Scalars['Int']['input']>;
  localRecords_owner_owner_states_states_state_state_travels_first?: InputMaybe<Scalars['Int']['input']>;
  localRecords_owner_owner_states_states_state_state_travels_orderBy?: InputMaybe<NetworkStateTravel_OrderBy>;
  localRecords_owner_owner_states_states_state_state_travels_orderDirection?: InputMaybe<OrderDirection>;
  localRecords_owner_owner_states_states_state_state_travels_where?: InputMaybe<NetworkStateTravel_Filter>;
}>;


export type LocalRecordsQuery = { __typename?: 'Query', localRecords: Array<{ __typename?: 'LocalRecord', id: any, geohash: string, localRecordERC721: string, transactionHash: any, owner: { __typename?: 'Agent', id: any, currentGeohash: string, states: Array<{ __typename?: 'StateAgent', id: any, state: { __typename?: 'NetworkState', id: any, verifier: any, creator: any, baseURI: string, population: any, metadata?: { __typename?: 'NetworkStateMetadata', id: string, name: string, description: string, image: string, imageGateway: string, manifesto: string, manifestoGateway: string } | null, travels: Array<{ __typename?: 'NetworkStateTravel', id: any, account: any, previousGeohash: string, nextGeohash: string }> } }> } }> };

export type LocalTokenQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type LocalTokenQuery = { __typename?: 'Query', localToken?: { __typename?: 'LocalToken', id: any, geohash: string, uri: string, metadata?: { __typename?: 'LocalTokenMetadata', id: string, name: string, description: string, image: string, imageGateway: string } | null } | null };

export type LocalTokensQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LocalToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LocalToken_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type LocalTokensQuery = { __typename?: 'Query', localTokens: Array<{ __typename?: 'LocalToken', id: any, geohash: string, uri: string, metadata?: { __typename?: 'LocalTokenMetadata', id: string, name: string, description: string, image: string, imageGateway: string } | null }> };

export type LocalTokenMetadataQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LocalTokenMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LocalTokenMetadata_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type LocalTokenMetadataQuery = { __typename?: 'Query', localTokenMetadata: Array<{ __typename?: 'LocalTokenMetadata', id: string, name: string, description: string, image: string, imageGateway: string }> };

export type RecordTileCreatedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type RecordTileCreatedQuery = { __typename?: 'Query', recordTileCreated?: { __typename?: 'RecordTileCreated', id: any, tileAddress: any, geohash: string, creator: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type RecordTileCreatedsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RecordTileCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RecordTileCreated_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type RecordTileCreatedsQuery = { __typename?: 'Query', recordTileCreateds: Array<{ __typename?: 'RecordTileCreated', id: any, tileAddress: any, geohash: string, creator: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type RecordTileEnteredQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type RecordTileEnteredQuery = { __typename?: 'Query', recordTileEntered?: { __typename?: 'RecordTileEntered', id: any, tileAddress: any, recipient: any, geohash: string, account: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type RecordTileEnteredsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RecordTileEntered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RecordTileEntered_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type RecordTileEnteredsQuery = { __typename?: 'Query', recordTileEntereds: Array<{ __typename?: 'RecordTileEntered', id: any, tileAddress: any, recipient: any, geohash: string, account: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type TileCreatedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type TileCreatedQuery = { __typename?: 'Query', tileCreated?: { __typename?: 'TileCreated', id: any, tileAddress: any, verifier: any, baseURI: string, creator: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type TileCreatedsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TileCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TileCreated_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type TileCreatedsQuery = { __typename?: 'Query', tileCreateds: Array<{ __typename?: 'TileCreated', id: any, tileAddress: any, verifier: any, baseURI: string, creator: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type RoleAdminChangedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type RoleAdminChangedQuery = { __typename?: 'Query', roleAdminChanged?: { __typename?: 'RoleAdminChanged', id: any, role: any, previousAdminRole: any, newAdminRole: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type RoleAdminChangedsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleAdminChanged_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type RoleAdminChangedsQuery = { __typename?: 'Query', roleAdminChangeds: Array<{ __typename?: 'RoleAdminChanged', id: any, role: any, previousAdminRole: any, newAdminRole: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type RoleGrantedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type RoleGrantedQuery = { __typename?: 'Query', roleGranted?: { __typename?: 'RoleGranted', id: any, role: any, account: any, sender: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type RoleGrantedsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleGranted_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type RoleGrantedsQuery = { __typename?: 'Query', roleGranteds: Array<{ __typename?: 'RoleGranted', id: any, role: any, account: any, sender: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type RoleRevokedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type RoleRevokedQuery = { __typename?: 'Query', roleRevoked?: { __typename?: 'RoleRevoked', id: any, role: any, account: any, sender: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type RoleRevokedsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RoleRevoked_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type RoleRevokedsQuery = { __typename?: 'Query', roleRevokeds: Array<{ __typename?: 'RoleRevoked', id: any, role: any, account: any, sender: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };


export const AgentDocument = `
    query agent($id: ID!, $block: Block_height, $agent_records_skip: Int, $agent_records_first: Int, $agent_records_orderBy: LocalRecord_orderBy, $agent_records_orderDirection: OrderDirection, $agent_records_where: LocalRecord_filter, $agent_states_skip: Int, $agent_states_first: Int, $agent_states_orderBy: StateAgent_orderBy, $agent_states_orderDirection: OrderDirection, $agent_states_where: StateAgent_filter, $agent_states_states_state_state_travels_skip: Int, $agent_states_states_state_state_travels_first: Int, $agent_states_states_state_state_travels_orderBy: NetworkStateTravel_orderBy, $agent_states_states_state_state_travels_orderDirection: OrderDirection, $agent_states_states_state_state_travels_where: NetworkStateTravel_filter) {
  agent(id: $id, block: $block) {
    id
    currentGeohash
    records(
      skip: $agent_records_skip
      first: $agent_records_first
      orderBy: $agent_records_orderBy
      orderDirection: $agent_records_orderDirection
      where: $agent_records_where
    ) {
      id
      geohash
      localRecordERC721
      transactionHash
    }
    states(
      skip: $agent_states_skip
      first: $agent_states_first
      orderBy: $agent_states_orderBy
      orderDirection: $agent_states_orderDirection
      where: $agent_states_where
    ) {
      id
      state {
        id
        verifier
        creator
        baseURI
        metadata {
          id
          name
          description
          image
          imageGateway
          manifesto
          manifestoGateway
        }
        population
        travels(
          skip: $agent_states_states_state_state_travels_skip
          first: $agent_states_states_state_state_travels_first
          orderBy: $agent_states_states_state_state_travels_orderBy
          orderDirection: $agent_states_states_state_state_travels_orderDirection
          where: $agent_states_states_state_state_travels_where
        ) {
          id
          account
          previousGeohash
          nextGeohash
        }
      }
    }
  }
}
    `;
export const AgentsDocument = `
    query agents($skip: Int, $first: Int, $orderBy: Agent_orderBy, $orderDirection: OrderDirection, $where: Agent_filter, $block: Block_height, $agents_records_skip: Int, $agents_records_first: Int, $agents_records_orderBy: LocalRecord_orderBy, $agents_records_orderDirection: OrderDirection, $agents_records_where: LocalRecord_filter, $agents_states_skip: Int, $agents_states_first: Int, $agents_states_orderBy: StateAgent_orderBy, $agents_states_orderDirection: OrderDirection, $agents_states_where: StateAgent_filter, $agents_states_states_state_state_travels_skip: Int, $agents_states_states_state_state_travels_first: Int, $agents_states_states_state_state_travels_orderBy: NetworkStateTravel_orderBy, $agents_states_states_state_state_travels_orderDirection: OrderDirection, $agents_states_states_state_state_travels_where: NetworkStateTravel_filter) {
  agents(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    currentGeohash
    records(
      skip: $agents_records_skip
      first: $agents_records_first
      orderBy: $agents_records_orderBy
      orderDirection: $agents_records_orderDirection
      where: $agents_records_where
    ) {
      id
      geohash
      localRecordERC721
      transactionHash
    }
    states(
      skip: $agents_states_skip
      first: $agents_states_first
      orderBy: $agents_states_orderBy
      orderDirection: $agents_states_orderDirection
      where: $agents_states_where
    ) {
      id
      state {
        id
        verifier
        creator
        baseURI
        metadata {
          id
          name
          description
          image
          imageGateway
          manifesto
          manifestoGateway
        }
        population
        travels(
          skip: $agents_states_states_state_state_travels_skip
          first: $agents_states_states_state_state_travels_first
          orderBy: $agents_states_states_state_state_travels_orderBy
          orderDirection: $agents_states_states_state_state_travels_orderDirection
          where: $agents_states_states_state_state_travels_where
        ) {
          id
          account
          previousGeohash
          nextGeohash
        }
      }
    }
  }
}
    `;
export const StateAgentDocument = `
    query stateAgent($id: ID!, $block: Block_height, $stateAgent_state_state_travels_skip: Int, $stateAgent_state_state_travels_first: Int, $stateAgent_state_state_travels_orderBy: NetworkStateTravel_orderBy, $stateAgent_state_state_travels_orderDirection: OrderDirection, $stateAgent_state_state_travels_where: NetworkStateTravel_filter, $stateAgent_agent_agent_records_skip: Int, $stateAgent_agent_agent_records_first: Int, $stateAgent_agent_agent_records_orderBy: LocalRecord_orderBy, $stateAgent_agent_agent_records_orderDirection: OrderDirection, $stateAgent_agent_agent_records_where: LocalRecord_filter) {
  stateAgent(id: $id, block: $block) {
    id
    state {
      id
      verifier
      creator
      baseURI
      metadata {
        id
        name
        description
        image
        imageGateway
        manifesto
        manifestoGateway
      }
      population
      travels(
        skip: $stateAgent_state_state_travels_skip
        first: $stateAgent_state_state_travels_first
        orderBy: $stateAgent_state_state_travels_orderBy
        orderDirection: $stateAgent_state_state_travels_orderDirection
        where: $stateAgent_state_state_travels_where
      ) {
        id
        account
        previousGeohash
        nextGeohash
      }
    }
    agent {
      id
      currentGeohash
      records(
        skip: $stateAgent_agent_agent_records_skip
        first: $stateAgent_agent_agent_records_first
        orderBy: $stateAgent_agent_agent_records_orderBy
        orderDirection: $stateAgent_agent_agent_records_orderDirection
        where: $stateAgent_agent_agent_records_where
      ) {
        id
        geohash
        localRecordERC721
        transactionHash
      }
    }
  }
}
    `;
export const StateAgentsDocument = `
    query stateAgents($skip: Int, $first: Int, $orderBy: StateAgent_orderBy, $orderDirection: OrderDirection, $where: StateAgent_filter, $block: Block_height, $stateAgents_state_state_travels_skip: Int, $stateAgents_state_state_travels_first: Int, $stateAgents_state_state_travels_orderBy: NetworkStateTravel_orderBy, $stateAgents_state_state_travels_orderDirection: OrderDirection, $stateAgents_state_state_travels_where: NetworkStateTravel_filter, $stateAgents_agent_agent_records_skip: Int, $stateAgents_agent_agent_records_first: Int, $stateAgents_agent_agent_records_orderBy: LocalRecord_orderBy, $stateAgents_agent_agent_records_orderDirection: OrderDirection, $stateAgents_agent_agent_records_where: LocalRecord_filter) {
  stateAgents(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    state {
      id
      verifier
      creator
      baseURI
      metadata {
        id
        name
        description
        image
        imageGateway
        manifesto
        manifestoGateway
      }
      population
      travels(
        skip: $stateAgents_state_state_travels_skip
        first: $stateAgents_state_state_travels_first
        orderBy: $stateAgents_state_state_travels_orderBy
        orderDirection: $stateAgents_state_state_travels_orderDirection
        where: $stateAgents_state_state_travels_where
      ) {
        id
        account
        previousGeohash
        nextGeohash
      }
    }
    agent {
      id
      currentGeohash
      records(
        skip: $stateAgents_agent_agent_records_skip
        first: $stateAgents_agent_agent_records_first
        orderBy: $stateAgents_agent_agent_records_orderBy
        orderDirection: $stateAgents_agent_agent_records_orderDirection
        where: $stateAgents_agent_agent_records_where
      ) {
        id
        geohash
        localRecordERC721
        transactionHash
      }
    }
  }
}
    `;
export const NetworkStateDocument = `
    query networkState($id: ID!, $block: Block_height, $networkState_agents_skip: Int, $networkState_agents_first: Int, $networkState_agents_orderBy: StateAgent_orderBy, $networkState_agents_orderDirection: OrderDirection, $networkState_agents_where: StateAgent_filter, $networkState_agents_agents_agent_agent_records_skip: Int, $networkState_agents_agents_agent_agent_records_first: Int, $networkState_agents_agents_agent_agent_records_orderBy: LocalRecord_orderBy, $networkState_agents_agents_agent_agent_records_orderDirection: OrderDirection, $networkState_agents_agents_agent_agent_records_where: LocalRecord_filter, $networkState_travels_skip: Int, $networkState_travels_first: Int, $networkState_travels_orderBy: NetworkStateTravel_orderBy, $networkState_travels_orderDirection: OrderDirection, $networkState_travels_where: NetworkStateTravel_filter) {
  networkState(id: $id, block: $block) {
    id
    verifier
    creator
    baseURI
    metadata {
      id
      name
      description
      image
      imageGateway
      manifesto
      manifestoGateway
    }
    population
    agents(
      skip: $networkState_agents_skip
      first: $networkState_agents_first
      orderBy: $networkState_agents_orderBy
      orderDirection: $networkState_agents_orderDirection
      where: $networkState_agents_where
    ) {
      id
      agent {
        id
        currentGeohash
        records(
          skip: $networkState_agents_agents_agent_agent_records_skip
          first: $networkState_agents_agents_agent_agent_records_first
          orderBy: $networkState_agents_agents_agent_agent_records_orderBy
          orderDirection: $networkState_agents_agents_agent_agent_records_orderDirection
          where: $networkState_agents_agents_agent_agent_records_where
        ) {
          id
          geohash
          localRecordERC721
          transactionHash
        }
      }
    }
    travels(
      skip: $networkState_travels_skip
      first: $networkState_travels_first
      orderBy: $networkState_travels_orderBy
      orderDirection: $networkState_travels_orderDirection
      where: $networkState_travels_where
    ) {
      id
      account
      previousGeohash
      nextGeohash
    }
  }
}
    `;
export const NetworkStatesDocument = `
    query networkStates($skip: Int, $first: Int, $orderBy: NetworkState_orderBy, $orderDirection: OrderDirection, $where: NetworkState_filter, $block: Block_height, $networkStates_agents_skip: Int, $networkStates_agents_first: Int, $networkStates_agents_orderBy: StateAgent_orderBy, $networkStates_agents_orderDirection: OrderDirection, $networkStates_agents_where: StateAgent_filter, $networkStates_agents_agents_agent_agent_records_skip: Int, $networkStates_agents_agents_agent_agent_records_first: Int, $networkStates_agents_agents_agent_agent_records_orderBy: LocalRecord_orderBy, $networkStates_agents_agents_agent_agent_records_orderDirection: OrderDirection, $networkStates_agents_agents_agent_agent_records_where: LocalRecord_filter, $networkStates_travels_skip: Int, $networkStates_travels_first: Int, $networkStates_travels_orderBy: NetworkStateTravel_orderBy, $networkStates_travels_orderDirection: OrderDirection, $networkStates_travels_where: NetworkStateTravel_filter) {
  networkStates(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    verifier
    creator
    baseURI
    metadata {
      id
      name
      description
      image
      imageGateway
      manifesto
      manifestoGateway
    }
    population
    agents(
      skip: $networkStates_agents_skip
      first: $networkStates_agents_first
      orderBy: $networkStates_agents_orderBy
      orderDirection: $networkStates_agents_orderDirection
      where: $networkStates_agents_where
    ) {
      id
      agent {
        id
        currentGeohash
        records(
          skip: $networkStates_agents_agents_agent_agent_records_skip
          first: $networkStates_agents_agents_agent_agent_records_first
          orderBy: $networkStates_agents_agents_agent_agent_records_orderBy
          orderDirection: $networkStates_agents_agents_agent_agent_records_orderDirection
          where: $networkStates_agents_agents_agent_agent_records_where
        ) {
          id
          geohash
          localRecordERC721
          transactionHash
        }
      }
    }
    travels(
      skip: $networkStates_travels_skip
      first: $networkStates_travels_first
      orderBy: $networkStates_travels_orderBy
      orderDirection: $networkStates_travels_orderDirection
      where: $networkStates_travels_where
    ) {
      id
      account
      previousGeohash
      nextGeohash
    }
  }
}
    `;
export const NetworkStateMetadataDocument = `
    query networkStateMetadata($skip: Int, $first: Int, $orderBy: NetworkStateMetadata_orderBy, $orderDirection: OrderDirection, $where: NetworkStateMetadata_filter, $block: Block_height) {
  networkStateMetadata(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    name
    description
    image
    imageGateway
    manifesto
    manifestoGateway
  }
}
    `;
export const NetworkStateTravelDocument = `
    query networkStateTravel($id: ID!, $block: Block_height, $networkStateTravel_state_state_agents_skip: Int, $networkStateTravel_state_state_agents_first: Int, $networkStateTravel_state_state_agents_orderBy: StateAgent_orderBy, $networkStateTravel_state_state_agents_orderDirection: OrderDirection, $networkStateTravel_state_state_agents_where: StateAgent_filter, $networkStateTravel_state_state_agents_agents_agent_agent_records_skip: Int, $networkStateTravel_state_state_agents_agents_agent_agent_records_first: Int, $networkStateTravel_state_state_agents_agents_agent_agent_records_orderBy: LocalRecord_orderBy, $networkStateTravel_state_state_agents_agents_agent_agent_records_orderDirection: OrderDirection, $networkStateTravel_state_state_agents_agents_agent_agent_records_where: LocalRecord_filter) {
  networkStateTravel(id: $id, block: $block) {
    id
    state {
      id
      verifier
      creator
      baseURI
      metadata {
        id
        name
        description
        image
        imageGateway
        manifesto
        manifestoGateway
      }
      population
      agents(
        skip: $networkStateTravel_state_state_agents_skip
        first: $networkStateTravel_state_state_agents_first
        orderBy: $networkStateTravel_state_state_agents_orderBy
        orderDirection: $networkStateTravel_state_state_agents_orderDirection
        where: $networkStateTravel_state_state_agents_where
      ) {
        id
        agent {
          id
          currentGeohash
          records(
            skip: $networkStateTravel_state_state_agents_agents_agent_agent_records_skip
            first: $networkStateTravel_state_state_agents_agents_agent_agent_records_first
            orderBy: $networkStateTravel_state_state_agents_agents_agent_agent_records_orderBy
            orderDirection: $networkStateTravel_state_state_agents_agents_agent_agent_records_orderDirection
            where: $networkStateTravel_state_state_agents_agents_agent_agent_records_where
          ) {
            id
            geohash
            localRecordERC721
            transactionHash
          }
        }
      }
    }
    account
    previousGeohash
    nextGeohash
  }
}
    `;
export const NetworkStateTravelsDocument = `
    query networkStateTravels($skip: Int, $first: Int, $orderBy: NetworkStateTravel_orderBy, $orderDirection: OrderDirection, $where: NetworkStateTravel_filter, $block: Block_height, $networkStateTravels_state_state_agents_skip: Int, $networkStateTravels_state_state_agents_first: Int, $networkStateTravels_state_state_agents_orderBy: StateAgent_orderBy, $networkStateTravels_state_state_agents_orderDirection: OrderDirection, $networkStateTravels_state_state_agents_where: StateAgent_filter, $networkStateTravels_state_state_agents_agents_agent_agent_records_skip: Int, $networkStateTravels_state_state_agents_agents_agent_agent_records_first: Int, $networkStateTravels_state_state_agents_agents_agent_agent_records_orderBy: LocalRecord_orderBy, $networkStateTravels_state_state_agents_agents_agent_agent_records_orderDirection: OrderDirection, $networkStateTravels_state_state_agents_agents_agent_agent_records_where: LocalRecord_filter) {
  networkStateTravels(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    state {
      id
      verifier
      creator
      baseURI
      metadata {
        id
        name
        description
        image
        imageGateway
        manifesto
        manifestoGateway
      }
      population
      agents(
        skip: $networkStateTravels_state_state_agents_skip
        first: $networkStateTravels_state_state_agents_first
        orderBy: $networkStateTravels_state_state_agents_orderBy
        orderDirection: $networkStateTravels_state_state_agents_orderDirection
        where: $networkStateTravels_state_state_agents_where
      ) {
        id
        agent {
          id
          currentGeohash
          records(
            skip: $networkStateTravels_state_state_agents_agents_agent_agent_records_skip
            first: $networkStateTravels_state_state_agents_agents_agent_agent_records_first
            orderBy: $networkStateTravels_state_state_agents_agents_agent_agent_records_orderBy
            orderDirection: $networkStateTravels_state_state_agents_agents_agent_agent_records_orderDirection
            where: $networkStateTravels_state_state_agents_agents_agent_agent_records_where
          ) {
            id
            geohash
            localRecordERC721
            transactionHash
          }
        }
      }
    }
    account
    previousGeohash
    nextGeohash
  }
}
    `;
export const LocalRecordDocument = `
    query localRecord($id: ID!, $block: Block_height, $localRecord_owner_owner_states_skip: Int, $localRecord_owner_owner_states_first: Int, $localRecord_owner_owner_states_orderBy: StateAgent_orderBy, $localRecord_owner_owner_states_orderDirection: OrderDirection, $localRecord_owner_owner_states_where: StateAgent_filter, $localRecord_owner_owner_states_states_state_state_travels_skip: Int, $localRecord_owner_owner_states_states_state_state_travels_first: Int, $localRecord_owner_owner_states_states_state_state_travels_orderBy: NetworkStateTravel_orderBy, $localRecord_owner_owner_states_states_state_state_travels_orderDirection: OrderDirection, $localRecord_owner_owner_states_states_state_state_travels_where: NetworkStateTravel_filter) {
  localRecord(id: $id, block: $block) {
    id
    owner {
      id
      currentGeohash
      states(
        skip: $localRecord_owner_owner_states_skip
        first: $localRecord_owner_owner_states_first
        orderBy: $localRecord_owner_owner_states_orderBy
        orderDirection: $localRecord_owner_owner_states_orderDirection
        where: $localRecord_owner_owner_states_where
      ) {
        id
        state {
          id
          verifier
          creator
          baseURI
          metadata {
            id
            name
            description
            image
            imageGateway
            manifesto
            manifestoGateway
          }
          population
          travels(
            skip: $localRecord_owner_owner_states_states_state_state_travels_skip
            first: $localRecord_owner_owner_states_states_state_state_travels_first
            orderBy: $localRecord_owner_owner_states_states_state_state_travels_orderBy
            orderDirection: $localRecord_owner_owner_states_states_state_state_travels_orderDirection
            where: $localRecord_owner_owner_states_states_state_state_travels_where
          ) {
            id
            account
            previousGeohash
            nextGeohash
          }
        }
      }
    }
    geohash
    localRecordERC721
    transactionHash
  }
}
    `;
export const LocalRecordsDocument = `
    query localRecords($skip: Int, $first: Int, $orderBy: LocalRecord_orderBy, $orderDirection: OrderDirection, $where: LocalRecord_filter, $block: Block_height, $localRecords_owner_owner_states_skip: Int, $localRecords_owner_owner_states_first: Int, $localRecords_owner_owner_states_orderBy: StateAgent_orderBy, $localRecords_owner_owner_states_orderDirection: OrderDirection, $localRecords_owner_owner_states_where: StateAgent_filter, $localRecords_owner_owner_states_states_state_state_travels_skip: Int, $localRecords_owner_owner_states_states_state_state_travels_first: Int, $localRecords_owner_owner_states_states_state_state_travels_orderBy: NetworkStateTravel_orderBy, $localRecords_owner_owner_states_states_state_state_travels_orderDirection: OrderDirection, $localRecords_owner_owner_states_states_state_state_travels_where: NetworkStateTravel_filter) {
  localRecords(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    owner {
      id
      currentGeohash
      states(
        skip: $localRecords_owner_owner_states_skip
        first: $localRecords_owner_owner_states_first
        orderBy: $localRecords_owner_owner_states_orderBy
        orderDirection: $localRecords_owner_owner_states_orderDirection
        where: $localRecords_owner_owner_states_where
      ) {
        id
        state {
          id
          verifier
          creator
          baseURI
          metadata {
            id
            name
            description
            image
            imageGateway
            manifesto
            manifestoGateway
          }
          population
          travels(
            skip: $localRecords_owner_owner_states_states_state_state_travels_skip
            first: $localRecords_owner_owner_states_states_state_state_travels_first
            orderBy: $localRecords_owner_owner_states_states_state_state_travels_orderBy
            orderDirection: $localRecords_owner_owner_states_states_state_state_travels_orderDirection
            where: $localRecords_owner_owner_states_states_state_state_travels_where
          ) {
            id
            account
            previousGeohash
            nextGeohash
          }
        }
      }
    }
    geohash
    localRecordERC721
    transactionHash
  }
}
    `;
export const LocalTokenDocument = `
    query localToken($id: ID!, $block: Block_height) {
  localToken(id: $id, block: $block) {
    id
    geohash
    uri
    metadata {
      id
      name
      description
      image
      imageGateway
    }
  }
}
    `;
export const LocalTokensDocument = `
    query localTokens($skip: Int, $first: Int, $orderBy: LocalToken_orderBy, $orderDirection: OrderDirection, $where: LocalToken_filter, $block: Block_height) {
  localTokens(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    geohash
    uri
    metadata {
      id
      name
      description
      image
      imageGateway
    }
  }
}
    `;
export const LocalTokenMetadataDocument = `
    query localTokenMetadata($skip: Int, $first: Int, $orderBy: LocalTokenMetadata_orderBy, $orderDirection: OrderDirection, $where: LocalTokenMetadata_filter, $block: Block_height) {
  localTokenMetadata(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    name
    description
    image
    imageGateway
  }
}
    `;
export const RecordTileCreatedDocument = `
    query recordTileCreated($id: ID!, $block: Block_height) {
  recordTileCreated(id: $id, block: $block) {
    id
    tileAddress
    geohash
    creator
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const RecordTileCreatedsDocument = `
    query recordTileCreateds($skip: Int, $first: Int, $orderBy: RecordTileCreated_orderBy, $orderDirection: OrderDirection, $where: RecordTileCreated_filter, $block: Block_height) {
  recordTileCreateds(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    tileAddress
    geohash
    creator
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const RecordTileEnteredDocument = `
    query recordTileEntered($id: ID!, $block: Block_height) {
  recordTileEntered(id: $id, block: $block) {
    id
    tileAddress
    recipient
    geohash
    account
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const RecordTileEnteredsDocument = `
    query recordTileEntereds($skip: Int, $first: Int, $orderBy: RecordTileEntered_orderBy, $orderDirection: OrderDirection, $where: RecordTileEntered_filter, $block: Block_height) {
  recordTileEntereds(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    tileAddress
    recipient
    geohash
    account
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const TileCreatedDocument = `
    query tileCreated($id: ID!, $block: Block_height) {
  tileCreated(id: $id, block: $block) {
    id
    tileAddress
    verifier
    baseURI
    creator
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const TileCreatedsDocument = `
    query tileCreateds($skip: Int, $first: Int, $orderBy: TileCreated_orderBy, $orderDirection: OrderDirection, $where: TileCreated_filter, $block: Block_height) {
  tileCreateds(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    tileAddress
    verifier
    baseURI
    creator
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const RoleAdminChangedDocument = `
    query roleAdminChanged($id: ID!, $block: Block_height) {
  roleAdminChanged(id: $id, block: $block) {
    id
    role
    previousAdminRole
    newAdminRole
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const RoleAdminChangedsDocument = `
    query roleAdminChangeds($skip: Int, $first: Int, $orderBy: RoleAdminChanged_orderBy, $orderDirection: OrderDirection, $where: RoleAdminChanged_filter, $block: Block_height) {
  roleAdminChangeds(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    role
    previousAdminRole
    newAdminRole
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const RoleGrantedDocument = `
    query roleGranted($id: ID!, $block: Block_height) {
  roleGranted(id: $id, block: $block) {
    id
    role
    account
    sender
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const RoleGrantedsDocument = `
    query roleGranteds($skip: Int, $first: Int, $orderBy: RoleGranted_orderBy, $orderDirection: OrderDirection, $where: RoleGranted_filter, $block: Block_height) {
  roleGranteds(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    role
    account
    sender
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const RoleRevokedDocument = `
    query roleRevoked($id: ID!, $block: Block_height) {
  roleRevoked(id: $id, block: $block) {
    id
    role
    account
    sender
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const RoleRevokedsDocument = `
    query roleRevokeds($skip: Int, $first: Int, $orderBy: RoleRevoked_orderBy, $orderDirection: OrderDirection, $where: RoleRevoked_filter, $block: Block_height) {
  roleRevokeds(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    role
    account
    sender
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;

const injectedRtkApi = subgraphAPI.injectEndpoints({
  endpoints: (build) => ({
    agent: build.query<AgentQuery, {variables: AgentQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: AgentDocument, variables, chainId })
    }),
    agents: build.query<AgentsQuery, {variables: AgentsQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: AgentsDocument, variables, chainId })
    }),
    stateAgent: build.query<StateAgentQuery, {variables: StateAgentQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: StateAgentDocument, variables, chainId })
    }),
    stateAgents: build.query<StateAgentsQuery, {variables: StateAgentsQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: StateAgentsDocument, variables, chainId })
    }),
    networkState: build.query<NetworkStateQuery, {variables: NetworkStateQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: NetworkStateDocument, variables, chainId })
    }),
    networkStates: build.query<NetworkStatesQuery, {variables: NetworkStatesQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: NetworkStatesDocument, variables, chainId })
    }),
    networkStateMetadata: build.query<NetworkStateMetadataQuery, {variables: NetworkStateMetadataQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: NetworkStateMetadataDocument, variables, chainId })
    }),
    networkStateTravel: build.query<NetworkStateTravelQuery, {variables: NetworkStateTravelQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: NetworkStateTravelDocument, variables, chainId })
    }),
    networkStateTravels: build.query<NetworkStateTravelsQuery, {variables: NetworkStateTravelsQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: NetworkStateTravelsDocument, variables, chainId })
    }),
    localRecord: build.query<LocalRecordQuery, {variables: LocalRecordQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: LocalRecordDocument, variables, chainId })
    }),
    localRecords: build.query<LocalRecordsQuery, {variables: LocalRecordsQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: LocalRecordsDocument, variables, chainId })
    }),
    localToken: build.query<LocalTokenQuery, {variables: LocalTokenQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: LocalTokenDocument, variables, chainId })
    }),
    localTokens: build.query<LocalTokensQuery, {variables: LocalTokensQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: LocalTokensDocument, variables, chainId })
    }),
    localTokenMetadata: build.query<LocalTokenMetadataQuery, {variables: LocalTokenMetadataQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: LocalTokenMetadataDocument, variables, chainId })
    }),
    recordTileCreated: build.query<RecordTileCreatedQuery, {variables: RecordTileCreatedQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: RecordTileCreatedDocument, variables, chainId })
    }),
    recordTileCreateds: build.query<RecordTileCreatedsQuery, {variables: RecordTileCreatedsQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: RecordTileCreatedsDocument, variables, chainId })
    }),
    recordTileEntered: build.query<RecordTileEnteredQuery, {variables: RecordTileEnteredQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: RecordTileEnteredDocument, variables, chainId })
    }),
    recordTileEntereds: build.query<RecordTileEnteredsQuery, {variables: RecordTileEnteredsQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: RecordTileEnteredsDocument, variables, chainId })
    }),
    tileCreated: build.query<TileCreatedQuery, {variables: TileCreatedQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: TileCreatedDocument, variables, chainId })
    }),
    tileCreateds: build.query<TileCreatedsQuery, {variables: TileCreatedsQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: TileCreatedsDocument, variables, chainId })
    }),
    roleAdminChanged: build.query<RoleAdminChangedQuery, {variables: RoleAdminChangedQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: RoleAdminChangedDocument, variables, chainId })
    }),
    roleAdminChangeds: build.query<RoleAdminChangedsQuery, {variables: RoleAdminChangedsQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: RoleAdminChangedsDocument, variables, chainId })
    }),
    roleGranted: build.query<RoleGrantedQuery, {variables: RoleGrantedQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: RoleGrantedDocument, variables, chainId })
    }),
    roleGranteds: build.query<RoleGrantedsQuery, {variables: RoleGrantedsQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: RoleGrantedsDocument, variables, chainId })
    }),
    roleRevoked: build.query<RoleRevokedQuery, {variables: RoleRevokedQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: RoleRevokedDocument, variables, chainId })
    }),
    roleRevokeds: build.query<RoleRevokedsQuery, {variables: RoleRevokedsQueryVariables; chainId?: number;}>({
      query: ({variables, chainId = 1337}) => ({ document: RoleRevokedsDocument, variables, chainId })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useAgentQuery, useLazyAgentQuery, useAgentsQuery, useLazyAgentsQuery, useStateAgentQuery, useLazyStateAgentQuery, useStateAgentsQuery, useLazyStateAgentsQuery, useNetworkStateQuery, useLazyNetworkStateQuery, useNetworkStatesQuery, useLazyNetworkStatesQuery, useNetworkStateMetadataQuery, useLazyNetworkStateMetadataQuery, useNetworkStateTravelQuery, useLazyNetworkStateTravelQuery, useNetworkStateTravelsQuery, useLazyNetworkStateTravelsQuery, useLocalRecordQuery, useLazyLocalRecordQuery, useLocalRecordsQuery, useLazyLocalRecordsQuery, useLocalTokenQuery, useLazyLocalTokenQuery, useLocalTokensQuery, useLazyLocalTokensQuery, useLocalTokenMetadataQuery, useLazyLocalTokenMetadataQuery, useRecordTileCreatedQuery, useLazyRecordTileCreatedQuery, useRecordTileCreatedsQuery, useLazyRecordTileCreatedsQuery, useRecordTileEnteredQuery, useLazyRecordTileEnteredQuery, useRecordTileEnteredsQuery, useLazyRecordTileEnteredsQuery, useTileCreatedQuery, useLazyTileCreatedQuery, useTileCreatedsQuery, useLazyTileCreatedsQuery, useRoleAdminChangedQuery, useLazyRoleAdminChangedQuery, useRoleAdminChangedsQuery, useLazyRoleAdminChangedsQuery, useRoleGrantedQuery, useLazyRoleGrantedQuery, useRoleGrantedsQuery, useLazyRoleGrantedsQuery, useRoleRevokedQuery, useLazyRoleRevokedQuery, useRoleRevokedsQuery, useLazyRoleRevokedsQuery } = injectedRtkApi;

