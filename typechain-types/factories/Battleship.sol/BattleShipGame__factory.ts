/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  BattleShipGame,
  BattleShipGameInterface,
} from "../../Battleship.sol/BattleShipGame";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_playersAddress",
        type: "address[]",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "playerIndex",
        type: "uint256",
      },
    ],
    name: "PlayerJoinedGame",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "PlayerLost",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "x",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "y",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct BattleShipGame.Coordinate",
        name: "coord",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "shotBy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isHit",
        type: "bool",
      },
    ],
    name: "ShotReport",
    type: "event",
  },
  {
    inputs: [],
    name: "NO_PLAYERS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NO_SHIP_PIECES",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hashedMessage",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "_v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "_r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "RecoverSigner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "SplitSignature",
    outputs: [
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "destroyedPlayers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "endTurn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getWinner",
    outputs: [
      {
        internalType: "address",
        name: "winner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hasReportedShots",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isGameOver",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isGameStarted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isTurnOver",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "_playerShips",
        type: "bytes[]",
      },
    ],
    name: "joinGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "numberOfDestroyedPlayers",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "playerHasPlacedShips",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "playerHasPlayed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "playerHasReportedHits",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "playerShots",
    outputs: [
      {
        internalType: "uint8",
        name: "x",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "y",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "players",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "playersAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "shotBy",
            type: "address",
          },
        ],
        internalType: "struct BattleShipGame.ShipShotProof[]",
        name: "_shotSignatures",
        type: "tuple[]",
      },
    ],
    name: "reportHits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "x",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "y",
            type: "uint8",
          },
        ],
        internalType: "struct BattleShipGame.Coordinate",
        name: "_coord",
        type: "tuple",
      },
    ],
    name: "takeAShot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052604051620031ad380380620031ad8339818101604052810190620000299190620003e1565b600281511462000070576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200006790620004b9565b60405180910390fd5b60005b8151811015620001ab576000828281518110620000955762000094620004db565b5b6020026020010151905060018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506002819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f3cdcff039830bc8941208e97e0bea06dc34c3348c6b6a002c6d0f2235dd0250d81836040516200018c92919062000536565b60405180910390a1508080620001a29062000592565b91505062000073565b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620005df565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000257826200020c565b810181811067ffffffffffffffff821117156200027957620002786200021d565b5b80604052505050565b60006200028e620001f3565b90506200029c82826200024c565b919050565b600067ffffffffffffffff821115620002bf57620002be6200021d565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200030282620002d5565b9050919050565b6200031481620002f5565b81146200032057600080fd5b50565b600081519050620003348162000309565b92915050565b6000620003516200034b84620002a1565b62000282565b90508083825260208201905060208402830185811115620003775762000376620002d0565b5b835b81811015620003a457806200038f888262000323565b84526020840193505060208101905062000379565b5050509392505050565b600082601f830112620003c657620003c562000207565b5b8151620003d88482602086016200033a565b91505092915050565b600060208284031215620003fa57620003f9620001fd565b5b600082015167ffffffffffffffff8111156200041b576200041a62000202565b5b6200042984828501620003ae565b91505092915050565b600082825260208201905092915050565b7f5f706c61796572734164647265737320646f6573206e6f74206d61746368207460008201527f6865206e756d626572206f6620657870656374656420706c6179657273000000602082015250565b6000620004a1603d8362000432565b9150620004ae8262000443565b604082019050919050565b60006020820190508181036000830152620004d48162000492565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6200051581620002f5565b82525050565b6000819050919050565b62000530816200051b565b82525050565b60006040820190506200054d60008301856200050a565b6200055c602083018462000525565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200059f826200051b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203620005d457620005d362000563565b5b600182019050919050565b612bbe80620005ef6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80638da5cb5b116100b85780639dd9ab4d1161007c5780639dd9ab4d14610390578063a833b8bf146103c0578063c2b9401a146103de578063c2d854c51461040e578063c315432a1461042c578063e2eb41ff1461044a57610142565b80638da5cb5b146102d55780638de7d7d3146102f35780638e49b4631461030f5780638e7ea5b21461034157806393acd2191461035f57610142565b80634d049e731161010a5780634d049e73146101ed5780634feb7bee1461021d5780635263732b1461023b5780635341815c1461025757806359130f291461028757806384b2656e146102b757610142565b806303583275146101475780630e04a7d81461016557806317a556c01461018357806319a0a4da146101b35780633e9c2ea4146101d1575b600080fd5b61014f61047a565b60405161015c91906118f4565b60405180910390f35b61016d61047f565b60405161017a919061192a565b60405180910390f35b61019d600480360381019061019891906119b7565b610492565b6040516101aa919061192a565b60405180910390f35b6101bb6104b2565b6040516101c891906118f4565b60405180910390f35b6101eb60048036038101906101e69190611c86565b6104b8565b005b610207600480360381019061020291906119b7565b6106da565b604051610214919061192a565b60405180910390f35b6102256106fa565b60405161023291906118f4565b60405180910390f35b61025560048036038101906102509190611d58565b6106ff565b005b610271600480360381019061026c91906119b7565b61098f565b60405161027e919061192a565b60405180910390f35b6102a1600480360381019061029c9190611dbb565b6109af565b6040516102ae9190611e31565b60405180910390f35b6102bf610a78565b6040516102cc919061192a565b60405180910390f35b6102dd610b49565b6040516102ea9190611e6d565b60405180910390f35b61030d60048036038101906103089190611f69565b610b6d565b005b61032960048036038101906103249190611fb2565b610ed2565b60405161033893929190612019565b60405180910390f35b610349610f3a565b6040516103569190611e31565b60405180910390f35b610379600480360381019061037491906119b7565b611056565b604051610387929190612050565b60405180910390f35b6103aa60048036038101906103a591906119b7565b611094565b6040516103b7919061192a565b60405180910390f35b6103c86110b4565b6040516103d5919061192a565b60405180910390f35b6103f860048036038101906103f391906120a5565b611336565b6040516104059190611e31565b60405180910390f35b610416611375565b604051610423919061192a565b60405180910390f35b610434611446565b604051610441919061192a565b60405180910390f35b610464600480360381019061045f91906119b7565b611517565b604051610471919061192a565b60405180910390f35b600281565b600b60009054906101000a900460ff1681565b60056020528060005260406000206000915054906101000a900460ff1681565b60065481565b6104c0611446565b6104ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f69061212f565b60405180910390fd5b600b60009054906101000a900460ff161561054f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105469061219b565b60405180910390fd5b610557611375565b610596576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058d9061222d565b60405180910390fd5b6002815111156105db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d2906122bf565b60405180910390fd5b60005b815181101561067e5760008282815181106105fc576105fb6122df565b5b6020026020010151905060008061061283611537565b91509150811561062757610626338261171c565b5b7f555ee82f63a0f673d4f0af6c68260db1a41f9067bfa303611f3ba96db82657a18133856020015185604051610660949392919061234c565b60405180910390a15050508080610676906123c0565b9150506105de565b506001600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60096020528060005260406000206000915054906101000a900460ff1681565b600a81565b610707611446565b610746576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073d9061212f565b60405180910390fd5b600b60009054906101000a900460ff1615610796576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078d9061219b565b60405180910390fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610822576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108199061247a565b60405180910390fd5b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156108af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a69061250c565b60405180910390fd5b80600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff021916908360ff16021790555060208201518160000160016101000a81548160ff021916908360ff1602179055509050506001600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60086020528060005260406000206000915054906101000a900460ff1681565b6000806040518060400160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152509050600081876040516020016109ff9291906125be565b604051602081830303815290604052805190602001209050600060018288888860405160008152602001604052604051610a3c94939291906125e6565b6020604051602081039080840390855afa158015610a5e573d6000803e3d6000fd5b505050602060405103519050809350505050949350505050565b600080600090505b600280549050811015610b4057600060028281548110610aa357610aa26122df565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600a60008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610b2c57600092505050610b46565b508080610b38906123c0565b915050610a80565b50600190505b90565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b60009054906101000a900460ff1615610bbd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb49061219b565b60405180910390fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610c49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c409061269d565b60405180910390fd5b600a815114610c8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c849061272f565b60405180910390fd5b600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610d1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d119061279b565b60405180910390fd5b60005b8151811015610e76576000828281518110610d3b57610d3a6122df565b5b60200260200101519050600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081604051610d9291906127bb565b908152602001604051809103902060009054906101000a900460ff1615610dee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de590612844565b60405180910390fd5b6001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082604051610e3d91906127bb565b908152602001604051809103902060006101000a81548160ff021916908315150217905550508080610e6e906123c0565b915050610d1d565b506001600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60008060006041845114610f1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f12906128b0565b60405180910390fd5b6020840151915060408401519050606084015160001a92509193909250565b6000600b60009054906101000a900460ff16610f8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f829061291c565b60405180910390fd5b60005b60028054905081101561104d57600060028281548110610fb157610fb06122df565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611039578092505050611053565b508080611045906123c0565b915050610f8e565b50600090505b90565b60076020528060005260406000206000915090508060000160009054906101000a900460ff16908060000160019054906101000a900460ff16905082565b600a6020528060005260406000206000915054906101000a900460ff1681565b60006110be611375565b6110fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110f4906129ae565b60405180910390fd5b611105610a78565b611144576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113b90612a40565b60405180910390fd5b600160026111529190612a60565b60065410611176576001600b60006101000a81548160ff0219169083151502179055505b60005b60028054905081101561132e5760006002828154811061119c5761119b6122df565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506040518060400160405280600060ff168152602001600060ff16815250600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff021916908360ff16021790555060208201518160000160016101000a81548160ff021916908360ff160217905550905050508080611326906123c0565b915050611179565b506001905090565b6002818154811061134657600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600090505b60028054905081101561143d576000600282815481106113a05761139f6122df565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600860008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661142957600092505050611443565b508080611435906123c0565b91505061137d565b50600190505b90565b600080600090505b60028054905081101561150e57600060028281548110611471576114706122df565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600960008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166114fa57600092505050611514565b508080611506906123c0565b91505061144e565b50600190505b90565b60016020528060005260406000206000915054906101000a900460ff1681565b60006115416118bb565b600060076000856020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff1660ff1660ff1681526020016000820160019054906101000a900460ff1660ff1660ff168152505090506000816000015182602001516040516020016115ea929190612aca565b60405160208183030381529060405280519060200120905060008060006116148860000151610ed2565b9250925092506000611628858585856109af565b90503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611698576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161168f90612b68565b60405180910390fd5b60011515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208a600001516040516116ed91906127bb565b908152602001604051809103902060009054906101000a900460ff161515148697509750505050505050915091565b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548160ff021916908360ff16021790555060208201518160000160016101000a81548160ff021916908360ff1602179055505050600a600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050036118b7576001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506006600081548092919061187a906123c0565b91905055507f4a81f1d754850d36dfb060ff8fdf9523b2038aeea198b68e3daefaca0fd7d338826040516118ae9190611e31565b60405180910390a15b5050565b6040518060400160405280600060ff168152602001600060ff1681525090565b6000819050919050565b6118ee816118db565b82525050565b600060208201905061190960008301846118e5565b92915050565b60008115159050919050565b6119248161190f565b82525050565b600060208201905061193f600083018461191b565b92915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061198482611959565b9050919050565b61199481611979565b811461199f57600080fd5b50565b6000813590506119b18161198b565b92915050565b6000602082840312156119cd576119cc61194f565b5b60006119db848285016119a2565b91505092915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611a32826119e9565b810181811067ffffffffffffffff82111715611a5157611a506119fa565b5b80604052505050565b6000611a64611945565b9050611a708282611a29565b919050565b600067ffffffffffffffff821115611a9057611a8f6119fa565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600080fd5b600067ffffffffffffffff821115611ad057611acf6119fa565b5b611ad9826119e9565b9050602081019050919050565b82818337600083830152505050565b6000611b08611b0384611ab5565b611a5a565b905082815260208101848484011115611b2457611b23611ab0565b5b611b2f848285611ae6565b509392505050565b600082601f830112611b4c57611b4b6119e4565b5b8135611b5c848260208601611af5565b91505092915050565b600060408284031215611b7b57611b7a611aa6565b5b611b856040611a5a565b9050600082013567ffffffffffffffff811115611ba557611ba4611aab565b5b611bb184828501611b37565b6000830152506020611bc5848285016119a2565b60208301525092915050565b6000611be4611bdf84611a75565b611a5a565b90508083825260208201905060208402830185811115611c0757611c06611aa1565b5b835b81811015611c4e57803567ffffffffffffffff811115611c2c57611c2b6119e4565b5b808601611c398982611b65565b85526020850194505050602081019050611c09565b5050509392505050565b600082601f830112611c6d57611c6c6119e4565b5b8135611c7d848260208601611bd1565b91505092915050565b600060208284031215611c9c57611c9b61194f565b5b600082013567ffffffffffffffff811115611cba57611cb9611954565b5b611cc684828501611c58565b91505092915050565b600060ff82169050919050565b611ce581611ccf565b8114611cf057600080fd5b50565b600081359050611d0281611cdc565b92915050565b600060408284031215611d1e57611d1d611aa6565b5b611d286040611a5a565b90506000611d3884828501611cf3565b6000830152506020611d4c84828501611cf3565b60208301525092915050565b600060408284031215611d6e57611d6d61194f565b5b6000611d7c84828501611d08565b91505092915050565b6000819050919050565b611d9881611d85565b8114611da357600080fd5b50565b600081359050611db581611d8f565b92915050565b60008060008060808587031215611dd557611dd461194f565b5b6000611de387828801611da6565b9450506020611df487828801611cf3565b9350506040611e0587828801611da6565b9250506060611e1687828801611da6565b91505092959194509250565b611e2b81611979565b82525050565b6000602082019050611e466000830184611e22565b92915050565b6000611e5782611959565b9050919050565b611e6781611e4c565b82525050565b6000602082019050611e826000830184611e5e565b92915050565b600067ffffffffffffffff821115611ea357611ea26119fa565b5b602082029050602081019050919050565b6000611ec7611ec284611e88565b611a5a565b90508083825260208201905060208402830185811115611eea57611ee9611aa1565b5b835b81811015611f3157803567ffffffffffffffff811115611f0f57611f0e6119e4565b5b808601611f1c8982611b37565b85526020850194505050602081019050611eec565b5050509392505050565b600082601f830112611f5057611f4f6119e4565b5b8135611f60848260208601611eb4565b91505092915050565b600060208284031215611f7f57611f7e61194f565b5b600082013567ffffffffffffffff811115611f9d57611f9c611954565b5b611fa984828501611f3b565b91505092915050565b600060208284031215611fc857611fc761194f565b5b600082013567ffffffffffffffff811115611fe657611fe5611954565b5b611ff284828501611b37565b91505092915050565b61200481611ccf565b82525050565b61201381611d85565b82525050565b600060608201905061202e6000830186611ffb565b61203b602083018561200a565b612048604083018461200a565b949350505050565b60006040820190506120656000830185611ffb565b6120726020830184611ffb565b9392505050565b612082816118db565b811461208d57600080fd5b50565b60008135905061209f81612079565b92915050565b6000602082840312156120bb576120ba61194f565b5b60006120c984828501612090565b91505092915050565b600082825260208201905092915050565b7f47616d65206861736e2774207374617274656400000000000000000000000000600082015250565b60006121196013836120d2565b9150612124826120e3565b602082019050919050565b600060208201905081810360008301526121488161210c565b9050919050565b7f47616d65206973206f7665720000000000000000000000000000000000000000600082015250565b6000612185600c836120d2565b91506121908261214f565b602082019050919050565b600060208201905081810360008301526121b481612178565b9050919050565b7f416c6c20706c61796572732068617665206e6f7420706c6179656420666f722060008201527f74686973207475726e2e00000000000000000000000000000000000000000000602082015250565b6000612217602a836120d2565b9150612222826121bb565b604082019050919050565b600060208201905081810360008301526122468161220a565b9050919050565b7f4e6f2077617920796f752063616e2076616c6964617465206d6f72652073686f60008201527f7473207468616e2074686572652061726520706c617965727321000000000000602082015250565b60006122a9603a836120d2565b91506122b48261224d565b604082019050919050565b600060208201905081810360008301526122d88161229c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b61231781611ccf565b82525050565b604082016000820151612333600085018261230e565b506020820151612346602085018261230e565b50505050565b600060a082019050612361600083018761231d565b61236e6040830186611e22565b61237b6060830185611e22565b612388608083018461191b565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006123cb826118db565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036123fd576123fc612391565b5b600182019050919050565b7f6d73672e73656e646572206973206e6f74206120706c6179657220696e20746860008201527f69732067616d6500000000000000000000000000000000000000000000000000602082015250565b60006124646027836120d2565b915061246f82612408565b604082019050919050565b6000602082019050818103600083015261249381612457565b9050919050565b7f506c6179657220686173206d6164652061206d6f766520666f7220746869732060008201527f7475726e00000000000000000000000000000000000000000000000000000000602082015250565b60006124f66024836120d2565b91506125018261249a565b604082019050919050565b60006020820190508181036000830152612525816124e9565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015612560578082015181840152602081019050612545565b60008484015250505050565b60006125778261252c565b6125818185612537565b9350612591818560208601612542565b80840191505092915050565b6000819050919050565b6125b86125b382611d85565b61259d565b82525050565b60006125ca828561256c565b91506125d682846125a7565b6020820191508190509392505050565b60006080820190506125fb600083018761200a565b6126086020830186611ffb565b612615604083018561200a565b612622606083018461200a565b95945050505050565b7f41646472657373206973206e6f7420612070617274206f66207468697320676160008201527f6d65000000000000000000000000000000000000000000000000000000000000602082015250565b60006126876022836120d2565b91506126928261262b565b604082019050919050565b600060208201905081810360008301526126b68161267a565b9050919050565b7f4e756d626572206f6620736869702070696563657320646f6573206e6f74206d60008201527f61746368207468652065787065637465642076616c7565000000000000000000602082015250565b60006127196037836120d2565b9150612724826126bd565b604082019050919050565b600060208201905081810360008301526127488161270c565b9050919050565b7f506c617965722068617320616c726561647920706c6163656420736869707300600082015250565b6000612785601f836120d2565b91506127908261274f565b602082019050919050565b600060208201905081810360008301526127b481612778565b9050919050565b60006127c7828461256c565b915081905092915050565b7f557365722068617320616c726561647920706c6163656420612073686970206f60008201527f6e20746869732074696c652e0000000000000000000000000000000000000000602082015250565b600061282e602c836120d2565b9150612839826127d2565b604082019050919050565b6000602082019050818103600083015261285d81612821565b9050919050565b7f496e76616c6964205369676e6174757265000000000000000000000000000000600082015250565b600061289a6011836120d2565b91506128a582612864565b602082019050919050565b600060208201905081810360008301526128c98161288d565b9050919050565b7f5468652067616d652069736e2774206f76657220796574000000000000000000600082015250565b60006129066017836120d2565b9150612911826128d0565b602082019050919050565b60006020820190508181036000830152612935816128f9565b9050919050565b7f546865207475726e206973206e6f7420796574206f7665722c20736f6d65207060008201527f6c6179657273206172652079657420746f2073686f6f74000000000000000000602082015250565b60006129986037836120d2565b91506129a38261293c565b604082019050919050565b600060208201905081810360008301526129c78161298b565b9050919050565b7f536f6d6520706c6179657273206172652079657420746f207265706f7274206860008201527f6974730000000000000000000000000000000000000000000000000000000000602082015250565b6000612a2a6023836120d2565b9150612a35826129ce565b604082019050919050565b60006020820190508181036000830152612a5981612a1d565b9050919050565b6000612a6b826118db565b9150612a76836118db565b9250828203905081811115612a8e57612a8d612391565b5b92915050565b60008160f81b9050919050565b6000612aac82612a94565b9050919050565b612ac4612abf82611ccf565b612aa1565b82525050565b6000612ad68285612ab3565b600182019150612ae68284612ab3565b6001820191508190509392505050565b7f6d73672e73656e64657220616e642064657269766564206d657373616765207360008201527f69676e657220646f206e6f74206d617463680000000000000000000000000000602082015250565b6000612b526032836120d2565b9150612b5d82612af6565b604082019050919050565b60006020820190508181036000830152612b8181612b45565b905091905056fea2646970667358221220d1ec021be7e4760f273ba7e17b486ac54ee46ecfe8dfbcb0e482de22f3ebf26864736f6c63430008110033";

type BattleShipGameConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BattleShipGameConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BattleShipGame__factory extends ContractFactory {
  constructor(...args: BattleShipGameConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _playersAddress: PromiseOrValue<string>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<BattleShipGame> {
    return super.deploy(
      _playersAddress,
      overrides || {}
    ) as Promise<BattleShipGame>;
  }
  override getDeployTransaction(
    _playersAddress: PromiseOrValue<string>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_playersAddress, overrides || {});
  }
  override attach(address: string): BattleShipGame {
    return super.attach(address) as BattleShipGame;
  }
  override connect(signer: Signer): BattleShipGame__factory {
    return super.connect(signer) as BattleShipGame__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BattleShipGameInterface {
    return new utils.Interface(_abi) as BattleShipGameInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BattleShipGame {
    return new Contract(address, _abi, signerOrProvider) as BattleShipGame;
  }
}
