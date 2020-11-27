import React,{Component,useState} from 'react';
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
    Button,
    Image,
    TextInput,
    ImageBackground,
    Alert,
    Dimensions,
    TouchableOpacity
} from 'react-native'
const Dwidth=Dimensions.get('window').width;
const Dheight=Dimensions.get('window').height;

export default class Introduce extends Component{
    render(){
        return(
            <View style={{padding:10}}>
            <View style={styles.row}>
                <Image source={require('../assets/hsq.jpg')} style={{width:60,height:60,borderRadius:50}} resizeMode='cover'>

                </Image>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingLeft:15,flexWrap:'wrap'}}>
                    <Text style={{color:'rgba(51, 51, 51, 1)',fontSize:16,fontWeight:'700'}}>狗中吴彦祖</Text>
                    <TouchableOpacity style={{backgroundColor:'rgba(255, 87, 113, 1)',padding:10,paddingTop:5,paddingBottom:5,height:20,borderRadius:5}}><Text style={{color:'rgba(255, 255, 255, 1)',fontSize:13,textAlign:'center',padding:5,lineHeight:9}}>+关注</Text></TouchableOpacity>
                    <Text style={{color:'rgba(102, 102, 102, 1)',fontSize:12,marginTop:5}}>
                        专业解答性知识，提前预防危害，让更多人的人理解
并正确的保护好自己
                    </Text>
                </View>
            </View>
            <Text style={{color:'rgba(51, 51, 51, 1)',fontSize:17,fontWeight:'600',marginTop:15}}>青春期及性早熟</Text>
            <View style={{marginTop:15,flex:1,flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap'}}>
                <Text style={{color:'rgba(255, 87, 113, 1)',backgroundColor:'rgba(242, 242, 242, 1)',borderRadius:10,paddingLeft:5,paddingRight:5}}>
                    知识科普
                </Text>
                <Text style={{color:'rgba(102, 102, 102, 1)',fontSize:14,marginLeft:30}}>2020-9-24  11:07</Text>
                <Text style={{color:'rgba(102, 102, 102, 1)',fontSize:14,fontWeight:'600',marginTop:15}}>这个视频主要是解说青春期的萌芽及性早熟，让更多青春期的小孩理解男女生的区别，如何预防青春期的冲动。</Text>
            </View>
        </View>
        )
    }
}

const styles=StyleSheet.create({
    dd:{
        width:40,
        color:'rgba(51, 51, 51, 1)',
        borderBottomWidth:3,
        borderBottomColor:'rgba(255, 87, 113, 1)',
        fontSize:18,
        margin:5,
        textAlign:'center'
    },
    dd2:{
        width:40,
        margin:5,
        color:'rgba(51, 51, 51, 1)',
        // borderBottomWidth:3,
        // borderBottomColor:'rgba(255, 87, 113, 1)',
        fontSize:18,
        textAlign:'center'
    },
    icon:{
        width:25,
        height:25,
        marginRight:2,
        alignItems:'center'
    },
    row:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start'
    }
})