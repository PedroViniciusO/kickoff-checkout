import { useCallback, useRef } from "react";

/**
 * Returns a click handler that blocks rapid repeated clicks (rate limiting).
 * @param handler - The actual handler to execute
 * @param delayMs - Cooldown period in milliseconds (default 1000ms)
 */
export function useDebounceClick<T extends (...args: any[]) => void>(
  handler: T,
  delayMs: number = 1000
): T {
  const lastCall = useRef(0);

  return useCallback(
    ((...args: any[]) => {
      const now = Date.now();
      if (now - lastCall.current < delayMs) return;
      lastCall.current = now;
      handler(...args);
    }) as T,
    [handler, delayMs]
  );
}
