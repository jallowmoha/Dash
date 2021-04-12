import React from 'react';
import { TextInput, Text, TouchableOpacity, StyleSheet, View, Button, KeyboardAvoidingView, Platform } from 'react-native';
import { SubmitButton } from '../components/Button';
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
       

    },
    submitbutton: {
        position: 'absolute',
        marginHorizontal: 50,
        
    }


})



export default ({ navigation }) => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.os === 'ios' ? "padding" : "height"}
        >
           
                 <View>
                <Text style={styles.text}> Sign Up </Text>
            </View>
            <TextInput
                style={styles.textinput}
                placeholder='Your Name'
                placeholderTextColor='#fff'
            />
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
            <TextInput
                style={styles.textinput}
                placeholder='Confirm password'
                secureTextEntry={true}
                placeholderTextColor='#fff'
            />
           <MyButton
                   
                title="Submit"
                onPress={() => navigation.push('Home')}
        
                    
                    />
                
        
                
         
           
           
        </KeyboardAvoidingView>
        
    );
};