import { useContext, useState } from 'react';
import { View } from 'react-native';
import { PlayerIdEnum } from '../../types';
import styles from './styles';
import PlayerCard from '../PlayerCard';
import Board from '../Board';
import { PlayerDataContext } from '../../context';

const GameView: React.FC = () => {
  const {
    playerData: { PlayerOne, PlayerTwo },
    setPlayerData,
  } = useContext(PlayerDataContext);
  const [playerTurn, setPlayerTurn] = useState<PlayerIdEnum>(PlayerIdEnum.PLAYER_ONE);
  const [showPlayerCards, setShowPlayerCards] = useState<boolean>(true);

  const alternatePlayerTurn = () => {
    const newTurn =
      playerTurn === PlayerIdEnum.PLAYER_ONE ? PlayerIdEnum.PLAYER_TWO : PlayerIdEnum.PLAYER_ONE;

    setPlayerTurn(newTurn);
  };

  const handleWinCallback = (winner: PlayerIdEnum) => {
    setShowPlayerCards(false);
    setPlayerData((prevPlayerData) => ({
      ...prevPlayerData,
      [winner]: {
        ...prevPlayerData[winner],
        winCount: prevPlayerData[winner].winCount + 1,
      },
    }));
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
