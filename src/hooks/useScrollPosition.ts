// src/hooks/useScrollPosition.ts
import { useEffect, useState } from 'react';

const useScrollPosition = (ref: React.RefObject<HTMLElement>) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setScrollPosition(ref.current.scrollTop);
      }
    };

    const element = ref.current;
    element?.addEventListener('scroll', handleScroll);

    return () => {
      element?.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return scrollPosition;
};

export default useScrollPosition;