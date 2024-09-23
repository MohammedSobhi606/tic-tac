import React, { useContext } from "react";
import Restart from "./Restart";
import Win from "./Win";
import { ModalContext } from "../../contexts/ModalConstext";

const Modals = () => {
  const { show, Modalmode, setModalmode } = useContext(ModalContext);
  return (
    <>
      {show && (
        <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-black bg-opacity-40 z-30">
          <div className="bg-light_bg w-full text-center ">
            {Modalmode === "winner" && <Win />}
            {Modalmode !== "winner" && <Restart />}
          </div>
        </div>
      )}
    </>
  );
};

export default Modals;
