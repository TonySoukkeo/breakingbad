import { useEffect, useState, useCallback, useRef } from "react";

const useInfiniteScroll = (action, hasMore) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    action(page);
  }, [page, action]);

  const observer = useRef(null);

  const lastElement = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      const options = {
        threshold: 1,
      };

      const intersectionCb = (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      };

      observer.current = new IntersectionObserver(intersectionCb, options);

      if (node) {
        observer.current.observe(node);
      }
    },
    [hasMore, setPage]
  );

  return lastElement;
};

export default useInfiniteScroll;
