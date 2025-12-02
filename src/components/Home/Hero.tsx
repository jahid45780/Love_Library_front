import { Button } from "../ui/button";
import { BookOpen, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full py-28 bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 text-white rounded-3xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-6">

       
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 blur-2xl rounded-full"></div>

       
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl animate-in fade-in zoom-in duration-700">
          Discover the Future of Reading  
          <span className="block text-yellow-300 mt-2">স্নেহ Digital 📒Library</span>
        </h1>

        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-in slide-in-from-bottom duration-700 delay-200">
          Access thousands of books, track your borrowed items, and explore unlimited knowledge — 
          anytime, anywhere, seamlessly.
        </p>

       
        <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-in slide-in-from-bottom duration-700 delay-300">

         
          <Button
            size="lg"
            className="bg-white text-black font-semibold hover:bg-gray-200 transition-all shadow-lg flex items-center gap-2 px-8 py-6 rounded-xl"
          >
            <BookOpen className="w-5 h-5" />
            Explore Library
          </Button>

          
          <Button
            variant="outline"
            size="lg"
            className="border-white text-gray-400 hover:bg-white/20 backdrop-blur-md px-8 py-6 rounded-xl flex items-center gap-2"
          >
            Learn More
            <ArrowRight className="w-5 h-5" />
          </Button>

        </div>

      
        <p className="text-sm opacity-80 pt-4">
          Over <span className="font-bold text-yellow-300">10,000+</span> books available • Free & Open Access
        </p>
      </div>
    </section>
  );
};

export default Hero;
