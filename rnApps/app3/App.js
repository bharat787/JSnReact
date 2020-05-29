import React, { useState } from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import Header from './components/Header'
import StartScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'

export default function App() {

	const [userNumber, setUserNumber] = useState()
	const [guessRounds, setGuessRounds] = useState(0)

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber)
		setGuessRounds(0)
	}

	const gameOverHandler = numberOfRounds => {
		setGuessRounds(numberOfRounds)
	}

	let content = <StartScreen onStartGame={startGameHandler}/>

	if(userNumber && guessRounds <= 0) {

		content=<GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>

		} else if(guessRounds > 0) {
			content=<GameOverScreen/>
		}
  return (
    <View style={styles.screen} >
		<Header title="Guess a Number"/>
		{content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
  
});
