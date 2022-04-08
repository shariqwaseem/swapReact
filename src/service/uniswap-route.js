import UniswapContract from './uniswap-contract';
import {
    Fetcher,
    WETH,
    Route
} from "@uniswap/sdk";

const UniswapRoute = (function () {
    "use strict";
    var instance; //prevent modification of "instance" variable
    function Singleton() {
        if (instance) {
            return instance
        }
        const uniswapContract = UniswapContract.getInstance();
        return new Promise((resolve,reject) => {
            Fetcher.fetchPairData(uniswapContract, WETH[uniswapContract.chainId]).then((pair) => {
                instance = new Route([pair], WETH[uniswapContract.chainId]);
                resolve(instance);
            });
        })
    }
    // Instance accessor
    Singleton.getInstance = async function () {
        return instance || new Singleton();
    }
    return Singleton;
}());

export default UniswapRoute;