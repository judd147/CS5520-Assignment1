import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import Background from '../components/Background';

export default function GameScreen({ modalVisible, setModalVisible, name, number}) {
  return (
    <Modal visible={modalVisible} animationType="fade">
      <Background>
        <View style={styles.container}>
          <Card>
            <Text style={styles.text}>{
            `Hello ${name}\nYou have chosen ${number}`}</Text>
            <Button title='Cancel' onPress={() => {setModalVisible(false)}}/>
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
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row'
  }
})