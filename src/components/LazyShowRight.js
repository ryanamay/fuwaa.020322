import {motion, useAnimation} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function LazyShowRight({ children }) {
  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef);
  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      });
    }
  }, [onScreen, controls]);
  return (
    <motion.div
      className="lazy-div mt-5"
      ref={rootRef}
      initial={{ opacity: 0, x: -10 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

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
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
}