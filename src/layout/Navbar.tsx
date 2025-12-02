import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

       <h1 className="text-3xl font-extrabold bg-linear-to-r from-blue-300 to-white text-transparent bg-clip-text tracking-wide animate-in fade-in duration-500">
  📚 স্নেহ Library
</h1>


       
        <div className="hidden md:flex gap-8 text-lg">
          <Link className="hover:text-gray-200" to="/">Home</Link>
          <Link className="hover:text-gray-200" to="/books">All Books</Link>
          <Link className="hover:text-gray-200" to="/create-book">Add Book</Link>
          <Link className="hover:text-gray-200" to="/borrow-summary">Borrow Summary</Link>
        </div>

      
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

    
      {open && (
        <div className="md:hidden flex flex-col mt-4 gap-4 text-lg bg-blue-700 p-4 rounded-lg">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/books">All Books</Link>
          <Link onClick={() => setOpen(false)} to="/create-book">Add Book</Link>
          <Link onClick={() => setOpen(false)} to="/borrow-summary">Borrow Summary</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
