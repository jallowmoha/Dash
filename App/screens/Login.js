import React, {useState} from 'react';
import { TextInput, Text, StyleSheet, View, Alert } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { MyButton, RegisterButton } from "../components/Button";
import { DismissKeyboard } from "../components/Dismisskeyboard";
import { signIn } from '../api/firebaseMethods';



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
    },

    signUpButton: {
        paddingBottom: 20
    }
        


})



export default ({navigation}) => {

    const [ email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onLoginPress = () => {
        if (!email){
            Alert.alert("Email is required")
        }
        
        if (!password) {
            Alert.alert("Password is required")

        }  
            signIn(
                email,
                password
        );
        
        setEmail('')
        setPassword('')
        
           
        
    }
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
                onChangeText={(text) => setEmail(text)}
                value={email}
                        />
             <MaterialIcons name="email" size={18} color="white" style={styles.icon}/>
            </View>
             <View style={styles.input}>
            <TextInput
                style={styles.textinput}
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor='#fff'
                onChangeText={(text) => setPassword(text)}
                        />
            <MaterialCommunityIcons name="account-key" size={18} color="white" style={styles.icon}/>
                    </View>
                    
                    <View style={styles.signUpButton}>
                           <MyButton
                   
                title="Sign in"
                onPress={onLoginPress}
        
                    
                    />

                    </View>
          
                    <RegisterButton
                    title="Don't have an account? Sign up"
                    onPress={() => navigation.navigate('Signup')} 
                />
             
                
                </View>
                
            
            </DismissKeyboard>
            </React.Fragment>
        
    );
};