import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View } from 'react-native';
import { PlayerData, PlayerIdEnum, SymbolEnum } from '../../types';
import styles from './styles';
import PlayerRegisterView from '../PlayerRegisterView/PlayerRegisterView';
import { COLORS } from '../../constants';

export default function App() {
  const [playerData, setPlayerData] = useState<PlayerData>({
    PlayerOne: {winCount: 0},
    PlayerTwo: {winCount: 0},
  });

  const handleNextRegister = (
    playerid: PlayerIdEnum, 
    name: string, 
    avatarId: string, 
    symbol: SymbolEnum
    ) => {
    setPlayerData(prevPlayerData => ({
      ...prevPlayerData, 
      [playerid]: {
        name, 
        avatarId, 
        symbol
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
          onNextCallback={({name, avatarId, symbol}) => handleNextRegister(
            PlayerIdEnum.PLAYER_ONE,
            name,
            avatarId,
            symbol
          )} 
        />
      );
    }
  }
   
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.lightblue} />
      { renderRegisterViews() }
    </View>
  );
}