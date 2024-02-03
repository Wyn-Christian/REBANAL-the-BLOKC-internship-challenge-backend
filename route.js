const express = require("express");
const router = express.Router();
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const sample_address = "0xff3879b8a363aed92a6eaba8f61f1a96a9ec3c1e";
const chain = EvmChain.ETHEREUM;

router.get("/demo", async (req, res) => {
  const response = await Moralis.EvmApi.balance.getNativeBalance({
    address: sample_address,
    chain,
  });

  const native = response.result.balance.ether;

  res.status(200).json({ native });
});

// Task 1: This queries a specific wallet on a given blockchain network and returns all owned NFTs
router.get("/nft/:walletAddress", async (req, res) => {
  const walletAddress = req.params.walletAddress;

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    chain: "0x1",
    format: "decimal",
    mediaItems: false,
    address: walletAddress,
  });

  res.send({
    message: "Task 1 - Get NFTs owned by given wallet address",
    address: walletAddress,
    owned_nfts: response.result,
  });
});

// Task 2: This returns balance of a specific wallet address on a given blockchain network
router.get("/balance/:walletAddress", async (req, res) => {
  const walletAddress = req.params.walletAddress;

  const response = await Moralis.EvmApi.balance.getNativeBalance({
    chain,
    address: walletAddress,
  });

  res.send({
    message: "Task 2 - Get Balance by wallet address",
    address: walletAddress,
    balance: response.raw.balance,
  });
});

module.exports = router;
