const UPDATE_PRODUCT_TEXT = 'UPDATE_PRODUCT_TEXT'
const UPDATE_PRICE_TEXT = 'UPDATE_PRICE_TEXT'
const COUNT_PLUS_IN_HT = 'COUNT_PLUS_IN_HT'
const COUNT_MINUS_IN_HT = 'COUNT_MINUS_IN_HT'
const COUNT_PLUS_IN_KG = 'COUNT_PLUS_IN_KG'
const COUNT_MINUS_IN_KG = 'COUNT_MINUS_IN_KG'
const UPDATE_UNIT_MEASURE = 'UPDATE_UNIT_MEASURE'
const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const UPDATE_DELIVERY_DATE = 'UPDATE_DELIVERY_DATE'
const UPDATE_DELIVERY_TIME = 'UPDATE_DELIVERY_TIME'
const UPDATE_DELIVERY_ADRESS = 'UPDATE_DELIVERY_ADRESS'

let initialState = {
    newProductTitle: '',
    newProductPrice: '',
    newProductQuantity: 0,
    unitOfMeasure: '',

    deliveryDate: '',
    deliveryTime: '',
    deliveryAdress: '',
    orderArray: []
}



const makeOrderReducer = (state=initialState, action) => {
    switch(action.type){

        case UPDATE_PRODUCT_TEXT:{
            return {
                ...state,
                newProductTitle: action.productTitle 
            };
        }

        case UPDATE_PRICE_TEXT:{
            return{
                ...state,
                newProductPrice: action.productPrice
            }
        }

        case COUNT_PLUS_IN_HT:{
            return{
                ...state,
                newProductQuantity: state.newProductQuantity + 1,

            }
        }

        case COUNT_MINUS_IN_HT:{
            return{
                ...state,
                newProductQuantity: state.newProductQuantity - 1,
                
            }
        }

        case COUNT_PLUS_IN_KG:{
            return{
                ...state,
                newProductQuantity: state.newProductQuantity + 1,

            }
        }

        case COUNT_MINUS_IN_KG:{
            return{
                ...state,
                newProductQuantity: state.newProductQuantity - 1,
            }
        }

        case UPDATE_UNIT_MEASURE:{
            return{
                ...state,
                unitOfMeasure: action.unit
            }
        }

        case ADD_PRODUCT:{
            let newProduct = {
                id: state.orderArray.length + 1,
                productPrice: +state.newProductPrice,
                title: state.newProductTitle,
                quantity: state.newProductQuantity+state.unitOfMeasure
            }

            return {
                ...state, 
                orderArray: [...state.orderArray, newProduct],
                newProductTitle: '',
                newProductPrice: '',
                newProductQuantity: 0,
                unitOfMeasure: '',
                deliveryDate: '',
                deliveryTime:'',
                deliveryAdress: ''
            };
        }

        case DELETE_PRODUCT:{
            return {
                ...state,
                orderArray: state.orderArray.filter(item => item.id !== action.id),
            }
        }

        case UPDATE_DELIVERY_DATE:{
            return{
                ...state,
                deliveryDate: action.date
            }
        }

        case UPDATE_DELIVERY_TIME:{
            return{
                ...state,
                deliveryTime: action.time
            }
        }

        case UPDATE_DELIVERY_ADRESS:{
            return{
                ...state,
                deliveryAdress: action.adress
            }
        }


        default: {
            return state
        }
    }
}

export const productTitleChangeText = text => {
    
    return {
        type: UPDATE_PRODUCT_TEXT,
        productTitle: text
    }
}

export const productPriceChangeText = text => {
    
    return {
        type: UPDATE_PRICE_TEXT,
        productPrice: text
    }
}

export const countPlusInHtAC = () => {
    return{
        type: COUNT_PLUS_IN_HT,
    }
}

export const countMinusInHtAC = () => {
    return{
        type: COUNT_MINUS_IN_HT
    }
}

export const countPlusInKgAC = () => {
    return{
        type: COUNT_PLUS_IN_KG,
    }
}

export const countMinusInKgAC = () => {
    return{
        type: COUNT_MINUS_IN_KG
    }
}
export const updateUnitMeasure = (text) => {
    return{
        type: UPDATE_UNIT_MEASURE,
        unit: text
    }
}

export const addProductAC = () => {
    return{
        type: ADD_PRODUCT
    }
}

export const deleteProductAC = (id) => {
    return{
        type: DELETE_PRODUCT,
        id: id
    }
}

export const updateDeliveryDateAC = (date) => {
    return{
        type: UPDATE_DELIVERY_DATE,
        date: date
    }
}

export const updateDeliveryTimeAC = (time) => {
    return{
        type: UPDATE_DELIVERY_TIME,
        time: time
    }
}

export const updateDeliveryAdressAC = (adress) => {
    return{
        type: UPDATE_DELIVERY_ADRESS, 
        adress: adress
    }
}


export default makeOrderReducer