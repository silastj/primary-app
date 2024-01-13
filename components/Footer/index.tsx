import { View, Text, StyleSheet } from 'react-native'

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'black',
    alignSelf: "stretch",
    height:50,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: "white"
  }
})
export default Footer