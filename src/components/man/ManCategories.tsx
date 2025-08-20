import tshirtImg from '../../assets/images/tshirt5-removebg-preview.png';
import shirtsImg from '../../assets/images/tshirt7-removebg-preview.png';
import bottomsImg from '../../assets/images/tshirts2-removebg-preview.png';
import shortsImg from '../../assets/images/tshirts6-removebg-preview.png';
import WhatsappIcon from '../common/WhatsappIcon';


const categories = [
  { title: 'T-SHIRT', image: tshirtImg },
  { title: 'T-SHIRTS', image: shirtsImg },
  { title: 'T-SHIRTS', image: bottomsImg },
  { title: 'T-SHIRTS', image: shortsImg },
];

const ManCategories = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-12">
      <div className="fixed top-165 right-6 z-50 -translate-y-1/2">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        >
         <WhatsappIcon/>
        </a>
      </div>
      
      <div className="max-w-[1750px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
        {categories.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden w-full min-w-0 flex items-center justify-center bg-white shadow-2xl "
            style={{ height: '580px' }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="border-2 rounded-xl border-white px-9 py-4 text-white text-sm transition duration-300 group-hover:scale-105 hover:bg-white hover:text-black">
                {item.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManCategories;
