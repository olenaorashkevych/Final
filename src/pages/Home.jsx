
import HeroSection from "./HeroSection";
import LessTalkSection from "./Lesstalk";
import ServicesCategory from "./ServicesCategory";
import HappyCustomer from "./HappyCustomer";
import Contact from "./Contact";
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
