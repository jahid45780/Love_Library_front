import LoadingPage from "@/components/Loading/LoadingPage";
import { useDeleteBookMutation, useGetBooksQuery } from "@/features/bookApi";
import type { Book } from "@/types/book";
import toast from "react-hot-toast";

import { Link } from "react-router";

const Books = () => {

     const { data, isLoading, isError } = useGetBooksQuery(undefined);
  const [deleteBook] = useDeleteBookMutation();

  if (isLoading) return <LoadingPage/>;
  if (isError) return <div>Error loading books</div>;

  const books = data?.data ?? [];

    return (
        <div>
           <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">📚 Books List</h1>
        <Link
          to="/create-book"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          + Add Book
        </Link>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
        <table className="min-w-full text-sm">
          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-700 border-b">
            <tr>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Author</th>
              <th className="p-4 text-left">ISBN</th>
              <th className="p-4 text-left">Copies</th>
              <th className="p-4 text-left">Available</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {books.map((b: Book) => (
              <tr
                key={b._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium">{b.title}</td>
                <td className="p-4">{b.author}</td>
                <td className="p-4">{b.isbn}</td>
                <td className="p-4">{b.copies}</td>

                {/* Status Badge */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      b.copies > 0
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {b.copies > 0 ? "Available" : "Not Available"}
                  </span>
                </td>

                {/* Action Buttons */}
                <td className="p-4 space-x-3">

                  <Link
                    to={`/books/${b._id}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    View
                  </Link>

                  <Link
                    to={`/edit-book/${b._id}`}
                    className="text-yellow-600 hover:text-yellow-800 font-semibold"
                  >
                    Edit
                  </Link>

                  <Link
                    to={`/borrow/${b._id}`}
                    className="text-green-600 hover:text-green-800 font-semibold"
                  >
                    Borrow
                  </Link>

                  <button
    onClick={() => {
    const bookId = b._id; 
    toast.custom((t) => (
      <div className={`${t.visible ? 'animate-custom-enter' : 'animate-custom-leave'} max-w-md w-full bg-white shadow-lg rounded-lg flex ring-1 ring-black ring-opacity-5`}>
        <div className="flex-1 w-0 p-4">
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">Confirm Deletion</p>
            <p className="mt-1 text-sm text-gray-500">Are you sure you want to delete this Book? This Book cannot be undone.</p>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={async () => {
                await deleteBook(bookId!); 
                toast.dismiss(t.id);      
                toast.success("Book deleted successfully"); 
              }}
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-500"
            >
              Delete
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    ));
  }}
  className="text-red-600 hover:text-red-800 font-semibold"
>
  Delete
</button>


                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default Books;