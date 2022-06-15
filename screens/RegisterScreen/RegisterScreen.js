import React from "react";
import * as axios from 'axios'

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    ScrollView
} from 'react-native';


import { register } from "../../api/api";



const RegisterScreen = (props) => {
    const {login, name, surname, phone, mail, password} = props

    const registerIntent = async () => {
        await register(login, name, surname, phone, mail, password)
        .then((res)=>{
            if (res.status >= 200 && res.status < 300) {
                return (props.navigation.navigate('Login'), 
                alert(JSON.stringify(res.data.message)))
            } 
        })
        .catch(({ response }) => alert(response.data.message));
    }

    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.avatar}>

                </View>


                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'ЛОГИН'}
                        onChangeText={newText=>props.updateLoginText(newText)}
                        value={props.login}
                        placeholderTextColor='white'>

                    </TextInput>

                    <TextInput
                        style={styles.textInput}
                        placeholder={'ИМЯ'}
                        onChangeText={newText=>props.updateNameText(newText)}
                        value={props.name}
                        placeholderTextColor='white'>

                    </TextInput>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'ФАМИЛИЯ'}
                        onChangeText={newText=>props.updateSurnameText(newText)}
                        value={props.surname}
                        placeholderTextColor='white'>

                    </TextInput>

                    <TextInput
                        style={styles.textInput}
                        placeholder={'ТЕЛЕФОН'}
                        onChangeText={newText=>props.updatePhoneText(newText)}
                        value={props.phone}
                        placeholderTextColor='white'>

                    </TextInput>

                    <TextInput
                        style={styles.textInput}
                        placeholder={'ПОЧТА'}
                        onChangeText={newText=>props.updateMailText(newText)}
                        value={props.mail}
                        placeholderTextColor='white'>

                    </TextInput>

                    <TextInput
                        style={styles.textInput}
                        placeholder={'ПАРОЛЬ'}
                        onChangeText={newText=>props.updatePasswordText(newText)}
                        value={props.password}
                        placeholderTextColor='white'>

                    </TextInput>
                </View>

                <View style={styles.buttons}>

                    <View style={styles.buttonContainer}>
                        <TouchableHighlight
                            style={styles.registerButton}
                            onPress={registerIntent}>
                            <Text style={{ color: 'blue' }}>Регистрация</Text>
                        </TouchableHighlight>
                    </View>


                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({

    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    textInput: {
        height: 60,
        minWidth: '60%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 10,
        textAlign: 'center',
        color: 'white',

    },
    buttonContainer: {
        marginVertical: 10,
    },
    registerButton: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'blue'
    },
    buttons: {
        width: '40%',
        height: '100%',

    },
    avatar: {
        height: 100,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: 'blue',
        marginVertical: 15
    }

})

export default RegisterScreen