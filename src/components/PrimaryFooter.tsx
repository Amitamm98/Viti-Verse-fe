import person1 from "../assets/VITIFAMILY/1.png";
import person2 from "../assets/VITIFAMILY/2.png";
import person3 from "../assets/VITIFAMILY/3.png";
import person4 from "../assets/VITIFAMILY/4.png";
import person5 from "../assets/VITIFAMILY/5.png";
import person6 from "../assets/VITIFAMILY/5.png";
import bglogo from "../assets/images/logo.png"

const peopleImages = [person1, person2, person3, person4, person5, person6];

const PrimaryFooter: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">

      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-white/20 rounded-full blur-[100px] opacity-30 z-0" />

      <div className="relative z-10 text-center">
      
        <div className="inline-flex items-center justify-center px-6 py-3 bg-black rounded-full mb-6">
          <img src={bglogo} alt="VitiVerse Logo" className="h-8 md:h-10 object-contain" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold heading-regular  text-black mb-2">
          VITI VERSE FAMILY
        </h1>
        <p className="text-black para-regular opacity-80 mb-10">
          WELOCME TO VISIT ,OUR WEBSITE
        </p>

        {/* Continuous Scrolling Image Strip */}
        <div className="overflow-hidden w-full">
          <div className="loop-slider flex whitespace-nowrap animate-scroll-linear">
            {[...peopleImages, ...peopleImages].map((img, index) => (
              <div
                key={index}
                className="inline-block px-4 min-w-[260px] flex-shrink-0"
              >
                <img
                  src={img}
                  alt={`Person ${index + 1}`}
                  className="h-[420px] w-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrimaryFooter;
