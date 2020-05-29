import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'

const GoalItem = props => {
    return <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItem}>
            <Text >{props.title}</Text>
        </View>
</TouchableOpacity>
}

const styles = StyleSheet.create ({
    listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#07BDE4',
		borderColor: "black",
		borderWidth: 1,
        color: 'white'
    }
})

export default GoalItem