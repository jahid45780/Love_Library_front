const books = [
  {
    title: "Forever You",
    author: "Lily Brown",
    img: "https://m.media-amazon.com/images/S/pv-target-images/c6116ff6c1ebccaa271dbf1dca4297a0978c9f9cd600216c796ef2ba045d36c3._SX1080_FMjpg_.jpg",
  },
  {
    title: "The Love Hypothesis",
    author: "Ali Hazelwood",
    img: "https://u-mercari-images.mercdn.net/photos/m92656532519_1.jpg",
  },
  {
    title: "Love & Other Words",
    author: "Christina Lauren",
    img: "https://thewhimsicalromance.com/cdn/shop/products/IMG_6384.jpg?v=1658116347",
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdll57jANcRxvULfFzY2Y2qDcWKwbJi_9aA&s",
  },
  {
  title: "Me Before You",
  author: "Jojo Moyes",
  img: "https://cdn2.penguin.com.au/covers/original/9780718177027.jpg"
},
{
  title: "Twilight",
  author: "Stephenie Meyer",
  img: "https://m.media-amazon.com/images/I/41UoFH+d-+L._AC_SY780_.jpg"
},
{
  title: "The Notebook",
  author: "Nicholas Sparks",
  img: "https://media.cnn.com/api/v1/images/stellar/prod/shutterstock-editorial-1646038a.jpg?c=16x9&q=h_833,w_1480,c_fill"
}
];

const BookSlider = () => {
  const repeatedBooks = [...books, ...books];

  return (
    <div className="w-full py-12 bg-linear-to-b rounded-3xl from-white to-slate-100">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-slate-700">
        Romantic Collections ❤️
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex gap-6 animate-infinite-scroll w-max">
          {repeatedBooks.map((b, i) => (
            <div
              key={i}
              className="relative group w-32 md:w-40 lg:w-48 h-48 md:h-60 lg:h-72 rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={b.img}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                alt={b.title}
              />

            
              <div className="absolute bottom-0 inset-x-0 p-3 
                  bg-linear-to-t from-black/80 to-transparent opacity-0 
                  group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-sm md:text-base font-semibold text-white">
                  {b.title}
                </h3>
                <p className="text-xs text-gray-300">{b.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookSlider;
