import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 24
  },
  label: {
    fontSize: 14,
    color: COLORS.darkblue,
    marginBottom: 16
  },
  avatarGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  avatarButton: {
    width: 95,
    height: 95,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  avatarButton__selected: {
    borderWidth: 3,
    borderColor: COLORS.blue,
    backgroundColor: COLORS.lightblue
  },
  avatarImage: {
    width: 90,
    height: 90
  }
});