import { Badge } from "../ui/badge";

const FeaturedBooks = () => {
  const books = [
    { 
      title: "Atomic Habits", 
      desc: "Build habits the smart way", 
      img: "https://roshdbook.com/wp-content/uploads/2024/10/Atomic-Habits-An-Easy-Proven-Way-to-Build-Good-Habits-Break-Bad-Ones-1.jpg" 
    },
    { 
      title: "The Alchemist", 
      desc: "A magical story", 
      img: "https://m.media-amazon.com/images/I/3112H4yJxwL._AC_UF1000,1000_QL80_.jpg" 
    },
    { 
      title: "The Silent Patient", 
      desc: "Thriller mystery", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJKczgmBnG1QokuTUX08kYJQ2h2eC-odwmGA&s" 
    },
   
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          🔥 Featured Books
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((b) => (
            <div
              key={b.title}
              className="group relative rounded-xl bg-white border shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src={b.img} 
                  alt={b.title}
                  className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-linear-to-r from-pink-500 to-purple-500 text-white">
                  Popular
                </Badge>
              </div>

              <div className="p-5 flex flex-col justify-between h-56">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                  <p className="text-gray-600 text-sm">{b.desc}</p>
                </div>
                
                <button className="mt-4 self-start bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                  Read OFF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
