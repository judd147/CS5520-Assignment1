import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Input from '../components/Input'

export default function StartScreen({ name, setName, number, setNumber, setModalVisible }) {
  return (
    <View style={styles.container}>
      <Header text='Guess My Number'/>
      <Card>
        <Input name={name} setName={setName} number={number} setNumber={setNumber} setModalVisible={setModalVisible}/>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})