"use client";

import { useState, useEffect } from "react";
import { UserSession } from "@stacks/auth";
import { STACKS_TESTNET, STACKS_MAINNET } from "@stacks/network"; 
import PageLayout from "@/app/components/PageLayout";
import GardenScene from "@/app/components/GardenScene";

// Declaramos la constante de red correctamente
const network = STACKS_TESTNET;

const BalancePage = () => {
  const [balance, setBalance] = useState(0);
  const [selectedNetwork, setSelectedNetwork] = useState(network); // Usamos la constante network

  useEffect(() => {
    const fetchBalance = async () => {
      const userSession = new UserSession();
      const userData = userSession.loadUserData();
      if (userData) {
        const address = userData.profile.stxAddress;
        const balance = await fetchSbtcBalance(address, selectedNetwork);
        setBalance(balance);
      }
    };

    fetchBalance();
  }, [selectedNetwork]);

  // Función para obtener el balance de sBTC según la red seleccionada
  const fetchSbtcBalance = async (address: string, network: any) => {
    const response = await fetch(`https://stacks-node-api.mainnet.stacks.co/v2/accounts/${address}/balances`);
    const data = await response.json();
    return data.balance || 0;
  };

  // Cambiar la red seleccionada
  const handleNetworkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedNetwork(selected === "mainnet" ? STACKS_MAINNET : STACKS_TESTNET);
  };

  return (
    <PageLayout>
      <GardenScene zoom={0} theme="spring" />
      <div className="pt-[120px] text-center">
        <h1 className="text-3xl font-bold mb-6">Your sBTC Balance</h1>

        {/* Selector de red */}
        <div className="mb-6">
          <label htmlFor="network" className="text-lg font-semibold">Select Network</label>
          <select
            id="network"
            className="ml-4 p-2 border rounded"
            onChange={handleNetworkChange}
            value={selectedNetwork === STACKS_TESTNET ? "testnet" : "mainnet"}
          >
            <option value="testnet">Testnet</option>
            <option value="mainnet">Mainnet</option>
          </select>
        </div>

        <p className="text-lg">Current Balance: {balance} sBTC</p>
      </div>
    </PageLayout>
  );
};

export default BalancePage;
