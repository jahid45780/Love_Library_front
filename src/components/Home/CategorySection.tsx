const categories = [
  { name: "Romantic", icon: "💖" },
  { name: "Horror", icon: "👻" },
  { name: "Sci-Fi", icon: "🚀" },
  { name: "History", icon: "🏛️" },
  { name: "Adventure", icon: "🗺️" },
  { name: "Poetry", icon: "✒️" },
];

const CategorySection = () => {
  return (
    <div className="py-16">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold bg-linear-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          Explore Categories
        </h2>
        <p className="text-gray-600 mt-2">Choose your favorite genre and dive in!</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto px-4">
        {categories.map((c) => (
          <div
            key={c.name}
            className="
              bg-white shadow-lg border p-6 rounded-2xl text-center 
              transition-all duration-300 cursor-pointer
              hover:shadow-2xl hover:-translate-y-2
              transform-gpu transform-3d
              hover:transform-[rotateX(12deg)_rotateY(-12deg)_scale(1.05)]
            "
          >
            {/* Icon */}
            <div className="text-5xl mb-3 transform-[translateZ(20px)]">
              {c.icon}
            </div>

            {/* Name */}
            <p className="font-semibold text-lg">{c.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;