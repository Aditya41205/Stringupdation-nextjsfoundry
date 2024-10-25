import { ethers } from 'ethers';

const contractAddress =0xAf66A8DAB8a1b3C476642677A192A97f7680dD9B;
const contractABI= [
    {
      "type": "function",
      "name": "_string",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "daap",
      "inputs": [
        {
          "name": "string_",
          "type": "string",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    }
  ];

  let contract;

export const connectToContract = async () => {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);
    } else {
        console.error("Ethereum provider not found");
    }
};

export const updateString = async (newString) => {
    if (contract) {
        const tx = await contract.daap(newString);
        await tx.wait(); // Wait for the transaction to be mined
    }
};

export const getString = async () => {
    if (contract) {
        return await contract._string(); // Fetch the current string from the contract
    }
};
