import { StyleSheet } from "react-native";
import { BOARD_SIZE, COLORS } from "../../constants";

export default StyleSheet.create({
  wrapper: {
    height: 'auto',
  },
  wrapper__full: {
    height: '100%',
  },
  board: {
    height: BOARD_SIZE,
    width: BOARD_SIZE,
    flexWrap: 'wrap',
    gap: 4,
    alignContent: 'center',
    justifyContent: 'center',
  },
  board__withFeedback: {
    marginTop: 100,
  },
  tile: {
    backgroundColor: COLORS.light,
    elevation: 10,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    borderRadius: 8,
    width: (BOARD_SIZE / 3) - 4,
    height: (BOARD_SIZE / 3) - 4,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  tileImage: {
    width: (BOARD_SIZE / 3) - 8,
    height: (BOARD_SIZE / 3) - 8,
  },
  feedback: {
    width: BOARD_SIZE,
    backgroundColor: COLORS.light,
    position: 'absolute',
    bottom: 24,
    elevation: 20,
    shadowOffset: { height: -10, width: 10 },
    shadowOpacity: 1,
    padding: 16,
    borderRadius: 8,
  },
  feedbackText: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.darkblue,
    textAlign: 'center'
  },
  feedbackButton: {
    height: 48,
    width: '100%',
    backgroundColor: COLORS.darkblue,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  feedbackAvatar: {
    height: 50,
    width: 50,
    marginRight: 16,
    marginLeft: -16,
  },
  feedbackButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.light,
  }
});