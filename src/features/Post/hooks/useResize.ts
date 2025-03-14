import { useState, useEffect } from "react";

export function useResize(threshold: number = 500): boolean {
  const mediaQuery =
    typeof window !== "undefined"
      ? window.matchMedia(`(max-width: ${threshold}px)`)
      : null;
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(
    mediaQuery ? mediaQuery.matches : false
  );

  useEffect(() => {
    if (!mediaQuery) return;

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsMobileScreen(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, [mediaQuery]);

  return isMobileScreen;
}
