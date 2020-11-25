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
    TextInput
} from 'react-native'
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';
import { color } from 'react-native-reanimated';
import Banner from './banner';
const Stack=createStackNavigator();
export default class Home extends Component{
     constructor(props){
         super(props)
         this.state={
             tit:['专题','公益','大讲堂','科技','音频','美拍','XX'],
             titc:'0'
         }
     }
     render(){
        return(
            <ScrollView style={{backgroundColor:'#ffffff',padding:5}}>
                <View style={style.searchBox}>
                    <View style={style.searchLeft}>
                        <Text style={style.searchLeftText}>
                        进入未成年模式
                        </Text>
                        </View>

                        <View style={style.searchRight}>
                            <Image source={require('../assets/search.png')} style={{width:20,height:20,alignItems:'center',transform:[{translateY:8},{translateX:15}]}}>

                            </Image>
                            <TextInput placeholder='请输入查询内容' placeholderTextColor="#23333333" style={{color:'#333333',transform:[{translateX:20}],fontSize:13,backgroundColor:'res'}}>
                            </TextInput>
                        </View>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <View style={style.titBox}>
                    {this.state.tit.map((i,index)=><Text key={index} style={index==this.state.titc?style.tit:style.titc} onPress={()=>this.setState({titc:index})}>{i}</Text>)}
                    </View>
                    
                </ScrollView>
                <View style={{display:'flex',justifyContent:'center',flexDirection:'row'}}>
                <View style={{width:'95%',height:200,borderRadius:10,overflow:'hidden',marginTop:15}}>
                    <Banner></Banner>
                </View>
                </View>
                <View style={{width:'95%',marginTop:9,flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
                    <Text style={{fontSize:17,color:'#333333',paddingLeft:12,}}>推荐</Text>
                    <Text style={{fontSize:15,color:'#666666',paddingLeft:12,}}>查看更多 ></Text>
                </View>
                <View style={{display:"flex",width:'95%',flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap',marginTop:30}}>
                    {[1,2,3,4,5,6,7].map(function (item,index) {
                        return(
<View style={{width:180,height:300,overflow:'hidden',borderRadius:8,margin:5,backgroundColor:'lightblue'}}>
                        <Image 
                        source={require('../assets/tj1.jpg')}
                         resizeMode='cover'
                          style={{width:180,height:300}}>

                        </Image>
                    </View>
                        )
                        
                        
                    })}
                    
                </View>
                
            </ScrollView>
        )
     }
    
}


const style= StyleSheet.create({
    searchBox:{
        display:'flex',
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between'
    },
    searchLeft:{
        borderRadius:30,
        backgroundColor:'#FFEEF1',
        width:150,
        padding:5,
        height:30
        
    },
    searchLeftText:{
color:'#FF5771',
textAlign:'center'
    },
    searchRight:{
width:200,
height:35,
display:'flex',
flexDirection:'row',
borderRadius:30,
backgroundColor:'#F2F2F2',
    },
    titBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    tit:{
fontSize:15,
fontWeight: '500',
color: '#666666',
lineHeight: 20,
backgroundColor:'rgba(255, 87, 113, 1)',
paddingLeft:15,
paddingRight:15,
paddingBottom:8,
paddingTop:8,
marginLeft:15,
borderRadius:20,
lineHeight:20,
color:'white'
    },
    titc:{
        fontSize:15,
        fontWeight: '500',
        color: '#666666',
        lineHeight: 20,
        // backgroundColor:'#FF5771',
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:8,
        paddingTop:8,
        marginLeft:15,
        borderRadius:20,
        lineHeight:20,
        color:'#666666'
            }
})
