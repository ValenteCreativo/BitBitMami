// /src/app/utils/rebarShield.ts
export const fetchPaymentInfo = async () => {
    const response = await fetch("https://shield.rebarlabs.io/v1/info", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const data = await response.json();
    return data;
  };
  
  export const sendTransactionToPool = async (txData: any) => {
    const response = await fetch("https://shield.rebarlabs.io/v1/rpc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "1.0",
        id: "shield",
        method: "sendrawtransaction",
        params: [txData],
      }),
    });
  
    const data = await response.json();
    return data;
  };
  
  export const getTransactionStatus = async (txid: string) => {
    const response = await fetch(`https://shield.rebarlabs.io/v1/txstatus?txid=${txid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const data = await response.json();
    return data;
  };
  