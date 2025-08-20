import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiChevronDown, HiXMark } from "react-icons/hi2";
import manBanner from "../assets/images/BONKERSCORNERXStevenRhodesMen_s-18291_bc86232d-e0cb-4410-9092-7af4f4de585d_670x_crop_center.webp";
import womanBanner from "../assets/images/img.webp";
import bag from "../assets/svgs/addtocarticon.svg";
import person from "../assets/svgs/person.svg";
import search from "../assets/svgs/searchicon.svg";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const lastScrollY = useRef(0);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 50;
      setScrolled(isScrolled);

      if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const megaMenuItems: Record<string, Record<string, string[]>> = {
    WOMEN: {
      "WOMEN'S NEW ARRIVALS": [
        "Oversized T-Shirts",
        "Bottoms",
        "Tanks",
        "Cargos",
        "Joggers",
        "Gym Wear",
        "Tops",
        "Sweatshirts & Hoodies",
        "Basics",
        "Jackets",
        "Dress",
        "Oversized Shirts",
        "Co-Ord Sets",
        "Signature",
        "Special Prices",
        "Shorts",
      ],
      COLLECTION: [
        "Bonkers Skyclub",
        "Endless Summer",
        "Blame The Stars",
        "Christmas x Bonkers",
        "Fall SZN",
        "Pushin B",
        "Polyamide",
        "Seamless",
        "Acosta",
        "Faded",
        "Shades of Winter",
        "Kookie",
        "Anime",
      ],
      COLLABORATIONS: [
        "Disney",
        "Steven Rhodes",
        "Bratz",
        "DC",
        "Looney Tunes",
        "Smiley",
        "Nick 90s",
        "Star Wars",
        "SpongeBob",
        "Tokidoki",
        "Marvel",
        "Hello Kitty",
        "Playboy",
        "Pokemon",
        "80's Mix Tape",
      ],
    },
    MEN: {
      "MEN'S NEW ARRIVALS": [
        "Oversized Tees",
        "Graphic T-Shirts",
        "Shirts",
        "Bottoms",
        "Shorts",
        "Joggers",
        "Cargos",
        "Hoodies",
        "Jackets",
        "Basics",
        "Streetwear",
      ],
      COLLECTION: [
        "Tokyo Vibes",
        "Urban Rebels",
        "Noir Edition",
        "Retro Cartoons",
        "Space Syndicate",
        "Neon Knights",
        "The Grunge Era",
      ],
      COLLABORATIONS: [
        "Batman",
        "Rick & Morty",
        "Naruto",
        "Marvel",
        "Looney Tunes",
        "Peanuts",
        "Playboy",
        "NASA",
        "WWE",
      ],
    },
  };

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${
        visible ? "top-0" : "-top-full"
      } ${visible && scrolled ? "bg-black/80" : "bg-transparent"}`}
    >
      <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between relative">
  {/* LEFT SECTION: MEN / WOMEN */}
  <div className="flex gap-10 uppercase relative">
    {["WOMEN", "MEN"].map((menu) => (
      <div
        key={menu}
        className="relative text-white"
        onMouseEnter={() => handleMouseEnter(menu)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center gap-1 cursor-pointer text-[20px] hover:underline transition">
          {menu} <HiChevronDown className="text-xs mt-1" />
        </div>
      </div>
    ))}
  </div>

  {/* CENTER LOGO + ABOUT US + BLOG */}
  <div className="absolute left-215 transform -translate-x-1/2 flex items-center gap-20">
    <Link to="/" className="text-center">
      <img
        src={logo}
        alt="Logo"
        className="h-14 w-auto object-contain"
      />
    </Link>
    <div className="hidden md:flex items-center gap-8 text-white ">
      <Link to="/about" className="text-lg hover:underline transition">
        ABOUT US
      </Link>
      <Link to="/customize" className="text-lg hover:underline transition">
        CUSTOMISE T-SHIRTS
      </Link>
    </div>
  </div>

  {/* RIGHT SECTION: Icons */}
  <div className="flex items-center gap-5 text-white">
    <Link to="/account" className="">
    <img src={person} alt="Account" className="cursor-pointer w-6" />
    </Link>
    <img
      src={search}
      alt="Search"
      className="cursor-pointer w-6"
      onClick={() => setIsSearchOpen(true)}
    />
    <img src={bag} alt="Cart" className="cursor-pointer w-6" />
  </div>
</div>

      {activeMenu && (
        <div
          className="absolute left-0 top-full bg-white w-full max-w-[1600px] mx-auto grid grid-cols-[repeat(3,minmax(0,1fr))_700px] gap-10 p-8 shadow-2xl transition-all duration-300 ease-in-out min-h-[720px]"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          {Object.entries(megaMenuItems[activeMenu]).map(
            ([sectionTitle, links], idx) => (
              <div key={idx} className="col-span-1">
                <h3 className="font-semibold text-lg mb-4 uppercase">
                  {sectionTitle}
                </h3>
                <ul className="space-y-1 text-[15px] text-gray-800">
                  {links.map((link, i) => (
                    <li
                      key={i}
                      className="cursor-pointer transition hover:underline"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}

          <div className="col-span-1 grid grid-cols-2 w-full h-full">
            {[
              activeMenu === "WOMEN" ? womanBanner : manBanner,
              activeMenu === "WOMEN" ? womanBanner : manBanner,
            ].map((img, i) => (
              <div key={i} className="w-full h-full overflow-hidden group">
                <img
                  src={img}
                  alt={`${activeMenu.toLowerCase()} ${i}`}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SEARCH PANEL */}
      <div
        className={`fixed top-0 right-0 w-[400px] h-full bg-white shadow-lg z-[60] p-6 overflow-y-auto transform transition-transform duration-500 ease-in-out ${
          isSearchOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full border-b border-gray-300 focus:outline-none pb-2 text-lg"
          />
          <button onClick={() => setIsSearchOpen(false)} className="ml-4">
            <HiXMark className="text-xl text-black" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-sm font-semibold mb-2 text-gray-600">
            POPULAR SEARCHES
          </p>
          <div className="flex flex-wrap gap-2">
            {["WOMEN", "MEN", "NEW ARRIVALS", "PREMIUM", "BESTSELLERS"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-gray-200 rounded-full cursor-pointer hover:bg-black hover:text-white transition"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3 text-gray-600">
            TRENDING NOW
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="relative">
                  <img
                    src={i % 2 === 0 ? manBanner : womanBanner}
                    alt={`trending-${i}`}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    SAVE {10 + i * 2}%
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-gray-800">
                  Product Title {i}
                </p>
                <p className="text-xs text-red-600 font-semibold">
                  Rs. {(1499 - i * 100).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
