"use client";

import * as React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getAmountOfUsers } from "./fetcher";

const SuspendingData = ({}) => {
  return (
    <React.Suspense fallback={<em>Loading...</em>}>
      <SuspenseContent />
    </React.Suspense>
  );
};

const SuspenseContent = () => {
  const { data } = useSuspenseQuery(getAmountOfUsers());

  return <div>Amount of users: {data.amount}</div>;
};

export default SuspendingData;
