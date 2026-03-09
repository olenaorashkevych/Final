import { Link } from "react-router-dom"
import SvgIcon from "../ui/SvgIcon"
import NavMobile from "./NavMobile";
import Icons from "./Icons";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">

        {/* LEFT: logo + socials */}
        <div className="footer__brand">
          <div className="footer__logo">
            <Link to="/" className="footer__logo">
              <img src="./images/logo.svg" alt="" className="footer__logo-img" />
            </Link>

          </div>

          <Icons />
        </div>

        {/* CENTER: nav */}
        <NavMobile />


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
        {/* <img
          src="/images/footerDogsm.png"
          alt="Dog"
          className="footer__dog"
        /> */}



      </div>
    </footer>
  );
}
