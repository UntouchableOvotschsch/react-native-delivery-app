let SET_ORDER_DETAIL = 'SET_ORDER_DETAIL'

let initialState = {
    deliveryDate: '',
    courierFullName: '',
    deliveryTime: '',
    deliveryAdress: '',
    service: '',
    productArray: [],
}

const orderDetailReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_ORDER_DETAIL:{
            return {
                ...state,
                ...action.orders
            }
            
        }

        default: {
            return state
        }
    }
}

export const setOrderDetailAC = (orderDetail) => {
    
    return{
        type: SET_ORDER_DETAIL,
        orders: orderDetail
    }
}

export default orderDetailReducer;