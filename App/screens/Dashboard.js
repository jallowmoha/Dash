import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import * as firebase from 'firebase'
import { loggingOut } from '../api/firebaseMethods'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Dashboard = ({ navigation }) => {
    let currentUserUID = firebase.auth().currentUser;
    const [firstName, setFirstName] = useState('');

    

    const handlePress = () => {
        loggingOut();
        navigation.replace('Home')
    }

    return (
        <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Dashboard</Text>
      <Text style={styles.text}>Hi {setFirstName}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({})
