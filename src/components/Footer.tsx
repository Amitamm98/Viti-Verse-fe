import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-10 px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-14">
          <div className="text-center md:text-left">
            <Link to="/" className="text-6xl font-extrabold tracking-wider">
              Viti <span className="font-light">Verse</span>
            </Link>
            <p className="text-sm text-gray-400 mt-2 max-w-sm">
              Explore futuristic fashion with VitiVerse – built for bold
              thinkers, rebels, and creators.
            </p>
          </div>

          <div className="w-full md:w-[400px]">
            <h3 className="text-lg font-semibold mb-2 text-center md:text-left">
              Stay Updated
            </h3>
            <div className="flex items-center bg-white rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-black focus:outline-none"
              />
              <button className="bg-black text-white px-5 py-3 hover:bg-gray-800 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-16">
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">
              Shop
            </h4>
            <ul className="space-y-2 text-gray-400">
              {["Men", "Women", "New Arrivals", "Best Sellers", "Sale"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-2 text-gray-400">
              {["About Us", "Careers", "Sustainability", "Press"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">
              Support
            </h4>
            <ul className="space-y-2 text-gray-400">
              {[
                "Contact",
                "Shipping",
                "Returns",
                "Order Status",
                "Help Center",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-2 text-gray-400">
              {["Privacy Policy", "Terms of Service", "Accessibility"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} VitiVerse. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {[FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaPinterestP].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 border border-gray-600 rounded-full hover:scale-110 hover:border-white transition-transform duration-300"
                >
                  <Icon className="text-lg text-gray-300 hover:text-white" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
