import React, { useState } from 'react';
import { StyleSheet, Button, Text, SafeAreaView, Alert, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer'
import Item from './components/Item';
import { Person } from './types/Person'


export default function App() {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState<string>('')
  const [person, setPerson] = useState<Person>({
    name: "Silas",
    age: 10,
    height: 120
  })
  const [ingredientes, setIngredientes] = useState<string[]>([
    'farinha',
    'ovo',
    'manteiga'
  ])

  const handleNomeInputChange = (text: string) => {
    setNome(text)
  }

  const exibirAlerta = () => {
    Alert.prompt('Informe  o seu nome', 'Digite o seu nome', handleNomeInputChange)
  }

  // const handleClick = () => {
  //   Alert.alert('Apertou button')
  // }

  const changeName = (newName: string) => {
    setPerson({ ...person, name: newName })
  }

  const changeAge = (newAge: number) => {
    setPerson({ ...person, age: newAge })
  }

  const handleMoreItem = () => {
    setIngredientes([...ingredientes, 'NOVO NOVO'])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header name={nome} />
      <Text style={styles.text}>You clicked {count} times</Text>

      <Text>Aqui é o NOME: {person.name}</Text>
      <Text>Aqui é o IDADE: {person.age}</Text>

      <Button
        color="#ff0000"
        onPress={() => changeName('novoNome')}
        title="Troque o NOME"
      />
      <Button
        color="#ff0000"
        onPress={() => changeName('SAMRA')}
        title="Troque o Novo NOME"
      />
      <Button
        color="#ff0000"
        onPress={() => changeAge(100)}
        title="Troque o AGE"
      />
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
      <View style={styles.body}>
        <Item
          onPress={() => Alert.alert('Clicou em QUeijo')}
          title="Quatro Queijos"
          price={50}
          ingredientes={["queijo", "massa", "oregano"]}
        />
        <Item
          onPress={() => Alert.alert('Clicou em Atum')}
          title="Atum"
          price={70}
          ingredientes={["atum", "massa", "oregano", "maionese"]}
        />
        <Item
          onPress={() => Alert.alert('Clicou em Bufala')}
          title="Mussarela de Bufala"
          price={90}
          ingredientes={["queijo", "massa", "oregano", "tomate seco", "mussarela", "azeite"]}
        />
        {ingredientes.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
      <Button 
        onPress={handleMoreItem}
        title="adicionar Item"
      />
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
  body: {
    flex: 1
  }
});
