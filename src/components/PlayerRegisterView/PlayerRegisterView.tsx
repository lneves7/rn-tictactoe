import { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, Pressable } from "react-native";
import { PlayerIdEnum } from "../../types";
import styles from './styles'
import { COLORS } from "../../constants";
import AvatarPicker from "../AvatarPicker/AvatarPicker";

export interface PlayerRegisterViewProps {
  playerId: PlayerIdEnum;
  onNextCallback: (input: { name: string, avatarId: string }) => void;
}
const PlayerRegisterView: React.FC<PlayerRegisterViewProps> = ({
  playerId,
  onNextCallback
}) => {
  const inputRef = useRef<TextInput>(null);
  const [playerName, setPlayerName] = useState<string>('');
  const [playerAvatar, setPlayerAvatar] = useState<string>('');
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const isDisabled = playerName === '' || playerAvatar === '';

  const getPlayerString = () => {
    return playerId === PlayerIdEnum.PLAYER_ONE ? 'Player One' : 'Player Two'
  }

  const handleAvatarSelect = (avatarId: string) => setPlayerAvatar(avatarId);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible>
      <View style={styles.wrapper} >
        <Text style={styles.title}>
          {`${getPlayerString()}, pick a nickname and avatar!`}
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
        <AvatarPicker
          selectedAvatar={playerAvatar}
          onSelectAvatarCallback={handleAvatarSelect}
        />
        <Pressable
          disabled={isDisabled}
          android_ripple={{ color: COLORS.ripple }}
          style={[styles.submit, isDisabled && styles.submit__disabled]}
          onPress={() => {
            onNextCallback({ name: playerName, avatarId: playerAvatar })
          }}
        >
          <Text style={styles.submitText}>
            Confirm
          </Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PlayerRegisterView;