import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const Base_URL = "https://jsonplaceholder.typicode.com";

type poki = {
  name: string;
  url: string;
};

const Base_URL2 = "https://pokeapi.co/api/v2/pokemon";

export const todos = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: Base_URL }),
  endpoints: (builder) => ({
    getTodoData: builder.query<Todo, undefined>({
      query: () => "/todos/1",
    }),
  }),
});

export const pokimonApi = createApi({
  reducerPath: "pokimonApi",
  baseQuery: fetchBaseQuery({ baseUrl: Base_URL2 }),
  endpoints: (builder) => ({
    getPokimonData: builder.query<poki, undefined>({
      query: () => "/1",
    }),
  }),
});

export const { useGetTodoDataQuery } = todos;
export const { useGetPokimonDataQuery } = pokimonApi;
