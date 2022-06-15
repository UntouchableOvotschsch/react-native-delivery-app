import React from 'react'

import RegisterScreen from './RegisterScreen.js'

import { connect } from "react-redux";

import {
    updateLoginTextAC,
    updateSurnameTextAC,
    updateNameTextAC,
    updatePhoneTextAC,
    updateMailTextAC,
    updatePasswordTextAC
} from '../../redux/registerScreenReducer.js'




let mapStateToProps = (state) => {
    return {
        login: state.registerPage.login,
        name: state.registerPage.name,
        surname: state.registerPage.surname,
        phone: state.registerPage.phone,
        mail: state.registerPage.mail,
        password: state.registerPage.password
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateLoginText: (text) => {
            dispatch(updateLoginTextAC(text))
        },
        updateSurnameText: (text) => {
            dispatch(updateSurnameTextAC(text))
        },
        updateNameText: (text) => {
            dispatch(updateNameTextAC(text))
        },
        updatePhoneText: (text) => {
            dispatch(updatePhoneTextAC(text))
        },
        updateMailText: (text) => {
            dispatch(updateMailTextAC(text))
        },
        updatePasswordText: (text) => {
            dispatch(updatePasswordTextAC(text))
        }
    }
}


const RegisterScreenContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)

export default RegisterScreenContainer