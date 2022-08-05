import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import UserData from './src/screens/UserData/UserData';
import {Congrats} from './src/screens/Congrats/Congrats';
import {Screens} from './src/screens/screens';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name={Screens.HOME}
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen name={Screens.USER_DATA} component={UserData} />
          <Stack.Screen
            name={Screens.CONGRATS}
            component={Congrats}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
