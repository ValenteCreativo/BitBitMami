"use client";

import { useState, useEffect } from "react";
import { connect } from '@stacks/connect'; 
import { WalletIcon } from '@bitcoin-design/bitcoin-icons-react/outline';

const Wallet = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

 
  const checkWalletConnection = async () => {
    const userData = localStorage.getItem('userData'); 
    if (userData) {
      const parsedData = JSON.parse(userData);
      if (parsedData && parsedData.addresses) {
        const address = parsedData.addresses[0]?.address;
        setWalletAddress(address || null);
      }
    }
  };

  useEffect(() => {
    checkWalletConnection(); 
  }, []);

  
  const handleConnectWallet = async () => {
    try {
      const response = await connect();
      if (response && response.addresses) {
        const address = response.addresses[0]?.address; 
        setWalletAddress(address || null);
      }
    } catch (error) {
      console.error("Connection failed", error);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-20 animate-fade-in">
      <button
        className="flex items-center gap-2 px-5 py-2 bg-[#D4AF37] text-white rounded-full shadow hover:brightness-110 transition text-sm md:text-base"
        onClick={handleConnectWallet} 
      >
        
        <WalletIcon style={{ height: "20px", width: "20px", color: '#FFFFFF' }} />
        {walletAddress ? "Wallet Connected" : "Connect Wallet"}
      </button>

      
      {walletAddress && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white">
          <p>Wallet Address: {walletAddress}</p>
        </div>
      )}
    </div>
  );
};

export default Wallet;
