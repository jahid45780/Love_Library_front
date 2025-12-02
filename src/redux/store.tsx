import { bookApi } from '@/features/bookApi'
import { borrowApi } from '@/features/borrowApi';
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
     [bookApi.reducerPath]: bookApi.reducer,
      [borrowApi.reducerPath]: borrowApi.reducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware, borrowApi.middleware),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch