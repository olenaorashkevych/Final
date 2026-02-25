import { Link } from "react-router-dom"
import SvgIcon from "../ui/SvgIcon"

export default function Header() {
  return (
    <header className="header container">
      <Link to="/" className="header__logo">
        <img src="./images/logo.svg" alt="" className="header__logo-img" />
      </Link>

      <nav className="header__nav">       
        <Link to="/lesstalk">Less talk</Link>
        <Link to="/servicescategory">Services Category</Link>
        <Link to="/happycustomer" className="header__nav-active">Happy customer</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="header__actions">
        <div className="header__cart">
          <SvgIcon id="basket-minus-outline" />
        </div>
        <button className="btn header__btn">Contact us</button>
      </div>
    </header>
  )
}
