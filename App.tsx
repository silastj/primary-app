import React, { useState } from 'react';
import { StyleSheet, Button, Text, SafeAreaView, Alert, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer'
import Item from './components/Item';

export default function App() {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState<string>('')

  const handleNomeInputChange = (text: string) => {
    setNome(text)
  }

  const exibirAlerta = () => {
    Alert.prompt('Informe  o seu nome', 'Digite o seu nome', handleNomeInputChange)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header name={nome} />
      <Text style={styles.text}>You clicked {count} times</Text>
      <Button
        color="#fff"
        onPress={() => setCount(count + 1)}
        title="Quantidades de clique nesse button!"
      />
      <Button
        title="Aperte aqui"
        color="#ff0000"
        onPress={() => Alert.alert('clicouuuuuuuuuuuuuuuuu')}
      />
      <Button
        color="pink"
        title="Digite o seu nome"
        onPress={exibirAlerta}
      />
      <View sytle={styles.body}>
        <Item
          title="Quatro Queijos"
          price={50}
          ingredientes={["queijo", "massa", "oregano"]}
        />
        <Item
          title="Atum"
          price={70}
          ingredientes={["atum", "massa", "oregano", "maionese"]}
        />
        <Item
          title="Mussarela de Bufala"
          price={90}
          ingredientes={["queijo", "massa", "oregano", "tomate seco", "mussarela", "azeite"]}
        />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e5e5eed',
    justifyContent: 'flex-start',

  },
  text: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 36
  },
  text2: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 36
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    color: 'white'
  },
  body:{
    flex: 1
  }
});
