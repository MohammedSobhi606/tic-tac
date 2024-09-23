import React, { useContext } from "react";
import Go from "./Components/start/Go";
import Floor from "./Components/floor/Floor";
import { GameContext } from "./contexts/GameContext";

const App = () => {
  const { screen } = useContext(GameContext);
  return (
    <main className="h-screen  bg-dark_bg text-gray flex justify-center items-center">
      <div>{screen === "start" ? <Go /> : <Floor />}</div>
    </main>
  );
};

export default App;
