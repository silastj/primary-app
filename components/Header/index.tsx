import { StyleSheet, View, Button, Text } from "react-native"

type Props = {
  name?: string
}

const Header = ({name}: Props) => {
  return (
    <View style={[styles.container, styles.containerCenter]}>
      {name && name ? <Text style={styles.name}>Nome: {name}</Text> : ''}
        <Button
          color="#ff0000"
          title="Home"
        />
        <Button
          color="#ff0000"
          title="Contato"
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderColor: 'black',
    borderTopWidth: 1,
  },
  containerCenter: {
    alignSelf: "stretch",
    backgroundColor: 'yellow'
  },
  name: {
    position: 'absolute',
    textTransform: 'capitalize',
    color: 'blue',
    fontSize: 16,
    top: 2,
    right: 2
  }
})

export default Header