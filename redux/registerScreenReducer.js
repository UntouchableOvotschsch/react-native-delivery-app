const UPDATE_LOGIN_TEXT = 'UPDATE_LOGIN_TEXT'
const UPDATE_NAME_TEXT = 'UPDATE_NAME_TEXT'
const UPDATE_SURNAME_TEXT = 'UPDATE_SURNAME_TEXT'
const UPDATE_PHONE_TEXT = 'UPDATE_PHONE_TEXT'
const UPDATE_MAIL_TEXT = 'UPDATE_MAIL_TEXT'
const UPDATE_PASSWORD_TEXT = 'UPDATE_PASSWORD_TEXT'

let initialState = {
    login: '',
    name: '',
    surname: '',
    phone: '',
    mail: '',
    password: ''
}

const registerScreenReducer = (state=initialState, action)=>{
    switch(action.type){
        case UPDATE_LOGIN_TEXT:{
            return{
                ...state,
                login: action.text
            }
        }
        case UPDATE_NAME_TEXT:{
            return{
                ...state,
                name: action.text
            }
        }
        case UPDATE_SURNAME_TEXT:{
            return{
                ...state,
                surname: action.text
            }
        }
        case UPDATE_PHONE_TEXT:{
            return{
                ...state,
                phone: action.text
            }
        }
        case UPDATE_MAIL_TEXT:{
            return{
                ...state,
                mail: action.text
            }
        }
        case UPDATE_PASSWORD_TEXT:{
            return{
                ...state,
                password: action.text
            }
        }
        default:{
            return state
        }
    }
}

export const updateLoginTextAC = (text)=>{
    return{
        type: UPDATE_LOGIN_TEXT,
        text: text
    }
}
export const updateNameTextAC = (text)=>{
    return{
        type: UPDATE_NAME_TEXT,
        text: text
    }
}
export const updateSurnameTextAC = (text)=>{
    return{
        type: UPDATE_SURNAME_TEXT,
        text: text
    }
}
export const updatePhoneTextAC = (text)=>{
    return{
        type: UPDATE_PHONE_TEXT,
        text: text
    }
}
export const updateMailTextAC = (text)=>{
    return{
        type: UPDATE_MAIL_TEXT,
        text: text
    }
}
export const updatePasswordTextAC = (text)=>{
    return{
        type: UPDATE_PASSWORD_TEXT,
        text: text
    }
}

export default registerScreenReducer