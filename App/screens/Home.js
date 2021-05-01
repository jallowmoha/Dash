import React from 'react';
import {View, StyleSheet, SafeAreaView, Image, Dimensions, text, StatusBar} from 'react-native'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { font } from 'expo';
import Constants from 'expo-constants';

import { MyButton, RegisterButton } from "../components/Button";
import colors from '../config/colors'



const styles = StyleSheet.create({

     mainContainer: {
        backgroundColor: colors.darkBlue,
        flex: 1,
       
       
       
    },

     loginButton: {
        marginLeft: wp('75%'),
         position: 'absolute',
       marginTop: Constants.statusBarHeight

    },
   
   
   
    sendButton: {
        marginTop: hp('65%'),
        marginHorizontal: wp('10%'),
        
       
         
    },

   

    signupButton: {
        marginTop: hp('80%'),
        position: 'absolute',
        width: '100%',
       alignItems: 'center'
      
        
         


    },
    
   
   
        
    

});

export default ({navigation}) => {
    return (
  
        <SafeAreaView style={styles.mainContainer}>
        <StatusBar barstyle='light-content'/>
           
            <View style={styles.loginButton}>
                 <RegisterButton 
                    title="Login"
                 onPress={() => navigation.push('Login')} />
                
                
            </View>
                 
       
           <View style={styles.sendButton}>
                <MyButton
                   
                    title="Quick Send"
                    onPress={() => navigation.push('Transfer')}
                    
                    />

            </View>
           <View style={styles.signupButton}>
                <RegisterButton
                    title="Sign up"
                     onPress={() => navigation.push('Signup')}
                   
                    
                />
       </View>
            
           
        </SafeAreaView>
       
        
        
    );
};