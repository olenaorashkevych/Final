
import HeroSection from "../Pages/HeroSection";
import LessTalkSection from "../Pages/Lesstalk";
import ServicesCategory from "../Pages/ServicesCategory";
import HappyCustomer from "../Pages/HappyCustomer";
import Contact from "../Pages/Contact";
import ContactModal from "../components/ContactModal";

export default function Home() {

  return (
    <>
      <HeroSection />
      <LessTalkSection />
      <ServicesCategory />
      <HappyCustomer />
      <Contact />
      <ContactModal />
    </>
  );
}
