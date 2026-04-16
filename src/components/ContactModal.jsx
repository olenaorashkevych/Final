import { useContext } from "react";
import ContactForm from "./form/ContactForm";
import { UiContextData } from "../context/UiContext";

export default function ContactModal() {
    const { closeModal } = useContext(UiContextData);

    return (
        <div className="modal-overlay">
            <div className="contact-modal">

                <button className="modal-close" onClick={closeModal}>✕</button>

                <ContactForm />

            </div>
        </div>
    );
}