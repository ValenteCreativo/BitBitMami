

const REBAR_API_KEY = process.env.REBAR_API_KEY || "your_api_key_here";


export const fetchRebarData = async (endpoint: string) => {
  const response = await fetch(`https://api.rebardata.com/v1/${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${REBAR_API_KEY}`,
    },
  });

  const data = await response.json();
  return data;
};
