import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mot!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white', 
    fontSize: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#293133',
    // backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
