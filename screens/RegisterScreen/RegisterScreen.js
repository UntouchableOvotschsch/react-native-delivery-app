import React, { useState } from "react";
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
import SwitchSelector from "react-native-switch-selector";


import { register } from "../../api/api";



const RegisterScreen = (props) => {
    const { login, name, surname, phone, mail, password } = props

    const registerIntent = async () => {
        await register(login, name, surname, phone, mail, password)
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    return (props.navigation.navigate('Login'),
                        alert(JSON.stringify(res.data.message)))
                }
            })
            .catch(({ response }) => alert(response.data.message));
    }

    const [role, setRole] = useState('user')

    return (
        <View>
            <ScrollView>
                <View style={styles.switchSelector}>
                    <SwitchSelector
                        initial={0}
                        onPress={value => setRole(`${value}`)}
                        options={[
                            { label: "Я пользователь", value: "user" },
                            { label: "Я Волонтер", value: "volonteer" }
                        ]}
                        textColor={'blue'}
                        selectedColor={'white'}
                        buttonColor={'blue'}
                    />
                </View>
                <View style={styles.container}>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'ЛОГИН'}
                            onChangeText={newText => props.updateLoginText(newText)}
                            value={props.login}
                            placeholderTextColor='white'>

                        </TextInput>

                        <TextInput
                            style={styles.textInput}
                            placeholder={'ИМЯ'}
                            onChangeText={newText => props.updateNameText(newText)}
                            value={props.name}
                            placeholderTextColor='white'>

                        </TextInput>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'ФАМИЛИЯ'}
                            onChangeText={newText => props.updateSurnameText(newText)}
                            value={props.surname}
                            placeholderTextColor='white'>

                        </TextInput>

                        <TextInput
                            style={styles.textInput}
                            placeholder={'ТЕЛЕФОН'}
                            onChangeText={newText => props.updatePhoneText(newText)}
                            value={props.phone}
                            placeholderTextColor='white'>

                        </TextInput>

                        <TextInput
                            style={styles.textInput}
                            placeholder={'ПОЧТА'}
                            onChangeText={newText => props.updateMailText(newText)}
                            value={props.mail}
                            placeholderTextColor='white'>

                        </TextInput>

                        <TextInput
                            style={styles.textInput}
                            placeholder={'ПАРОЛЬ'}
                            onChangeText={newText => props.updatePasswordText(newText)}
                            value={props.password}
                            placeholderTextColor='white'>
                        </TextInput>
                        {role === 'volonteer' &&
                            <TextInput
                                style={styles.textInput}
                                placeholder={'КОД'}
                                onChangeText={newText => props.updatePasswordText(newText)}
                                value={props.password}
                                placeholderTextColor='white'>
                            </TextInput>
                        }

                    </View>

                    <View style={styles.buttons}>
                        <TouchableHighlight
                            style={styles.registerButton}
                            onPress={registerIntent}>
                            <Text style={{ color: 'blue' }}>Регистрация</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        </View>
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
        marginVertical: 10,
    },
    switchSelector: {
        width: '100%',
        width: '100%',
        marginVertical: 20,
    }

})

export default RegisterScreen