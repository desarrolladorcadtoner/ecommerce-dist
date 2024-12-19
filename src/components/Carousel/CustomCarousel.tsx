import React from "react";
import { Carousel } from "primereact/carousel";
import CarouselItem from "./CarouselItem";
import { Galleria } from "primereact/galleria";

interface CarouselData {
  imgUrl: string;
  buttonLink: string;
  buttonText: string;
  buttonLink2: string;
  buttonText2: string;
}

const data: CarouselData[] = [
  {
    imgUrl: "/images/BANNERPRINCIPAL8.jpg",
    buttonLink: "/link1",
    buttonText: "Button 1",
    buttonLink2: "/link2",
    buttonText2: "Button 2",
  },
  {
    imgUrl: "/images/BANNERPRINCIPAL9.jpg",
    buttonLink: "/link3",
    buttonText: "Button 3",
    buttonLink2: "/link4",
    buttonText2: "Button 4",
  },
  {
    imgUrl: "/images/BANNERPRINCIPAL0.jpg",
    buttonLink: "/link5",
    buttonText: "Button 6",
    buttonLink2: "/link7",
    buttonText2: "Button 7",
  },
];

const CustomCarousel: React.FC = () => {
  const responsiveOptions = [
    { breakpoint: "1024px", numVisible: 1, numScroll: 1 },
    { breakpoint: "768px", numVisible: 1, numScroll: 1 },
    { breakpoint: "560px", numVisible: 1, numScroll: 1 },
  ];

  const carouselTemplate = (item: CarouselData) => <CarouselItem {...item} />;

  return (
    <div className="overflow-hidden p-0 mb-8">
      <div className="p-0 max-w-full">
        <Galleria
          value={data}
          numVisible={1}
          responsiveOptions={responsiveOptions}
          circular
          showIndicators={true}
          showItemNavigators
          showItemNavigatorsOnHover
          item={carouselTemplate}
        />
      </div>
    </div>
  );
};

export default CustomCarousel;
