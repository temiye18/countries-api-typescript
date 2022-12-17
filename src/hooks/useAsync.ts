import { useState, useCallback } from "react";
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [countries, setCountries] = useState<any[]>([]);

  const fetchCountries = useCallback(
    async (url: string, endpoint: string = "all") => {
      setIsLoading(true);
      try {
        const resp = await fetch(`${url}/${endpoint}`);
        if (!resp.ok) {
          const msg = `There was an error: ${resp.status} ${resp.statusText}`;
          throw new Error(msg);
        }
        const data = await resp.json();
        setCountries(data);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(error.message);
      }
    },
    []
  );

  return { isLoading, isError, countries, fetchCountries, errorMessage };
};

export default useHttp;
