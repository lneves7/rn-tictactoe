import { View, Text, Image } from 'react-native';
import { SymbolEnum } from '../../types';
import styles from './styles';
import { AVATARS, SYMBOLS } from '../../constants';

interface PlayerCardProps {
  playerData: {
    name?: string;
    symbol?: SymbolEnum;
    avatarId?: string;
    winCount: number;
  };
  isPlayerTurn: boolean;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  playerData: { name, symbol, avatarId, winCount },
  isPlayerTurn,
}) => (
  <View style={[styles.wrapper, isPlayerTurn && styles.wrapper__isTurn]}>
    {!!avatarId && <Image style={styles.avatar} source={AVATARS[avatarId]} />}
    <View>
      <Text style={styles.playerName}>{name}</Text>
      <Text style={styles.score}>Score: {winCount}</Text>
    </View>
    {!!symbol && <Image style={styles.symbol} source={SYMBOLS[symbol]} />}
  </View>
);

export default PlayerCard;
