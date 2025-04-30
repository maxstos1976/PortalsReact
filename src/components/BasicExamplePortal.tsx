// exemplo do Alan Buscaglia
import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import "./BasicExamplePortal.css";

const portalRoot = document.getElementById("portal-root");

interface ModalProps {
  children: ReactNode;
}
const Modal = ({ children }: ModalProps) => {
  return createPortal(
    <div className="modal">{children}</div>,
    portalRoot as HTMLElement
  );
};

const BasicExamplePortal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    console.log("Clicado toggleModal");
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={toggleModal}> Toogle Modal </button>
      {showModal && (
        <Modal>
          <h2>Modal Content</h2>
          <button onClick={toggleModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default BasicExamplePortal;
