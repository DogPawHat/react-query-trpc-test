import { Suspense } from "react";
import { HydrationBoundary, dehydrate, noop } from "@tanstack/react-query";
import { amountOfUsersNonSuspenseQueryOptions, amountOfUsersSuspenseQueryOptions } from "./fetcher";
import { getQueryClient } from "@/lib/get-query-client";
import { HydrationDelay } from "./hydration-delay";
import NonSuspendingData from "./non-suspending-data";
import SuspendingData from "./suspending-data";

export default async function Page() {
  const queryClient = getQueryClient();

  void queryClient.query(amountOfUsersNonSuspenseQueryOptions).catch(noop);
  void queryClient.query(amountOfUsersSuspenseQueryOptions).catch(noop);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <section>
          <h2>Non-suspending data:</h2>
          <Suspense fallback={<em>Loading hydration boundary...</em>}>
            <HydrationDelay>
              <NonSuspendingData />
            </HydrationDelay>
          </Suspense>
        </section>
        <section>
          <h2>Suspending data:</h2>
          <SuspendingData />
        </section>
      </main>
    </HydrationBoundary>
  );
}
