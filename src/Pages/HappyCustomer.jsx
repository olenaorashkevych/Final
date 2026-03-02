export default function HappyCustomers() {
  return (
    <section className="testimonials">
      <div className="container">

        <svg className="hero__detail-item detail-8">
          <use href="/images/sprite.svg#arrow" />
        </svg>

        <h2 className="testimonials__title">
          Happy customer
        </h2>

        <div className="testimonials__slider">

          {/* Cards */}
          <div className="testimonials__cards">

            <div className="testimonials__card">
              <img
                src="/images/Happy1.png"
                alt="Christin & Tom"
                className="testimonials__image"
              />

            </div>

            <div className="testimonials__card">
              <img
                src="/images/Happy2.png"
                alt="Anna & Tobby"
                className="testimonials__image"
              />


            </div>

            <div className="testimonials__card">
              <img
                src="/images/Happy3.png"
                alt="Sindy & Kitch"
                className="testimonials__image"
              />
            </div>

          </div>

          {/* Arrows */}
          <button className="testimonials__arrow testimonials__arrow--left">
            <svg className="happy-customer__detail-item happy-customer__detail-item--left">
              <use href="images/sprite.svg#ArrowSlider" />
            </svg>
          </button>

          <button className="testimonials__arrow testimonials__arrow--right">
            <svg className="happy-customer__detail-item happy-customer__detail-item--right">
              <use href="images/sprite.svg#ArrowSliderRight" />
            </svg>
          </button>

        </div>

        {/* Dots */}
        <div className="testimonials__dots">
          <span className="testimonials__dot testimonials__dot--active"></span>
          <span className="testimonials__dot"></span>
          <span className="testimonials__dot"></span>
        </div>

      </div>
    </section>
  );
}