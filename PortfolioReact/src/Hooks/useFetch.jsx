import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuotes = async () => {
      try {
        const response = await fetch(url);
        const quotes = await response.json();
        setData(quotes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    loadQuotes();
  }, [url]);

  return {
    data,
    loading,
  };
}

export default useFetch;
