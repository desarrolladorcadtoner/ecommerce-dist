import { useState } from "react";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: "/images/BANNERPRINCIPAL8.jpg",
      button1: { text: "REGISTRATE", link: "/register" },
      button2: { text: "IDENTIFICATE", link: "/login" },
    },
    {
      id: 2,
      image: "/images/BANNERPRINCIPAL9.jpg",
      button1: { text: "REGISTRATE", link: "/register" },
      button2: { text: "IDENTIFICATE", link: "/login" },
    },
    {
      id: 3,
      image: "/images/BANNERPRINCIPAL0.jpg",
      button1: { text: "REGISTRATE", link: "/register" },
      button2: { text: "IDENTIFICATE", link: "/login" },
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[800px] overflow-hidden sm:h-[250px]">
      {/* Contenedor de diapositivas */}
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-[800px] bg-cover bg-center sm:h-[250px]"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="h-full w-full relative text-white px-4 ">
              <div className="absolute bottom-16 left-20 flex space-x-4 
              sm:bottom-4 sm:left-8 sm:space-x-2">
                <a
                  href={slide.button1.link}
                  className="bg-[#0b4468] hover:bg-[#de1c85] text-white px-4 py-1 rounded hover:bg-[#de1c85] sm:px-2 sm:py-1 sm:text-sm"
                >
                  {slide.button1.text}
                </a>
                <a
                  href={slide.button2.link}
                  className="bg-[#0b4468] hover:bg-[#de1c85] text-white px-4 py-1 rounded hover:bg-[#de1c85] sm:px-2 sm:py-1 sm:text-sm"
                >
                  {slide.button2.text}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles del Carrusel */}
      <button
        className="bg-transparent absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg
        "
        onClick={handlePrev}
      >
        &#8249;
      </button>
      <button
        className="bg-transparent absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg"
        onClick={handleNext}
      >
        &#8250;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-[#0b4468]" : "bg-gray-400"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

