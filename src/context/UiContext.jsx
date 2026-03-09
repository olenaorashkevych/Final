import { createContext, useState } from "react";

export const UiContextData = createContext();

export default function UiContext({ children }) {
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
        document.body.classList.add('modal-open');
    }
    const closeModal = () => {
        setModal(false);
        document.body.classList.remove('modal-open');
    }

    return (
        <UiContextData.Provider value={{ modal, openModal, closeModal }}>
            {children}
        </UiContextData.Provider>
    )
}
