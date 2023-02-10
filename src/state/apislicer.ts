import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REST_URL } from "@env";
import type { fetcheddata_schema } from "../screens/HomeScreen";

const day_in_seconds = 60 * 60 * 24;

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: REST_URL }),
  endpoints: (builder) => ({
    getFactoryEquipmentsData: builder.query<Array<fetcheddata_schema>, void>({
      query: () => "",
      keepUnusedDataFor: day_in_seconds,
    }),
  }),
});

export const { useGetFactoryEquipmentsDataQuery } = apiSlice;
