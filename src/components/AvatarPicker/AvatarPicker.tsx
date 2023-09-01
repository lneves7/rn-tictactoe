import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles';
import { AVATARS, COLORS } from '../../constants';

interface AvatarPickerProps {
  selectedAvatar: string;
  disabledAvatar: string;
  onSelectAvatarCallback: (avatarId: string) => void;
}

const AvatarPicker: React.FC<AvatarPickerProps> = ({
  selectedAvatar,
  onSelectAvatarCallback,
  disabledAvatar,
}) => {
  const renderAvatars = () =>
    Object.keys(AVATARS).map((avatarId, index) => (
      <Pressable
        key={`avatar-button-${avatarId}`}
        disabled={avatarId === disabledAvatar}
        android_ripple={{ color: COLORS.ripple }}
        style={[
          styles.avatarButton,
          selectedAvatar === avatarId && styles.avatarButton__selected,
          disabledAvatar === avatarId && styles.avatarButton__disabled,
        ]}
        onPress={() => onSelectAvatarCallback(avatarId)}
      >
        <Image style={[styles.avatarImage]} source={Object.values(AVATARS)[index]} />
      </Pressable>
    ));

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Choose your avatar</Text>
      <View style={styles.avatarGrid}>{renderAvatars()}</View>
    </View>
  );
};

export default AvatarPicker;
