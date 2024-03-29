# INTERN01-BACKEND-WEB3 Challenge

## Instructions

Create a Node JS Web API that contain the following endpoints:

`/nft/:walletAddress` - This queries a specific wallet on a given blockchain network and returns all owned NFTs

`/balance/:walletAddress` - This returns balance of a specific wallet address on a given blockchain network

You can utilize APIs such as Moralis or you can query using Ethers JS or similar packages.

Submit via GitHub public repository

## Overview

This repository contains the solution for the INTERN01-BACKEND-WEB3 internship challenge. The goal of this challenge is to create a Node.js Web API with specific endpoints that query a given blockchain network using Moralis.

## Requirements

- Node.js
- Moralis API Key
- Ethereum Wallet Address

## Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/Wyn-Christian/REBANAL-the-BLOKC-internship-challenge-backend.git
   cd REBANAL-the-BLOKC-internship-challenge-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

## Endpoints

### 1. `/nft/:walletAddress`

This endpoint queries a specific wallet on a given blockchain network and returns all owned NFTs.

- **Method:** GET
- **Parameters:**
  - `walletAddress` (string): Ethereum wallet address
- **Example Usage:**

  ```bash
  curl http://localhost:3000/nft/0xff3879b8a363aed92a6eaba8f61f1a96a9ec3c1e
  ```

  **Response:**

  ```json
  {
    "message": "Task 1 - Get NFTs owned by given wallet address",
    "address": "0xff3879b8a363aed92a6eaba8f61f1a96a9ec3c1e",
    "owned_nfts": [
      /* List of owned NFTs */
    ]
  }
  ```

### 2. `/balance/:walletAddress`

This endpoint returns the balance of a specific wallet address on a given blockchain network.

- **Method:** GET
- **Parameters:**
  - `walletAddress` (string): Ethereum wallet address
- **Example Usage:**

  ```bash
  curl http://localhost:3000/balance/0xff3879b8a363aed92a6eaba8f61f1a96a9ec3c1e
  ```

  **Response:**

  ```json
  {
    "message": "Task 2 - Get Balance by wallet address",
    "address": "0xff3879b8a363aed92a6eaba8f61f1a96a9ec3c1e",
    "balance": "12345678901234567890"
  }
  ```

## Additional Notes

- The `/demo` endpoint provides a sample usage of Moralis to get the native balance for a hardcoded wallet address on the Ethereum blockchain.
