"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HappyCustomers() {
  return (
    <section className="testimonials">
      <div className="container">

        <h2 className="testimonials__title">
          Happy customer
        </h2>

        <div className="testimonials__slider">

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              nextEl: ".testimonials__arrow--right",
              prevEl: ".testimonials__arrow--left",
            }}
            pagination={{
              el: ".testimonials__dots",
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >

            <SwiperSlide>
              <div className="testimonials__card">
                <img
                  src="/images/Happy1.png"
                  alt="Christin & Tom"
                  className="testimonials__image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonials__card">
                <img
                  src="/images/Happy2.png"
                  alt="Anna & Tobby"
                  className="testimonials__image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonials__card">
                <img
                  src="/images/Happy3.png"
                  alt="Sindy & Kitch"
                  className="testimonials__image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonials__card">
                <img
                  src="/images/Happy3.png"
                  alt="Sindy & Kitch"
                  className="testimonials__image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonials__card">
                <img
                  src="/images/Happy3.png"
                  alt="Sindy & Kitch"
                  className="testimonials__image"
                />
              </div>
            </SwiperSlide>


          </Swiper>

          {/* Arrows */}
          <button className="testimonials__arrow testimonials__arrow--left">
            <svg className="happy-customer__detail-item happy-customer__detail-item--left">
              <use href="/images/sprite.svg#ArrowSlider" />
            </svg>
          </button>

          <button className="testimonials__arrow testimonials__arrow--right">
            <svg className="happy-customer__detail-item happy-customer__detail-item--right">
              <use href="/images/sprite.svg#ArrowSliderRight" />
            </svg>
          </button>

        </div>

        {/* Dots */}
        <div className="testimonials__dots"></div>

      </div>
    </section>
  );
}