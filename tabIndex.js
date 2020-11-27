import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './views/home'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image
} from 'react-native';

function Rember({ navigation }) {
  return (
    <View>
      <Text style={styles.tt}>
        我是记录
      </Text>
    </View>
   );
}
function Care({ navigation }) {
  return (
    <View>
      <Text style={styles.tt}>
        我是消息
      </Text>
    </View>
   );
}
function News({ navigation }) {
  return (
    <View>
      <Text style={styles.tt}>
        我是我的
      </Text>
    </View>
   );
}
function Mine({ navigation }) {
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

function Menu() {
  return(
    
      <Tab.Navigator

     
 screenOptions={
   ({route})=>({
  tabBarIcon:({focused,size,color})=>{
    let icon;
    if(route.name==="首页"){
      icon = focused ?
       (
        <Image
          source={ require('./assets/shouye(1).png') }
          style={{ width: 25, height: 25, }} />
      ) : ( <Image
        source={ require('./assets/shouye.png') }
        style={{ width: 25, height: 25, }} />)
    }else if(route.name==="关注"){
      icon = focused ? (
        <Image
          source={ require('./assets/soucang(1).png') }
          style={{ width: 25, height: 25, }} />
      ) : (<Image
        source={ require('./assets/soucang.png') }
        style={{ width: 25, height: 25, }} />)
    }else if(route.name==="记录"){
      icon = focused ? (
        <Image
          source={ require('./assets/jilu(1).png') }
          style={{ width: 45, height: 45, transform:[{translateY:-10}]}} />
      ) : (<Image
        source={ require('./assets/jilu.png') }
        style={{ width: 45, height: 45,transform:[{translateY:-10}] }} />)
    }else if(route.name==="消息"){
      icon = focused ? (
        <Image
          source={ require('./assets/xiaoxi(1).png') }
          style={{ width: 24, height: 24, }} />
      ) : (<Image
        source={ require('./assets/xiaoxi.png') }
        style={{ width: 24, height: 24, }} />)
    }
    else if(route.name==="我的"){
      icon = focused ? (
        <Image
          source={ require('./assets/wode(1).png') }
          style={{ width: 25, height: 25, }} />
      ) : (<Image
        source={ require('./assets/wode.png') }
        style={{ width: 25, height: 25, }} />)
    }
    return icon;
  }
})
}
options={{
  
}}

tabBarOptions={{
        activeTintColor: '#FF5771',
        inactiveTintColor: 'black',
      }}
      >
      <Tab.Screen name="首页" component={Home} />
      <Tab.Screen name="关注" component={Care} />
      <Tab.Screen name="记录" component={Rember} />
      <Tab.Screen name="消息" component={News} />
      <Tab.Screen name="我的" component={Mine} />
      </Tab.Navigator>

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