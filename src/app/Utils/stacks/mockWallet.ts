export const simulateTransaction = (from: string, to: string, amount: number): string => {
    console.log(`Sending ${amount} sBTC from ${from} to ${to}...`);
    const txid = `mock_txid_${Math.floor(Math.random() * 1000000)}`;
    console.log(`Transaction completed. TXID: ${txid}`);
    return txid;
  };
  