import { Link } from "react-router-dom";
import SvgIcon from "../SvgIcon";
import { UiContextData } from "../../../context/UiContext";
import { useAuth } from "../../../context/AuthContext";
import { useContext, useState } from "react";

import MobileMenu from "./MobileMenu";

export default function Header() {
  const { openModal } = useContext(UiContextData);
  const { isAuth, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <header className="header container">
        <Link to="/" className="header__logo">
          <img src="./images/logo.svg" alt="" className="header__logo-img" />
        </Link>

        <nav className="header__nav">
          <Link to="/lesstalk">Less talk</Link>
          <Link to="/servicescategory">Services Category</Link>
          <Link to="/happycustomer" className="header__nav-active">
            Happy customer
          </Link>
          <Link to="/contact">Contact</Link>

          {isAuth ? (
            <div className="logout" onClick={handleLogout}>
              <SvgIcon id="log-out" className="stroke" />
            </div>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>

        <div className="header__actions">
          <div className="header__cart">
            <SvgIcon id="basket-minus-outline" />
          </div>

          <button className="btn header__btn" onClick={openModal}>
            Contact us
          </button>

          <div
            className="burger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="burger__icon">
              <use href="/images/sprite.svg#menu" />
            </svg>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} className="mobile-menu-overlay">
          <MobileMenu isAuth={isAuth} handleLogout={handleLogout} />
        </div>
      )}
    </>
  );
}