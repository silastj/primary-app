import { View, Text, StyleSheet,Image,Button, Alert } from 'react-native'

const Footer = () => {

  const handleSome = () => {
    const dados = ['Eletronico, Beleza']
    console.log('dados ',typeof dados)
    // Alert.alert(dados.length)
  }


  return (
    <View style={styles.footer}>
      <Button
        color={'#00ff00'}
        title={'Clique em mim'}
        onPress={handleSome}
      />       
      <Text style={styles.text}>Footer</Text>
        <Image
          source={{uri:'https://www.google.com.br/google.jpg'}}
          style={{objectFit: 'contain', borderRadius: 10}}
          width={200}
          height={50}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'black',
    alignSelf: "stretch",
    height:100,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: "white"
  }
})
export default Footer