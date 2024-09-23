import React, { useContext } from "react";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";
import Square from "./Square";
import Modals from "../modals/Modals";
import { GameContext } from "../../contexts/GameContext";
import { ModalContext } from "../../contexts/ModalConstext";

function Floor() {
  const { squares, xnext, tries } = useContext(GameContext);
  const { showModal, setModalmode } = useContext(ModalContext);
  const handelref = () => {
    showModal();
    setModalmode("start");
  };
  return (
    <>
      <div className="m-10">
        {/* header */}
        <header className="flex justify-between items-center">
          <div className=" font-montserrat font-extrabold text-4xl  flex justify-center items-center gap-2 ">
            <Xicon />
            <Oicon />
          </div>
          <div className="flex gap-2 shadow-md  shadow-black rounded-2xl py-2 px-4 justify-center items-center">
            {!xnext ? (
              <span className="font-bold">x</span>
            ) : (
              <span className="font-bold">o</span>
            )}

            <h1 className="font-bold">turn</h1>
          </div>
          <div
            onClick={handelref}
            className="bg-gray ease-in-out duration-100 active:animate-ping rounded-lg shadow-sm text-xl cursor-pointer font-bold text-dark_bg py-2 px-3"
          >
            ref
          </div>
        </header>
        {/* body */}
        <div className="grid grid-cols-3 grid-rows-3 w-full gap-4 mt-10">
          {squares.map((sq, ix) => (
            <Square key={ix} index={ix} user={sq} active={sq === 5} />
          ))}
        </div>
        {/* footer */}
        <footer className="grid grid-cols-3 gap-3 justify-between items-center mt-8 ">
          {/* 1 */}
          <div className="bg-blue p-3 flex justify-between items-center flex-col rounded-md text-dark_bg font-montserrat text-xl font-bold">
            <p className="text-lg font-semibold">x (you)</p>
            <h1> {tries.x}</h1>
          </div>
          {/* 2 */}
          <div className="bg-gray p-3 flex justify-between items-center flex-col rounded-md text-dark_bg font-montserrat text-xl font-bold">
            <p className="text-lg font-semibold">tries</p>
            <h1>{tries.o + tries.x}</h1>
          </div>
          {/* 3 */}
          <div className="bg-yellow p-3 flex justify-between items-center flex-col rounded-md text-dark_bg font-montserrat text-xl font-bold">
            <p className="text-lg font-semibold">o (cpu)</p>
            <h1>{tries.o}</h1>
          </div>
        </footer>
        <Modals />
      </div>
    </>
  );
}

export default Floor;
