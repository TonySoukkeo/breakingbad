import { useState, useCallback } from "react";

const useDOMRefs = () => {
  const [refsState, setRefsState] = useState({});

  const setRefs = useCallback((node) => {
    setRefsState((prevState) => ({
      ...prevState,
      [node.dataset.refkey]: node,
    }));
  }, []);

  return [setRefs, refsState];
};

export default useDOMRefs;
