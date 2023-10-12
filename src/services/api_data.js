import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dataBase_Url } from "../firebase/dataBase";

export const api_data = createApi({
  reducerPath: "api_data",
  baseQuery: fetchBaseQuery({
    baseUrl: dataBase_Url,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories.json",
    }),
    getProducts: builder.query({
      query: () => "products.json",
    }),
    //Query de acceso a imagen en DB
    getImage: builder.query({
      query: () => "image.json",
    }),
    //Query para enviar imagen a DB
    putImage: builder.mutation({
      query: (image)=>({
        url: 'image.json',
        method: 'PUT',
        body: image,
      })
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery, useGetImageQuery, usePutImageMutation, } = api_data;
