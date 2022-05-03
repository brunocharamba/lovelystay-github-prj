import React from "react";

function useFetch(endpoint, pageSize = null, page = null) {
  const [data, setData] = React.useState(null);
  const [status, setStatus] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!endpoint) return;

    const fetchUrl = async () => {
      try {
        const completeUrl = pageSize && page ? `https://api.github.com/users/${endpoint}?per_page=${pageSize}&page=${page}` : `https://api.github.com/users/${endpoint}`;
        console.log(completeUrl, pageSize, page);
        const response = await fetch(completeUrl);

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
  }, [endpoint, page]);

  return { data, status, error, isLoading };
}

export default useFetch;
