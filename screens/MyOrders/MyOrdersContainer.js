import React from 'react'

import MyOrders from './MyOrders.js'


import { connect } from "react-redux";
import { setOrdersAC } from '../../redux/myOrdersReducer';



let mapStateToProps = (state) => {
    return {
        orders: state.myOrdersPage.orders,
        id: state.loginPage.userInfo.id
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setOrders: (orders)=> {
            dispatch(setOrdersAC(orders))
        }
    }
}

const MyOrdersContainer = connect(mapStateToProps, mapDispatchToProps)(MyOrders)

export default MyOrdersContainer