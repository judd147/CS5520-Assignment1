import { StyleSheet, View } from 'react-native'
import React from 'react'

export default function Card({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.55,
    justifyContent: 'center',
    backgroundColor: 'dimgray',
    borderRadius: 10,
    elevation: 10, // Android
    shadowOffset: {width: 0.1, height: 0.1}, // iOS
    shadowOpacity: 0.3, // iOS
    shadowRadius: 5, // iOS
    margin: 50,
    padding: 10,
  },
})