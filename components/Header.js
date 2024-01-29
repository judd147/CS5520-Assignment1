import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

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
    color: 'midnightblue',
    fontSize: 20,
  }
})