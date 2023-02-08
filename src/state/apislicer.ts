import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REST_URL } from "@env";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: REST_URL }),
  endpoints: (builder) => ({
    getFactoryEquipmentsData: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetFactoryEquipmentsDataQuery } = apiSlice;
