import { queryOptions } from "@tanstack/react-query";

async function getAmountOfUsers() {
    await new Promise((resolve) => setTimeout(resolve, 1));
    return {
        amount: 10,
    };
}

export const amountOfUsersNonSuspenseQueryOptions = queryOptions({
    queryKey: ["users", "amount", "non-suspense"],
    queryFn: getAmountOfUsers,
});

export const amountOfUsersSuspenseQueryOptions = queryOptions({
    queryKey: ["users", "amount", "suspense"],
    queryFn: getAmountOfUsers,
});
