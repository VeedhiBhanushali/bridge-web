import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";
import { useState } from "react";

const bridgeSliderData = [
  {
    id: 1,
    image: "student-networking.png",
    title: "No timing layer",
    subtitle: "",
    description:
      "Critical actions are time-sensitive, but no system surfaces urgency at the right moment.",
  },
  {
    id: 2,
    image: "student-portal.png",
    title: "No system memory",
    subtitle: "",
    description:
      "Each student repeats the same mistakes because knowledge is not structured or retained.",
  },
  {
    id: 3,
    image: "student-checklist.png",
    title: "Reactive support",
    subtitle: "",
    description: "Help comes after problems happen, not before.",
  },
];

const CardSlider = () => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    lazyLoad: "ondemand" as const,
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="lg:-mt-16 mt-16">
      <div className="text-center mb-8">
        <h2 className="font-display font-semibold text-midnight_text text-32 sm:text-40 tracking-tight">
          Why students fall behind
        </h2>
      </div>
      <Slider {...settings}>
        {bridgeSliderData.map((item, index) => (
          <div key={index} className="pr-6">
            <div className="group px-6 py-8 bg-white border border-border/60 rounded-2xl h-80 w-full flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="text-center mb-4">
                <h3 className="font-display font-semibold text-midnight_text text-21 mb-1 tracking-tight">{item.title}</h3>
                {item.subtitle && <p className="text-primary text-14 font-medium">{item.subtitle}</p>}
              </div>
              
              <div className="flex-1 flex items-center justify-center mb-4 relative">
                {!loadedImages.has(item.id) && (
                  <div className="absolute inset-0 bg-grey rounded-xl animate-pulse"></div>
                )}
                <Image
                  src={`${getImagePrefix()}images/hero/${item.image}`}
                  alt={item.title}
                  width={200}
                  height={150}
                  className={`object-contain transition-all duration-300 group-hover:scale-105 ${
                    loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  quality={60}
                  onLoad={() => handleImageLoad(item.id)}
                />
              </div>
              
              <div className="text-center">
                <p className="text-muted text-14 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
