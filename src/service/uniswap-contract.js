import constants from './../config/constants.json';

import {
    ChainId,
    Token
} from "@uniswap/sdk";

const UniswapContract = (function () {
    "use strict";
    var instance; //prevent modification of "instance" variable
    function Singleton() {
        if (instance) {
            return instance
        }
        instance = new Token(
            ChainId[constants.networkKey],
            constants.tokenAddress,
            constants.contractDecimal
          );
        return instance;
    }
    // Instance accessor
    Singleton.getInstance = function () {
        return instance || new Singleton();
    }
    return Singleton;
}());

export default UniswapContract;