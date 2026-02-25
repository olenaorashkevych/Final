export default function ServicesSection() {
  return (
    <section className="services">
      <div className="container">
        <h2 className="services__title">
          Services category
        </h2>

        <div className="services__grid">

          <div className="services__card">
            <div className="services__card-content">
              <div className="services__icon">
                {/* SVG */}
              </div>
              <p className="services__name">Grooming</p>
            </div>
          </div>

          <div className="services__card">
            <div className="services__card-content">
              <div className="services__icon">
                {/* SVG */}
              </div>
              <p className="services__name">Nutrition</p>
            </div>
          </div>

          <div className="services__card">
            <div className="services__card-content">
              <div className="services__icon">
                {/* SVG */}
              </div>
              <p className="services__name">Training</p>
            </div>
          </div>

          <div className="services__card">
            <div className="services__card-content">
              <div className="services__icon">
                {/* SVG */}
              </div>
              <p className="services__name">Bathing</p>
            </div>
          </div>

          <div className="services__card services__card--more">
            <div className="services__card-content">
              <p className="services__more-text">
                More<br />Services
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}