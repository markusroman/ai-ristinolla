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

export const findWinningIndex = (board: (null | string)[], mark: string) => {
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

  let chances: number[] = [];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (
      !(
        (board[a] && board[b]) ||
        (board[a] && board[c]) ||
        (board[b] && board[c])
      )
    ) {
      continue;
    }

    if (board[a] === board[b] && !board[c]) {
      if (board[a] === mark) {
        return c;
      } else {
        chances.push(c);
      }
    } else if (board[a] === board[c] && !board[b]) {
      if (board[a] === mark) {
        return b;
      } else {
        chances.push(b);
      }
    } else if (board[b] === board[c] && !board[a]) {
      if (board[b] === mark) {
        return a;
      } else {
        chances.push(a);
      }
    }
  }

  return chances[0] ?? null;
};

export const calculateNextMove = (
  board: (null | string)[],
  is_players_turn: boolean
) => {
  if (checkFull(board)) {
    return 0;
  }

  let mark = is_players_turn ? 'X' : 'O';
  let winning_index = findWinningIndex(board, mark);
  let index: number = winning_index ?? 8;

  if (!winning_index && !board[4]) {
    index = 4;
  }

  while (board[index]) {
    index = Math.floor(Math.random() * 9);
  }

  return index;
};
