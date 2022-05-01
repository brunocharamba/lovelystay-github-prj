import React from "react";

function useFetchUser(userId) {
  const [data, setData] = React.useState(null);
  const [status, setStatus] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!userId) return;

    const fetchUrl = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${userId}`);

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
  }, [userId]);

  return { data, status, error, isLoading };
}

export default useFetchUser;
