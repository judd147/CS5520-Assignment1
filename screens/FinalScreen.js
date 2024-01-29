import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import Background from '../components/Background'
import Card from '../components/Card'
import Header from '../components/Header'

export default function FinalScreen({ answer, number, restart }) {
  return (
    <Background>
      <Header text='Game is Over'/>
      <View style={styles.container}>
        <Card>
          <Text style={styles.text}>Here's Your Picture</Text>
          {answer === parseInt(number) ? 
          <Image style={styles.image} source={{uri: `https://picsum.photos/id/${answer}/100/100`}}/>:
          <Image style={styles.image} source={require('../assets/face.png')}/>}
          <Button style={styles.button} title='Start Again' onPress={restart}/>
        </Card>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: 'midnightblue',
    fontSize: 20,
    textAlign: 'center',
    padding: 5
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    alignSelf: 'center',
  },
  button: {
    alignSelf: 'center',
    width: 200,
    margin: 5
  }
})