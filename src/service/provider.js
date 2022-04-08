import { ethers } from "ethers";
const Provider = (function () {
    "use strict";
    var instance; //prevent modification of "instance" variable
    function Singleton() {
        if (instance) {
            return instance
        }
        instance = new ethers.providers.Web3Provider(window.ethereum);
        return instance;
    }
    // Instance accessor
    Singleton.getInstance = function () {
        return instance || new Singleton();
    }
    return Singleton;
}());

export default Provider;