import type { Book } from '@/types/book';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    getBooks: builder.query<{ data: Book[]; total?: number }, { page?: number; limit?: number } | void>({
      query: (params) => {
        const q = params ? `?page=${params.page||1}&limit=${params.limit||100}` : '';
        return `/books${q}`;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({ type: 'Books' as const, id: _id })),
              { type: 'Books', id: 'LIST' },
            ]
          : [{ type: 'Books', id: 'LIST' }],
    }),
    getBook: builder.query<Book, string>({
      query: (id) => `/books/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Books', id }],
    }),
    createBook: builder.mutation<Book, Partial<Book>>({
      query: (body) => ({ url: '/books/createBook', method: 'POST', body }),
      invalidatesTags: [{ type: 'Books', id: 'LIST' }],
    }),
    updateBook: builder.mutation<Book, { id: string; data: Partial<Book> }>({
      query: ({ id, data }) => ({ url: `/books/${id}`, method: 'PATCH', body: data }),
      invalidatesTags: (_result, _error, arg) => [{ type: 'Books', id: arg.id }, { type: 'Books', id: 'LIST' }],
    }),
    deleteBook: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({ url: `/books/${id}`, method: 'DELETE' }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Books', id }, { type: 'Books', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
