import { useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { PlayerData, PlayerIdEnum, SymbolEnum } from '../../types';
import styles from './styles';
import PlayerRegisterView from '../PlayerRegisterView';
import GameView from '../GameView';
import { COLORS } from '../../constants';

export default function App() {
  const [playerData, setPlayerData] = useState<PlayerData>({
    PlayerOne: { winCount: 0, symbol: SymbolEnum.X },
    PlayerTwo: { winCount: 0, symbol: SymbolEnum.CIRCLE },
  });

  const handleNextRegister = (playerid: PlayerIdEnum, name: string, avatarId: string) => {
    setPlayerData((prevPlayerData) => ({
      ...prevPlayerData,
      [playerid]: {
        ...prevPlayerData[playerid],
        name,
        avatarId,
      },
    }));
  };

  const renderRegisterViews = () => {
    if (!playerData.PlayerOne.name || !playerData.PlayerOne.avatarId) {
      return (
        <PlayerRegisterView
          key={`player-${PlayerIdEnum.PLAYER_ONE}-register`}
          playerId={PlayerIdEnum.PLAYER_ONE}
          onNextCallback={({ name, avatarId }) =>
            handleNextRegister(PlayerIdEnum.PLAYER_ONE, name, avatarId)
          }
        />
      );
    }
    if (!playerData.PlayerTwo.name || !playerData.PlayerTwo.avatarId) {
      return (
        <PlayerRegisterView
          key={`player-${PlayerIdEnum.PLAYER_TWO}-register`}
          playerId={PlayerIdEnum.PLAYER_TWO}
          onNextCallback={({ name, avatarId }) =>
            handleNextRegister(PlayerIdEnum.PLAYER_TWO, name, avatarId)
          }
        />
      );
    }
    return null;
  };

  const renderGameView = () => {
    if (
      playerData.PlayerOne.name &&
      playerData.PlayerOne.avatarId &&
      playerData.PlayerTwo.name &&
      playerData.PlayerTwo.avatarId
    ) {
      return <GameView playerData={playerData} onWinCallback={(winner) => console.log(winner)} />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" />
      <LinearGradient colors={[COLORS.gradient, 'transparent']} style={styles.gradient} />
      {renderRegisterViews()}
      {renderGameView()}
    </View>
  );
}
