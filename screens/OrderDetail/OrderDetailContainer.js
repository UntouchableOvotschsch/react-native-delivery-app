import React from 'react'

import OrderDetail from './OrderDetail.js'


import { connect } from "react-redux";
import { setOrderDetailAC } from '../../redux/orderDetailReducer';



let mapStateToProps = (state) => {
    return {
        deliveryDate: state.orderDetailPage.deliveryDate,
        courierFullName: state.orderDetailPage.courierFullName,
        productArray: state.orderDetailPage.productArray,
        deliveryTime: state.orderDetailPage.deliveryTime,
        deliveryAdress: state.orderDetailPage.deliveryAdress,
        service: state.orderDetailPage.service
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setOrderDetail: (orderDetail)=> {
            dispatch(setOrderDetailAC(orderDetail))
        }
    }
}

const OrderDetailContainer = connect(mapStateToProps, mapDispatchToProps)(OrderDetail)

export default OrderDetailContainer