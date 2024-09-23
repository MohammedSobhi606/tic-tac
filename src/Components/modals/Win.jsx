import React, { useContext } from "react";
import Xicon from "../icons/Xicon";
import Button from "../Button";
import { GameContext } from "../../contexts/GameContext";
import Oicon from "../icons/Oicon";

function Win() {
  const { winner, handelReset, handelNextRound } = useContext(GameContext);
  return (
    <div className="flex justify-center items-center gap-4 flex-col p-4">
      {winner && winner !== "draw" ? (
        <>
          <p className="font-extrabold animate-bounce text-coral-red">
            you win !
          </p>
          <h3 className=" flex justify-center items-center gap-4">
            {winner === "x" ? <Xicon /> : <Oicon />}
            <span className="text-3xl font-bold">takes the round</span>
          </h3>
        </>
      ) : (
        <h3 className=" flex text-3xl font-bold font-montserrat justify-center items-center gap-4">
          draw
        </h3>
      )}

      <div className="flex justify-center items-center gap-4">
        <button
          className="px-4 py-2 rounded-md font-extrabold text-light_bg uppercase font-montserrat
   hover:shadow-lg active:shadow-sm active:-translate-y-0  hover:-translate-y-1 hover:shadow-dark_gray
    bg-gray shadow-md shadow-dark_gray  ease-in-out duration-100"
          onClick={handelReset}
        >
          quite
        </button>
        <button
          className="px-4 py-2 rounded-md font-extrabold text-light_bg uppercase font-montserrat
   hover:shadow-lg active:shadow-sm active:-translate-y-0  hover:-translate-y-1 hover:shadow-dark_gray
    bg-yellow shadow-md shadow-dark_gray  ease-in-out duration-100"
          onClick={handelNextRound}
        >
          next round
        </button>
      </div>
    </div>
  );
}

export default Win;
