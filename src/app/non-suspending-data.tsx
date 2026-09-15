"use client";

import { useQuery } from "@tanstack/react-query";
import { amountOfUsersNonSuspenseQueryOptions } from "./fetcher";

const NonSuspendingData = () => {
  const { data } = useQuery(amountOfUsersNonSuspenseQueryOptions);

  if (data) {
    return <div>Amount of users: {data.amount}</div>;
  }

  return <em>Loading...</em>;
};

export default NonSuspendingData;
