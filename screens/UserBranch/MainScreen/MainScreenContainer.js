import React from 'react'

import MainScreen from './MainScreen'

import { connect } from "react-redux";



let mapStateToProps = (state) => {
    return {
        name: state.loginPage.userInfo.name,
        surname: state.loginPage.userInfo.surname,
    }
}




const MainScreenContainer = connect(mapStateToProps, {})(MainScreen)

export default MainScreenContainer