import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import styles from './styles';

export default function App() {
    return (
      <View style={styles.container}>
        <Text>Hello Tic tac Toe!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  /**
   * 
   * 
#F6F1F1
#AFD3E2
#19A7CE
#146C94
   */