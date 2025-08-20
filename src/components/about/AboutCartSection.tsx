import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";
import img1 from "../../assets/images/biscuit.png";
import img2 from "../../assets/images/vishal.png";
import img3 from "../../assets/images/diksha.png";
import img4 from "../../assets/images/X-code.png";
import bgImage from "../../assets/images/logoabout2.avif";

const teamMembers = [
  {
    name: "Rohit Negi",
    title: "CEO/FOUNDER",
    img: img1,
  },
  {
    name: "Vishal Kuriyal",
    title: "CEO/FOUNDER",
    img: img2,
  },
  {
    name: "Diksha Kuriyal",
    title: "LEADING PARTNER",
    img: img3,
  },
  {
    name: "X-CODE",
    title: "Fullstack Developer",
    img: img4,
  },
];

const AboutCartSection = () => {
  return (
    <section className="w-full py-16 px-4 bg-black text-center font-sans">
      <h2 className="text-3xl font-semibold mb-2 text-white">MEET THE FOUNDERS</h2>
      <div className="h-1 w-16 bg-teal-400 mx-auto mb-12 rounded-full"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg group transition-all duration-500 hover:scale-[1.03]"
          >
            {/* Background Image */}
            <div
              className="h-40 bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${bgImage})`,
              }}
            >
              {/* Circle Profile Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full border-4 border-white absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-500 group-hover:opacity-0"
              />
            </div>

            {/* Text Content */}
            <div className="pt-16 pb-6 px-6 transition-all duration-500 group-hover:-translate-y-24 group-hover:bg-white group-hover:text-black z-20 relative">
              <h3 className="text-lg font-semibold text-white group-hover:text-black transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-700 mb-4 transition-colors">
                {member.title}
              </p>
              <p className="text-sm text-gray-400 group-hover:text-gray-600 mb-6 transition-colors duration-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="bg-blue-600 text-white text-sm font-medium py-2 px-5 rounded-full hover:bg-blue-700 transition duration-300 mb-4">
                CONTACT
              </button>

              {/* Social Icons */}
              <div className="flex justify-center space-x-4">
                <FaFacebookF className="text-gray-400 hover:text-blue-600 cursor-pointer transform hover:scale-125 transition-transform duration-300" />
                <FaTwitter className="text-gray-400 hover:text-blue-400 cursor-pointer transform hover:scale-125 transition-transform duration-300" />
                <FaInstagram className="text-gray-400 hover:text-pink-500 cursor-pointer transform hover:scale-125 transition-transform duration-300" />
                <FaGooglePlusG className="text-gray-400 hover:text-red-600 cursor-pointer transform hover:scale-125 transition-transform duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCartSection;
