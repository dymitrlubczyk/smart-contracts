// SPDX-License-Identifier: MIT
pragma solidity 0.6.10;

import {ModularBurnableToken} from "../modularERC20/ModularBurnableToken.sol";

contract BurnableTokenMock is ModularBurnableToken {
    constructor(address initialAccount, uint256 initialBalance) public {
        _setBalance(initialAccount, initialBalance);
        totalSupply_ = initialBalance;
    }
}
