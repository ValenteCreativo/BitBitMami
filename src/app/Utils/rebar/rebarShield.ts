// src/app/Utils/rebar/rebarShield.ts

interface TxData {
  hex: string; // Raw hex transaction
}

interface PaymentInfo {
  pool: string;
  relay: string;
  version: string;
  // Puedes expandir esto si conoces más claves en la respuesta
}

interface RpcResponse {
  result?: string;
  error?: { code: number; message: string };
  id: string;
}

interface TxStatusResponse {
  status: string;
  found: boolean;
}

export const fetchPaymentInfo = async (): Promise<PaymentInfo> => {
  const response = await fetch("https://shield.rebarlabs.io/v1/info", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: PaymentInfo = await response.json();
  return data;
};

export const sendTransactionToPool = async (txData: TxData): Promise<RpcResponse> => {
  const response = await fetch("https://shield.rebarlabs.io/v1/rpc", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "1.0",
      id: "shield",
      method: "sendrawtransaction",
      params: [txData.hex],
    }),
  });

  const data: RpcResponse = await response.json();
  return data;
};

export const getTransactionStatus = async (txid: string): Promise<TxStatusResponse> => {
  const response = await fetch(`https://shield.rebarlabs.io/v1/txstatus?txid=${txid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: TxStatusResponse = await response.json();
  return data;
};
