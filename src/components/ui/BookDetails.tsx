import { useGetBookQuery } from "@/features/bookApi";
import { useParams } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, User, } from "lucide-react";
import LoadingPage from "../Loading/LoadingPage";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetBookQuery(id!);

  if (isLoading) return <LoadingPage/>;
  if (!data) return <div>No book found</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Card className="shadow-xl rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={data?.img || "https://cdn.prod.website-files.com/620e4101b2ce12a1a6bff0e8/65dc34658080d1eaf1805e81_Open-book%20exam.jpg"}
              alt={data.title}
              className="w-60 h-80 object-cover rounded-xl shadow"
            />
          </div>

          {/* DETAILS */}
          <CardContent className="space-y-3">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <BookOpen size={22} /> {data.title}
            </h1>

            <p className="text-gray-600 flex items-center gap-2">
              <User size={18} /> Author: {data.author}
            </p>

            <p className="text-gray-700 leading-relaxed">
              {data.description}
            </p>

            <div className="pt-3 space-y-1">
              <p className="text-sm">
                <span className="font-semibold">Copies:</span> {data.copies}
              </p>
              <p className="text-sm">
                <span className="font-semibold">ISBN:</span> {data.isbn}
              </p>
            </div>

          
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default BookDetails;
