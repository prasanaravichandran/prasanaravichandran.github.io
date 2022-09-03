import { useEffect, useState } from 'react';

function useOnScreen(ref, rootMargin = '0px') {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin
        }
      );
      let refer = ref.current;
      if (refer) {
        observer.observe(refer);
      }
      return () => {
        observer.unobserve(refer);
      };
    });
  
  return isIntersecting;
}

export default useOnScreen;
