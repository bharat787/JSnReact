import React, { useState} from 'react'
import { View, TextInput, Button, StyleSheet, Modal, ImagePropTypes} from 'react-native'

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => { 
		setEnteredGoal(enteredText)
    }
    const addGoalHandler = () => {
        props.onAddGoal.bind(enteredGoal)
        setEnteredGoal('')
    }
    
    return <Modal visible={props.visible} animationType="slide">
        <View style={styles.alignment} >
            <TextInput 
                placeholder="Course Goal"
                style={styles.TextIn}
                onChangeText={goalInputHandler}
                value={enteredGoal}/>
            <View style={styles.ButtonContainer}>
                <View style={styles.buttom}>
                    <Button title="ADD"
                        onPress={addGoalHandler}/>
                </View>
                <View style={styles.buttom}>
                    <Button 
                    title="cancel"
                    color='red'
                    onPress={props.onCancel}/>
                </View>
            </View>
        </View >
   </Modal>
}

const styles = StyleSheet.create ({
    TextIn: {
		width: '80%' ,
		borderColor: 'black', 
		borderWidth: 1,
        padding: 10,
        margin: 10
    },
    
    alignment: { 
        flex: 1,
		justifyContent: 'center',
		alignItems: "center"
    },
    
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        width: '80%'
    },
    buttom: {
        width: '40%'
    }
})

export default GoalInput