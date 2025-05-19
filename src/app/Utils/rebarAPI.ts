// /src/app/utils/rebarAPI.ts

export const fetchRebarData = async (endpoint: string) => {
    const response = await fetch(`https://shield.rebarlabs.io/v1/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
      },
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch data from Rebar");
    }
  
    return await response.json();
  };
  
  export const fetchTransactionStatus = async (txid: string) => {
    const response = await fetch(`https://shield.rebarlabs.io/v1/txstatus?txid=${txid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
      },
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch transaction status");
    }
  
    return await response.text(); // Transaction status (found or not)
  };
  
  export const sendRawTransaction = async (rawTx: string) => {
    const response = await fetch(`https://shield.rebarlabs.io/v1/rpc`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
      },
      body: JSON.stringify({
        jsonrpc: "1.0",
        id: "1",
        method: "sendrawtransaction",
        params: [rawTx], // Raw transaction hex
      }),
    });
  
    const data = await response.json();
    return data; // Return the transaction result or error
  };
  