import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Color from './Color'

export default function Header({ text }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 30 // for Android
  },
  text: {
    color: Color.primary,
    fontSize: 20,
  }
})