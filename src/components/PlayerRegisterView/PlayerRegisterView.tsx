import { useRef, useState } from "react";
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import { PlayerIdEnum, SymbolEnum } from "../../types";
import styles from './styles'
import { COLORS } from "../../constants";

export interface PlayerRegisterViewProps {
  playerId: PlayerIdEnum;
  onNextCallback: (input: { name: string, avatarId: string, symbol: SymbolEnum }) => void;
}
const PlayerRegisterView: React.FC<PlayerRegisterViewProps> = ({
  playerId,
  onNextCallback
}) => {
  const inputRef = useRef<TextInput>(null);
  const [playerName, setPlayerName] = useState<string>('');
  const [playerAvatar, setPlayerAvatar] = useState<string>('');
  const [inputFocused, setInputFocused] = useState<boolean>(false);

  const getPlayerString = () => {
    return playerId === PlayerIdEnum.PLAYER_ONE ? 'Player One' : 'Player Two'
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible>
      <View style={styles.wrapper} >
        <Text style={styles.title}>
          {`${getPlayerString()}, create your identity!`}
        </Text>
        <Text 
          style={styles.inputLabel}
        >
          Player Nickname: 
        </Text>
        <TextInput
          ref={inputRef}
          placeholder="Type here"
          placeholderTextColor={COLORS.grey}
          style={[styles.input, inputFocused && styles.inputFocused]}
          value={playerName}
          onChangeText={value => setPlayerName(value)} 
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PlayerRegisterView;