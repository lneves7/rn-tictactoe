import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View } from 'react-native';
import { PlayerData, PlayerIdEnum, SymbolEnum } from '../../types';
import styles from './styles';
import PlayerRegisterView from '../PlayerRegisterView/PlayerRegisterView';
import { COLORS } from '../../constants';

export default function App() {
  const [playerData, setPlayerData] = useState<PlayerData>({
    PlayerOne: { winCount: 0, symbol: SymbolEnum.X },
    PlayerTwo: { winCount: 0, symbol: SymbolEnum.CIRCLE },
  });

  const handleNextRegister = (
    playerid: PlayerIdEnum,
    name: string,
    avatarId: string,
  ) => {
    setPlayerData(prevPlayerData => ({
      ...prevPlayerData,
      [playerid]: {
        ...prevPlayerData[playerid],
        name,
        avatarId,
      }
    }));
  }

  const renderRegisterViews = () => {
    if (!playerData.PlayerOne.name || !playerData.PlayerOne.avatarId
      || !playerData.PlayerOne.symbol
    ) {
      return (
        <PlayerRegisterView
          playerId={PlayerIdEnum.PLAYER_ONE}
          onNextCallback={({ name, avatarId }) => handleNextRegister(
            PlayerIdEnum.PLAYER_ONE,
            name,
            avatarId,
          )}
        />
      );
    }
    if (!playerData.PlayerTwo.name || !playerData.PlayerTwo.avatarId
      || !playerData.PlayerTwo.symbol
    ) {
      return (
        <PlayerRegisterView
          playerId={PlayerIdEnum.PLAYER_TWO}
          onNextCallback={({ name, avatarId }) => handleNextRegister(
            PlayerIdEnum.PLAYER_TWO,
            name,
            avatarId,
          )}
        />
      );
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.lightblue} />
      {renderRegisterViews()}
    </View>
  );
}