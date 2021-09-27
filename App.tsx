import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Seja Bem Vindo!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
