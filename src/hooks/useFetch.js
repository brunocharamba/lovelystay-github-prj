import React from "react";

function useFetch(url) {
  const [data, setData] = React.useState(null);
  const [status, setStatus] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!url) return;

    const fetchUrl = async () => {
      try {
        const response = await fetch(url);

        setStatus(response.status);

        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUrl();
  }, [url]);

  return { data, status, error, isLoading };
}

export default useFetch;
