import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TextInput, View } from 'react-native';


import colors from '../config/colors';

const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 30,
       
    },
    button: {

    },

    buttonText: {
        fontSize: 20,
        color: colors.white,
        fontWeight: "bold",
        alignSelf: 'center',
        paddingTop:20

    },

    textInput: {
         paddingTop: 20,
        borderBottomColor: colors.inputWhite,
        borderBottomWidth: 1,
         alignSelf: 'stretch',
        height: 40,
        marginBottom: 40,
        color: '#fff',
        fontSize: 15,
        paddingLeft: 20,
        flex: 1,


    }
})

export const TransferButton = ({text, onPress, placeholder}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.buttons}>
                
                <Text style={styles.buttonText}>{text}</Text>

            </TouchableOpacity>

            <TextInput
            keyboardType='number-pad'
                    placeholder={placeholder}
                    placeholderTextColor='#fff'
                    style={styles.textInput}

            />
        </View>
    )
}