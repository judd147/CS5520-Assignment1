import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import Background from './components/Background';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import FinalScreen from './screens/FinalScreen';

export default function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [answer, setAnswer] = useState(1024);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Background>
      <StatusBar style="auto" />
      <StartScreen 
        name={name} setName={setName} number={number} setNumber={setNumber} setModalVisible={setModalVisible}/>
      {modalVisible && <GameScreen
        setModalVisible={setModalVisible} name={name} number={number}/>}
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});