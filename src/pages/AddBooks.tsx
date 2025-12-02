import { useCreateBookMutation } from "@/features/bookApi";
import type { Book } from "@/types/book";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AddBooks = () => {
  const [form, setForm] = useState<Partial<Book>>({
    title: "",
    author: "",
    copies: 1,
  });

  const [createBook, { isLoading }] = useCreateBookMutation();
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createBook({ ...form }).unwrap();
      navigate("/books");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      
      toast.error("Error creating book")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2"> 📕 Create Book</h1>
        <p className="text-gray-500 mb-6 text-center">Fill in the details to add a new book.</p>

        {/* Form */}
        <form onSubmit={submit} className="space-y-5">
          
        
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Enter book title"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

         
          <div>
            <label className="block mb-1 font-medium">Author</label>
            <input
              required
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              placeholder="Enter author's name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          
          <div>
            <label className="block mb-1 font-medium">Genre</label>
            <input
              value={form.genre}
              onChange={(e) => setForm({ ...form, genre: e.target.value })}
              placeholder="Enter genre"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          
          <div>
            <label className="block mb-1 font-medium">ISBN</label>
            <input
              value={form.isbn}
              onChange={(e) => setForm({ ...form, isbn: e.target.value })}
              placeholder="Enter ISBN number"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Book description"
              className="w-full h-24 px-4 py-2 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          
          <div>
            <label className="block mb-1 font-medium">Copies</label>
            <input
              type="number"
              required
              min={0}
              value={form.copies}
              onChange={(e) => setForm({ ...form, copies: Number(e.target.value) })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

        
          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium text-lg shadow hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isLoading ? "Creating..." : "Create Book"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
