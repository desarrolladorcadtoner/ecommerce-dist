import React from "react";
import CustomButton from "../Buttons/CustomButton";

interface CarouselItemProps {
  imgUrl: string;
  buttonLink: string;
  buttonText: string;
  buttonLink2: string;
  buttonText2: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  imgUrl,
  buttonLink,
  buttonText,
  buttonLink2,
  buttonText2,
}) => (
  <div className="relative w-full h-[400px] md:w-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
    {/* Imagen */}
    <img
      src={imgUrl}
      alt="carousel"
      className="w-full h-full object-fill object-center md:w-[800px]"
    />

    {/* Botones */}
    <div className="absolute bottom-[10px] md:bottom-[50px] left-[10px] md:left-[80px] z-10 flex flex-col md:flex-row items-start md:items-center">
      <div className="mb-2 md:mb-0 md:mr-2">
        <CustomButton label={buttonText} href={buttonLink} />
      </div>
      <div>
        <CustomButton label={buttonText2} href={buttonLink2} />
      </div>
    </div>
  </div>
);

export default CarouselItem;
