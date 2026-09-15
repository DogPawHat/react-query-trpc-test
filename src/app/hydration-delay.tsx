"use client";

import { use, type ReactNode } from "react";

const CLIENT_HYDRATION_DELAY_MS = 1_000;

// This module is evaluated separately for the server and browser bundles. The
// server renders the children immediately, while the browser suspends their
// first hydration render long enough for the streamed query promise to settle.
const clientHydrationDelay =
  typeof window === "undefined"
    ? null
    : new Promise<void>((resolve) => {
        window.setTimeout(resolve, CLIENT_HYDRATION_DELAY_MS);
      });

export function HydrationDelay({ children }: { children: ReactNode }) {
  if (clientHydrationDelay) {
    use(clientHydrationDelay);
  }

  return children;
}
