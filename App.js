// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabIndex from './tabIndex';
import TjMore from './views/tjMore';
import Details from './views/Details';
import Camera from './views/takePhoto';
import Login from "./views/Login";
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer theme={{colors:{background:'rgb(255,255,255)'}}}>
      <Stack.Navigator >
        <Stack.Screen name="TabIndex" component={TabIndex} options={{headerShown:false}} />
        <Stack.Screen name="TjMore" component={TjMore}     options={{headerShown:false}} />
        <Stack.Screen name='Details' component={Details}   options={{headerShown:false}} />
        <Stack.Screen name='Camera' component={Camera}   options={{headerShown:false}} />
        <Stack.Screen name='Login' component={Login}   options={{headerShown:false}} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;