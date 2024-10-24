// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";
import {STRINGUPDATION} from "../src/StringUpadtion.sol";

//Deployed on =0xAf66A8DAB8a1b3C476642677A192A97f7680dD9B

contract DeployContract is Script{
      function run() external returns(STRINGUPDATION){
        STRINGUPDATION deploy;
        vm.startBroadcast();
        deploy= new STRINGUPDATION();
        vm.stopBroadcast();
        return deploy;
      }
}