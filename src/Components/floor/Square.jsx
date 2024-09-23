import React from "react";
import Xicon from "../icons/Xicon";
import Oicon from "../icons/Oicon";
import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
function Square({ index, user, active }) {
  const { handlesquareclicked } = useContext(GameContext);
  return (
    <div
      className={`bg-light_bg px-7 py-5 w-24  h-20 flex justify-center items-center cursor-pointer shadow-md shadow-black rounded-lg
    
      `}
      onClick={() => handlesquareclicked(index)}
    >
      {user === "x" && <Xicon />}
      {user === "o" && <Oicon />}
    </div>
  );
}

export default Square;
