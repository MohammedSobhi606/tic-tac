import React from "react";

import { GameContext } from "../../contexts/GameContext";
import { ModalContext } from "../../contexts/ModalConstext";
import { useContext } from "react";
function Restart() {
  const { handelReset } = useContext(GameContext);
  const { showModal, hideModal, setModalmode } = useContext(ModalContext);

  return (
    <div className="flex justify-center items-center gap-4 flex-col p-4">
      <span className="text-3xl font-bold">restart game ?</span>

      <div className="flex justify-center items-center gap-4">
        <button
          className="px-4 py-2 rounded-md font-extrabold text-light_bg uppercase font-montserrat
   hover:shadow-lg active:shadow-sm active:-translate-y-0  hover:-translate-y-1 hover:shadow-dark_gray
    bg-gray shadow-md shadow-dark_gray  ease-in-out duration-100"
          onClick={hideModal}
        >
          no cancel
        </button>
        <button
          className="px-4 py-2 rounded-md font-extrabold text-light_bg uppercase font-montserrat
   hover:shadow-lg active:shadow-sm active:-translate-y-0  hover:-translate-y-1 hover:shadow-dark_gray
    bg-coral-red shadow-md shadow-dark_gray  ease-in-out duration-100"
          onClick={handelReset}
        >
          yes restart
        </button>
      </div>
    </div>
  );
}

export default Restart;
