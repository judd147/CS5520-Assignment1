import { StyleSheet, View } from 'react-native'
import React from 'react'
import Color from './Color'

export default function Card({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: Color.cardBg,
    borderRadius: 10,
    elevation: 10, // Android
    shadowOffset: {width: 0.1, height: 0.1}, // iOS
    shadowOpacity: 0.3, // iOS
    shadowRadius: 5, // iOS
    margin: 50,
    padding: 10,
  },
})