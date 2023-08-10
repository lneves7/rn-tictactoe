import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export default StyleSheet.create({
  wrapper: {
    height: 100,
    width: '100%',
    backgroundColor: COLORS.light,
    borderRadius: 16,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    elevation: 10,
    borderWidth: 6,
    borderColor: COLORS.light,
    flexDirection: "row",
  },
  wrapper__isTurn: {
    borderWidth: 6,
    borderColor: COLORS.brightBlue,
  },
  playerName: {
    color: COLORS.darkblue,
    fontSize: 22,
    fontWeight: '500',
    marginLeft: 16,
  },
  score: {
    color: COLORS.blue,
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  symbol: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    position: 'absolute',
    right: 8
  }
})