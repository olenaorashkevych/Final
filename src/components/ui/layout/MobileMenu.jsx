import { Link } from "react-router-dom";
import Icons from "./Icons";
import SvgIcon from "../SvgIcon";

export default function MobileMenu({ isAuth, handleLogout }) {
    return (
        <div className="mobile-menu">
            <div className="menu-footer">
                <Link to="/" className="header__logo">
                    <img src="./images/logo.svg" alt="" className="header__logo-img" />
                </Link>

                <div className="menu-arrow">
                    <svg viewBox="0 0 24 24">
                        <path d="M9 6L15 12L21 6" />
                        <path d="M9 18L15 12L21 18" />
                    </svg>
                </div>
            </div>

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

            <Icons />

        </div>
    );
}