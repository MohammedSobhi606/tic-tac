import React, { useContext, useState } from "react";
import Button from "../Button";
import { GameContext } from "../../contexts/GameContext";

function Go() {
  const {
    playmode,
    setplaymode,
    activeplayer,
    setactiveplayer,
    changeplayemode,
  } = useContext(GameContext);
  return (
    <div className="flex flex-col gap-6 m-10">
      <header className="font-extrabold font-palanquin text-8xl flex justify-center items-center gap-4 ">
        <span className="text-yellow"> x </span>
        <span className="text-blue"> o </span>
      </header>
      <div className="flex flex-col justify-center items-center gap-6 bg-light_bg p-6 rounded-lg">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-3xl font-palanquin font-bold leading-normal text-center">
            pick player 1'st one
          </h1>
          <div className="p-3 duration-100 ease-linear cursor-pointer gap-2 rounded-full flex  w-full text-blue font-palanquin text-3xl bg-dark_bg">
            <span
              onClick={() => setactiveplayer("x")}
              className={` ${
                activeplayer === "x" && "bg-gray text-dark_bg"
              } font-bold text-center rounded-full duration-500 ease-linear w-full`}
            >
              x
            </span>
            <span
              onClick={() => setactiveplayer("o")}
              className={`${
                activeplayer === "o" && "bg-gray text-dark_bg"
              } font-bold text-center rounded-full duration-500 ease-linear w-full`}
            >
              o
            </span>
          </div>
          <p className="text-dark_gray">remmember x goes 1'st</p>
        </div>
      </div>
      <button
        className="px-4 py-2 rounded-md font-extrabold text-light_bg uppercase font-montserrat
   hover:shadow-lg active:shadow-sm active:-translate-y-0  hover:-translate-y-1 hover:shadow-dark_gray
   bg-yellow  shadow-md shadow-dark_gray  ease-in-out duration-100"
        onClick={() => changeplayemode("cpu")}
      >
        new game (vs cpu)
      </button>
      <button
        onClick={() => changeplayemode("2player")}
        className="px-4 py-2 rounded-md font-extrabold text-light_bg uppercase font-montserrat
   hover:shadow-lg active:shadow-sm active:-translate-y-0  hover:-translate-y-1 hover:shadow-dark_gray
   bg-blue  shadow-md shadow-dark_gray  ease-in-out duration-100"
      >
        new game (vs player)
      </button>
    </div>
  );
}

export default Go;
