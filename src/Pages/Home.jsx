export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">
          Taking care for your Smart Dog!
        </h1>

        <p className="hero__subtitle">
          Human–canine bonding is the relationship between dogs and humans
        </p>

        <button className="hero__button btn">
          Explore <span className="hero__button-lower">More</span>
        </button>

        <div className="hero__detail-list">
          <img src="./images/dog.png" alt="" className="hero__detail-item detail-1" />
          <img src="./images/hero/datail-1.png" alt="" className="hero__detail-item detail-2" />
          <img src="./images/hero/datail-2sm.png" alt="" className="hero__detail-item detail-3" />
          <img src="./images/hero/datail-3sm.png" alt="" className="hero__detail-item detail-4" />
          <svg className="hero__detail-item detail-5">
  <use href="public/images/sprite.svg#paw-1" />
</svg>
<svg className="hero__detail-item detail-6">
  <use href="public/images/sprite.svg#Paw-2" />
</svg>
<svg className="hero__detail-item detail-7">
  <use href="public/images/sprite.svg#Paw-3" />
</svg>
        </div>
      </div>
    </section>
  );
}