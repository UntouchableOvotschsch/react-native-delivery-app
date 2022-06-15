const UPDATE_LOGIN_TEXT = 'UPDATE_LOGIN_TEXT'
const UPDATE_PASSWORD_TEXT = 'UPDATE_PASSWORD_TEXT'
const UPDATE_USER_UNFO = 'UPDATE_USER_INFO'

let initialState = {
    loginSignIn: '',
    passwordSignIn: '',
    userInfo: {}
}

const loginScreenReducer = (state=initialState, action) => {
    switch(action.type){
        case UPDATE_LOGIN_TEXT:{
            return{
                ...state,
                loginSignIn: action.text
            }
        }
        case UPDATE_PASSWORD_TEXT:{
            return{
                ...state, 
                passwordSignIn: action.text
            }
        }
        case UPDATE_USER_UNFO:{
            return{
                ...state, 
                userInfo: action.info
                
            }
        }
        default:{
            return state
        }
    }
}

export const updateLoginTextAC = (text) => {
    return{
        type: UPDATE_LOGIN_TEXT,
        text: text
    }
}
export const updatePasswordTextAC = (text) => {
    return{
        type: UPDATE_PASSWORD_TEXT,
        text: text
    }
}

export const updateUserInfoAC = (info) => {
    return{
        type: UPDATE_USER_UNFO,
        info: info
    }
}

export default loginScreenReducer