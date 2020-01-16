import { useRef, useLayoutEffect, useEffect, useState } from "react";

const isBrowser = typeof window !== `undefined`;
const useEnhancedEffect = isBrowser ? useLayoutEffect : useEffect;

function getScrollPosition() {
  if (!isBrowser) return { x: 0, y: 0 };
  return { x: window.scrollX, y: window.scrollY };
}

function useScrollEffect(effect) {
  const scrollPos = useRef(getScrollPosition());

  let timeoutId = null;

  const update = () => {
    const currPos = getScrollPosition();
    effect && effect(currPos);
    scrollPos.current = currPos;
    timeoutId = null;
  };

  useEnhancedEffect(() => {
    update();
    const handleScroll = () => {
      if (timeoutId == null) timeoutId = setTimeout(update, 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);
}

function useScrollProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useScrollEffect(scrollPos => {
    const percent = (scrollPos.y / ref.current.scrollHeight) * 100;
    setProgress(percent);
  });

  return [ref, progress];
}

export default useScrollProgress;
