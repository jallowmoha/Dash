import React from 'react';
import {View, StyleSheet, SafeAreaView, Image, Dimensions, text, Alert} from 'react-native'
import { MyButton, RegisterButton } from "../components/Button";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { font } from 'expo';


const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const styles = StyleSheet.create({
   
   
   
    buttonContainer: {
        marginTop: hp('65%'),
       marginHorizontal: wp('10%')
       
         
    },

    mainContainer: {
        backgroundColor: '#36485f',
        flex: 1,
       
    },

    buttonTwo: {
        marginTop: hp('80%'),
        position: 'absolute',
        marginLeft: wp('40%')
      
        
         


    },
    buttonOne: {
        marginLeft: 330
         
    },
    loginButton: {
        marginLeft: wp('75%'),
        marginTop: hp('5%'),
        position: 'absolute'

    }
   
        
    

});

export default ({navigation}) => {
    return (
 
        <SafeAreaView style={styles.mainContainer}>
           
            <View style={styles.loginButton}>
                 <RegisterButton 
                    title="Login"
                 onPress={() => navigation.push('Login')} />
                
                
            </View>
                 
       
           
            <View style={styles.buttonContainer}>
                <MyButton
                   
                    title="Quick Send"
                    
                    />

            </View>
           <View style={styles.buttonTwo}>
                <RegisterButton
                    title="Sign up"
                     onPress={() => navigation.push('Signup')}
                   
                    
                />
       </View>
            
           
        </SafeAreaView>
       
        
        
    );
};