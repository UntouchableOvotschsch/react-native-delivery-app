import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './redux/redux-store.js'
import { Provider } from 'react-redux';

import ScreenHeader from './components/ScreenHeader.js';

//Common
import RegisterScreenContainer from './screens/RegisterScreen/RegisrerScreenContainer.js';
import LoginScreenContainer from './screens/Login/LoginScreenContainer.js';


//User

import MakeOrderContainer from './screens/UserBranch/MakeOrder/MakeOrderContainer.js';
import MyOrdersContainer from './screens/UserBranch/MyOrders/MyOrdersContainer.js';
import OrderDetailContainer from './screens/UserBranch/OrderDetail/OrderDetailContainer.js';
import MainScreenContainer from './screens/UserBranch/MainScreen/MainScreenContainer.js';

//Volonteer

import MainScreenVolonteerContainer from './screens/VolonteerBranch/MainScreen/MainScreenVolonteerContainer'






const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
              headerShown: true,
              headerBackTitleVisible: true,
              headerBackVisible: true,
              headerTitleAlign: 'center'
            }}>

            <Stack.Screen
              name="Login"
              component={LoginScreenContainer}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Register"
              component={RegisterScreenContainer}
              options={{ title: 'Регистрация' }}
            />

            <Stack.Screen
              name="Main"
              component={MainScreenContainer}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="MyOrders"
              component={MyOrdersContainer}
              options={{ title: 'Мои заказы' }}
            />

            <Stack.Screen
              name="MakeOrder"
              component={MakeOrderContainer}
              options={{ title: 'Сделать заказ' }}
            />

            <Stack.Screen
              name="OrderDetail"
              component={OrderDetailContainer}
              options={{ title: 'Детали заказа' }}
            />
            <Stack.Screen
              name="MainScreenVoloneer"
              component={MainScreenVolonteerContainer}
              options={{ headerShown: false }}
            />

          </Stack.Navigator>

        </SafeAreaView>

      </Provider>

    </NavigationContainer>



  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    display: 'flex',
  },

})


export default App;
