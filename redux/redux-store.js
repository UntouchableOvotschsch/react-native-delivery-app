import {createStore, combineReducers, applyMiddleware} from 'redux';




import makeOrderReducer from './makeOrderReducer';
import myOrdersReducer from './myOrdersReducer';
import orderDetailReducer from './orderDetailReducer';
import registerScreenReducer from './registerScreenReducer'
import loginScreenReducer from './loginScreenReducer';


let reducers = combineReducers({
    makeOrderPage: makeOrderReducer,
    myOrdersPage: myOrdersReducer,
    orderDetailPage: orderDetailReducer,
    registerPage: registerScreenReducer,
    loginPage: loginScreenReducer
})


let store = createStore(reducers);


export default store;