import { Link } from "react-router-dom";
import SvgIcon from "../components/ui/SvgIcon";

export default function ServicesSection() {
  return (
    <section className="services">
      <div className="container">
        <img src="/images/ArrowBig.png" className="services__img" alt="" srcSet="" />
        <h2 className="services__title">
          Services category
        </h2>

        <div className="services__grid">

          <div className="services__card">
            <div className="services__card-content">
              <div className="services__icon">
                <SvgIcon id="service1" className="services__icon-1" />
              </div>
              <p className="services__name">Grooming</p>
            </div>
          </div>

          <div className="services__card">
            <div className="services__card-content">
              <div className="services__icon">
                <SvgIcon id="service2" className="services__icon-2" />
              </div>
              <Link to="/nutrition" className="services__name">Nutrition</Link>
            </div>
          </div>

          <div className="services__card">
            <div className="services__card-content">
              <div className="services__icon">
                <SvgIcon id="service3" className="services__icon-3" />
              </div>
              <p className="services__name">Training</p>
            </div>
          </div>

          <div className="services__card">
            <div className="services__card-content">
              <div className="services__icon">
                <SvgIcon id="service4" className="services__icon-4" />
              </div>
              <p className="services__name">Bathing</p>
            </div>
          </div>

          <div className="services__card services__card--more">
            <div className="services__card-content">
              <p className="services__more-text">
                more services
                <SvgIcon id="Arrowtiny" className="services__icon-5" />
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}