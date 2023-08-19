import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.light,
    borderRadius: 16,
    marginTop: '15%',
    padding: 24,
    shadowColor: COLORS.grey,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    elevation: 10
  },
  title: {
    color: COLORS.darkblue,
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 32,
    textAlign: 'center'
  },
  inputLabel: {
    fontSize: 14,
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
  },
  submit: {
    height: 48,
    width: '100%',
    backgroundColor: COLORS.darkblue,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submit__disabled: {
    backgroundColor: COLORS.grey,
  },
  submitText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  }
});