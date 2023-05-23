import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export default StyleSheet.create({
  wrapper: { 
    backgroundColor: COLORS.light,
    borderRadius: 16,
    marginTop: '15%',
    height: '85%',
    padding: 24,
    shadowColor: COLORS.grey,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    elevation: 10
  },
  title: { 
    color: COLORS.darkblue,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 32
  },
  inputLabel: {
    color: COLORS.darkblue,
    marginBottom: 4
  },
  input: {
    borderBottomWidth: 2,
    borderColor: COLORS.darkblue,
    borderRadius: 8,
    height: 56,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
  },
  inputFocused: {
    borderWidth: 2,
    borderColor: COLORS.blue
  }
});