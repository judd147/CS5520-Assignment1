import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import Checkbox from 'expo-checkbox'
import React, { useEffect, useState } from 'react'
import Error from './Error'

export default function Input({ name, setName, number, setNumber, setModalVisible }) {
  const [isSelected, setSelection] = useState(false)
  const [isValidName, setIsValidName] = useState(false)
  const [isValidNumber, setIsValidNumber] = useState(false)
  const [showNameError, setShowNameError] = useState(false)
  const [showNumberError, setShowNumberError] = useState(false)

  // validate input upon state change
  useEffect(() => {
    if (name.length <= 1) {
      setIsValidName(false)
    } else {
      setIsValidName(true)
    }

    if (parseInt(number) >= 1020 && parseInt(number) <= 1029) {
      setIsValidNumber(true)
    } else {
      setIsValidNumber(false)
    }
  }, [name, number])

  const handleNameChange = (changedName) => {
    console.log('User is typing.', changedName)
    setName(changedName)
  }

  const handleNumberChange = (changedNumber) => {
    setNumber(changedNumber)
    console.log('User is typing.', changedNumber);
  }

  const resetHandler = () => {
    setName('')
    setNumber('')
    setSelection(false)
    setIsValidName(true)
    setIsValidNumber(true)
  }

  const confirmHandler = () => {
    // determine whether to show error messages or not
    if (name.length <= 1) {
      setShowNameError(true)
    } else {
      setShowNameError(false)
    }

    if (parseInt(number) >= 1020 && parseInt(number) <= 1029) {
      setShowNumberError(false)
    } else {
      setShowNumberError(true)
    }

    // navigate to game screen
    if (isValidName && isValidNumber) {
      setModalVisible(true)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={handleNameChange}/>
      <Error showError={showNameError} keyword='name'/>
      <Text style={styles.text}>Enter a Number</Text>
      <TextInput style={styles.input} value={number} onChangeText={handleNumberChange} keyboardType='numeric'/>
      <Error showError={showNumberError} keyword='number'/>
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}>
        </Checkbox>
        <Text style={styles.caption}>I am not a robot</Text>
      </View>
      <View style={styles.button}>
        <Button title='Reset' onPress={resetHandler} color='firebrick'/>
        <Button title='Confirm' onPress={confirmHandler} disabled={!isSelected}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  text: {
    color: 'midnightblue',
    fontSize: 16
  },
  caption: {
    color: 'midnightblue',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'midnightblue',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'midnightblue',
    padding: 3
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    borderColor: 'gray',
    margin: 5
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
})