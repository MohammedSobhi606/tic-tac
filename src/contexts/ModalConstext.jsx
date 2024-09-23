import { createContext, useState } from "react";

const ModalContext = createContext();
const ModalState = (props) => {
  const [show, setshow] = useState(false);
  const [Modalmode, setModalmode] = useState("winner"); //winner || restart
  // ///////////////////////////
  const showModal = () => setshow(true);
  const hideModal = () => setshow(false);
  return (
    <ModalContext.Provider
      value={{ show, setshow, showModal, hideModal, Modalmode, setModalmode }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
export { ModalContext, ModalState };
