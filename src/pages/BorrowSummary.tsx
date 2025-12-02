import LoadingPage from "@/components/Loading/LoadingPage";
import { useGetBorrowSummaryQuery } from "@/features/borrowApi";

const BorrowSummary = () => {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery();

  if (isLoading)
    return (
      <LoadingPage/>
    );

  if (isError)
    return (
      <div className="text-center py-10 text-lg text-red-600">
        Error fetching summary
      </div>
    );

  return (
    <div className="p-6 max-w-6xl mx-auto">

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">📊 Borrow Summary</h1>
        <p className="text-gray-500 mt-1 text-center">
          Overview of all borrowed books and total count.
        </p>
      </div>

      {/* Table start */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-4 text-left font-semibold text-gray-700">
                Book Title
              </th>
              <th className="p-4 text-left font-semibold text-gray-700">ISBN</th>
              <th className="p-4 text-left font-semibold text-gray-700">
                Total Borrowed
              </th>
            </tr>
          </thead>

          <tbody>
            {data?.map((row, idx) => (
              <tr
                key={idx}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4 text-gray-800 font-medium">
                  {row.bookTitle}
                </td>

                <td className="p-4 text-gray-600">{row.isbn}</td>

                <td className="p-4">
                  <span className="px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-700 rounded-full">
                    {row.totalQuantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
         {/* Table end*/}
      </div>
    </div>
  );
};

export default BorrowSummary;
