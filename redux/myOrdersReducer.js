let SET_ORDERS = 'SET_ORDERS'


let initialState = {
    orders: []
}

const myOrdersReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_ORDERS: {
            return{
                ...state,
                orders: action.orders
            }
        }

        default: {
            return state
        }
    }
}

export const setOrdersAC = (orders) => {
    return{
        type: SET_ORDERS,
        orders: orders
    }
}



export default myOrdersReducer