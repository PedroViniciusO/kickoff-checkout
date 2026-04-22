import { useCallback, useRef } from "react";

/**
 * Returns a click handler that blocks accidental rapid repeated clicks.
 * Kept intentionally short to preserve normal interactions.
 */
export function useDebounceClick<T extends (...args: any[]) => void>(
  handler: T,
  delayMs: number = 300
): T {
  const lastCall = useRef(0);

  return useCallback(
    ((...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCall.current <= delayMs) return;
      lastCall.current = now;
      handler(...args);
    }) as T,
    [handler, delayMs]
  );
}
