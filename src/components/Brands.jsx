import React from 'react';
import Slider from 'react-slick';

const brandData = [
  { src: 'https://i.postimg.cc/WbMhKDGt/4.png', alt: 'Brand 1' },
  { src: 'https://i.postimg.cc/FHj7ZYwM/1.png', alt: 'Brand 2' },
  { src: 'https://i.postimg.cc/vZhDYpSs/5.png', alt: 'Brand 3' },
  { src: 'https://i.postimg.cc/8Cn5WLSX/Add-a-heading-4.png', alt: 'Brand 4' },
  { src: 'https://i.postimg.cc/QxLF0gWR/3.png', alt: 'Brand 5' },
];

export default function Brands() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="py-3 py-md-4 brand-section gray-bg">
      <div
        className="container"
        data-aos="fade"
        data-aos-duration="1200"
        data-aos-delay="500"
      >
        <Slider {...settings} className="slider-gap-50">
          {brandData.map((item, index) => (
            <div key={index}>
              <div className="pt-3 pb-3 text-center d-flex align-items-center justify-content-center w-100">
                <img src={item.src} alt={item.alt} className="w-100" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
