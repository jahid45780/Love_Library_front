import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">📚স্নেহ Library</h2>
            <p className="text-white">
              Discover, borrow, and enjoy books from our extensive library collection.
            </p>

            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-white transition"><FaTwitter /></a>
              <a href="#" className="hover:text-white transition"><FaInstagram /></a>
              <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
            </div>
          </div>

        
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/books" className="hover:text-white transition">Books</a></li>
              <li><a href="/borrow" className="hover:text-white transition">Borrow</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

      
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-white mb-4">Subscribe for latest updates and new books!</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 flex-1"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

       
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-white text-sm">
          &copy; {new Date().getFullYear()} স্নেহ Library. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
