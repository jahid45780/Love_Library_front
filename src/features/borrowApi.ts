import type { Borrow } from '@/types/borrow';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ReactNode } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const borrowApi = createApi({
  reducerPath: 'borrowApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ['Borrows', 'Books'],

  endpoints: (builder) => ({

    
    borrowBook: builder.mutation<
      Borrow,
      { bookId: string; quantity: number; dueDate: string }
    >({
      query: (body) => ({
        url: '/borrows',     
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Borrows', 'Books'],
    }),

   
    getBorrowSummary: builder.query<
      Array<{
          bookTitle: ReactNode; title: string; isbn?: string; totalQuantity: number 
}>,
      void
    >({
      query: () => '/borrows/summary',   
      providesTags: ['Borrows'],
    }),
  }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApi;
