import {
  LocalRecord,
  LocalRecordsQuery,
  useLocalRecordsQuery,
} from "../rtk/generated";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogContent, Text } from "@rainbow-me/rainbowkit";
import classNames from "classnames";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Address, useAccount, useNetwork } from "wagmi";
import { useMapCreateRecord } from "wagmi-config";
import { LocalAccount, LocalAccountStore } from "../types";

export const LocalAccountContext = createContext<LocalAccountStore>({
  localAccount: null,
  localAccounts: [],
  setLocalAccount: () => {},
  createLocalAccount: () => {},
  createAccountLoading: false,
  switchLocalAccount: () => {},
  isHere: () => false,
  hasBeenHere: () => false,
  open: false,
  setOpen: () => {},
});

type LocalAccountProviderProps = {
  children: React.ReactNode;
};

const useCreateLocalAccount = (
  address: Address | undefined,
  onSuccess?: () => void
) => {
  const [polling, setPolling] = useState(false);
  const {
    data,
    isError,
    writeAsync,
    isLoading: pendingConfirm,
  } = useMapCreateRecord({});
  const { chain } = useNetwork();

  const { data: record, isLoading: pendingTx } = useLocalRecordsQuery(
    {
      variables: {
        where: {
          owner: address?.toLowerCase(),
          transactionHash: data?.hash,
        },
      },
      chainId: chain?.id,
    },
    {
      pollingInterval: polling ? 2000 : 0,
      skip: !polling || !Boolean(data?.hash),
    }
  );

  useEffect(() => {
    if (record?.localRecords && record?.localRecords.length > 0) {
      onSuccess && onSuccess();
      setPolling(false);
    }
  }, [record]);

  return {
    create: (geohash: string) => {
      if (!address) return;
      writeAsync({ args: [address, geohash] }).then(({}) => {
        setPolling(true);
      });
    },
    loading: pendingConfirm || pendingTx || polling,
    error: isError,
  };
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
  const { data: records, refetch } = useLocalRecordsQuery({
    variables: {
      where: {
        owner: address?.toLowerCase(),
      },
    },
    chainId: chain?.id,
  });

  const { create, loading } = useCreateLocalAccount(address, () => {
    refetch();
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
        createLocalAccount: (geohash: string) => {
          create(geohash);
        },
        createAccountLoading: loading,
        switchLocalAccount: (geohash: string) => {
          const newAccount = records?.localRecords?.find(
            (record) => record.geohash === geohash
          );

          newAccount && setLocalAccount(newAccount);
        },
        isHere: (geohash: string) => {
          return Boolean(localAccount?.geohash === geohash);
        },
        hasBeenHere: useCallback(
          (geohash: string) => {
            return Boolean(
              records?.localRecords?.find(
                (record) => record.geohash === geohash
              )
            );
          },
          [records]
        ),
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
            Locations
          </Text>
          {localAccounts?.length > 0 ? (
            localAccounts.map((account) => {
              const selected =
                account.id.toLowerCase() === localAccount?.id?.toLowerCase();

              return (
                <div
                  key={account.geohash}
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
            })
          ) : (
            <p className="text-white">No local accounts yet</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocalAccountButton;
