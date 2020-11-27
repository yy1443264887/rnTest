// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabIndex from './tabIndex';
import TjMore from './views/tjMore';
import Details from './views/Details';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabIndex" component={TabIndex} options={{headerShown:false}} />
        <Stack.Screen name="TjMore" component={TjMore}     options={{headerShown:false}} />
        <Stack.Screen name='Details' component={Details}   options={{headerShown:false}} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;