import { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import { useRecoilState, useRecoilValue } from 'recoil';
import { calculateNextMove } from '../helpers';
import { board, isPlayersTurn, isGameWon } from '../store';
import { isBoardFull } from '../store/selectors';

const useBoard = () => {
  const [gameboard, setBoard] = useRecoilState(board);
  const [is_players_turn, setIsPlayersTurn] = useRecoilState(isPlayersTurn);
  const is_board_full = useRecoilValue(isBoardFull);
  const is_game_won = useRecoilValue(isGameWon);
  const resetBoard = useResetRecoilState(board);

  const resetGame = () => {
    resetBoard();
    setIsPlayersTurn(true);
  };

  const updateBoard = (clicked_index: number) => {
    if (gameboard[clicked_index] || is_board_full || is_game_won) {
      return null;
    }

    let new_state: (null | string)[] = [];

    setBoard((board) => {
      new_state = [...board];
      new_state[clicked_index] = is_players_turn ? 'X' : 'O';
      return new_state;
    });

    setIsPlayersTurn((value) => !value);
  };

  useEffect(() => {
    if (!is_players_turn) {
      const to_click = calculateNextMove(gameboard);
      updateBoard(to_click);
    }
  }, [is_players_turn, gameboard]);

  return { updateBoard, resetGame };
};

export default useBoard;
