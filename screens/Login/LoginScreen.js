import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View, Text, StyleSheet, Image, TextInput, Button, TouchableHighlight, ImageBackground } from 'react-native'

import { auth, login } from '../../api/api';

import Loader from '../../assets/animated/Loader';


const logo = require('./../../assets/images/erLogo.png')



const LoginScreen = (props) => {
    useEffect(() => {
        async function jwt_auth () {
            try {
                await auth().then((res) => {
                    if(res.status===400){
                        return alert('Ошибка авторизации')
                    }
                    props.navigation.navigate('Main'),
                    props.updateUserInfo(res.data.data),
                    AsyncStorage.setItem('jwt_token', res.data.data.token),
                    alert(res.data.message)
                })
                
            } catch (error) {
                alert(error)  
            }
        }
        jwt_auth()
        
    }, [])

    const registerIntent = () => {
        props.navigation.navigate('Register')
    }

    const [load, setLoad] = useState(false)

    const loginIntent = async () => {
        try {
            setLoad(true)
            await login(props.loginSignIn, props.passwordSignIn)
                .then((res) => {
                    if (res.status === 400) {
                        return (alert(response.data.message), setLoad(false))
                    }
                    return  (
                        props.navigation.navigate('Main'),
                        props.updateUserInfo(res.data.data),
                        AsyncStorage.setItem('jwt_token', res.data.data.token),
                        setLoad(false))
                })
        } catch (error) {
            alert(error.response.data.message)
            setLoad(false)
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>

                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={logo}
                    />
                </View>

                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'ЛОГИН'}
                        placeholderTextColor={'white'}
                        onChangeText={newText => props.updateLoginText(newText)}
                        value={props.loginSignIn}>

                    </TextInput>

                    <TextInput style={styles.textInput}
                        placeholder={'ПАРОЛЬ'}
                        placeholderTextColor={'white'}
                        onChangeText={newText => props.updatePasswordText(newText)}
                        value={props.passwordSignIn}>

                    </TextInput>
                </View>

                <View style={styles.buttons}>
                    <View style={styles.buttonContainer}>

                        {load ?
                            // Добавить лоадер через Reanimated
                            <Loader text={'Загрузка'} />
                            :
                            <TouchableHighlight
                                style={styles.loginButton}
                                onPress={loginIntent}
                                disabled={load}>
                                <Text style={{ color: 'white' }}>Войти</Text>
                            </TouchableHighlight>}
                    </View>


                    {!load &&
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight
                                style={styles.registerButton}
                                onPress={registerIntent}
                            >
                                <Text style={{ color: 'blue' }}>Регистрация</Text>
                            </TouchableHighlight>
                        </View>
                    }

                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    logo: {
        width: 200,
        height: 200,
        backgroundColor: 'white'
    },
    logoContainer: {
        backgroundColor: 'white',
        marginBottom: 20
    },
    loginContainer: {
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
    buttons: {
        width: '40%',
        height: '100%'
    },
    buttonContainer: {
        marginVertical: 10,
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
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

})

export default LoginScreen

