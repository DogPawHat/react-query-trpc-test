
"use client";

import { useQuery, } from "@tanstack/react-query";
import { getAmountOfUsers } from "./fetcher";

const NonSuspendingData = () => {
  const { data } = useQuery(getAmountOfUsers());

  if (data) {
    return <div>Amount of users: {data.amount}</div>;
  }

  return <em>Loading...</em>;
};

export default NonSuspendingData;
