import React, {useState} from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You clicked {count} times</Text>
      <Button 
        color="#fff"
        onPress={() => setCount(count + 1)}
        title="Click me!"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#fff',
    textTransform: 'uppercase',
    fontSize: 36
  },
  text2:{
    color:'#fff',
    textTransform: 'uppercase',
    fontSize: 36
  }
});
