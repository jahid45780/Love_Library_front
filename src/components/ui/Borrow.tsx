/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetBookQuery } from "@/features/bookApi";
import { useBorrowBookMutation } from "@/features/borrowApi";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarDays, BookOpenCheck } from "lucide-react";
import LoadingPage from "../Loading/LoadingPage";
import toast from "react-hot-toast";


const Borrow = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { data, isLoading } = useGetBookQuery(bookId!);
  const [borrowBook] = useBorrowBookMutation();
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState<string>("");
  const navigate = useNavigate();

  if (isLoading) return <LoadingPage/>;

  const book = data as any;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (quantity > (book.copies || 0)) {
      
      toast.error("Quantity exceeds available copies")
      return;
    }
    try {
      await borrowBook({ bookId: book._id, quantity, dueDate }).unwrap();
      navigate("/borrow-summary");
    } catch {
      alert("Borrow failed");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <Card className="shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <BookOpenCheck size={22} />
            Borrow Book
          </CardTitle>
          <p className="text-gray-500 text-center text-sm mt-1">
            {book.title} — Available copies: {book.copies}
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={submit} className="space-y-5">
            {/* Quantity */}
            <div className="space-y-1">
              <Label className="font-medium">Quantity</Label>
              <Input
                type="number"
                min={1}
                max={book.copies || 1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="mt-1"
              />
            </div>

            {/* Due Date */}
            <div className="space-y-1">
              <Label className="font-medium flex items-center gap-2">
                <CalendarDays size={18} /> Due Date
              </Label>
              <Input
                type="date"
                value={dueDate}
                required
                onChange={(e) => setDueDate(e.target.value)}
                className="mt-1"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold mt-3"
            >
              Borrow Book
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Borrow;
