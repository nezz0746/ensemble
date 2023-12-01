import { LocalRecord, LocalRecordsQuery } from "./rtk/generated";

export type LocalAccount = LocalRecord | LocalRecordsQuery["localRecords"][0];

export type LocalAccountStore = {
  localAccount: LocalAccount | null;
  localAccounts: LocalAccount[];
  setLocalAccount: (account: LocalAccount) => void;
  createLocalAccount: (geohash: string) => void;
  createAccountLoading: boolean;
  switchLocalAccount: (geohash: string) => void;
  isHere: (geohash: string) => boolean;
  hasBeenHere: (geohash: string) => boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
};
