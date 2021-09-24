import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
//import * as Google from "expo-google-app-auth";
import firebase from "firebase";

export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            name: '',
            age: '',
            confirmPassword: ''
        };
    }
    userLogin = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                return Alert.alert("Successfully Logged In")
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
            })
    }
    userSignUp = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                return Alert.alert("Successfully Signed Up")
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
            })
    }
    render() {
        return (
            <KeyboardAvoidingView>
                <Image></Image>
                <Text style={styles.titleText}>Chat</Text>
                <TextInput
                    style={styles.formText}
                    placeholder="example@domain.com"
                    keyboardType={'email-address'}
                    onChangeText={(text) => {
                        this.setState({
                            email: text
                        })
                    }}
                />
                <TextInput
                    style={styles.formText}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        this.setState({
                            password: text
                        })
                    }}
                />
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => {
                        this.userLogin(this.state.email, this.state.password)
                    }}>
                    <Text style={{
                        fontSize: RFValue(10),
                        textAlign: 'center'
                    }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => {
                        this.userSignUp(this.state.email, this.state.password)
                    }}>
                    <Text style={{
                        fontSize: RFValue(10),
                        textAlign: 'center'
                    }}>Sign Up</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    formText: {
        color: 'black',
        fontWeight: 'normal',
        fontSize: RFValue(18),
        borderWidth: RFValue(3),
        borderColor: 'black',
        borderRadius: 25,
        marginBottom: RFValue(15),
        padding: RFValue(5)
    },
    titleText: {
        fontSize: RFValue(24),
        textAlign: 'center',
        paddingBottom: RFValue(10)
    },
    loginButton: {
        width: RFValue(100),
        height: RFValue(40),
        borderColor: 'black',
        borderWidth: RFValue(3),
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        marginBottom: RFValue(15),
    }
});