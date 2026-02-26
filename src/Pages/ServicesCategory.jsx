export default function ServicesSection() {
  return (
    <section className="services">
      <div className="container">
      <svg className="services__icon services__icon--big-arrow">
  <use href="/images/sprite.svg#arrowBig" />
</svg>
        <h2 className="services__title">
          Services category
        </h2>

        <div className="services__grid">

          <div className="services__card">
            <div className="services__card-content">
              <div className="services__icon">
              <svg className="services__icon-1">
    <use href="public/images/sprite.svg#service1" />
  </svg>
              </div>
              <p className="services__name">Grooming</p>
            </div>
          </div>

          <div className="services__card">
            <div className="services__card-content">
              <div className="services__icon">
              <svg className="services__icon-2">
    <use href="public/images/sprite.svg#service2" />
  </svg>
              </div>
              <p className="services__name">Nutrition</p>
            </div>
          </div>

          <div className="services__card">
            <div className="services__card-content">
              <div className="services__icon">
              <svg className="services__icon-3">
    <use href="public/images/sprite.svg#service3" />
  </svg>
              </div>
              <p className="services__name">Training</p>
            </div>
          </div>

          <div className="services__card">
            <div className="services__card-content">
              <div className="services__icon">
              <svg className="services__icon-4">
    <use href="public/images/sprite.svg#service4" />
  </svg>
              </div>
              <p className="services__name">Bathing</p>
            </div>
          </div>

          <div className="services__card services__card--more">
            <div className="services__card-content">
              <p className="services__more-text">
                more services  <svg className="services__icon-5">
    <use href="public/images/sprite.svg#Arrowtiny"/>
  </svg>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}