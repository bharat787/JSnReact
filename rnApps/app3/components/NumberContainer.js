import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
//import { Colors } from 'react-native/Libraries/NewAppScreen'
import Colors from '../constants/colors'

const NumberContainer = props => {
    return (
    <View style={styles.container}>
        <Text style={styles.number}>{props.children}</Text>
    </View>
    )}

const styles = StyleSheet.create({
    container: {
        height: 30,
        borderColor: Colors.primary,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    number: {
        color: Colors.accent,
        fontSize: 22
    }
})

export default NumberContainer