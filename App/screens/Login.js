import React from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { MyButton, RegisterButton } from "../components/Button";
import { DismissKeyboard } from "../components/Dismisskeyboard";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#36485f',
        alignSelf: 'stretch'
        
    },

    text: {
        fontSize: 24,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        paddingTop: Constants.statusBarHeight
        

    },

  
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
        color: '#fff',
        marginHorizontal: 5,
        fontSize: 15,
        flex: 4
       

    },

     icon: {
        marginRight: 5,
        flex: 1,
        marginBottom: 30,
      

    },
    input: {
        width: '100%',
        alignSelf: 'stretch',
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'center',
    }
        


})



export default ({navigation}) => {
    return (

        <React.Fragment>
       <DismissKeyboard> 
    
                <View style={styles.container}> 
            <View>
                <Text style={styles.text}> Login </Text>
            </View>
           <View style={styles.input}>
            <TextInput
                style={styles.textinput}
                placeholder='Email'
                placeholderTextColor='#fff'
                keyboardType= 'email-address'
                        />
             <MaterialIcons name="email" size={18} color="white" style={styles.icon}/>
            </View>
             <View style={styles.input}>
            <TextInput
                style={styles.textinput}
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor='#fff'
                        />
            <MaterialCommunityIcons name="account-key" size={18} color="white" style={styles.icon}/>
             </View>
             <MyButton
                   
                title="Sign in"
                onPress={() => navigation.push('Home')}
        
                    
                    />
                
                    </View>
             
            
            </DismissKeyboard>
            </React.Fragment>
        
    );
};