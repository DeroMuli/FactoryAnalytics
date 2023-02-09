import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REST_URL } from "@env";
import type { fetcheddata_schema } from "../screens/HomeScreen";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: REST_URL }),
  endpoints: (builder) => ({
    getFactoryEquipmentsData: builder.query<Array<fetcheddata_schema>, void>({
      query: () => "",
    }),
  }),
});

export const { useGetFactoryEquipmentsDataQuery } = apiSlice;
