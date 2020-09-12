import React from 'react';
import { useRecoilValue } from 'recoil';
import { isPlayersTurn } from '../store';

interface Props {}

const TurnLabel: React.FC<Props> = () => {
  const is_players_turn = useRecoilValue(isPlayersTurn);
  return <>{is_players_turn ? 'Your turn' : "Opponent's turn"}</>;
};

export default TurnLabel;
