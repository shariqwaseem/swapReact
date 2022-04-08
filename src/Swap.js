import React, { useState } from "react";
import Provider from "./service/provider";
import TokenContract from "./service/token-contract";
import RouterContract from "./service/router-contract";
import UniswapContract from "./service/uniswap-contract";
import { ethers } from "ethers";
import {
  WETH,
  Trade,
  Fetcher,
  TokenAmount,
  TradeType,
  Route,
  Percent,
} from "@uniswap/sdk";

function toHex(Amount) {
  return `0x${Amount.raw.toString(16)}`;
}

function Swap() {
  const [walletAddress, setWalletAddress] = useState("");
  const [etherBalance, setEtherBalance] = useState(0);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [tokenAmount, setTokenAmount] = useState("");
  const [etherAmount, setEtherAmount] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const connectClick = async (event) => {
    event.preventDefault();
    const provider = Provider.getInstance();
    await window.ethereum.request({ method: "eth_requestAccounts" });
    setIsConnected(true);
    const contract = TokenContract.getInstance();
    let signer = provider.getSigner();
    const address = await signer.getAddress();
    setWalletAddress(address);
    let balance = await provider.getBalance(address);
    setEtherBalance(ethers.utils.formatEther(balance));
    let tokBalance = await contract.balanceOf(address);
    setTokenBalance(
      ethers.utils.formatUnits(tokBalance, await contract.decimals())
    );
  };

  const etherChange = async (event) => {
    setEtherAmount(event.target.value);
    if (Number(event.target.value) > 0.000000000000000001) {
      const wethAmount = ethers.utils.parseUnits(event.target.value, 18);
      const uniswapContract = UniswapContract.getInstance();
      console.log("uniswapContract.chainId: ", uniswapContract.chainId);
      const pair = await Fetcher.fetchPairData(
        uniswapContract,
        WETH[uniswapContract.chainId]
      );
      console.log("pair: ", pair);

      const route = new Route([pair], WETH[uniswapContract.chainId]);
      console.log("route: ", route);

      const amountIn = wethAmount._hex;

      const trade = new Trade(
        route,
        new TokenAmount(WETH[uniswapContract.chainId], amountIn),
        TradeType.EXACT_INPUT
      );
      const slippageTolerance = new Percent("200", "10000"); // 50 bips, or 0.50%
      setTokenAmount(trade.minimumAmountOut(slippageTolerance).toExact());
    }
  };

  const tokenChange = (event) => {
    console.log("event: ", event.target.value);
  };
  const reverseSwap = async () => {
    // console.log('helo')
    // return
    const provider = Provider.getInstance();
    const address = walletAddress;
    let signer = provider.getSigner();

    const uniswapContract = UniswapContract.getInstance();

    const wethAmount = ethers.utils.parseUnits('20000', 9);

    const pair = await Fetcher.fetchPairData(
      uniswapContract,
      WETH[uniswapContract.chainId]
    );

    const route = new Route([pair], uniswapContract);

    const amountIn = wethAmount._hex;
    console.log("amountin", amountIn.toString());
    const trade = new Trade(
      route,
      new TokenAmount(uniswapContract, amountIn),
      TradeType.EXACT_INPUT
    );
    const slippageTolerance = new Percent("200", "10000"); // 50 bips, or 0.50%

    const amountOutMin = toHex(trade.minimumAmountOut(slippageTolerance)); // needs to be converted to e.g. hex

    const path = [
      uniswapContract.address,
      WETH[uniswapContract.chainId].address,
    ];

    const to = address; // should be a checksummed recipient address
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from the current Unix time
    const value = trade.inputAmount;

    let routerContract = RouterContract.getInstance();
    routerContract = routerContract.connect(signer);
    const gasPrice = await provider.getGasPrice();
    const gasEstimate =
      await RouterContract.getInstance().estimate.swapExactTokensForTokens(
        amountIn,
        amountOutMin,
        path,
        to,
        deadline,
        {
          value: toHex(value),
          gasPrice: gasPrice._hex,
        }
      );

    console.log("gasEstimate", gasEstimate);
    return;
    // console.log('gasEstimate: ', parseInt(gasEstimate._hex,16));
    // console.log('gasEstimate: ', parseInt(gasPrice._hex,16));
    await routerContract.swapExactTokensForTokens(
      amountIn,
      amountOutMin,
      path,
      to,
      deadline,
      {
        gasLimit: gasEstimate._hex,
        gasPrice: gasPrice._hex,
        // gasLimit: 800000,
        value: toHex(value),
      }
    );

    setEtherAmount("");
    setTokenAmount("");
  };
  const swap = async (event) => {
    event.preventDefault();
    const provider = Provider.getInstance();
    const address = walletAddress;
    let signer = provider.getSigner();

    const uniswapContract = UniswapContract.getInstance();

    const wethAmount = ethers.utils.parseUnits(etherAmount, 18);

    const pair = await Fetcher.fetchPairData(
      uniswapContract,
      WETH[uniswapContract.chainId]
    );

    const route = new Route([pair], WETH[uniswapContract.chainId]);

    const amountIn = wethAmount._hex;

    const trade = new Trade(
      route,
      new TokenAmount(WETH[uniswapContract.chainId], amountIn),
      TradeType.EXACT_INPUT
    );

    const slippageTolerance = new Percent("200", "10000"); // 50 bips, or 0.50%

    const amountOutMin = toHex(trade.minimumAmountOut(slippageTolerance)); // needs to be converted to e.g. hex
    const path = [
      WETH[uniswapContract.chainId].address,
      uniswapContract.address,
    ];
    const to = address; // should be a checksummed recipient address
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from the current Unix time
    const value = trade.inputAmount;

    let routerContract = RouterContract.getInstance();
    routerContract = routerContract.connect(signer);
    const gasPrice = await provider.getGasPrice();
    const gasEstimate =
      await RouterContract.getInstance().estimate.swapExactETHForTokens(
        amountOutMin,
        path,
        to,
        deadline,
        {
          value: toHex(value),
          gasPrice: gasPrice._hex,
        }
      );
    // console.log('gasEstimate: ', parseInt(gasEstimate._hex,16));
    // console.log('gasEstimate: ', parseInt(gasPrice._hex,16));
    await routerContract.swapExactETHForTokens(
      amountOutMin,
      path,
      to,
      deadline,
      {
        gasLimit: gasEstimate._hex,
        gasPrice: gasPrice._hex,
        // gasLimit: 800000,
        value: toHex(value),
      }
    );

    setEtherAmount("");
    setTokenAmount("");
  };

  return (
    <div>
      <button type="button" onClick={connectClick}>
        Connect
      </button>
      <p>Wallet Address: {walletAddress}</p>
      <p>Ether Balance: {etherBalance}</p>
      <p>Token Balance: {tokenBalance}</p>
      <form onSubmit={swap}>
        <label>Ether Amount</label>
        <input type="number" value={etherAmount} onChange={etherChange} />
        <br />
        <label>Token Amount</label>
        <input type="number" value={tokenAmount} onChange={tokenChange} />
        <br />
        <button disabled={!isConnected} type="submit">
          Swap Token
        </button>
      </form>
      <button disabled={!isConnected} onClick={reverseSwap}>
        Reverse Swap Token
      </button>
    </div>
  );
}

export default Swap;
