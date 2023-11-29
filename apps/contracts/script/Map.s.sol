// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script, console2} from "forge-std/Script.sol";
import {BaseScript} from "./Base.s.sol";
import {Map} from "../src/Map.sol";
import {StateTile} from "../src/StateTile.sol";
import {RecordTileFactoryConfig} from "../src/RecordTileFactory.sol";
import {NoCheckVerifier} from "../src/verifiers/NoCheckVerifier.sol";
import {UUPSProxy} from "../src/UUPSProxy.sol";
import {StateBeacon} from "../src/StateBeacon.sol";
import {LocalDistributor, LocalTokenConfig, TokenConfig} from "../src/examples/LocalDistributor.sol";

contract MapScript is BaseScript {
    DeployementChain[] internal _deploymentChains;

    function setUp() public {
        forks[DeployementChain.Anvil] = "local";
        forks[DeployementChain.Goerli] = "goerli";
        forks[DeployementChain.BaseGoerli] = "base_goerli";
    }

    function deployMapLocal() public setEnvDeploy(Cycle.Local) {
        _deploymentChains.push(DeployementChain.Anvil);

        _deployMap(_deploymentChains);
    }

    function deployMapTestnets() public setEnvDeploy(Cycle.Testnet) {
        _deploymentChains.push(DeployementChain.Goerli);
        _deploymentChains.push(DeployementChain.BaseGoerli);

        _deployMap(_deploymentChains);
    }

    function deployLocalTokensTestnets(
        address distributor
    ) public setEnvDeploy(Cycle.Testnet) {
        _deploymentChains.push(DeployementChain.Goerli);
        // _deploymentChains.push(DeployementChain.BaseGoerli);

        _deployLocalTokens(_deploymentChains, LocalDistributor(distributor));
    }

    function _deployMap(
        DeployementChain[] memory targetChains
    ) internal broadcastOn(targetChains) returns (Map map, address state) {
        _deployERC6551Config();

        NoCheckVerifier verifier = new NoCheckVerifier();

        address stateTileImplementation = address(new StateTile());

        StateBeacon stateBeacon = new StateBeacon(stateTileImplementation);

        address mapImplementation = address(new Map());

        map = Map(
            address(
                new UUPSProxy(
                    mapImplementation,
                    abi.encodeWithSelector(
                        Map.initialize.selector,
                        address(stateBeacon),
                        RecordTileFactoryConfig(
                            address(registry),
                            address(accountProxy),
                            address(implementation)
                        ),
                        2,
                        6
                    )
                )
            )
        );

        LocalDistributor distributor = new LocalDistributor(map);

        state = map.createState(
            address(verifier),
            "ipfs://bafkreia4evyfxkoz3vek6m4ewuof6bkpjykgt4ff5prsku2vab2xq43724"
        );

        _saveImplementations(address(distributor), "LocalDistributor");
        _saveImplementations(address(map), "Map");
        _saveImplementations(state, "StateTile");
    }

    function _deployLocalTokens(
        DeployementChain[] memory targetChains,
        LocalDistributor distributor
    ) internal broadcastOn(targetChains) {
        LocalTokenConfig[]
            memory localTokenDistribution = new LocalTokenConfig[](7);

        // localTokenDistribution[0] = LocalTokenConfig(
        //     TokenConfig(
        //         "Local Token: Barcelona",
        //         "LCTBC",
        //         "ipfs://bafkreiaxjhdgbdg7mekbsd4wd6z4y3ux2tto5qnqqwgepqzkjvvt7jdxei"
        //     ),
        //     "sp3"
        // );
        // localTokenDistribution[1] = LocalTokenConfig(
        //     TokenConfig(
        //         "Local Token: Cape Town",
        //         "LCTCT",
        //         "ipfs://bafkreifmcmsp6qhaohapi4em3bf5wbbd7nwgsw3lte4tv45zkxn5lnph5e"
        //     ),
        //     "k3v"
        // );
        // localTokenDistribution[2] = LocalTokenConfig(
        //     TokenConfig(
        //         "Local Token: Edinburgh",
        //         "LCTED",
        //         "ipfs://bafkreicloqi5w3jxnfi3frat56gnzin3ozbvyib7uczlczhkm4g7zjtu4q"
        //     ),
        //     "gcvw"
        // );
        // localTokenDistribution[3] = LocalTokenConfig(
        //     TokenConfig(
        //         "Local Token: Mexico City",
        //         "LCTMC",
        //         "ipfs://bafkreiawp5pskf6zezf265ijbc75dfuj7ajzyr2jz4egltn7gkrqiip5bu"
        //     ),
        //     "9g3"
        // );
        // localTokenDistribution[4] = LocalTokenConfig(
        //     TokenConfig(
        //         "Local Token: Milan",
        //         "LCTMN",
        //         "ipfs://bafkreibp5ojhp7zqe6vkqiatkukvtahqah4tgy5nw5fthsiwatlqfdxmpq"
        //     ),
        //     "u0n"
        // );
        // localTokenDistribution[5] = LocalTokenConfig(
        //     TokenConfig(
        //         "Local Token: Moscow",
        //         "LCTMS",
        //         "ipfs://bafkreif7ysl4izlga5vp3illmbvsuaz6db5p3y7wec3e26mwgplmldhj5e"
        //     ),
        //     "ucf"
        // );
        // localTokenDistribution[6] = LocalTokenConfig(
        //     TokenConfig(
        //         "Local Token: Mumbai",
        //         "LCTMB",
        //         "ipfs://bafkreietcuajxjcm2yh36vnzim3ifdk35pbv62qdvnpa73uzu5pp2ppw2y"
        //     ),
        //     "te7"
        // );
        // localTokenDistribution[7] = LocalTokenConfig(
        //     TokenConfig(
        //         "Local Token: New Delhi",
        //         "LCTND",
        //         "ipfs://bafkreigsktrnvathnvk27q47fsznywwdzikbzs76qdsbm7o6yrrs6jkwze"
        //     ),
        //     "ttnf"
        // );
        localTokenDistribution[0] = LocalTokenConfig(
            TokenConfig(
                "Local Token: San Fransisco",
                "LCTSF",
                "ipfs://bafkreicvq7caeijnspzwuvfrureqkcfbi6cugr7yts7ukijs3y4wq73oce"
            ),
            "9q8y"
        );
        localTokenDistribution[1] = LocalTokenConfig(
            TokenConfig(
                "Local Token: Sao Paulo",
                "LCTSP",
                "ipfs://bafkreifpunciicszzg5l7r274w4xfxxwalncceysn7rbur4d6oa2e5aw5a"
            ),
            "6gyc"
        );
        localTokenDistribution[2] = LocalTokenConfig(
            TokenConfig(
                "Local Token: Singapore",
                "LCTSG",
                "ipfs://bafkreielm6rofgn7vyopwrkscxqm7bqgopzr7yudfpytcjzgm6thizdn54"
            ),
            "w21z"
        );
        localTokenDistribution[3] = LocalTokenConfig(
            TokenConfig(
                "Local Token: Sydney",
                "LCTSY",
                "ipfs://bafkreiflrfzf6xpumsxktqbwad3opygmpxxmafcnvocnbg5umaufkzxpru"
            ),
            "r3gx"
        );
        localTokenDistribution[4] = LocalTokenConfig(
            TokenConfig(
                "Local Token: Titanic",
                "LCTTN",
                "ipfs://bafkreigun75442p3zdx7rxno3gwkmimkorxzmfo6rn6endyjp5rnalawda"
            ),
            "dzkw"
        );
        localTokenDistribution[5] = LocalTokenConfig(
            TokenConfig(
                "Local Token: Tokyo",
                "LCTTK",
                "ipfs://bafkreib6dvmns2he6vtfb4ftqsicms4tmugls7ea6o4g7xuaymaxdi2rje"
            ),
            "xn7"
        );
        localTokenDistribution[6] = LocalTokenConfig(
            TokenConfig(
                "Local Token: Tunis",
                "LCTTK",
                "ipfs://bafkreigllmtmt5see77ah7rij5rrgyuz6qin6o5mdysrs3h2g3rpztwb7i"
            ),
            "snx"
        );

        distributor.distribute(localTokenDistribution);
    }
}
