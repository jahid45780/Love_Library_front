/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetBookQuery, useUpdateBookMutation } from "@/features/bookApi";
import type { Book } from "@/types/book";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import LoadingPage from "../Loading/LoadingPage";
import toast from "react-hot-toast";

const EditBook = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetBookQuery(id!);
  const [updateBook] = useUpdateBookMutation();
  const [form, setForm] = useState<Partial<Book>>({});
  const navigate = useNavigate();

  useEffect(() => {
    if (data) setForm(data as Book);
  }, [data]);

  if (isLoading) return <LoadingPage/>;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    try {
      await updateBook({ id, data: form }).unwrap();
      navigate("/books");
    } catch {
      
      toast.error("Update error")
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
           📗 Edit Book
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={submit} className="space-y-5">
            {/* Title */}
            <div>
              <Label className="font-semibold">Title</Label>
              <Input
                required
                value={form.title || ""}
                onChange={(e: { target: { value: any; }; }) =>
                  setForm({ ...form, title: e.target.value })
                }
                placeholder="Book title"
                className="mt-1"
              />
            </div>

            {/* Author */}
            <div>
              <Label className="font-semibold">Author</Label>
              <Input
                required
                value={form.author || ""}
                onChange={(e: { target: { value: any; }; }) =>
                  setForm({ ...form, author: e.target.value })
                }
                placeholder="Author name"
                className="mt-1"
              />
            </div>

            {/* Genre */}
            <div>
              <Label className="font-semibold">Genre</Label>
              <Input
                value={form.genre || ""}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e: { target: { value: any; }; }) =>
                  setForm({ ...form, genre: e.target.value })
                }
                placeholder="Fiction, Novel, Sci-Fi etc."
                className="mt-1"
              />
            </div>

            {/* ISBN */}
            <div>
              <Label className="font-semibold">ISBN</Label>
              <Input
                value={form.isbn || ""}
                onChange={(e: { target: { value: any; }; }) =>
                  setForm({ ...form, isbn: e.target.value })
                }
                placeholder="ISBN number"
                className="mt-1"
              />
            </div>

            {/* Description */}
            <div>
              <Label className="font-semibold">Description</Label>
              <Textarea
                value={form.description || ""}
                onChange={(e: { target: { value: any; }; }) =>
                  setForm({ ...form, description: e.target.value })
                }
                placeholder="Describe the book..."
                className="mt-1 min-h-[120px]"
              />
            </div>

            {/* Copies */}
            <div>
              <Label className="font-semibold">Copies</Label>
              <Input
                type="number"
                required
                min={0}
                value={form.copies ?? 0}
                onChange={(e: { target: { value: any; }; }) =>
                  setForm({ ...form, copies: Number(e.target.value) })
                }
                className="mt-1"
              />
            </div>

            {/* Action Button */}
            <Button
              type="submit"
              className="w-full text-white font-semibold rounded-xl mt-4"
            >
              Update Book
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditBook;
