// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.28;

import {Test} from "forge-std/test.sol";
import {STRINGUPDATION} from "../src/StringUpadtion.sol";
import {DeployContract} from "../script/DeployStringUpadtion.s.sol";

contract testContract is Test{
    DeployContract public deployer;
    STRINGUPDATION public ourContract;

    
    function setUp() public {
        deployer= new DeployContract();
        ourContract= deployer.run();

    }

    function testStringupdation() public {
        ourContract.daap("Alice");
        assertEq(ourContract._string(), "Alice");
    }
}