import { useContext } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { PlayerIdEnum } from '../../types';
import styles from './styles';
import PlayerRegisterView from '../PlayerRegisterView';
import GameView from '../GameView';
import { COLORS } from '../../constants';
import { PlayerDataContext } from '../../context';

export default function App() {
  const { playerData } = useContext(PlayerDataContext);

  const renderRegisterViews = () => {
    if (!playerData.PlayerOne.name || !playerData.PlayerOne.avatarId) {
      return (
        <PlayerRegisterView
          key={`player-${PlayerIdEnum.PLAYER_ONE}-register`}
          playerId={PlayerIdEnum.PLAYER_ONE}
        />
      );
    }
    if (!playerData.PlayerTwo.name || !playerData.PlayerTwo.avatarId) {
      return (
        <PlayerRegisterView
          key={`player-${PlayerIdEnum.PLAYER_TWO}-register`}
          playerId={PlayerIdEnum.PLAYER_TWO}
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
      return <GameView />;
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
