import { useRef, useLayoutEffect, useEffect } from "react";

const isBrowser = typeof window !== `undefined`;
const useEnhancedEffect = isBrowser ? useLayoutEffect : useEffect;

function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
}

function useScrollPosition(
  effect,
  element,
  deps = [],
  useWindow = true,
  wait = 200
) {
  const position = useRef(getScrollPosition({ useWindow }));

  let throttleTimeout = null;

  useEnhancedEffect(() => {
    callBack();
  }, []);

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useEnhancedEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, deps);
}

export default useScrollPosition;
