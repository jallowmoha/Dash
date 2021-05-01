import React, {useState} from 'react';
import { TextInput, Text,  StyleSheet, View,  Platform, Dimensions } from 'react-native';

import { useKeyboard } from '@react-native-community/hooks'
import Constants from 'expo-constants';
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import '@firebase/firestore';

import firebase from 'firebase';
import { firebaseConfig, db, auth } from '../config/firebase';
 



import { MyButton } from "../components/Button";
import { DismissKeyboard } from "../components/Dismisskeyboard";
import colors from '../config/colors';
import { color } from 'react-native-reanimated';



const deviceHeight = Dimensions.get('window').height;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.lightBlue,
       

       
        
        
    },
    input: {
        width: '100%',
        alignSelf: 'stretch',
        flexDirection: 'row',
        marginHorizontal: 20,
          justifyContent: 'center',
        
    
    

    },
    icon: {
        marginRight: 5,
        flex: 1,
        marginBottom: 30,
      

    },

    text: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.white,
        fontWeight: 'bold',
        paddingTop: Constants.statusBarHeight
        

    },

   
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        borderBottomColor: colors.inputWhite,
        borderBottomWidth: 1,
        color: '#fff',
        marginRight :5,
        flex: 4
       

    },

   
    submitbutton: {
        marginTop: deviceHeight * 0.01,
        marginBottom:30
        
    }


})



export default ({ navigation }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onRegisterPress = () => {
         firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    firstName,
                    lastName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.push('Home   ', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });

    }
    
    
     
    const keyboard = useKeyboard()

    return (
       
          
            
        <React.Fragment>

            <DismissKeyboard >
               <View  style={styles.container} 
             >
             <View >
                <Text style={styles.text}> Register </Text>
                    </View>
            <View style={styles.input}> 
            <TextInput
                 style={styles.textinput}
                 placeholder='First Name'
                 placeholderTextColor='#fff'
                onChangeText={(text) => setFirstName(text)}
                value={firstName}
                
                        />
            <Ionicons name="person" size={18} color="white" style={styles.icon}/>
             </View>
            <View style={styles.input}> 
            <TextInput
                style={styles.textinput}
                placeholder='Last Name'
                placeholderTextColor='#fff'
                onChangeText={(text) => setLastName(text)}            
                value={lastName}            
                        />
            <Ionicons name="person" size={18} color="white" style={styles.icon}/>
             </View>
             <View style={styles.input}> 
            <TextInput
                style={styles.textinput}
                placeholder='Email'
                keyboardType= 'email-address'        
                placeholderTextColor='#fff'
                onChangeText={(text) => setEmail(text)}
                value={email}
                        />
                
                        
                        
            <MaterialIcons name="email" size={18} color="white" style={styles.icon} />
             </View>
            <View style={styles.input}> 
            <TextInput
                style={styles.textinput}
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor='#fff'
                onChangeText={(text) => setPassword(text)}
                        

                        />
              
              
              
              <MaterialCommunityIcons name="account-key" size={18} color="white" style={styles.icon} />
             </View>
             <View style={ styles.submitbutton }>
                <MyButton
                   
                title="Submit"
                onPress={() => onRegisterPress()}
        
                 />
                        
            </View>
          
              </View>
                
                
      </DismissKeyboard>
            
        
     </React.Fragment>
        
    );
};