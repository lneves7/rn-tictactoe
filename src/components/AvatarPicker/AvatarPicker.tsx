import { Image, Pressable, Text, View } from "react-native";
import styles from './styles';
import { AVATARS, COLORS } from "../../constants";

interface AvatarPickerProps {
  selectedAvatar: string,
  onSelectAvatarCallback: (avatarId: string) => void
}

const AvatarPicker: React.FC<AvatarPickerProps> = ({
  selectedAvatar,
  onSelectAvatarCallback
}) => {

  const renderAvatars = () => {
    return Object.keys(AVATARS).map((avatarId, index) => {
      return (
        <Pressable
          key={`avatar-button-${avatarId}`}
          android_ripple={{ color: COLORS.ripple }}
          style={[
            styles.avatarButton,
            selectedAvatar === avatarId && styles.avatarButton__selected
          ]}
          onPress={() => onSelectAvatarCallback(avatarId)}
        >
          <Image
            style={styles.avatarImage}
            source={Object.values(AVATARS)[index]}
          />
        </Pressable >
      );
    });
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>
        Choose your avatar
      </Text>
      <View style={styles.avatarGrid}>
        {renderAvatars()}
      </View>
    </View>
  );
};

export default AvatarPicker;