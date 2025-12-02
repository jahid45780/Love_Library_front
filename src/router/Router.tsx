import App from "@/App";
import BookDetails from "@/components/ui/BookDetails";
import Borrow from "@/components/ui/Borrow";
import EditBook from "@/components/ui/EditBook";
import AddBooks from "@/pages/AddBooks";
import Books from "@/pages/Books";
import BorrowSummary from "@/pages/BorrowSummary";
import Home from "@/pages/Home";

import { createBrowserRouter } from "react-router";



 export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/> ,
    children:[
      {
         path:'/',
         element:<Home/>
      },
        {
         path:'/books',
         element:<Books/>
          },
         
          {
            path:'/books/:id',
            element:<BookDetails/>
          },
          {
            path:'/edit-book/:id',
            element:<EditBook/>
          },
          {
            path:'/borrow/:bookId',
            element:<Borrow/>
          },
          {
            path:'/create-book',
            element:<AddBooks/>
          },
          {
            path:'/borrow-summary',
            element:<BorrowSummary/>
          }

          
        ]
  },
]);