import {StyleSheet, TouchableHighlight, Text, View } from "react-native"

type Props = {
  title: string
  price: number
  ingredientes: string[]
  onPress: () => void
}

const Item = ({title, price, ingredientes, onPress}: Props) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.container}>
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