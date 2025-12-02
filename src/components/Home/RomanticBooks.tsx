import { Card, CardContent, CardHeader } from "../ui/card";

const books = [
  {
    title: "Love in Paris",
    author: "Emma Collins",
    img: "https://media.istockphoto.com/id/476587456/photo/love-in-the-city-of-love.jpg?s=612x612&w=0&k=20&c=gK3fCY-JUsyaWqh4LDtEV2M8JN2wuXQE-0H29uuTYxI=",
  },
  {
    title: "Endless Romance",
    author: "John Mayer",
    img: "https://d3rf6j5nx5r04a.cloudfront.net/hG9YKM2204Z2BrYn5iBXr1Ap9tw=/560x0/product/d/9/bd437bc4214146fe89d232fdbc6ed15f_opt.jpg",
  },
  {
    title: "Forever You",
    author: "Lily Brown",
    img: "https://m.media-amazon.com/images/S/pv-target-images/c6116ff6c1ebccaa271dbf1dca4297a0978c9f9cd600216c796ef2ba045d36c3._SX1080_FMjpg_.jpg",
  },
  {
  title: "Moonlit Memories",
  author: "Ava Hart",
  img: "https://thumbs.dreamstime.com/b/watercolor-painting-capturing-magical-atmosphere-nighttime-cityscape-showcasing-historic-buildings-moonlit-streets-415642741.jpg",
},
{
  title: "Whispers of You",
  author: "Daniel Rivers",
  img: "https://images.pangobooks.com/images/b8bf931b-676c-43bb-b5a5-1b2355183dff?width=800&quality=85&crop=1%3A1",
},
{
  title: "Heartbeats Forever",
  author: "Mia Rosewood",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXg4-dN62kMTC_OiA-qtx0SI7rFQwTm4LqvEicgC_85CQNAU08JiyRoY_Izwoi56rvxo&usqp=CAU",
}
];

const RomanticBooks = () => {
  return (
    <section className="py-16">
      {/* Header */}
      <h2 className="text-4xl  text-center font-extrabold mb-10 bg-linear-to-r from-pink-600 to-red-500 text-transparent bg-clip-text">
        🌹 Romantic Books
      </h2>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {books.map((b) => (
          <Card
            key={b.title}
            className="
              rounded-2xl overflow-hidden border bg-white shadow-lg
              transition-all duration-500 cursor-pointer 
              transform-gpu transform-3d
              hover:scale-105 hover:-translate-y-2
              hover:transform-[rotateX(10deg)_rotateY(-10deg)_scale(1.05)]
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]
            "
          >
            {/* Image */}
            <CardHeader className="p-0">
              <img
                src={b.img}
                className="h-64 w-full object-cover rounded-t-2xl transform-[translateZ(20px)]"
              />
            </CardHeader>

            {/* Content */}
            <CardContent className="p-5 transform-[translateZ(15px)]">
              <h3 className="text-xl font-semibold">{b.title}</h3>
              <p className="text-gray-600 text-sm">{b.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RomanticBooks;
