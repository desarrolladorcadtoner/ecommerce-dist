const HeroSection = () => {
    const categories = [
      { image: "/images/toner.jpg" },
      { image: "/images/tinta.jpg" },
      { image: "/images/insumos-toner.jpg" },
      { image: "/images/insumos-tinta.jpg" },
      { image: "/images/granel.jpg" },
      { image: "/images/refacciones.jpg" },
      
    ];
  
    return (
      <section className="py-10 bg-gray-200 sm:py-4">
        <div className="max-w-full mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 max-1024:grid-cols-2 lg:grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md group"
              >
                <img
                  src={category.image}
                  
                  className="w-full h-72 object-800 transition-transform duration-300 group-hover:scale-105 2xl:group-hover:scale-105 2xl:h-96 sm:h-56"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  
  