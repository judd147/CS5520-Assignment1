import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../components/Background'
import Card from '../components/Card'

export default function FinalScreen() {
  return (
    <Background>
      <View style={styles.container}>
        <Card>
          <Text style={styles.text}>FinalScreen</Text>
        </Card>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'midnightblue',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    width: 200,
    margin: 5
  }
})