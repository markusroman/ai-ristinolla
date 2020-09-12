export const checkWin = (board: (null | string)[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
};

export const checkFull = (board: (null | string)[]) => {
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      return false;
    }
  }
  return true;
};

export const calculateNextMove = (board: (null | string)[]) => {
  let index = 0;

  if (checkFull(board)) {
    return index;
  }

  while (board[index]) {
    index = Math.floor(Math.random() * 9);
  }

  return index;
};
