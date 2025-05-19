import { UserSession } from "@stacks/auth";
import { STACKS_TESTNET } from "@stacks/network"; // Usamos la constante correcta para la red

// Simulamos el proceso de envío de sBTC sin acceder a la clave privada real
export const sendSbtc = async (recipient: string, amount: number) => {
  const userSession = new UserSession();
  const userData = userSession.loadUserData();

  if (!userData) {
    throw new Error("User is not authenticated.");
  }

  const senderAddress = userData.profile.stxAddress;

  // Simulación de la transacción (no usamos privateKey ni authKey)
  console.log(`Simulando transacción: ${amount} sBTC desde ${senderAddress} a ${recipient}`);

  // En lugar de usar una clave privada real, simulamos la creación de una transacción
  const transaction = {
    senderKey: "simulated_private_key", // Simulamos una clave privada
    recipient,
    amount,
    fee: 1000,
    network: STACKS_TESTNET,
  };

  // Simulamos el broadcast de la transacción (sin enviarla a la red)
  const response = { txid: "simulated_txid_123456" }; // Simulamos una txid
  return response.txid; // Retornamos la txid simulada
};
