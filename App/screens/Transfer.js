
import React from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, View, Dimensions, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Constants from 'expo-constants';
import {useKeyboard } from '@react-native-community/hooks'


import { MyButton } from '../components/Button';
import { DismissKeyboard } from "../components/Dismisskeyboard";
import colors from '../config/colors';
import {TransferButton} from '../components/Input'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height




const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.lightBlue,

    },

    header: {
        flex: 1,
        backgroundColor: colors.lightBlue ,
        alignItems: 'center',

    },

    headerText: {
        color: colors.white,
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: Constants.statusBarHeight,
       
    },

    footer: {
        flex: 2,
        backgroundColor: colors.white,
        borderRadius: 50,
        
        
    },
    
    textInput: {
        paddingTop: 20,
        borderBottomColor: colors.inputWhite,
        borderBottomWidth: 1,
         alignSelf: 'stretch',
        height: 40,
        marginHorizontal: 40,
        marginBottom: 40,
        color: '#fff',
        fontSize: 15,

    
    },
    
    footerText: {
         
    },
    sendButton: {
        marginHorizontal: wp('10%'),
        marginTop: deviceHeight* 0.5
        
    },
    
    sendButtonWithKeyboardShow: {
        marginHorizontal: wp('10%'),
        marginTop: deviceHeight*0.2

    }



});


export default ({ navigation }) => {
    
    const Keyboard = useKeyboard()
    return (
        <React.Fragment>
            <DismissKeyboard>
            <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText} >Transfer</Text>
              
                <TransferButton
                            text="USD"
                            placeholder=""
                        />
                   <TransferButton
                            text="GMD"
                            placeholder=""
                        />
             </View>
           
            <View style={styles.footer}>
               {!Keyboard.keyboardShown && <View style={styles.sendButton}>
                    <MyButton
                        title='Send'
                        onPress={() => navigation.push('Home')}
                    />
            </View>} 
              {Keyboard.keyboardShown && <View style={styles.sendButtonWithKeyboardShow}>
                    <MyButton
                        title='Send'
                        onPress={() => navigation.push('Home')}
                />
                </View>} 

            </View>

        </View>

        </DismissKeyboard>

        </React.Fragment>
        

        
    )
}