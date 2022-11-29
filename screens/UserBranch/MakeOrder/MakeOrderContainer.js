import React from 'react'

import MakeOrder from './MakeOrder'

import { connect } from "react-redux";

import {
    productTitleChangeText,
    productPriceChangeText,
    countPlusInHtAC,
    countMinusInHtAC,
    countPlusInKgAC,
    countMinusInKgAC,
    updateUnitMeasure,
    addProductAC,
    deleteProductAC,
    updateDeliveryDateAC,
    updateDeliveryTimeAC,
    updateDeliveryAdressAC
} from '../../../redux/makeOrderReducer.js'




let mapStateToProps = (state) => {
    return {
        orderArray: state.makeOrderPage.orderArray,
        newProductTitle: state.makeOrderPage.newProductTitle,
        newProductPrice: state.makeOrderPage.newProductPrice,
        newProductQuantity: state.makeOrderPage.newProductQuantity,
        unitOfMeasure: state.makeOrderPage.unitOfMeasure,
        deliveryDate: state.makeOrderPage.deliveryDate,
        deliveryTime: state.makeOrderPage.deliveryTime,
        deliveryAdress: state.makeOrderPage.deliveryAdress,
        id: state.loginPage.userInfo.id
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateProductTitle: (text) => {
            dispatch(productTitleChangeText(text))
        },
        updateProductPrice: (text) => {
            dispatch(productPriceChangeText(text))
        },
        countPlusInHt: () => {
            dispatch(countPlusInHtAC())
            dispatch(updateUnitMeasure('шт'))
        },
        countMinusInHt: () => {
            dispatch(countMinusInHtAC())
        },
        countPlusInKg: () => {
            dispatch(countPlusInKgAC())
            dispatch(updateUnitMeasure('кг'))
        },
        countMinusInKg: () => {
            dispatch(countMinusInKgAC())
        },
        updateUnitMeasure: (text) => {
            dispatch(updateUnitMeasure(text))
        },
        addProduct: () => {
            dispatch(addProductAC())
        },
        deleteProduct: (id) => {
            dispatch(deleteProductAC(id))
        },
        updateDeliveryDate: (date)=>{
            dispatch(updateDeliveryDateAC(date))
        },
        updateDeliveryTime: (time)=>{
            dispatch(updateDeliveryTimeAC(time))
        },
        updateDeliveryAdress: (adress)=>{
            dispatch(updateDeliveryAdressAC(adress))
        }
    }
}


const MakeOrderContainer = connect(mapStateToProps, mapDispatchToProps)(MakeOrder)

export default MakeOrderContainer