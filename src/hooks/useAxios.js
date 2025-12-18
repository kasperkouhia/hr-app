import { useEffect, useState } from "react";
import axios from "axios";

export default function useAxios(url, method = "get", content = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = content
          ? await axios[method](url, content)
          : await axios[method](url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [url, content, method]);

  return { data, loading, error };
}
