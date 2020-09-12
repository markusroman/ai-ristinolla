import React from 'react';
import { useRecoilValue } from 'recoil';
import { isPlayersTurn } from '../store';

interface Props {
  resetGame: () => void;
}

const NewGame: React.FC<Props> = ({ resetGame }) => {
  const is_players_turn = useRecoilValue(isPlayersTurn);

  const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    resetGame();
  };

  return (
    <>
      <div>{is_players_turn ? 'You won! 😄' : 'You lost! 😢'}</div>
      <button onClick={handleReset}>New game</button>
    </>
  );
};

export default NewGame;
