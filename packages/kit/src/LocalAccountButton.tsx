import {
  LocalRecord,
  LocalRecordsQuery,
  useLocalRecordsQuery,
} from "../rtk/generated";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogContent, Text } from "@rainbow-me/rainbowkit";
import classNames from "classnames";
import { createContext, useContext, useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";

type LocalAccount = LocalRecord | LocalRecordsQuery["localRecords"][0];

type LocalAccountStore = {
  localAccount: LocalAccount | null;
  localAccounts: LocalAccount[];
  setLocalAccount: (account: LocalAccount) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const LocalAccountContext = createContext<LocalAccountStore>({
  localAccount: null,
  localAccounts: [],
  setLocalAccount: () => {},
  open: false,
  setOpen: () => {},
});

type LocalAccountProviderProps = {
  children: React.ReactNode;
};

/**
 * Must be wrapped in RainbowKitProvider
 */
export const LocalAccountProvider = ({
  children,
}: LocalAccountProviderProps) => {
  const { chain } = useNetwork();
  const { address } = useAccount();
  const [localAccount, setLocalAccount] = useState<LocalAccount | null>(null);
  const [open, setOpen] = useState(false);

  const { data: records } = useLocalRecordsQuery({
    variables: {
      where: {
        owner: address?.toLowerCase(),
      },
    },
    chainId: chain?.id,
  });

  useEffect(() => {
    if (records?.localRecords) {
      setLocalAccount(records?.localRecords[0]);
    }
  }, [records]);

  return (
    <LocalAccountContext.Provider
      value={{
        localAccount,
        setLocalAccount,
        localAccounts: records?.localRecords ?? [],
        open,
        setOpen,
      }}
    >
      {children}
      <LocalAccountDialog />
    </LocalAccountContext.Provider>
  );
};

export const useLocalAccount = () => {
  return useContext(LocalAccountContext);
};

export const LocalAccountButton = () => {
  const { localAccount, open, setOpen } = useContext(LocalAccountContext);

  return (
    <>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="btn flex flex-row w-full"
      >
        <MapPinIcon className="w-5 h-5 stroke-primary" />
        <p className="">{localAccount?.geohash}</p>
      </button>
    </>
  );
};

export const LocalAccountDialog = () => {
  const { localAccount, localAccounts, setLocalAccount, open, setOpen } =
    useContext(LocalAccountContext);

  return (
    <Dialog
      titleId="2"
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      onMountAutoFocus={() => {}}
    >
      <DialogContent>
        <div className="p-2 flex flex-col gap-4">
          <Text as="h1" color="modalText" id={"NS"} size={"18"} weight="heavy">
            Network States
          </Text>
          {localAccounts.map((account) => {
            const selected =
              account.id.toLowerCase() === localAccount?.id?.toLowerCase();

            return (
              <div
                onClick={() => {
                  setLocalAccount(account);
                  setTimeout(() => {
                    setOpen(false);
                  }, 100);
                }}
                className={classNames(
                  "rounded-md hover:cursor-pointer p-2 flex flex-row justify-between gap-2 items-center py-2 px-4",
                  {
                    border: selected,
                  }
                )}
              >
                <p className="font-bold text-xl">{account.geohash}</p>
                {Boolean(selected) && (
                  <div className="bg-primary z-10 w-2 h-2 rounded-full" />
                )}
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocalAccountButton;
