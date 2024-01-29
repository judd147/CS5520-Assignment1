import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import FinalScreen from './screens/FinalScreen';

export default function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [answer, setAnswer] = useState(0);
  const [isSelected, setSelection] = useState(false)
  const [isValidName, setIsValidName] = useState(false)
  const [isValidNumber, setIsValidNumber] = useState(false)
  const [tip, setTip] = useState('')
  const [numGuess, setNumGuess] = useState(3);
  const [modalVisible, setModalVisible] = useState(false);
  const [showFinalScreen, setShowFinalScreen] = useState(false);

  const restart = () => {
    const randomInt = getRandomInt(1020, 1029);
    setAnswer(randomInt);
    setName('');
    setNumber('');
    setNumGuess(3);
    setSelection(false);
    setIsValidName(false);
    setIsValidNumber(false);
    setShowFinalScreen(false);
  }

  const getRandomInt = (min, max) => {
    const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(randomInt);
    return randomInt;
  }

  // generate an initial random number
  useEffect(() => {
    setAnswer(getRandomInt(1020, 1029));
  }, []);

  // Game Logic
  // reset tip and number of guesses upon submission
  useEffect(() => {
    if (parseInt(number) > answer && modalVisible) {
      setTip('Guess lower');
      setNumGuess(numGuess - 1);
    } else if (parseInt(number) < answer && modalVisible) {
      setTip('Guess higher');
      setNumGuess(numGuess - 1);
    }
  }, [modalVisible])

  return (
    <Background>
      <StatusBar style="auto" />
      {!showFinalScreen && <StartScreen
        name={name} setName={setName} number={number} setNumber={setNumber} setModalVisible={setModalVisible}
        isSelected={isSelected} setSelection={setSelection} isValidName={isValidName} setIsValidName={setIsValidName}
        isValidNumber={isValidNumber} setIsValidNumber={setIsValidNumber}/>}
      {modalVisible && <GameScreen
        setModalVisible={setModalVisible} name={name} number={number} answer={answer}
        tip={tip} numGuess={numGuess} setShowFinalScreen={setShowFinalScreen}/>}
      {showFinalScreen && <FinalScreen answer={answer} number={number} restart={restart}/>}
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});