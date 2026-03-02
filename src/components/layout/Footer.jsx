export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">

        {/* LEFT: logo + socials */}
        <div className="footer__brand">
          <div className="footer__logo">
            <svg className="footer__logo-icon">
              <use href="/images/sprite.svg#dog-lapa" />
            </svg>
            <span className="footer__logo-text">
              <strong>dog</strong>club
            </span>
          </div>

          <div className="footer__socials">
            <svg className="footer__social">
              <use href="/images/sprite.svg#instagram" />
            </svg>
            <svg className="footer__social">
              <use href="/images/sprite.svg#facebook" />
            </svg>
          </div>
        </div>

        {/* CENTER: nav */}
        <nav className="footer__nav">
          <a href="#" className="footer__link">Less talk</a>
          <a href="#" className="footer__link footer__link--active">Services category</a>
          <a href="#" className="footer__link">Happy customer</a>
          <a href="#" className="footer__link">Contact</a>
        </nav>

        {/* RIGHT: subscribe */}
        <div className="footer__subscribe">
          <label className="footer__field">
            <svg className="footer__field-icon">
              <use href="/images/sprite.svg#email" />
            </svg>
            <input
              type="email"
              placeholder="Your email"
              className="footer__input"
            />
          </label>

          <label className="footer__field">
            <input
              type="text"
              placeholder="Your cmc"
              className="footer__input"
            />
          </label>

          <button className="footer__button">Contact us</button>

          <label className="footer__agree">
            <input type="checkbox" />
            <span>I agree to the privacy policy</span>
          </label>
        </div>

        {/* DOG IMAGE */}
        <img
          src="/images/image-5.png"
          alt="Dog"
          className="footer__dog"
        />

      </div>
    </footer>
  );
}
