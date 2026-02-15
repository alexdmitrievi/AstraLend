"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function useDesktopMotion() {
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const mountFrame = window.requestAnimationFrame(() => {
      setIsMounted(true);
    });

    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => {
      window.cancelAnimationFrame(mountFrame);
      window.removeEventListener("resize", checkDesktop);
    };
  }, []);

  return {
    shouldAnimate: isMounted && !prefersReducedMotion,
    isDesktop,
    isMounted,
    prefersReducedMotion,
  };
}


