import { ethers } from "ethers";
import contractAbi from './../config/router-abi.json';
import constants from './../config/constants.json';
import Provider from './provider';

const RouterContract = (function () {
    "use strict";
    var instance; //prevent modification of "instance" variable
    function Singleton() {
        if (instance) {
            return instance
        }
        instance = new ethers.Contract(constants.routerAddress,contractAbi,Provider.getInstance());
        return instance;
    }
    // Instance accessor
    Singleton.getInstance = function () {
        return instance || new Singleton();
    }
    return Singleton;
}());

export default RouterContract;