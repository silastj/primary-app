import {StyleSheet, Alert, TouchableHighlight, Text, View } from "react-native"

type Props = {
  title: string
  price: number
  ingredientes: string[]
}

const Item = ({title, price, ingredientes}: Props) => {
  const handleClick = () => {
    Alert.alert('Apertou button')
  }
  return (
    <TouchableHighlight onPress={handleClick} style={styles.container}>
      <View>
        <Text><Text style={styles.bold}>Pizza: </Text> {title}</Text>
        <Text><Text style={styles.bold}>Pizza: </Text>{price.toFixed(2)}</Text>
        <Text><Text style={styles.bold}>Pizza: </Text> {ingredientes}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom:10,
    borderBottomColor: 'black',
    borderWidth:1,
    padding:5
  },
  bold:{
    fontWeight: 'bold'
  }
})

export default Item