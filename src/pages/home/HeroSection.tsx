const HeroSection = () => {
    const categories = [
      { name: "Cartuchos de TÓNER", image: "/images/toner.jpg" },
      { name: "Cartuchos de TINTA", image: "/images/tinta.jpg" },
      { name: "Insumos de TÓNER", image: "/images/insumos-toner.jpg" },
      { name: "Insumos de TINTA", image: "/images/insumos-tinta.jpg" },
      { name: "Tinta a GRANEL", image: "/images/granel.jpg" },
      { name: "Refacciones", image: "/images/refacciones.jpg" },
      { name: "Electrónica", image: "/images/electronica.jpg" },
      { name: "Papelería", image: "/images/papeleria.jpg" },
    ];
  
    return (
      <section className="py-10 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md group"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-lg font-bold text-center">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  
  