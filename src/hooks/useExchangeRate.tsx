import { useEffect, useState } from "react";

export function useExchangeRate() {
  const [rate, setRate] = useState<number>(1600);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch(
          "https://open.er-api.com/v6/latest/USD"
        );
        const data = await res.json();

        if (data?.rates?.NGN) {
          setRate(data.rates.NGN);
        }
      } catch (err) {
        console.error("Failed to fetch rate", err);
        // fallback stays 1600
      } finally {
        setLoading(false);
      }
    };

    fetchRate();
  }, []);

  return { rate, loading };
}