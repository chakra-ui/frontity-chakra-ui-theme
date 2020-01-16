import {
  useRef,
  useLayoutEffect,
  useEffect,
  useState,
  useCallback
} from "react";

// check if we're in a browser or server environment
const isBrowser = typeof window !== `undefined`;

// use the correct effect
const useEnhancedEffect = isBrowser ? useLayoutEffect : useEffect;

// get window scroll position
function getScrollPosition() {
  if (!isBrowser) return { x: 0, y: 0 };
  return { x: window.scrollX, y: window.scrollY };
}

function useScrollEffect(effect) {
  // ref to keep track of timeout id
  const timeoutRef = useRef(null);

  // useCallback to keep the function reference the same
  // as long as `effect` stays the same
  const update = useCallback(() => {
    // get new scroll position
    const position = getScrollPosition();

    // run effect with current position
    effect && effect(position);
  }, [effect]);

  useEnhancedEffect(() => {
    // run effect on mount
    update();

    // run effect as well scroll every 200ms
    const handleScroll = () => {
      timeoutRef.current = setTimeout(update, 200);
    };

    // attach scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // perf: remove the event listener
      window.removeEventListener("scroll", handleScroll);

      // perf: if timeout still exists, clear it
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
}

function useScrollProgress() {
  // create ref to track node's scrollHeight
  const ref = useRef(null);

  // state to store the scroll progress
  const [progress, setProgress] = useState(0);

  // let's use the sweet effect :)
  useScrollEffect(scrollPos => {
    // if there's no node, don't do anything 'coz there's no point
    if (!ref.current) return;

    // else, calculate the scroll percent
    const percent = (scrollPos.y / ref.current.scrollHeight) * 100;

    // update the state
    setProgress(percent);
  });

  // return the goods :)
  return [ref, progress];
}

export default useScrollProgress;
