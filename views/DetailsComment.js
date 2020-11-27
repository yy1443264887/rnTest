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

export default class DetailsComment extends Component{
    render(){
        return(

            <View style={{paddingLeft:10,paddingRight:10}}>
                            {
                [1,2,3,4,5].map((item,index)=>{
                    return(
                        <View key={index} style={styles.PL}>
                        <Image source={require('../assets/giao.jpg')} style={styles.tx}></Image>
                        <View style={{marginLeft:15,flex:1,paddingRight:15}}>
                        <Text style={styles.userName}>涩会你Giao哥</Text>
                            <View style={styles.main}>
                            <Text style={styles.time}>2020-9-24  11:19</Text>
                            <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
                                <Image source={require('../assets/up.png')} style={{width:20,height:20,marginRight:3}}></Image>
                                <Text style={styles.up}>88</Text>
                            </View>
                            </View>
                            
                            <Text style={styles.say}>看这个视频真的学到了很多，赞。。。</Text>
                        </View>
                    </View>
                    )
                })
            }
               
            </View>
        )
    }
}

const styles=StyleSheet.create({
    say:{
        color:'rgba(51, 51, 51, 1)',
        fontSize:14,
        fontWeight:'600',marginTop:5
    },
    userName:{
        color:'rgba(51, 51, 51, 1)',
        fontSize:15,
        fontWeight:'700'
    },
    time:{
color:"rgba(102, 102, 102, 1)",
fontSize:13,
marginTop:5
    },
    up:{
        color:'rgba(153, 153, 153, 1)',
        fontSize:12,
        lineHeight:20

    },
    tx:{
        width:60,
        height:60,
        borderRadius:50,
    },
    main:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    PL:{
        display:'flex',
        flexDirection:'row',
        paddingTop:18,
        paddingBottom:18,
        borderBottomColor:'rgba(242, 242, 242, 1)',
        borderBottomWidth:2
    }

})