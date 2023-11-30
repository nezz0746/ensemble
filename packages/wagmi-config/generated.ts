import {
  useNetwork,
  useChainId,
  useContractWrite,
  Address,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
  useContractRead,
  UseContractReadConfig,
} from 'wagmi'
import {
  WriteContractMode,
  PrepareWriteContractResult,
  ReadContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccountProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 */
export const accountProxyABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_guardian', internalType: 'address', type: 'address' },
      {
        name: '_initialImplementation',
        internalType: 'address',
        type: 'address',
      },
    ],
  },
  { type: 'error', inputs: [], name: 'AlreadyInitialized' },
  { type: 'error', inputs: [], name: 'InvalidImplementation' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  { stateMutability: 'payable', type: 'fallback' },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 */
export const accountProxyAddress = {
  5: '0x55266d75D1a14E4572138116aF39863Ed6596E7F',
  1337: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
  84531: '0x55266d75D1a14E4572138116aF39863Ed6596E7F',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 */
export const accountProxyConfig = {
  address: accountProxyAddress,
  abi: accountProxyABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccountV3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accountV3ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'entryPoint_', internalType: 'address', type: 'address' },
      { name: 'multicallForwarder', internalType: 'address', type: 'address' },
      { name: 'erc6551Registry', internalType: 'address', type: 'address' },
      { name: '_guardian', internalType: 'address', type: 'address' },
    ],
  },
  { type: 'error', inputs: [], name: 'AccountLocked' },
  { type: 'error', inputs: [], name: 'ContractCreationFailed' },
  { type: 'error', inputs: [], name: 'ExceedsMaxLockTime' },
  { type: 'error', inputs: [], name: 'InvalidAccountProof' },
  { type: 'error', inputs: [], name: 'InvalidERC6551Registry' },
  { type: 'error', inputs: [], name: 'InvalidEntryPoint' },
  { type: 'error', inputs: [], name: 'InvalidInput' },
  { type: 'error', inputs: [], name: 'InvalidMulticallForwarder' },
  { type: 'error', inputs: [], name: 'InvalidOperation' },
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  { type: 'error', inputs: [], name: 'OwnershipCycle' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'lockedUntil',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LockUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'selector',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: false,
      },
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'OverrideUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'caller',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'hasPermission',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'PermissionUpdated',
  },
  { stateMutability: 'payable', type: 'fallback' },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'entryPoint',
    outputs: [
      { name: '', internalType: 'contract IEntryPoint', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'erc6551Registry',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'execute',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'operations',
        internalType: 'struct BatchExecutor.Operation[]',
        type: 'tuple[]',
        components: [
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'operation', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    name: 'executeBatch',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'operation', internalType: 'uint8', type: 'uint8' },
      {
        name: 'proof',
        internalType: 'struct NestedAccountExecutor.ERC6551AccountInfo[]',
        type: 'tuple[]',
        components: [
          { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
          { name: 'tokenContract', internalType: 'address', type: 'address' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'executeNested',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'extcall',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'bytecode', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'extcreate',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'bytecode', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'extcreate2',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'extsload',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getNonce',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'isLocked',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
    name: 'isTrustedForwarder',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'isValidSignature',
    outputs: [{ name: 'magicValue', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'isValidSigner',
    outputs: [{ name: 'magicValue', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_lockedUntil', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'lock',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'lockedUntil',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes4', type: 'bytes4' },
    ],
    name: 'overrides',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'permissions',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
      { name: 'implementations', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'setOverrides',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'callers', internalType: 'address[]', type: 'address[]' },
      { name: '_permissions', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'setPermissions',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'state',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'userOp',
        internalType: 'struct UserOperation',
        type: 'tuple',
        components: [
          { name: 'sender', internalType: 'address', type: 'address' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'initCode', internalType: 'bytes', type: 'bytes' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
          { name: 'callGasLimit', internalType: 'uint256', type: 'uint256' },
          {
            name: 'verificationGasLimit',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'preVerificationGas',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'maxFeePerGas', internalType: 'uint256', type: 'uint256' },
          {
            name: 'maxPriorityFeePerGas',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'paymasterAndData', internalType: 'bytes', type: 'bytes' },
          { name: 'signature', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'userOpHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'missingAccountFunds', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'validateUserOp',
    outputs: [
      { name: 'validationData', internalType: 'uint256', type: 'uint256' },
    ],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'addedValue', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'subtractedValue', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC6551Registry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x000000006551c19487814612e58FE06813775758)
 */
export const erc6551RegistryABI = [
  { type: 'error', inputs: [], name: 'AccountCreationFailed' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'salt',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'chainId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'ERC6551AccountCreated',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'account',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createAccount',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x000000006551c19487814612e58FE06813775758)
 */
export const erc6551RegistryAddress = {
  5: '0x000000006551c19487814612e58FE06813775758',
  1337: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  84531: '0x000000006551c19487814612e58FE06813775758',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x000000006551c19487814612e58FE06813775758)
 */
export const erc6551RegistryConfig = {
  address: erc6551RegistryAddress,
  abi: erc6551RegistryABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721ABI = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'tokenId', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'operator', type: 'address', indexed: true },
      { name: 'approved', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'tokenId', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'operator', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'id', type: 'uint256' },
      { name: 'data', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', type: 'address' },
      { name: 'approved', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'index', type: 'uint256' },
    ],
    name: 'tokenByIndex',
    outputs: [{ name: 'tokenId', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC6551Registry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc6551RegistryABI = [
  { type: 'error', inputs: [], name: 'AccountCreationFailed' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'salt',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'chainId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'ERC6551AccountCreated',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'account',
    outputs: [{ name: 'account', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createAccount',
    outputs: [{ name: 'account', internalType: 'address', type: 'address' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LocalDistributor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x104Ac7B3d7774BB726e8567415B9B8Dad46B451C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x18dedD852B675DA7a13C6bE6dB8d26Cda16569D3)
 */
export const localDistributorABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: 'map', internalType: 'contract Map', type: 'address' }],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'geohash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'tokenAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'tokenURI',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'LocalTokenDistribution',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'localTokenDistribution',
        internalType: 'struct LocalTokenConfig[]',
        type: 'tuple[]',
        components: [
          {
            name: 'config',
            internalType: 'struct TokenConfig',
            type: 'tuple',
            components: [
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'symbol', internalType: 'string', type: 'string' },
              { name: 'uri', internalType: 'string', type: 'string' },
            ],
          },
          { name: 'geohash', internalType: 'string', type: 'string' },
        ],
      },
    ],
    name: 'distribute',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x104Ac7B3d7774BB726e8567415B9B8Dad46B451C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x18dedD852B675DA7a13C6bE6dB8d26Cda16569D3)
 */
export const localDistributorAddress = {
  5: '0x104Ac7B3d7774BB726e8567415B9B8Dad46B451C',
  1337: '0x610178dA211FEF7D417bC0e6FeD39F05609AD788',
  84531: '0x18dedD852B675DA7a13C6bE6dB8d26Cda16569D3',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x104Ac7B3d7774BB726e8567415B9B8Dad46B451C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x18dedD852B675DA7a13C6bE6dB8d26Cda16569D3)
 */
export const localDistributorConfig = {
  address: localDistributorAddress,
  abi: localDistributorABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LocalERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const localErc721ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      {
        name: 'config',
        internalType: 'struct TokenConfig',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'symbol', internalType: 'string', type: 'string' },
          { name: 'uri', internalType: 'string', type: 'string' },
        ],
      },
      { name: 'geohash', internalType: 'string', type: 'string' },
      { name: 'map', internalType: 'contract Map', type: 'address' },
    ],
  },
  { type: 'error', inputs: [], name: 'ApprovalCallerNotOwnerNorApproved' },
  { type: 'error', inputs: [], name: 'ApprovalQueryForNonexistentToken' },
  { type: 'error', inputs: [], name: 'BalanceQueryForZeroAddress' },
  { type: 'error', inputs: [], name: 'MintERC2309QuantityExceedsLimit' },
  { type: 'error', inputs: [], name: 'MintToZeroAddress' },
  { type: 'error', inputs: [], name: 'MintZeroQuantity' },
  { type: 'error', inputs: [], name: 'OwnerQueryForNonexistentToken' },
  { type: 'error', inputs: [], name: 'OwnershipNotInitializedForExtraData' },
  { type: 'error', inputs: [], name: 'TransferCallerNotOwnerNorApproved' },
  { type: 'error', inputs: [], name: 'TransferFromIncorrectOwner' },
  { type: 'error', inputs: [], name: 'TransferToNonERC721ReceiverImplementer' },
  { type: 'error', inputs: [], name: 'TransferToZeroAddress' },
  { type: 'error', inputs: [], name: 'URIQueryForNonexistentToken' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'ConsecutiveTransfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'caller',
        internalType: 'struct Localized.LocalCaller',
        type: 'tuple',
        components: [
          { name: 'rootAgent', internalType: 'address', type: 'address' },
          { name: 'localAccount', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_tokenURI', internalType: 'string', type: 'string' }],
    name: 'setUri',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Map
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export const mapABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  { type: 'error', inputs: [], name: 'accountNotSender' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tileAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'geohash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'LocalRecordDeployed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tileAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'geohash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'LocalRecordTokenDeployed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'stateAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'verifier',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'baseURI',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'TileCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'TILE_CREATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'registry', internalType: 'address', type: 'address' },
      { name: 'accountProxy', internalType: 'address', type: 'address' },
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: '__ERC6551AccountCreator__init',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'config',
        internalType: 'struct RecordTileFactoryConfig',
        type: 'tuple',
        components: [
          { name: 'registry', internalType: 'address', type: 'address' },
          { name: 'accountProxy', internalType: 'address', type: 'address' },
          { name: 'implementation', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: '__RecordTileFactory__init',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'geohash', internalType: 'string', type: 'string' },
    ],
    name: 'computeLocalRecord',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'geohash', internalType: 'string', type: 'string' }],
    name: 'computeRecordTileAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'geohash', internalType: 'string', type: 'string' },
    ],
    name: 'createRecord',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'verifier', internalType: 'address', type: 'address' },
      { name: 'baseURI', internalType: 'string', type: 'string' },
    ],
    name: 'createState',
    outputs: [
      { name: 'tileAddress', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'stateBeacon', internalType: 'address', type: 'address' },
      {
        name: 'recordTileConfiguration',
        internalType: 'struct RecordTileFactoryConfig',
        type: 'tuple',
        components: [
          { name: 'registry', internalType: 'address', type: 'address' },
          { name: 'accountProxy', internalType: 'address', type: 'address' },
          { name: 'implementation', internalType: 'address', type: 'address' },
        ],
      },
      { name: 'minPrecision', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPrecision', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'state', internalType: 'address', type: 'address' },
      { name: 'geohash', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'move',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
  },
] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export const mapAddress = {
  5: '0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8',
  1337: '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318',
  84531: '0xD4a574A343cC6b140916D7f9c3E00517D041a75D',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export const mapConfig = { address: mapAddress, abi: mapABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StateTile
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export const stateTileABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  { type: 'error', inputs: [], name: 'accountNotSender' },
  { type: 'error', inputs: [], name: 'movingToSameLocation' },
  { type: 'error', inputs: [], name: 'nonTransferable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'state',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousGeohash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'nextGeohash',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'StateMove',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'ids',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'accountPosition',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_map', internalType: 'address', type: 'address' },
      { name: '_verifier', internalType: 'address', type: 'address' },
      { name: '_baseURI', internalType: 'string', type: 'string' },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'map',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'geohash', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'move',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'verifier',
    outputs: [
      {
        name: '',
        internalType: 'contract IStateTileVerifier',
        type: 'address',
      },
    ],
  },
] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export const stateTileAddress = {
  5: '0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C',
  1337: '0x8aCd85898458400f7Db866d53FCFF6f0D49741FF',
  84531: '0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export const stateTileConfig = {
  address: stateTileAddress,
  abi: stateTileABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountProxyABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 */
export function useAccountProxyWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof accountProxyAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountProxyABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof accountProxyABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof accountProxyABI, TFunctionName, TMode>({
    abi: accountProxyABI,
    address: accountProxyAddress[chainId as keyof typeof accountProxyAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountProxyABI}__ and `functionName` set to `"initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 */
export function useAccountProxyInitialize<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof accountProxyAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountProxyABI,
          'initialize'
        >['request']['abi'],
        'initialize',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'initialize' }
    : UseContractWriteConfig<typeof accountProxyABI, 'initialize', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'initialize'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof accountProxyABI, 'initialize', TMode>({
    abi: accountProxyABI,
    address: accountProxyAddress[chainId as keyof typeof accountProxyAddress],
    functionName: 'initialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountProxyABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 */
export function usePrepareAccountProxyWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof accountProxyABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof accountProxyAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: accountProxyABI,
    address: accountProxyAddress[chainId as keyof typeof accountProxyAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof accountProxyABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountProxyABI}__ and `functionName` set to `"initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 */
export function usePrepareAccountProxyInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof accountProxyABI, 'initialize'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof accountProxyAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: accountProxyABI,
    address: accountProxyAddress[chainId as keyof typeof accountProxyAddress],
    functionName: 'initialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof accountProxyABI, 'initialize'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accountProxyABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 */
export function useAccountProxyEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof accountProxyABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof accountProxyAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: accountProxyABI,
    address: accountProxyAddress[chainId as keyof typeof accountProxyAddress],
    ...config,
  } as UseContractEventConfig<typeof accountProxyABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accountProxyABI}__ and `eventName` set to `"AdminChanged"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 */
export function useAccountProxyAdminChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof accountProxyABI, 'AdminChanged'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof accountProxyAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: accountProxyABI,
    address: accountProxyAddress[chainId as keyof typeof accountProxyAddress],
    eventName: 'AdminChanged',
    ...config,
  } as UseContractEventConfig<typeof accountProxyABI, 'AdminChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accountProxyABI}__ and `eventName` set to `"BeaconUpgraded"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 */
export function useAccountProxyBeaconUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof accountProxyABI, 'BeaconUpgraded'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof accountProxyAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: accountProxyABI,
    address: accountProxyAddress[chainId as keyof typeof accountProxyAddress],
    eventName: 'BeaconUpgraded',
    ...config,
  } as UseContractEventConfig<typeof accountProxyABI, 'BeaconUpgraded'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accountProxyABI}__ and `eventName` set to `"Upgraded"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x55266d75D1a14E4572138116aF39863Ed6596E7F)
 */
export function useAccountProxyUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof accountProxyABI, 'Upgraded'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof accountProxyAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: accountProxyABI,
    address: accountProxyAddress[chainId as keyof typeof accountProxyAddress],
    eventName: 'Upgraded',
    ...config,
  } as UseContractEventConfig<typeof accountProxyABI, 'Upgraded'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accountV3ABI}__.
 */
export function useAccountV3Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof accountV3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: accountV3ABI,
    ...config,
  } as UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"entryPoint"`.
 */
export function useAccountV3EntryPoint<
  TFunctionName extends 'entryPoint',
  TSelectData = ReadContractResult<typeof accountV3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: accountV3ABI,
    functionName: 'entryPoint',
    ...config,
  } as UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"erc6551Registry"`.
 */
export function useAccountV3Erc6551Registry<
  TFunctionName extends 'erc6551Registry',
  TSelectData = ReadContractResult<typeof accountV3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: accountV3ABI,
    functionName: 'erc6551Registry',
    ...config,
  } as UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"extsload"`.
 */
export function useAccountV3Extsload<
  TFunctionName extends 'extsload',
  TSelectData = ReadContractResult<typeof accountV3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: accountV3ABI,
    functionName: 'extsload',
    ...config,
  } as UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"getNonce"`.
 */
export function useAccountV3GetNonce<
  TFunctionName extends 'getNonce',
  TSelectData = ReadContractResult<typeof accountV3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: accountV3ABI,
    functionName: 'getNonce',
    ...config,
  } as UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"isLocked"`.
 */
export function useAccountV3IsLocked<
  TFunctionName extends 'isLocked',
  TSelectData = ReadContractResult<typeof accountV3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: accountV3ABI,
    functionName: 'isLocked',
    ...config,
  } as UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"isTrustedForwarder"`.
 */
export function useAccountV3IsTrustedForwarder<
  TFunctionName extends 'isTrustedForwarder',
  TSelectData = ReadContractResult<typeof accountV3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: accountV3ABI,
    functionName: 'isTrustedForwarder',
    ...config,
  } as UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"isValidSignature"`.
 */
export function useAccountV3IsValidSignature<
  TFunctionName extends 'isValidSignature',
  TSelectData = ReadContractResult<typeof accountV3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: accountV3ABI,
    functionName: 'isValidSignature',
    ...config,
  } as UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"isValidSigner"`.
 */
export function useAccountV3IsValidSigner<
  TFunctionName extends 'isValidSigner',
  TSelectData = ReadContractResult<typeof accountV3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: accountV3ABI,
    functionName: 'isValidSigner',
    ...config,
  } as UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"lockedUntil"`.
 */
export function useAccountV3LockedUntil<
  TFunctionName extends 'lockedUntil',
  TSelectData = ReadContractResult<typeof accountV3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: accountV3ABI,
    functionName: 'lockedUntil',
    ...config,
  } as UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"overrides"`.
 */
export function useAccountV3Overrides<
  TFunctionName extends 'overrides',
  TSelectData = ReadContractResult<typeof accountV3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: accountV3ABI,
    functionName: 'overrides',
    ...config,
  } as UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"owner"`.
 */
export function useAccountV3Owner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof accountV3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: accountV3ABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"permissions"`.
 */
export function useAccountV3Permissions<
  TFunctionName extends 'permissions',
  TSelectData = ReadContractResult<typeof accountV3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: accountV3ABI,
    functionName: 'permissions',
    ...config,
  } as UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"state"`.
 */
export function useAccountV3State<
  TFunctionName extends 'state',
  TSelectData = ReadContractResult<typeof accountV3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: accountV3ABI,
    functionName: 'state',
    ...config,
  } as UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useAccountV3SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof accountV3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: accountV3ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"token"`.
 */
export function useAccountV3Token<
  TFunctionName extends 'token',
  TSelectData = ReadContractResult<typeof accountV3ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: accountV3ABI,
    functionName: 'token',
    ...config,
  } as UseContractReadConfig<typeof accountV3ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountV3ABI}__.
 */
export function useAccountV3Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountV3ABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof accountV3ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof accountV3ABI, TFunctionName, TMode>({
    abi: accountV3ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"execute"`.
 */
export function useAccountV3Execute<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountV3ABI,
          'execute'
        >['request']['abi'],
        'execute',
        TMode
      > & { functionName?: 'execute' }
    : UseContractWriteConfig<typeof accountV3ABI, 'execute', TMode> & {
        abi?: never
        functionName?: 'execute'
      } = {} as any,
) {
  return useContractWrite<typeof accountV3ABI, 'execute', TMode>({
    abi: accountV3ABI,
    functionName: 'execute',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"executeBatch"`.
 */
export function useAccountV3ExecuteBatch<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountV3ABI,
          'executeBatch'
        >['request']['abi'],
        'executeBatch',
        TMode
      > & { functionName?: 'executeBatch' }
    : UseContractWriteConfig<typeof accountV3ABI, 'executeBatch', TMode> & {
        abi?: never
        functionName?: 'executeBatch'
      } = {} as any,
) {
  return useContractWrite<typeof accountV3ABI, 'executeBatch', TMode>({
    abi: accountV3ABI,
    functionName: 'executeBatch',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"executeNested"`.
 */
export function useAccountV3ExecuteNested<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountV3ABI,
          'executeNested'
        >['request']['abi'],
        'executeNested',
        TMode
      > & { functionName?: 'executeNested' }
    : UseContractWriteConfig<typeof accountV3ABI, 'executeNested', TMode> & {
        abi?: never
        functionName?: 'executeNested'
      } = {} as any,
) {
  return useContractWrite<typeof accountV3ABI, 'executeNested', TMode>({
    abi: accountV3ABI,
    functionName: 'executeNested',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"extcall"`.
 */
export function useAccountV3Extcall<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountV3ABI,
          'extcall'
        >['request']['abi'],
        'extcall',
        TMode
      > & { functionName?: 'extcall' }
    : UseContractWriteConfig<typeof accountV3ABI, 'extcall', TMode> & {
        abi?: never
        functionName?: 'extcall'
      } = {} as any,
) {
  return useContractWrite<typeof accountV3ABI, 'extcall', TMode>({
    abi: accountV3ABI,
    functionName: 'extcall',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"extcreate"`.
 */
export function useAccountV3Extcreate<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountV3ABI,
          'extcreate'
        >['request']['abi'],
        'extcreate',
        TMode
      > & { functionName?: 'extcreate' }
    : UseContractWriteConfig<typeof accountV3ABI, 'extcreate', TMode> & {
        abi?: never
        functionName?: 'extcreate'
      } = {} as any,
) {
  return useContractWrite<typeof accountV3ABI, 'extcreate', TMode>({
    abi: accountV3ABI,
    functionName: 'extcreate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"extcreate2"`.
 */
export function useAccountV3Extcreate2<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountV3ABI,
          'extcreate2'
        >['request']['abi'],
        'extcreate2',
        TMode
      > & { functionName?: 'extcreate2' }
    : UseContractWriteConfig<typeof accountV3ABI, 'extcreate2', TMode> & {
        abi?: never
        functionName?: 'extcreate2'
      } = {} as any,
) {
  return useContractWrite<typeof accountV3ABI, 'extcreate2', TMode>({
    abi: accountV3ABI,
    functionName: 'extcreate2',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"lock"`.
 */
export function useAccountV3Lock<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountV3ABI,
          'lock'
        >['request']['abi'],
        'lock',
        TMode
      > & { functionName?: 'lock' }
    : UseContractWriteConfig<typeof accountV3ABI, 'lock', TMode> & {
        abi?: never
        functionName?: 'lock'
      } = {} as any,
) {
  return useContractWrite<typeof accountV3ABI, 'lock', TMode>({
    abi: accountV3ABI,
    functionName: 'lock',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"onERC1155BatchReceived"`.
 */
export function useAccountV3OnErc1155BatchReceived<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountV3ABI,
          'onERC1155BatchReceived'
        >['request']['abi'],
        'onERC1155BatchReceived',
        TMode
      > & { functionName?: 'onERC1155BatchReceived' }
    : UseContractWriteConfig<
        typeof accountV3ABI,
        'onERC1155BatchReceived',
        TMode
      > & {
        abi?: never
        functionName?: 'onERC1155BatchReceived'
      } = {} as any,
) {
  return useContractWrite<typeof accountV3ABI, 'onERC1155BatchReceived', TMode>(
    {
      abi: accountV3ABI,
      functionName: 'onERC1155BatchReceived',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"onERC1155Received"`.
 */
export function useAccountV3OnErc1155Received<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountV3ABI,
          'onERC1155Received'
        >['request']['abi'],
        'onERC1155Received',
        TMode
      > & { functionName?: 'onERC1155Received' }
    : UseContractWriteConfig<
        typeof accountV3ABI,
        'onERC1155Received',
        TMode
      > & {
        abi?: never
        functionName?: 'onERC1155Received'
      } = {} as any,
) {
  return useContractWrite<typeof accountV3ABI, 'onERC1155Received', TMode>({
    abi: accountV3ABI,
    functionName: 'onERC1155Received',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"onERC721Received"`.
 */
export function useAccountV3OnErc721Received<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountV3ABI,
          'onERC721Received'
        >['request']['abi'],
        'onERC721Received',
        TMode
      > & { functionName?: 'onERC721Received' }
    : UseContractWriteConfig<typeof accountV3ABI, 'onERC721Received', TMode> & {
        abi?: never
        functionName?: 'onERC721Received'
      } = {} as any,
) {
  return useContractWrite<typeof accountV3ABI, 'onERC721Received', TMode>({
    abi: accountV3ABI,
    functionName: 'onERC721Received',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"setOverrides"`.
 */
export function useAccountV3SetOverrides<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountV3ABI,
          'setOverrides'
        >['request']['abi'],
        'setOverrides',
        TMode
      > & { functionName?: 'setOverrides' }
    : UseContractWriteConfig<typeof accountV3ABI, 'setOverrides', TMode> & {
        abi?: never
        functionName?: 'setOverrides'
      } = {} as any,
) {
  return useContractWrite<typeof accountV3ABI, 'setOverrides', TMode>({
    abi: accountV3ABI,
    functionName: 'setOverrides',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"setPermissions"`.
 */
export function useAccountV3SetPermissions<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountV3ABI,
          'setPermissions'
        >['request']['abi'],
        'setPermissions',
        TMode
      > & { functionName?: 'setPermissions' }
    : UseContractWriteConfig<typeof accountV3ABI, 'setPermissions', TMode> & {
        abi?: never
        functionName?: 'setPermissions'
      } = {} as any,
) {
  return useContractWrite<typeof accountV3ABI, 'setPermissions', TMode>({
    abi: accountV3ABI,
    functionName: 'setPermissions',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"validateUserOp"`.
 */
export function useAccountV3ValidateUserOp<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof accountV3ABI,
          'validateUserOp'
        >['request']['abi'],
        'validateUserOp',
        TMode
      > & { functionName?: 'validateUserOp' }
    : UseContractWriteConfig<typeof accountV3ABI, 'validateUserOp', TMode> & {
        abi?: never
        functionName?: 'validateUserOp'
      } = {} as any,
) {
  return useContractWrite<typeof accountV3ABI, 'validateUserOp', TMode>({
    abi: accountV3ABI,
    functionName: 'validateUserOp',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountV3ABI}__.
 */
export function usePrepareAccountV3Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof accountV3ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: accountV3ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof accountV3ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"execute"`.
 */
export function usePrepareAccountV3Execute(
  config: Omit<
    UsePrepareContractWriteConfig<typeof accountV3ABI, 'execute'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: accountV3ABI,
    functionName: 'execute',
    ...config,
  } as UsePrepareContractWriteConfig<typeof accountV3ABI, 'execute'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"executeBatch"`.
 */
export function usePrepareAccountV3ExecuteBatch(
  config: Omit<
    UsePrepareContractWriteConfig<typeof accountV3ABI, 'executeBatch'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: accountV3ABI,
    functionName: 'executeBatch',
    ...config,
  } as UsePrepareContractWriteConfig<typeof accountV3ABI, 'executeBatch'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"executeNested"`.
 */
export function usePrepareAccountV3ExecuteNested(
  config: Omit<
    UsePrepareContractWriteConfig<typeof accountV3ABI, 'executeNested'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: accountV3ABI,
    functionName: 'executeNested',
    ...config,
  } as UsePrepareContractWriteConfig<typeof accountV3ABI, 'executeNested'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"extcall"`.
 */
export function usePrepareAccountV3Extcall(
  config: Omit<
    UsePrepareContractWriteConfig<typeof accountV3ABI, 'extcall'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: accountV3ABI,
    functionName: 'extcall',
    ...config,
  } as UsePrepareContractWriteConfig<typeof accountV3ABI, 'extcall'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"extcreate"`.
 */
export function usePrepareAccountV3Extcreate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof accountV3ABI, 'extcreate'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: accountV3ABI,
    functionName: 'extcreate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof accountV3ABI, 'extcreate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"extcreate2"`.
 */
export function usePrepareAccountV3Extcreate2(
  config: Omit<
    UsePrepareContractWriteConfig<typeof accountV3ABI, 'extcreate2'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: accountV3ABI,
    functionName: 'extcreate2',
    ...config,
  } as UsePrepareContractWriteConfig<typeof accountV3ABI, 'extcreate2'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"lock"`.
 */
export function usePrepareAccountV3Lock(
  config: Omit<
    UsePrepareContractWriteConfig<typeof accountV3ABI, 'lock'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: accountV3ABI,
    functionName: 'lock',
    ...config,
  } as UsePrepareContractWriteConfig<typeof accountV3ABI, 'lock'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"onERC1155BatchReceived"`.
 */
export function usePrepareAccountV3OnErc1155BatchReceived(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof accountV3ABI,
      'onERC1155BatchReceived'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: accountV3ABI,
    functionName: 'onERC1155BatchReceived',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof accountV3ABI,
    'onERC1155BatchReceived'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"onERC1155Received"`.
 */
export function usePrepareAccountV3OnErc1155Received(
  config: Omit<
    UsePrepareContractWriteConfig<typeof accountV3ABI, 'onERC1155Received'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: accountV3ABI,
    functionName: 'onERC1155Received',
    ...config,
  } as UsePrepareContractWriteConfig<typeof accountV3ABI, 'onERC1155Received'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"onERC721Received"`.
 */
export function usePrepareAccountV3OnErc721Received(
  config: Omit<
    UsePrepareContractWriteConfig<typeof accountV3ABI, 'onERC721Received'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: accountV3ABI,
    functionName: 'onERC721Received',
    ...config,
  } as UsePrepareContractWriteConfig<typeof accountV3ABI, 'onERC721Received'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"setOverrides"`.
 */
export function usePrepareAccountV3SetOverrides(
  config: Omit<
    UsePrepareContractWriteConfig<typeof accountV3ABI, 'setOverrides'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: accountV3ABI,
    functionName: 'setOverrides',
    ...config,
  } as UsePrepareContractWriteConfig<typeof accountV3ABI, 'setOverrides'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"setPermissions"`.
 */
export function usePrepareAccountV3SetPermissions(
  config: Omit<
    UsePrepareContractWriteConfig<typeof accountV3ABI, 'setPermissions'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: accountV3ABI,
    functionName: 'setPermissions',
    ...config,
  } as UsePrepareContractWriteConfig<typeof accountV3ABI, 'setPermissions'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link accountV3ABI}__ and `functionName` set to `"validateUserOp"`.
 */
export function usePrepareAccountV3ValidateUserOp(
  config: Omit<
    UsePrepareContractWriteConfig<typeof accountV3ABI, 'validateUserOp'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: accountV3ABI,
    functionName: 'validateUserOp',
    ...config,
  } as UsePrepareContractWriteConfig<typeof accountV3ABI, 'validateUserOp'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accountV3ABI}__.
 */
export function useAccountV3Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof accountV3ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: accountV3ABI,
    ...config,
  } as UseContractEventConfig<typeof accountV3ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accountV3ABI}__ and `eventName` set to `"LockUpdated"`.
 */
export function useAccountV3LockUpdatedEvent(
  config: Omit<
    UseContractEventConfig<typeof accountV3ABI, 'LockUpdated'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: accountV3ABI,
    eventName: 'LockUpdated',
    ...config,
  } as UseContractEventConfig<typeof accountV3ABI, 'LockUpdated'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accountV3ABI}__ and `eventName` set to `"OverrideUpdated"`.
 */
export function useAccountV3OverrideUpdatedEvent(
  config: Omit<
    UseContractEventConfig<typeof accountV3ABI, 'OverrideUpdated'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: accountV3ABI,
    eventName: 'OverrideUpdated',
    ...config,
  } as UseContractEventConfig<typeof accountV3ABI, 'OverrideUpdated'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link accountV3ABI}__ and `eventName` set to `"PermissionUpdated"`.
 */
export function useAccountV3PermissionUpdatedEvent(
  config: Omit<
    UseContractEventConfig<typeof accountV3ABI, 'PermissionUpdated'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: accountV3ABI,
    eventName: 'PermissionUpdated',
    ...config,
  } as UseContractEventConfig<typeof accountV3ABI, 'PermissionUpdated'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: erc20ABI, ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useErc20Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc20BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useErc20Decimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"name"`.
 */
export function useErc20Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc20Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc20TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, TFunctionName, TMode>({
    abi: erc20ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc20Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc20ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'approve', TMode>({
    abi: erc20ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useErc20Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof erc20ABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'transfer', TMode>({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc20TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof erc20ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'transferFrom', TMode>({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function useErc20IncreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'increaseAllowance'
        >['request']['abi'],
        'increaseAllowance',
        TMode
      > & { functionName?: 'increaseAllowance' }
    : UseContractWriteConfig<typeof erc20ABI, 'increaseAllowance', TMode> & {
        abi?: never
        functionName?: 'increaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'increaseAllowance', TMode>({
    abi: erc20ABI,
    functionName: 'increaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function useErc20DecreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'decreaseAllowance'
        >['request']['abi'],
        'decreaseAllowance',
        TMode
      > & { functionName?: 'decreaseAllowance' }
    : UseContractWriteConfig<typeof erc20ABI, 'decreaseAllowance', TMode> & {
        abi?: never
        functionName?: 'decreaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'decreaseAllowance', TMode>({
    abi: erc20ABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function usePrepareErc20Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc20Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareErc20Transfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc20TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function usePrepareErc20IncreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'increaseAllowance'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'increaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'increaseAllowance'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function usePrepareErc20DecreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'decreaseAllowance'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'decreaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'decreaseAllowance'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc20ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc20TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6551RegistryABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x000000006551c19487814612e58FE06813775758)
 */
export function useErc6551RegistryRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc6551RegistryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc6551RegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address'
  > & { chainId?: keyof typeof erc6551RegistryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: erc6551RegistryABI,
    address:
      erc6551RegistryAddress[chainId as keyof typeof erc6551RegistryAddress],
    ...config,
  } as UseContractReadConfig<
    typeof erc6551RegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6551RegistryABI}__ and `functionName` set to `"account"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x000000006551c19487814612e58FE06813775758)
 */
export function useErc6551RegistryAccount<
  TFunctionName extends 'account',
  TSelectData = ReadContractResult<typeof erc6551RegistryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc6551RegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof erc6551RegistryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: erc6551RegistryABI,
    address:
      erc6551RegistryAddress[chainId as keyof typeof erc6551RegistryAddress],
    functionName: 'account',
    ...config,
  } as UseContractReadConfig<
    typeof erc6551RegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6551RegistryABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x000000006551c19487814612e58FE06813775758)
 */
export function useErc6551RegistryWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof erc6551RegistryAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc6551RegistryABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<
        typeof erc6551RegistryABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof erc6551RegistryABI, TFunctionName, TMode>({
    abi: erc6551RegistryABI,
    address:
      erc6551RegistryAddress[chainId as keyof typeof erc6551RegistryAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6551RegistryABI}__ and `functionName` set to `"createAccount"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x000000006551c19487814612e58FE06813775758)
 */
export function useErc6551RegistryCreateAccount<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof erc6551RegistryAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc6551RegistryABI,
          'createAccount'
        >['request']['abi'],
        'createAccount',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'createAccount'
      }
    : UseContractWriteConfig<
        typeof erc6551RegistryABI,
        'createAccount',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'createAccount'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof erc6551RegistryABI, 'createAccount', TMode>({
    abi: erc6551RegistryABI,
    address:
      erc6551RegistryAddress[chainId as keyof typeof erc6551RegistryAddress],
    functionName: 'createAccount',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6551RegistryABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x000000006551c19487814612e58FE06813775758)
 */
export function usePrepareErc6551RegistryWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc6551RegistryABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof erc6551RegistryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: erc6551RegistryABI,
    address:
      erc6551RegistryAddress[chainId as keyof typeof erc6551RegistryAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc6551RegistryABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6551RegistryABI}__ and `functionName` set to `"createAccount"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x000000006551c19487814612e58FE06813775758)
 */
export function usePrepareErc6551RegistryCreateAccount(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc6551RegistryABI, 'createAccount'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof erc6551RegistryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: erc6551RegistryABI,
    address:
      erc6551RegistryAddress[chainId as keyof typeof erc6551RegistryAddress],
    functionName: 'createAccount',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc6551RegistryABI,
    'createAccount'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc6551RegistryABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x000000006551c19487814612e58FE06813775758)
 */
export function useErc6551RegistryEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc6551RegistryABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof erc6551RegistryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: erc6551RegistryABI,
    address:
      erc6551RegistryAddress[chainId as keyof typeof erc6551RegistryAddress],
    ...config,
  } as UseContractEventConfig<typeof erc6551RegistryABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc6551RegistryABI}__ and `eventName` set to `"ERC6551AccountCreated"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x000000006551c19487814612e58FE06813775758)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x000000006551c19487814612e58FE06813775758)
 */
export function useErc6551RegistryErc6551AccountCreatedEvent(
  config: Omit<
    UseContractEventConfig<typeof erc6551RegistryABI, 'ERC6551AccountCreated'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof erc6551RegistryAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: erc6551RegistryABI,
    address:
      erc6551RegistryAddress[chainId as keyof typeof erc6551RegistryAddress],
    eventName: 'ERC6551AccountCreated',
    ...config,
  } as UseContractEventConfig<
    typeof erc6551RegistryABI,
    'ERC6551AccountCreated'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: erc721ABI, ...config } as UseContractReadConfig<
    typeof erc721ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc721BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useErc721GetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useErc721IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"name"`.
 */
export function useErc721Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useErc721OwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc721Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"tokenByIndex"`.
 */
export function useErc721TokenByIndex<
  TFunctionName extends 'tokenByIndex',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'tokenByIndex',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useErc721TokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc721TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc721ABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc721ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc721ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, TFunctionName, TMode>({
    abi: erc721ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc721Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc721ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'approve', TMode>({
    abi: erc721ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useErc721SafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof erc721ABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'safeTransferFrom', TMode>({
    abi: erc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useErc721SetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof erc721ABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'setApprovalForAll', TMode>({
    abi: erc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc721TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc721ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof erc721ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc721ABI, 'transferFrom', TMode>({
    abi: erc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function usePrepareErc721Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc721Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareErc721SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareErc721SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc721TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc721ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc721ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc721ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useErc721ApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc721TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc721ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc721ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc721ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc6551RegistryABI}__.
 */
export function useIerc6551RegistryRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof ierc6551RegistryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc6551RegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc6551RegistryABI,
    ...config,
  } as UseContractReadConfig<
    typeof ierc6551RegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc6551RegistryABI}__ and `functionName` set to `"account"`.
 */
export function useIerc6551RegistryAccount<
  TFunctionName extends 'account',
  TSelectData = ReadContractResult<typeof ierc6551RegistryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc6551RegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: ierc6551RegistryABI,
    functionName: 'account',
    ...config,
  } as UseContractReadConfig<
    typeof ierc6551RegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc6551RegistryABI}__.
 */
export function useIerc6551RegistryWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc6551RegistryABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof ierc6551RegistryABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof ierc6551RegistryABI, TFunctionName, TMode>({
    abi: ierc6551RegistryABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc6551RegistryABI}__ and `functionName` set to `"createAccount"`.
 */
export function useIerc6551RegistryCreateAccount<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc6551RegistryABI,
          'createAccount'
        >['request']['abi'],
        'createAccount',
        TMode
      > & { functionName?: 'createAccount' }
    : UseContractWriteConfig<
        typeof ierc6551RegistryABI,
        'createAccount',
        TMode
      > & {
        abi?: never
        functionName?: 'createAccount'
      } = {} as any,
) {
  return useContractWrite<typeof ierc6551RegistryABI, 'createAccount', TMode>({
    abi: ierc6551RegistryABI,
    functionName: 'createAccount',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc6551RegistryABI}__.
 */
export function usePrepareIerc6551RegistryWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc6551RegistryABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc6551RegistryABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc6551RegistryABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc6551RegistryABI}__ and `functionName` set to `"createAccount"`.
 */
export function usePrepareIerc6551RegistryCreateAccount(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc6551RegistryABI, 'createAccount'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: ierc6551RegistryABI,
    functionName: 'createAccount',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof ierc6551RegistryABI,
    'createAccount'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc6551RegistryABI}__.
 */
export function useIerc6551RegistryEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc6551RegistryABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc6551RegistryABI,
    ...config,
  } as UseContractEventConfig<typeof ierc6551RegistryABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc6551RegistryABI}__ and `eventName` set to `"ERC6551AccountCreated"`.
 */
export function useIerc6551RegistryErc6551AccountCreatedEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc6551RegistryABI, 'ERC6551AccountCreated'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: ierc6551RegistryABI,
    eventName: 'ERC6551AccountCreated',
    ...config,
  } as UseContractEventConfig<
    typeof ierc6551RegistryABI,
    'ERC6551AccountCreated'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link localDistributorABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x104Ac7B3d7774BB726e8567415B9B8Dad46B451C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x18dedD852B675DA7a13C6bE6dB8d26Cda16569D3)
 */
export function useLocalDistributorRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof localDistributorABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof localDistributorABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address'
  > & { chainId?: keyof typeof localDistributorAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: localDistributorABI,
    address:
      localDistributorAddress[chainId as keyof typeof localDistributorAddress],
    ...config,
  } as UseContractReadConfig<
    typeof localDistributorABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link localDistributorABI}__ and `functionName` set to `"owner"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x104Ac7B3d7774BB726e8567415B9B8Dad46B451C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x18dedD852B675DA7a13C6bE6dB8d26Cda16569D3)
 */
export function useLocalDistributorOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof localDistributorABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof localDistributorABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof localDistributorAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: localDistributorABI,
    address:
      localDistributorAddress[chainId as keyof typeof localDistributorAddress],
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<
    typeof localDistributorABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link localDistributorABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x104Ac7B3d7774BB726e8567415B9B8Dad46B451C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x18dedD852B675DA7a13C6bE6dB8d26Cda16569D3)
 */
export function useLocalDistributorWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof localDistributorAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof localDistributorABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<
        typeof localDistributorABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof localDistributorABI, TFunctionName, TMode>({
    abi: localDistributorABI,
    address:
      localDistributorAddress[chainId as keyof typeof localDistributorAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link localDistributorABI}__ and `functionName` set to `"distribute"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x104Ac7B3d7774BB726e8567415B9B8Dad46B451C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x18dedD852B675DA7a13C6bE6dB8d26Cda16569D3)
 */
export function useLocalDistributorDistribute<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof localDistributorAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof localDistributorABI,
          'distribute'
        >['request']['abi'],
        'distribute',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'distribute' }
    : UseContractWriteConfig<
        typeof localDistributorABI,
        'distribute',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'distribute'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof localDistributorABI, 'distribute', TMode>({
    abi: localDistributorABI,
    address:
      localDistributorAddress[chainId as keyof typeof localDistributorAddress],
    functionName: 'distribute',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link localDistributorABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x104Ac7B3d7774BB726e8567415B9B8Dad46B451C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x18dedD852B675DA7a13C6bE6dB8d26Cda16569D3)
 */
export function useLocalDistributorRenounceOwnership<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof localDistributorAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof localDistributorABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'renounceOwnership'
      }
    : UseContractWriteConfig<
        typeof localDistributorABI,
        'renounceOwnership',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<
    typeof localDistributorABI,
    'renounceOwnership',
    TMode
  >({
    abi: localDistributorABI,
    address:
      localDistributorAddress[chainId as keyof typeof localDistributorAddress],
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link localDistributorABI}__ and `functionName` set to `"transferOwnership"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x104Ac7B3d7774BB726e8567415B9B8Dad46B451C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x18dedD852B675DA7a13C6bE6dB8d26Cda16569D3)
 */
export function useLocalDistributorTransferOwnership<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof localDistributorAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof localDistributorABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'transferOwnership'
      }
    : UseContractWriteConfig<
        typeof localDistributorABI,
        'transferOwnership',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<
    typeof localDistributorABI,
    'transferOwnership',
    TMode
  >({
    abi: localDistributorABI,
    address:
      localDistributorAddress[chainId as keyof typeof localDistributorAddress],
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link localDistributorABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x104Ac7B3d7774BB726e8567415B9B8Dad46B451C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x18dedD852B675DA7a13C6bE6dB8d26Cda16569D3)
 */
export function usePrepareLocalDistributorWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof localDistributorABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof localDistributorAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: localDistributorABI,
    address:
      localDistributorAddress[chainId as keyof typeof localDistributorAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof localDistributorABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link localDistributorABI}__ and `functionName` set to `"distribute"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x104Ac7B3d7774BB726e8567415B9B8Dad46B451C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x18dedD852B675DA7a13C6bE6dB8d26Cda16569D3)
 */
export function usePrepareLocalDistributorDistribute(
  config: Omit<
    UsePrepareContractWriteConfig<typeof localDistributorABI, 'distribute'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof localDistributorAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: localDistributorABI,
    address:
      localDistributorAddress[chainId as keyof typeof localDistributorAddress],
    functionName: 'distribute',
    ...config,
  } as UsePrepareContractWriteConfig<typeof localDistributorABI, 'distribute'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link localDistributorABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x104Ac7B3d7774BB726e8567415B9B8Dad46B451C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x18dedD852B675DA7a13C6bE6dB8d26Cda16569D3)
 */
export function usePrepareLocalDistributorRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof localDistributorABI,
      'renounceOwnership'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof localDistributorAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: localDistributorABI,
    address:
      localDistributorAddress[chainId as keyof typeof localDistributorAddress],
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof localDistributorABI,
    'renounceOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link localDistributorABI}__ and `functionName` set to `"transferOwnership"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x104Ac7B3d7774BB726e8567415B9B8Dad46B451C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x18dedD852B675DA7a13C6bE6dB8d26Cda16569D3)
 */
export function usePrepareLocalDistributorTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof localDistributorABI,
      'transferOwnership'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof localDistributorAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: localDistributorABI,
    address:
      localDistributorAddress[chainId as keyof typeof localDistributorAddress],
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof localDistributorABI,
    'transferOwnership'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link localDistributorABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x104Ac7B3d7774BB726e8567415B9B8Dad46B451C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x18dedD852B675DA7a13C6bE6dB8d26Cda16569D3)
 */
export function useLocalDistributorEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof localDistributorABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof localDistributorAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: localDistributorABI,
    address:
      localDistributorAddress[chainId as keyof typeof localDistributorAddress],
    ...config,
  } as UseContractEventConfig<typeof localDistributorABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link localDistributorABI}__ and `eventName` set to `"LocalTokenDistribution"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x104Ac7B3d7774BB726e8567415B9B8Dad46B451C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x18dedD852B675DA7a13C6bE6dB8d26Cda16569D3)
 */
export function useLocalDistributorLocalTokenDistributionEvent(
  config: Omit<
    UseContractEventConfig<
      typeof localDistributorABI,
      'LocalTokenDistribution'
    >,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof localDistributorAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: localDistributorABI,
    address:
      localDistributorAddress[chainId as keyof typeof localDistributorAddress],
    eventName: 'LocalTokenDistribution',
    ...config,
  } as UseContractEventConfig<
    typeof localDistributorABI,
    'LocalTokenDistribution'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link localDistributorABI}__ and `eventName` set to `"OwnershipTransferred"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x104Ac7B3d7774BB726e8567415B9B8Dad46B451C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x18dedD852B675DA7a13C6bE6dB8d26Cda16569D3)
 */
export function useLocalDistributorOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof localDistributorABI, 'OwnershipTransferred'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof localDistributorAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: localDistributorABI,
    address:
      localDistributorAddress[chainId as keyof typeof localDistributorAddress],
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<
    typeof localDistributorABI,
    'OwnershipTransferred'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link localErc721ABI}__.
 */
export function useLocalErc721Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof localErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: localErc721ABI,
    ...config,
  } as UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useLocalErc721BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof localErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: localErc721ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useLocalErc721GetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof localErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: localErc721ABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useLocalErc721IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof localErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: localErc721ABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"name"`.
 */
export function useLocalErc721Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof localErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: localErc721ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"owner"`.
 */
export function useLocalErc721Owner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof localErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: localErc721ABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useLocalErc721OwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof localErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: localErc721ABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useLocalErc721SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof localErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: localErc721ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"symbol"`.
 */
export function useLocalErc721Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof localErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: localErc721ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useLocalErc721TokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof localErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: localErc721ABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useLocalErc721TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof localErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: localErc721ABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"uri"`.
 */
export function useLocalErc721Uri<
  TFunctionName extends 'uri',
  TSelectData = ReadContractResult<typeof localErc721ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: localErc721ABI,
    functionName: 'uri',
    ...config,
  } as UseContractReadConfig<typeof localErc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link localErc721ABI}__.
 */
export function useLocalErc721Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof localErc721ABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof localErc721ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof localErc721ABI, TFunctionName, TMode>({
    abi: localErc721ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useLocalErc721Approve<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof localErc721ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof localErc721ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof localErc721ABI, 'approve', TMode>({
    abi: localErc721ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"mint"`.
 */
export function useLocalErc721Mint<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof localErc721ABI,
          'mint'
        >['request']['abi'],
        'mint',
        TMode
      > & { functionName?: 'mint' }
    : UseContractWriteConfig<typeof localErc721ABI, 'mint', TMode> & {
        abi?: never
        functionName?: 'mint'
      } = {} as any,
) {
  return useContractWrite<typeof localErc721ABI, 'mint', TMode>({
    abi: localErc721ABI,
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useLocalErc721RenounceOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof localErc721ABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<
        typeof localErc721ABI,
        'renounceOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof localErc721ABI, 'renounceOwnership', TMode>({
    abi: localErc721ABI,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useLocalErc721SafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof localErc721ABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<
        typeof localErc721ABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof localErc721ABI, 'safeTransferFrom', TMode>({
    abi: localErc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useLocalErc721SetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof localErc721ABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<
        typeof localErc721ABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof localErc721ABI, 'setApprovalForAll', TMode>({
    abi: localErc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"setUri"`.
 */
export function useLocalErc721SetUri<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof localErc721ABI,
          'setUri'
        >['request']['abi'],
        'setUri',
        TMode
      > & { functionName?: 'setUri' }
    : UseContractWriteConfig<typeof localErc721ABI, 'setUri', TMode> & {
        abi?: never
        functionName?: 'setUri'
      } = {} as any,
) {
  return useContractWrite<typeof localErc721ABI, 'setUri', TMode>({
    abi: localErc721ABI,
    functionName: 'setUri',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useLocalErc721TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof localErc721ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof localErc721ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof localErc721ABI, 'transferFrom', TMode>({
    abi: localErc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useLocalErc721TransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof localErc721ABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<
        typeof localErc721ABI,
        'transferOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof localErc721ABI, 'transferOwnership', TMode>({
    abi: localErc721ABI,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link localErc721ABI}__.
 */
export function usePrepareLocalErc721Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof localErc721ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: localErc721ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof localErc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareLocalErc721Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof localErc721ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: localErc721ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof localErc721ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareLocalErc721Mint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof localErc721ABI, 'mint'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: localErc721ABI,
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof localErc721ABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareLocalErc721RenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof localErc721ABI, 'renounceOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: localErc721ABI,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof localErc721ABI,
    'renounceOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareLocalErc721SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof localErc721ABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: localErc721ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof localErc721ABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareLocalErc721SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof localErc721ABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: localErc721ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof localErc721ABI,
    'setApprovalForAll'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"setUri"`.
 */
export function usePrepareLocalErc721SetUri(
  config: Omit<
    UsePrepareContractWriteConfig<typeof localErc721ABI, 'setUri'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: localErc721ABI,
    functionName: 'setUri',
    ...config,
  } as UsePrepareContractWriteConfig<typeof localErc721ABI, 'setUri'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareLocalErc721TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof localErc721ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: localErc721ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof localErc721ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link localErc721ABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareLocalErc721TransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof localErc721ABI, 'transferOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: localErc721ABI,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof localErc721ABI,
    'transferOwnership'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link localErc721ABI}__.
 */
export function useLocalErc721Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof localErc721ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: localErc721ABI,
    ...config,
  } as UseContractEventConfig<typeof localErc721ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link localErc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useLocalErc721ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof localErc721ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: localErc721ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof localErc721ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link localErc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useLocalErc721ApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof localErc721ABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: localErc721ABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof localErc721ABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link localErc721ABI}__ and `eventName` set to `"ConsecutiveTransfer"`.
 */
export function useLocalErc721ConsecutiveTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof localErc721ABI, 'ConsecutiveTransfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: localErc721ABI,
    eventName: 'ConsecutiveTransfer',
    ...config,
  } as UseContractEventConfig<typeof localErc721ABI, 'ConsecutiveTransfer'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link localErc721ABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useLocalErc721OwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof localErc721ABI, 'OwnershipTransferred'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: localErc721ABI,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof localErc721ABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link localErc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useLocalErc721TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof localErc721ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: localErc721ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof localErc721ABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapDefaultAdminRole<
  TFunctionName extends 'DEFAULT_ADMIN_ROLE',
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'DEFAULT_ADMIN_ROLE',
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"TILE_CREATOR"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapTileCreator<
  TFunctionName extends 'TILE_CREATOR',
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'TILE_CREATOR',
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"computeLocalRecord"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapComputeLocalRecord<
  TFunctionName extends 'computeLocalRecord',
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'computeLocalRecord',
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"computeRecordTileAddress"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapComputeRecordTileAddress<
  TFunctionName extends 'computeRecordTileAddress',
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'computeRecordTileAddress',
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"getRoleAdmin"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapGetRoleAdmin<
  TFunctionName extends 'getRoleAdmin',
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'getRoleAdmin',
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"hasRole"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapHasRole<
  TFunctionName extends 'hasRole',
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'hasRole',
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"proxiableUUID"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapProxiableUuid<
  TFunctionName extends 'proxiableUUID',
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'proxiableUUID',
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"supportsInterface"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof mapABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof mapABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mapABI, string>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof mapABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, TFunctionName, TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"__ERC6551AccountCreator__init"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapErc6551AccountCreatorInit<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          '__ERC6551AccountCreator__init'
        >['request']['abi'],
        '__ERC6551AccountCreator__init',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: '__ERC6551AccountCreator__init'
      }
    : UseContractWriteConfig<
        typeof mapABI,
        '__ERC6551AccountCreator__init',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: '__ERC6551AccountCreator__init'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<
    typeof mapABI,
    '__ERC6551AccountCreator__init',
    TMode
  >({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: '__ERC6551AccountCreator__init',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"__RecordTileFactory__init"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapRecordTileFactoryInit<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          '__RecordTileFactory__init'
        >['request']['abi'],
        '__RecordTileFactory__init',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: '__RecordTileFactory__init'
      }
    : UseContractWriteConfig<
        typeof mapABI,
        '__RecordTileFactory__init',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: '__RecordTileFactory__init'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, '__RecordTileFactory__init', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: '__RecordTileFactory__init',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"createRecord"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapCreateRecord<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          'createRecord'
        >['request']['abi'],
        'createRecord',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'createRecord'
      }
    : UseContractWriteConfig<typeof mapABI, 'createRecord', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'createRecord'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, 'createRecord', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'createRecord',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"createState"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapCreateState<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          'createState'
        >['request']['abi'],
        'createState',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'createState'
      }
    : UseContractWriteConfig<typeof mapABI, 'createState', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'createState'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, 'createState', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'createState',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"grantRole"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapGrantRole<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          'grantRole'
        >['request']['abi'],
        'grantRole',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'grantRole' }
    : UseContractWriteConfig<typeof mapABI, 'grantRole', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'grantRole'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, 'grantRole', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'grantRole',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapInitialize<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          'initialize'
        >['request']['abi'],
        'initialize',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'initialize' }
    : UseContractWriteConfig<typeof mapABI, 'initialize', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'initialize'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, 'initialize', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'initialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"move"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapMove<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof mapABI, 'move'>['request']['abi'],
        'move',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'move' }
    : UseContractWriteConfig<typeof mapABI, 'move', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'move'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, 'move', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'move',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"renounceRole"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapRenounceRole<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          'renounceRole'
        >['request']['abi'],
        'renounceRole',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'renounceRole'
      }
    : UseContractWriteConfig<typeof mapABI, 'renounceRole', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'renounceRole'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, 'renounceRole', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'renounceRole',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"revokeRole"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapRevokeRole<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          'revokeRole'
        >['request']['abi'],
        'revokeRole',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'revokeRole' }
    : UseContractWriteConfig<typeof mapABI, 'revokeRole', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'revokeRole'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, 'revokeRole', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'revokeRole',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"upgradeTo"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapUpgradeTo<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          'upgradeTo'
        >['request']['abi'],
        'upgradeTo',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'upgradeTo' }
    : UseContractWriteConfig<typeof mapABI, 'upgradeTo', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'upgradeTo'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, 'upgradeTo', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'upgradeTo',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"upgradeToAndCall"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapUpgradeToAndCall<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof mapAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof mapABI,
          'upgradeToAndCall'
        >['request']['abi'],
        'upgradeToAndCall',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'upgradeToAndCall'
      }
    : UseContractWriteConfig<typeof mapABI, 'upgradeToAndCall', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'upgradeToAndCall'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof mapABI, 'upgradeToAndCall', TMode>({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'upgradeToAndCall',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function usePrepareMapWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"__ERC6551AccountCreator__init"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function usePrepareMapErc6551AccountCreatorInit(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof mapABI,
      '__ERC6551AccountCreator__init'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: '__ERC6551AccountCreator__init',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof mapABI,
    '__ERC6551AccountCreator__init'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"__RecordTileFactory__init"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function usePrepareMapRecordTileFactoryInit(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, '__RecordTileFactory__init'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: '__RecordTileFactory__init',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof mapABI,
    '__RecordTileFactory__init'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"createRecord"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function usePrepareMapCreateRecord(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, 'createRecord'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'createRecord',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, 'createRecord'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"createState"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function usePrepareMapCreateState(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, 'createState'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'createState',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, 'createState'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"grantRole"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function usePrepareMapGrantRole(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, 'grantRole'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'grantRole',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, 'grantRole'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function usePrepareMapInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, 'initialize'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'initialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, 'initialize'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"move"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function usePrepareMapMove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, 'move'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'move',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, 'move'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"renounceRole"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function usePrepareMapRenounceRole(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, 'renounceRole'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'renounceRole',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, 'renounceRole'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"revokeRole"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function usePrepareMapRevokeRole(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, 'revokeRole'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'revokeRole',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, 'revokeRole'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"upgradeTo"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function usePrepareMapUpgradeTo(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, 'upgradeTo'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'upgradeTo',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, 'upgradeTo'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link mapABI}__ and `functionName` set to `"upgradeToAndCall"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function usePrepareMapUpgradeToAndCall(
  config: Omit<
    UsePrepareContractWriteConfig<typeof mapABI, 'upgradeToAndCall'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    functionName: 'upgradeToAndCall',
    ...config,
  } as UsePrepareContractWriteConfig<typeof mapABI, 'upgradeToAndCall'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof mapABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    ...config,
  } as UseContractEventConfig<typeof mapABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"AdminChanged"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapAdminChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'AdminChanged'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'AdminChanged',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'AdminChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"BeaconUpgraded"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapBeaconUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'BeaconUpgraded'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'BeaconUpgraded',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'BeaconUpgraded'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"Initialized"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapInitializedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'Initialized'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'Initialized',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'Initialized'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"LocalRecordDeployed"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapLocalRecordDeployedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'LocalRecordDeployed'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'LocalRecordDeployed',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'LocalRecordDeployed'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"LocalRecordTokenDeployed"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapLocalRecordTokenDeployedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'LocalRecordTokenDeployed'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'LocalRecordTokenDeployed',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'LocalRecordTokenDeployed'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"RoleAdminChanged"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapRoleAdminChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'RoleAdminChanged'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'RoleAdminChanged',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'RoleAdminChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"RoleGranted"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapRoleGrantedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'RoleGranted'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'RoleGranted',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'RoleGranted'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"RoleRevoked"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapRoleRevokedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'RoleRevoked'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'RoleRevoked',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'RoleRevoked'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"TileCreated"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapTileCreatedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'TileCreated'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'TileCreated',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'TileCreated'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link mapABI}__ and `eventName` set to `"Upgraded"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x197aE2Bb1218F4B8a68993B21B71CE4179F06ce8)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xD4a574A343cC6b140916D7f9c3E00517D041a75D)
 */
export function useMapUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof mapABI, 'Upgraded'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof mapAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: mapABI,
    address: mapAddress[chainId as keyof typeof mapAddress],
    eventName: 'Upgraded',
    ...config,
  } as UseContractEventConfig<typeof mapABI, 'Upgraded'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"accountPosition"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileAccountPosition<
  TFunctionName extends 'accountPosition',
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'accountPosition',
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"balanceOf"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"balanceOfBatch"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileBalanceOfBatch<
  TFunctionName extends 'balanceOfBatch',
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'balanceOfBatch',
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"isApprovedForAll"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"map"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileMap<
  TFunctionName extends 'map',
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'map',
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"supportsInterface"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"uri"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileUri<
  TFunctionName extends 'uri',
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'uri',
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"verifier"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileVerifier<
  TFunctionName extends 'verifier',
  TSelectData = ReadContractResult<typeof stateTileABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'verifier',
    ...config,
  } as UseContractReadConfig<typeof stateTileABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stateTileABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stateTileAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof stateTileABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof stateTileABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof stateTileABI, TFunctionName, TMode>({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileInitialize<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stateTileAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof stateTileABI,
          'initialize'
        >['request']['abi'],
        'initialize',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'initialize' }
    : UseContractWriteConfig<typeof stateTileABI, 'initialize', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'initialize'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof stateTileABI, 'initialize', TMode>({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'initialize',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"move"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileMove<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stateTileAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof stateTileABI,
          'move'
        >['request']['abi'],
        'move',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'move' }
    : UseContractWriteConfig<typeof stateTileABI, 'move', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'move'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof stateTileABI, 'move', TMode>({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'move',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileSafeBatchTransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stateTileAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof stateTileABI,
          'safeBatchTransferFrom'
        >['request']['abi'],
        'safeBatchTransferFrom',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'safeBatchTransferFrom'
      }
    : UseContractWriteConfig<
        typeof stateTileABI,
        'safeBatchTransferFrom',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'safeBatchTransferFrom'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof stateTileABI, 'safeBatchTransferFrom', TMode>({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'safeBatchTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"safeTransferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stateTileAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof stateTileABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'safeTransferFrom'
      }
    : UseContractWriteConfig<typeof stateTileABI, 'safeTransferFrom', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof stateTileABI, 'safeTransferFrom', TMode>({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"setApprovalForAll"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof stateTileAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof stateTileABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setApprovalForAll'
      }
    : UseContractWriteConfig<
        typeof stateTileABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof stateTileABI, 'setApprovalForAll', TMode>({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stateTileABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function usePrepareStateTileWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stateTileABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof stateTileABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"initialize"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function usePrepareStateTileInitialize(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stateTileABI, 'initialize'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'initialize',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stateTileABI, 'initialize'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"move"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function usePrepareStateTileMove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stateTileABI, 'move'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'move',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stateTileABI, 'move'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function usePrepareStateTileSafeBatchTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stateTileABI, 'safeBatchTransferFrom'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'safeBatchTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof stateTileABI,
    'safeBatchTransferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"safeTransferFrom"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function usePrepareStateTileSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stateTileABI, 'safeTransferFrom'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stateTileABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link stateTileABI}__ and `functionName` set to `"setApprovalForAll"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function usePrepareStateTileSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof stateTileABI, 'setApprovalForAll'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof stateTileABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stateTileABI}__.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof stateTileABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    ...config,
  } as UseContractEventConfig<typeof stateTileABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stateTileABI}__ and `eventName` set to `"ApprovalForAll"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof stateTileABI, 'ApprovalForAll'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof stateTileABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stateTileABI}__ and `eventName` set to `"Initialized"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileInitializedEvent(
  config: Omit<
    UseContractEventConfig<typeof stateTileABI, 'Initialized'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    eventName: 'Initialized',
    ...config,
  } as UseContractEventConfig<typeof stateTileABI, 'Initialized'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stateTileABI}__ and `eventName` set to `"StateMove"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileStateMoveEvent(
  config: Omit<
    UseContractEventConfig<typeof stateTileABI, 'StateMove'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    eventName: 'StateMove',
    ...config,
  } as UseContractEventConfig<typeof stateTileABI, 'StateMove'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stateTileABI}__ and `eventName` set to `"TransferBatch"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileTransferBatchEvent(
  config: Omit<
    UseContractEventConfig<typeof stateTileABI, 'TransferBatch'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    eventName: 'TransferBatch',
    ...config,
  } as UseContractEventConfig<typeof stateTileABI, 'TransferBatch'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stateTileABI}__ and `eventName` set to `"TransferSingle"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileTransferSingleEvent(
  config: Omit<
    UseContractEventConfig<typeof stateTileABI, 'TransferSingle'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    eventName: 'TransferSingle',
    ...config,
  } as UseContractEventConfig<typeof stateTileABI, 'TransferSingle'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link stateTileABI}__ and `eventName` set to `"URI"`.
 *
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x7Eb19f94888Bd09fF6405521eC74eb1156379a6C)
 * -
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x12f7FA1d560446f19D4f74c65412Fcd1dD41bDCc)
 */
export function useStateTileUriEvent(
  config: Omit<
    UseContractEventConfig<typeof stateTileABI, 'URI'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof stateTileAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: stateTileABI,
    address: stateTileAddress[chainId as keyof typeof stateTileAddress],
    eventName: 'URI',
    ...config,
  } as UseContractEventConfig<typeof stateTileABI, 'URI'>)
}
