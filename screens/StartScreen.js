import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Input from '../components/Input'

export default function StartScreen({ name, setName, number, setNumber, setModalVisible, isSelected, setSelection,
  isValidName, setIsValidName, isValidNumber, setIsValidNumber }) {
  return (
    <View style={styles.container}>
      <Header text='Guess My Number'/>
      <Card>
        <Input name={name} setName={setName} number={number} setNumber={setNumber} setModalVisible={setModalVisible}
        isSelected={isSelected} setSelection={setSelection} isValidName={isValidName} setIsValidName={setIsValidName}
        isValidNumber={isValidNumber} setIsValidNumber={setIsValidNumber}/>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})