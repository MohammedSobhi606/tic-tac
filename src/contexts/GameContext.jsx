import { createContext, useContext, useEffect, useState } from "react";
import { WinnerLogic, bestmove } from "../logic/WinnerLogic";
import { ModalContext } from "./ModalConstext";
const GameContext = createContext();
const GameState = (props) => {
  const [activeplayer, setactiveplayer] = useState("x");
  const [screen, setscreen] = useState("start"); //start || game
  const [playmode, setplaymode] = useState("cpu"); //cpu || two player
  //   // ///////////////////////////
  const changeplayemode = (mode) => {
    setplaymode(mode);
    setscreen("game");
  };
  const [squares, setsquare] = useState(new Array(9).fill(""));
  const [xnext, setxnext] = useState(false); //هل اكس عليه الدور لو لا يبقي هوا بيلعب واوه هوا اللي علية الدور
  //
  const handlesquareclicked = (ix) => {
    const currentplayer = xnext ? "o" : "x";
    if (playmode === "cpu" && currentplayer !== activeplayer) {
      return;
    }
    if (squares[ix] === "x" || squares[ix] === "o") {
      return;
    }
    let ns = [...squares];
    ns[ix] = !xnext ? "x" : "o";
    setsquare(ns);
    setxnext(!xnext);
    //check winner
    checkWinner(ns);
  };
  // ////////////////////////////////////////////////
  const { showModal, hideModal, setModalmode } = useContext(ModalContext);
  const [winner, setwinner] = useState(null);
  const [winnerLine, setwinnerLine] = useState(null);
  const [tries, settries] = useState({ x: 0, o: 0 });
  // check winner
  const checkWinner = (ns) => {
    const iswinner = WinnerLogic(ns);
    if (iswinner) {
      setwinner(iswinner.winner);
      setwinnerLine(iswinner.linesWin);
      //set tries
      const tri = { ...tries };
      tri[iswinner.winner] += 1;
      settries(tri);
      showModal();
      setModalmode("winner");
    }
  };
  // ..........//////////.......
  const handelReset = () => {
    setsquare(new Array(9).fill(""));
    hideModal();
    setwinner(null);
    setwinnerLine(null);
    setscreen("start");
    settries({ x: 0, o: 0 });
  };
  const handelNextRound = () => {
    setsquare(new Array(9).fill(""));
    hideModal();
    setwinner(null);
    setwinnerLine(null);
  };
  // -------------------draw-----------------------------
  useEffect(() => {
    checkDrow(); // التعادل
    const currentplayer = !xnext ? "x" : "o"; // لعب الكمبيوتر
    if (playmode === "cpu" && currentplayer !== activeplayer && !winner) {
      cpuNextmove(squares);
    }
  }, [xnext, winner, screen]);
  // لعب الكمبيوتر
  const cpuNextmove = (sq) => {
    const bestMovecpu = bestmove(sq, activeplayer === "x" ? "o" : "x");
    let ns = [...squares];
    ns[bestMovecpu] = !xnext ? "x" : "o";
    setsquare(ns);
    setxnext(!xnext);
    checkWinner(ns);
  };
  //     =============================
  const checkDrow = () => {
    const moves = squares.filter((sq) => sq === "");
    if (moves.length === 0) {
      setwinner("draw");
      showModal();
      setModalmode("winner");
    }
  };
  return (
    <GameContext.Provider
      value={{
        screen,
        activeplayer,
        setactiveplayer,
        setscreen,
        playmode,
        setplaymode,
        changeplayemode,
        squares,
        handlesquareclicked,
        setsquare,
        xnext,
        tries,
        winner,
        handelReset,
        handelNextRound,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
export { GameContext, GameState };
