import React, {useState, useRef, useEffect} from 'react'
import { View, StyleSheet, Text, Button, Alert} from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Cards from '../components/Cards'

const generateRandomBtw = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min) + min)
    if (rndNum === exclude) {
        return generateRandomBtw(min, max, exclude)
    } else {
        return rndNum
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBtw(1, 100, props.userChoice))
    generateRandomBtw(1, 100, props.userChoice)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)
    const [rounds, setRounds] = useState(0)

    const { userChoice, onGameOver } = props

    useEffect(() => {
        if(currentGuess === userChoice){
            onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)){
            Alert.alert(
                'dont lie',
                'we know the number is on the other side',
                [{text: 'sorry', style: 'cancel'}]
                )
            return
        } 
        if(direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBtw(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(curRounds => curRounds+1)
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Cards style={styles.buttonContainer}>
                
                    <Button title='LOWER' onPress={nextGuessHandler.bind(this, 'lower')}/>
                    <Button title='GREATER' onPress={nextGuessHandler.bind(this, 'greater')}/>
                
            </Cards>
        </View>
    )
}
 
const styles = StyleSheet.create({
    
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection:'row',
        width: '80%',
        maxWidth: 300,
        justifyContent: 'space-around',
        paddingHorizontal: 20
    }
})

export default GameScreen