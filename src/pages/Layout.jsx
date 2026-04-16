import { Outlet } from "react-router-dom";
import Header from "../components/ui/layout/Header";
import Footer from "../components/ui/layout/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
