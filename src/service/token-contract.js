import { ethers } from "ethers";
import tokenAbi from './../config/token-abi.json';
import constants from './../config/constants.json';
import Provider from './provider';
const TokenContract = (function () {
    "use strict";
    var instance; //prevent modification of "instance" variable
    function Singleton() {
        if (instance) {
            return instance
        }
        instance = new ethers.Contract(constants.tokenAddress,tokenAbi,Provider.getInstance());
        return instance;
    }
    // Instance accessor
    Singleton.getInstance = function () {
        return instance || new Singleton();
    }
    return Singleton;
}());

export default TokenContract;