import * as axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
const baseURL = 'http://192.168.1.34:3003'


export const sendOrderAPI = (id, deliveryTime, deliveryDate, deliveryAdress, orderArray) => {
    return (
        axios.post(baseURL + "/order",{
            user: id,
            deliveryTime: deliveryTime,
            price: 600,
            service: "Доставка продуктов",
            deliveryDate: deliveryDate,
            deliveryAdress: deliveryAdress,
            productArray: orderArray

        },
        {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    )
}


export const getOrders = (userId) => {
    return(
        axios.get(baseURL + `/order/userid/${userId}`)
    )
}

export const getOrderById = (orderNumber) => {
    return(
        axios.get(baseURL + `/order/${orderNumber}`)
    )
}

export const register = (login, name, surname, phone, mail, password) => {
    return(
        axios.post(baseURL + '/user', {
            login: login,
            name: name,
            surname: surname,
            phone: phone,
            mail: mail,
            password: password
        },{
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    )
}


export const login = (loginSignIn, passwordSignIn) => {
    return(
        axios.post(baseURL + "/user/login", {
            login: loginSignIn,
            password: passwordSignIn
        }, {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    )
}

export const auth = async () => {
    return(
        await axios.get(baseURL + "/user//login/auth",
        {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": await AsyncStorage.getItem('jwt_token')
            }
        })
    )
}