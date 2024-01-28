import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import FinalScreen from './screens/FinalScreen';

export default function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [answer, setAnswer] = useState(1024); // FIXME make me random
  const [tip, setTip] = useState('')
  const [numGuess, setNumGuess] = useState(3);
  const [modalVisible, setModalVisible] = useState(false);
  const [showFinalScreen, setShowFinalScreen] = useState(false);

  // Game Logic
  // set tip and number of guesses upon submission
  // finally check if game is over
  useEffect(() => {
    if (parseInt(number) > answer && modalVisible) {
      setTip('Guess lower')
      setNumGuess(numGuess - 1)
    } else if (parseInt(number) < answer && modalVisible) {
      setTip('Guess higher')
      setNumGuess(numGuess - 1)
    }
  }, [modalVisible])

  return (
    <Background>
      <StatusBar style="auto" />
      {!showFinalScreen && <StartScreen
        name={name} setName={setName} number={number} setNumber={setNumber} setModalVisible={setModalVisible}/>}
      {modalVisible && <GameScreen
        setModalVisible={setModalVisible} name={name} number={number} answer={answer}
        tip={tip} numGuess={numGuess} setShowFinalScreen={setShowFinalScreen}/>}
      {showFinalScreen && <FinalScreen />}
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});