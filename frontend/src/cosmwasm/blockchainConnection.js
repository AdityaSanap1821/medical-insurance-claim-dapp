import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { assertIsBroadcastTxSuccess } from '@cosmjs/stargate';

// Blockchain connection parameters
const rpcEndpoint = "https://rpc-testnet.cosmwasm.com"; // Use testnet RPC endpoint
const chainId = "cosmoshub-testnet"; // Replace with appropriate chain ID

// Initialize wallet and client
export const initClient = async () => {
  const mnemonic = "your mnemonic here"; // Replace with user's mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
  const client = await SigningCosmWasmClient.connectWithSigner(rpcEndpoint, wallet);
  return client;
};

// Submit claim
export const submitClaim = async (claimData) => {
  const client = await initClient();
  const result = await client.execute(
    claimData.senderAddress, 
    claimData.contractAddress, 
    { submit_claim: { ...claimData } }, 
    "auto"
  );
  assertIsBroadcastTxSuccess(result);
  console.log("Claim submitted:", result);
};

// Get claim status
export const getClaimStatus = async (claimId) => {
  const client = await initClient();
  const result = await client.queryContractSmart(claimId, { get_status: {} });
  return result.status;
};

// Approve claim
export const approveClaim = async (claimId) => {
  const client = await initClient();
  const result = await client.execute(claimId, { approve: {} }, "auto");
  assertIsBroadcastTxSuccess(result);
  console.log("Claim approved");
};

// Reject claim
export const rejectClaim = async (claimId) => {
  const client = await initClient();
  const result = await client.execute(claimId, { reject: {} }, "auto");
  assertIsBroadcastTxSuccess(result);
  console.log("Claim rejected");
};

// Get transaction history
export const getTransactionHistory = async (claimId) => {
  const client = await initClient();
  const result = await client.queryContractSmart(claimId, { transaction_history: {} });
  return result.history;
};
