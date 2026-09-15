"use client";

import * as React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { amountOfUsersSuspenseQueryOptions } from "./fetcher";

const SuspendingData = ({}) => {
  return (
    <React.Suspense fallback={<em>Loading...</em>}>
      <SuspenseContent />
    </React.Suspense>
  );
};

const SuspenseContent = () => {
  const { data } = useSuspenseQuery(amountOfUsersSuspenseQueryOptions);

  return <div>Amount of users: {data.amount}</div>;
};

export default SuspendingData;
