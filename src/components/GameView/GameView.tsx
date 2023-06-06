import { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, Pressable, Button } from "react-native";
import { PlayerData, PlayerIdEnum } from "../../types";
import styles from './styles'
import PlayerCard from "../PlayerCard";

export interface GameViewProps {
  playerData: PlayerData;
  onWinCallback: (winner: PlayerIdEnum) => void;
}
const GameView: React.FC<GameViewProps> = ({
  playerData: { PlayerOne, PlayerTwo },
  onWinCallback
}) => {
  const [playerTurn, setPlayerTurn] = useState<PlayerIdEnum>(PlayerIdEnum.PLAYER_ONE);

  const alternatePlayerTurn = () => {
    const newTurn = playerTurn === PlayerIdEnum.PLAYER_ONE
      ? PlayerIdEnum.PLAYER_TWO
      : PlayerIdEnum.PLAYER_ONE;

    setPlayerTurn(newTurn);
  }

  return (
    <View style={styles.wrapper} >
      <View style={styles.playerOneCardWrapper}>
        <PlayerCard
          playerData={PlayerOne}
          isPlayerTurn={playerTurn === PlayerIdEnum.PLAYER_ONE}
        />
      </View>
      <View style={styles.playerTwoCardWrapper}>
        <PlayerCard
          playerData={PlayerTwo}
          isPlayerTurn={playerTurn === PlayerIdEnum.PLAYER_TWO}
        />
      </View>
      <Button title="Trocar" onPress={() => alternatePlayerTurn()}></Button>
    </View>
  );
};

export default GameView;