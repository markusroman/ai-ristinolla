import React from 'react';
import { useRecoilValue } from 'recoil';
import { isGameWon, isPlayersTurn } from '../store';

interface Props {
  item: string | null;
  index: number;
  clicked: (i: number) => void;
}

const Tile: React.FC<Props> = ({ item, index, clicked }) => {
  const is_game_won = useRecoilValue(isGameWon);
  const is_players_turn = useRecoilValue(isPlayersTurn);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (is_game_won || !is_players_turn) {
      return null;
    }

    clicked(index);
  };

  return (
    <div className='Tile' onClick={handleClick}>
      {item}
    </div>
  );
};

export default Tile;
