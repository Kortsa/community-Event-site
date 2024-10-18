import { Swiper, SwiperSlide } from "swiper/react";
import {pictures} from './CarouselPictures.jsx'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import './Carousel.css'

const Carousel = () => {
    return (
        <div className="containers">
          <h1 className="heading">Trending Events</h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[Autoplay,EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            {pictures.map((pic, id) => {
              return (
                <SwiperSlide key={id}>
                  <img src={pic.src} alt={pic.alt} />
                </SwiperSlide>
              );
            })}
           
          </Swiper>
        </div>
      );
}

export default Carousel
