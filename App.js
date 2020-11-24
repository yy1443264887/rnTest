/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

function Shows({ navigation }) {
  return (
    <View>
      <Text style={styles.tt}>
        hello Shows
      </Text>
      <Button title='回家' onPress={()=>navigation.navigate('Homet')}></Button>
    </View>
   );
}

function Mine({ navigation }) {
  return (
    <View>
      <Text style={styles.tt}>
        hello Mine
      </Text>
      <Button title='我的' onPress={()=>navigation.navigate('Mine')}></Button>
    </View>
   );
}

function Setting({ navigation }) {
  return (
    <View>
      <Text style={styles.tt}>
        hello Setting
      </Text>
      <Button title='设置' onPress={()=>navigation.navigate('Setting')}></Button>
    </View>
   );
}
function Homet({ navigation }) {
  return (
    <View>
      <Text style={styles.tt}>
        hello react-native
      </Text>
      <Button title='展示' onPress={()=>navigation.navigate('Shows')}></Button>
    </View>
   );
}

function MENU1({ navigation }) {
  return (
    <View>
      <Text style={styles.tt}>
        MENU1
      </Text>
    </View>
   );
}
function MENU2({ navigation }) {
  return (
    <View>
      <Text style={styles.tt}>
        MENU2
      </Text>
    </View>
   );
}
function MENU3({ navigation }) {
  return (
    <View>
      <Text style={styles.tt}>
        MENU3
      </Text>
    </View>
   );
}
function MENU4({ navigation }) {
  return (
    <View>
      <Text style={styles.tt}>
        MENU4
      </Text>
    </View>
   );
}

const Stack = createStackNavigator();
const Tab=createBottomTabNavigator();
const App: () => React$Node = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name='Homet' component={Homet} />
       <Stack.Screen name='Shows' component={Shows} />
       <Stack.Screen name='Mine' component={Mine} />
       <Stack.Screen name='Setting' component={Setting} />
     </Stack.Navigator>
   </NavigationContainer>
  );
};

function Menu() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="MENU1" component={MENU1} />
      <Tab.Screen name="MENU2" component={MENU2} />
      <Tab.Screen name="MENU3" component={MENU3} />
      <Tab.Screen name="MENU4" component={MENU4} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({
  tt:{
    textAlign:"center",
    fontSize:40,
    color:'lightblue',
    lineHeight:600
  }
});

export default Menu;
