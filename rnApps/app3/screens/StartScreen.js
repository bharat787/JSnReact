import React from 'react'
import { View, StyleSheet, Text, Alert, Button } from 'react-native'
import Cards from '../components/Cards'
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

import { useState } from 'react'


const StartScreen = props => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selecNumber, setSelectNumber] = useState()

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber)|| chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
            'Invalid Number',
            'Number has to be 0-99',
            [{text: 'Okay', style: 'destructive',
              onPress: resetInputHandler}]
            )
            return
        }
        setConfirmed(true)
        setSelectNumber(chosenNumber)
        setEnteredValue('')
    }

    let confirmedOutput

    if(confirmed){
    confirmedOutput = (
        <Cards style={styles.summaryContainer}>
            <Text>You Selected</Text>
            <NumberContainer>{selecNumber}</NumberContainer>
            <Button title="START GAME" onPress={() => props.onStartGame(selecNumber)}/>
        </Cards>
    )
    }

    return (
        
        <View style={styles.screen}>
            <Text style= {styles.title}>Start a New Game</Text>
            
            <Cards style={styles.inputContainer}>

                <Text>Select a Number</Text>

                <Input style={styles.input} 
                keyboardType="numeric" 
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}/>

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm"
                         onPress={confirmInputHandler}
                         color={Colors.primary}/>
                    </View>
                </View>
            </Cards>
            {confirmedOutput}
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection:'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },

    inputContainer: {
        
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
        },

    title: {
        fontSize: 20,
        marginVertical: 10
    },

    button: {
        width: 100
    },

    input: {
        width: 50,
        textAlign: 'center'
    },

    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }

})

export default StartScreen