import { useState } from "react";

export function usePinnedState() {
  const [isChangePinnedState, setIsChangePinnedState] =
    useState<boolean>(false);

  const togglePinnedState = () => {
    setIsChangePinnedState((prev) => !prev);
  };

  return { isChangePinnedState, togglePinnedState };
}
