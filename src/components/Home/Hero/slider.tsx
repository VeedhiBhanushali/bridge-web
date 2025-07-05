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
    title: "Campus Networking",
    subtitle: "Connect with peers",
    description: "Build meaningful relationships with fellow students across your campus community."
  },
  {
    id: 2,
    image: "student-portal.png",
    title: "Student Portal",
    subtitle: "Access everything",
    description: "Your centralized hub for academic resources, schedules, and university services."
  },
  {
    id: 3,
    image: "student-checklist.png",
    title: "Progress Tracking",
    subtitle: "Stay organized",
    description: "Keep track of your academic milestones and important tasks with our mobile app."
  },
  {
    id: 4,
    image: "student-collaboration.png",
    title: "Team Collaboration",
    subtitle: "Work together",
    description: "Collaborate effectively on projects and assignments with built-in tools."
  }
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
    slidesToShow: 4,
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
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="lg:-mt-16 mt-16">
      <Slider {...settings}>
        {bridgeSliderData.map((item, index) => (
          <div key={index} className="pr-6">
            <div className="px-5 py-6 bg-blue-200 bg-opacity-90 rounded-xl h-80 w-full flex flex-col justify-between">
              <div className="text-center mb-4">
                <h3 className="text-midnight_text text-18 font-bold mb-2">{item.title}</h3>
                <p className="text-primary text-14 font-medium">{item.subtitle}</p>
              </div>
              
              <div className="flex-1 flex items-center justify-center mb-4 relative">
                {!loadedImages.has(item.id) && (
                  <div className="absolute inset-0 bg-gray-200 rounded-lg animate-pulse"></div>
                )}
                <Image
                  src={`${getImagePrefix()}images/hero/${item.image}`}
                  alt={item.title}
                  width={200}
                  height={150}
                  className={`object-contain transition-opacity duration-300 ${
                    loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  quality={60}
                  onLoad={() => handleImageLoad(item.id)}
                />
              </div>
              
              <div className="text-center">
                <p className="text-midnight_text text-14 leading-relaxed">
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
