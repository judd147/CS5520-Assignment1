import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card'
import Background from '../components/Background';

export default function GameScreen({ modalVisible, setModalVisible, name, number, answer, tip, numGuess, setShowFinalScreen }) {
  const navigateToFinalScreen = () => {
    setShowFinalScreen(true)
    setModalVisible(false)
  }
  
  if (parseInt(number) === answer) { // correct and navigate to final screen
    return (
      <Modal visible={modalVisible} animationType="fade">
        <Background>
          <View style={styles.container}>
            <Card>
              <Text style={styles.text}>{
              `Congrats ${name}! You Won!`}</Text>
              <View style={styles.button}>
                <Button title='Thank you' onPress={() => {setModalVisible(false)}}/>
              </View>
            </Card>
          </View>
        </Background>
      </Modal>
    )
  } else if (numGuess === 0) { // run out of guesses and navigate to final screen
    return (
      <Modal visible={modalVisible} animationType="fade">
        <Background>
          <View style={styles.container}>
            <Card>
              <Text style={styles.text}>{
              `Hello ${name}\nYou have chosen ${number}\nThat's not my number!\nYou have no attempts left!`}</Text>
              <View style={styles.button}>
                <Button title="I'm Done" onPress={navigateToFinalScreen} color={'firebrick'}/>
              </View>
              <View style={styles.button}>
                <Button title='Try Again' onPress={() => {setModalVisible(false)}} disabled={true}/>
              </View>
            </Card>
          </View>
        </Background>
      </Modal>
    )
  }
  // in play
  return (
    <Modal visible={modalVisible} animationType="fade">
      <Background>
        <View style={styles.container}>
          <Card>
            <Text style={styles.text}>{
            `Hello ${name}\nYou have chosen ${number}\nThat's not my number!\n${tip}\nYou have ${numGuess} attempts left!`}</Text>
            <View style={styles.button}>
              <Button title="I'm Done" onPress={navigateToFinalScreen} color={'firebrick'}/>
            </View>
            <View style={styles.button}>
              <Button title='Try Again' onPress={() => {setModalVisible(false)}}/>
            </View>
          </Card>
        </View>
      </Background>
    </Modal>
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