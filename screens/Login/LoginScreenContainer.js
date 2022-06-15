import React from 'react'

import LoginScreen from './LoginScreen'

import { connect } from "react-redux";

import {
    updateLoginTextAC,
    updatePasswordTextAC,
    updateUserInfoAC
} from '../../redux/loginScreenReducer'




let mapStateToProps = (state) => {
    return {
        loginSignIn: state.loginPage.loginSignIn,
        passwordSignIn: state.loginPage.passwordSignIn
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateLoginText: (text) => {
            dispatch(updateLoginTextAC(text))
        },
        updatePasswordText: (text) => {
            dispatch(updatePasswordTextAC(text))
        },
        updateUserInfo: (info) => {
            dispatch(updateUserInfoAC(info))
        }   
    }
}


const LoginScreenContainer = connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

export default LoginScreenContainer