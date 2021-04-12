import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";


const styles = StyleSheet.create({
    
    myButton: {
        elevation: 8,
        backgroundColor: '#009688',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    myButtonText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: 'center'

    },
    registerButton: {
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12

    },
    registerButtonText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: 'center'


    }
});

       
        

       


export const MyButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.myButton}>
            <Text style={styles.myButtonText}>{title} </Text>
        </TouchableOpacity>
    );
};

export const RegisterButton = ({title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.registerButton}>
            <Text style={styles.registerButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};
        

