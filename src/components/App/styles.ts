import { StyleSheet } from 'react-native'
import { StatusBar as RNStatusBar } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: (RNStatusBar.currentHeight || 0) + 1,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16
    },
});

export default styles;