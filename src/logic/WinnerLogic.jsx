const linesWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function WinnerLogic(squares) {
  for (let i = 0; linesWin.length > i; i++) {
    const [a, b, c] = linesWin[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], linesWin: linesWin[i] };
    }
  }
  return null;
}
export function bestmove(squares, currentplayer) {
  const getarrayDublecated = (arr) => {
    let count = 0;
    arr.forEach((i) => {
      if (squares[i] === currentplayer) {
        count += 1;
      }
    });
  };
  const sortedLines = linesWin.sort((a, b) => {
    const acount = getarrayDublecated(a);
    const bcount = getarrayDublecated(b);
    return bcount - acount;
  });
  for (let i = 0; i < sortedLines.length; i++) {
    let val = sortedLines[i].find((el) => {
      if (squares[el] === "") {
        return el + "";
      }
      return null;
    });
    if (!val) {
      continue;
    } else {
      return +val;
    }
  }
  return null;
}
