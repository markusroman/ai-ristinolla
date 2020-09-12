import React from 'react';
import { useRecoilValue } from 'recoil';
import { isBoardFull, isGameWon, isPlayersTurn } from '../store';

interface Props {
  resetGame: () => void;
}

const NewGame: React.FC<Props> = ({ resetGame }) => {
  const is_players_turn = useRecoilValue(isPlayersTurn);
  const is_board_full = useRecoilValue(isBoardFull);
  const is_game_won = useRecoilValue(isGameWon);

  const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    resetGame();
  };

  if (is_board_full && !is_game_won) {
    return (
      <>
        <div>{`Tie 😐`}</div>
        <button onClick={handleReset}>New game</button>
      </>
    );
  }

  return (
    <>
      <div>{is_players_turn ? 'You lost! 😢' : 'You won! 😄'}</div>
      <button onClick={handleReset}>New game</button>
    </>
  );
};

export default NewGame;
