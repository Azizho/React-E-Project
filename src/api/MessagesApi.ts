import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MessagesApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
    }),
    endpoints: builds => ({
        getMessages: builds.query({
            query: () => "/data",
        }),
    }),
});

export const { useGetMessagesQuery } = MessagesApi;
