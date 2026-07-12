import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getAmountOfUsers } from "./fetcher";
import { getQueryClient } from "@/lib/get-query-client";
import NonSuspendingData from "./non-suspending-data";
import SuspendingData from "./suspending-data";

export default async function Page() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(getAmountOfUsers());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <section>
          <h2>Non-suspending data:</h2>
          <NonSuspendingData />
        </section>
        <section>
          <h2>Suspending data:</h2>
          <SuspendingData />
        </section>
      </main>
    </HydrationBoundary>
  );
}
