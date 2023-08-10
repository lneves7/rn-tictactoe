import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { PlayerData, PlayerIdEnum } from "../../types";
import styles from './styles'
import PlayerCard from "../PlayerCard";
import Board from "../Board";

export interface GameViewProps {
  playerData: PlayerData;
  onWinCallback: (winner: PlayerIdEnum) => void;
}
const GameView: React.FC<GameViewProps> = ({
  playerData,
  onWinCallback
}) => {
  const [playerTurn, setPlayerTurn] = useState<PlayerIdEnum>(PlayerIdEnum.PLAYER_ONE);
  const [winner, setWinner] = useState<PlayerIdEnum>();
  const { PlayerOne, PlayerTwo } = playerData;

  const alternatePlayerTurn = () => {
    const newTurn = playerTurn === PlayerIdEnum.PLAYER_ONE
      ? PlayerIdEnum.PLAYER_TWO
      : PlayerIdEnum.PLAYER_ONE;

    setPlayerTurn(newTurn);
  }

  const handleWinCallback = (winner: PlayerIdEnum) => {
    setWinner(winner);
    onWinCallback(winner);
  }

  return (
    <View style={styles.wrapper} >
      <View>
        {!winner &&
          <PlayerCard
            playerData={PlayerOne}
            isPlayerTurn={playerTurn === PlayerIdEnum.PLAYER_ONE}
          />
        }
      </View>
      <Board
        currentTurn={playerTurn}
        playerData={playerData}
        onEndTurnCallback={alternatePlayerTurn}
        onWinCallback={winner => handleWinCallback(winner)}
      />
      <View>
        {!winner &&
          <PlayerCard
            playerData={PlayerTwo}
            isPlayerTurn={playerTurn === PlayerIdEnum.PLAYER_TWO}
          />
        }
      </View>
    </View>
  );
};

export default GameView;