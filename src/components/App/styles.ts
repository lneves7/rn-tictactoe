import { StyleSheet, StatusBar as RNStatusBar } from 'react-native'
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightblue,
    paddingTop: (RNStatusBar.currentHeight || 0) + 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  }
});

export default styles; 