import { useState } from 'react';
import { View } from 'react-native';
import { PlayerData, PlayerIdEnum } from '../../types';
import styles from './styles';
import PlayerCard from '../PlayerCard';
import Board from '../Board';

export interface GameViewProps {
  playerData: PlayerData;
  onWinCallback: (winner: PlayerIdEnum) => void;
}
const GameView: React.FC<GameViewProps> = ({ playerData, onWinCallback }) => {
  const [playerTurn, setPlayerTurn] = useState<PlayerIdEnum>(PlayerIdEnum.PLAYER_ONE);
  const [showPlayerCards, setShowPlayerCards] = useState<boolean>(true);
  const { PlayerOne, PlayerTwo } = playerData;

  const alternatePlayerTurn = () => {
    const newTurn =
      playerTurn === PlayerIdEnum.PLAYER_ONE ? PlayerIdEnum.PLAYER_TWO : PlayerIdEnum.PLAYER_ONE;

    setPlayerTurn(newTurn);
  };

  const handleWinCallback = (winner: PlayerIdEnum) => {
    setShowPlayerCards(false);
    onWinCallback(winner);
  };

  return (
    <View style={styles.wrapper}>
      <View>
        {showPlayerCards && (
          <PlayerCard
            playerData={PlayerOne}
            isPlayerTurn={playerTurn === PlayerIdEnum.PLAYER_ONE}
          />
        )}
      </View>
      <Board
        currentTurn={playerTurn}
        playerData={playerData}
        onEndTurnCallback={alternatePlayerTurn}
        onWinCallback={(winner) => handleWinCallback(winner)}
        onPlayAgainCallback={() => setShowPlayerCards(true)}
        onTieCallback={() => setShowPlayerCards(false)}
      />
      <View>
        {showPlayerCards && (
          <PlayerCard
            playerData={PlayerTwo}
            isPlayerTurn={playerTurn === PlayerIdEnum.PLAYER_TWO}
          />
        )}
      </View>
    </View>
  );
};

export default GameView;
