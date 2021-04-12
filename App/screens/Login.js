import React from 'react';
import { TextInput, Text, StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { MyButton, RegisterButton } from "../components/Button";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#36485f',
        alignSelf: 'stretch'
        
    },

    text: {
        fontSize: 24,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
        

    },

    border: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1
    },
    input: {
        paddingTop: 10
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
        color: '#fff',
        marginHorizontal: 30,
       

    }


})



export default ({navigation}) => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.os === 'ios' ? 'padding' : 'height'}>
            <View>
                <Text style={styles.text}> Login </Text>
            </View>
           
            <TextInput
                style={styles.textinput}
                placeholder='Email'
                placeholderTextColor='#fff'
                keyboardType= 'email-address'
            />
            <TextInput
                style={styles.textinput}
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor='#fff'
            />
             <MyButton
                   
                title="Sign in"
                onPress={() => navigation.push('Home')}
        
                    
                    />
            
        </KeyboardAvoidingView>
        
    );
};