// /src/app/utils/rebarData.ts

export const getRebarData = async () => {
    try {
      const response = await fetch("https://api.rebardata.com/v1/bitcoin/price"); // Asegúrate de reemplazar esta URL con la correcta
      const data = await response.json();
      
      return {
        price: data.price,
        marketCap: data.market_cap,
        priceHistory: data.price_history, // Asegúrate de que la API devuelve los datos correctos para esto
      };
    } catch (error) {
      console.error("Error fetching Rebar data:", error);
      return { price: 0, marketCap: 0, priceHistory: [] }; // Datos predeterminados en caso de error
    }
  };
  