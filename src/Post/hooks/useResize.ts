import { useState, useEffect } from "react";

export function useResize(threshold: number = 500): boolean {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(
    window.innerWidth <= threshold
  );

  const handleResize = () => {
    setIsMobileScreen(window.innerWidth <= threshold);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [threshold]);

  return isMobileScreen;
}
