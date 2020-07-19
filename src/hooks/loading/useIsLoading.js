import { useEffect, useState } from "react";

const useIsLoading = (value = true) => {
  const [loading, setLoading] = useState(value);

  useEffect(() => {
    setLoading(value);
  }, [value]);

  return loading;
};

export default useIsLoading;
