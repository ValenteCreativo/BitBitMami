import { UserSession } from "@stacks/auth";

// Simulación de envío de sBTC (sin claves privadas reales)
export const sendSbtc = async (recipient: string, amount: number): Promise<string> => {
  const userSession = new UserSession();
  const userData = userSession.loadUserData();

  if (!userData || !userData.profile?.stxAddress?.testnet) {
    throw new Error("User is not authenticated or address not available.");
  }

  const senderAddress = userData.profile.stxAddress.testnet;

  console.log(`Simulating transaction from ${senderAddress} to ${recipient} for ${amount} sBTC`);

  const fakeTxId = `simulated_txid_${Math.random().toString(36).substring(2, 12)}`;
  return Promise.resolve(fakeTxId);
};
