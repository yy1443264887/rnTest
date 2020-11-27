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
    Alert
} from 'react-native'

const Stack=createStackNavigator()
export default class TjMore extends Component{
    constructor(props){
        super(props)
        this.state={
            cs:0,
            title:'大头儿子小头爸爸爸爸爸爸',
            title1:'先帝创业未半而中道崩殂'
        }
    }
render(){
   switch (this.state.cs){
       case 0:
        return(
            <ScrollView style={{padding:5,backgroundColor:'rgba(255,255,255,1)'}}>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingLeft:10,paddingRight:10}}>
                    <View  style={{width:30,height:45,display:'flex',justifyContent:'center'}}>
                        <Text onPress={()=>{this.props.navigation.pop()}}>
                            返回
                        </Text>
                    </View>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:150,marginTop:8}}>
                        <Text style={this.state.cs==0?styles.cs1:styles.cs2} onPress={()=>this.setState({cs:0})}>推荐</Text>
                        <Text style={this.state.cs==1?styles.cs1:styles.cs2} onPress={()=>this.setState({cs:1})}>猜你喜欢</Text>
                    </View>
                    <View style={{width:30,height:45,display:'flex',justifyContent:'center',}}>
                        <Image source={require('../assets/search.png')} style={{width:20,height:20}}>
    
                        </Image>
                    </View>
                </View>
                <View style={{width:'100%',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                    {[1,2,3,4,5,6,7,8,9,].map((item,index)=>{
                    return(
                        <View style={{width:'32%',marginTop:15}} key={index}>
                        <Image source={require('../assets/tj6.jpg')} style={{width:'100%',height:275,borderRadius:5}}></Image>
                        <Text style={{overflow:'hidden',fontSize:16,color:'rgba(51, 51, 51, 1)'}}>{this.state.title.length>8?this.state.title.substr(0,7)+'...':this.state.title}</Text>
                        <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                            <Text style={{padding:5,fontSize:13,color:'rgba(242, 84, 108, 1)',backgroundColor:'rgba(242, 242, 242, 1)',width:65,borderRadius:25,paddingTop:0,paddingBottom:0}}>知识科普</Text>
                            <Text style={{color:'rgba(153, 153, 153, 1)'}}>60:00</Text>
                            </View>
                    </View>
                    )                    
                    })}
                    
                </View>
            </ScrollView>
        )
        break;
        case 1:
            return(
                <ScrollView style={{padding:5,backgroundColor:'rgba(255,255,255,1)'}}>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingLeft:10,paddingRight:10}}>
                        <View  style={{width:30,height:45,display:'flex',justifyContent:'center'}}>
                            <Text onPress={()=>{this.props.navigation.pop()}}>
                                返回
                            </Text>
                        </View>
                        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:150,marginTop:8}}>
                            <Text style={this.state.cs==0?styles.cs1:styles.cs2} onPress={()=>this.setState({cs:0})}>推荐</Text>
                            <Text style={this.state.cs==1?styles.cs1:styles.cs2} onPress={()=>this.setState({cs:1})}>猜你喜欢</Text>
                        </View>
                        <View style={{width:30,height:45,display:'flex',justifyContent:'center',}}>
                            <Image source={require('../assets/search.png')} style={{width:20,height:20}}>
        
                            </Image>
                        </View>
                    </View>
                    <View style={{width:'100%',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                        {[1,2,3,4,5,6,7,8,9,].map((item,index)=>{
                        return(
                            <View style={{width:'32%',marginTop:15}} key={index}>
                            <Image source={require('../assets/tj7.jpg')} style={{width:'100%',height:275,borderRadius:5}}></Image>
                            <Text style={{overflow:'hidden',fontSize:16,color:'rgba(51, 51, 51, 1)'}}>{this.state.title1.length>8?this.state.title1.substr(0,7)+'...':this.state.title1}</Text>
                            <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                                <Text style={{padding:5,fontSize:13,color:'rgba(242, 84, 108, 1)',backgroundColor:'rgba(242, 242, 242, 1)',width:65,borderRadius:25,paddingTop:0,paddingBottom:0}}>知识科普</Text>
                                <Text style={{color:'rgba(153, 153, 153, 1)'}}>60:00</Text>
                                </View>
                        </View>
                        )                    
                        })}
                        
                    </View>
                </ScrollView>
            )
            break;
   }
   
}
}
const styles=StyleSheet.create({
    cs1:{
        color:'rgba(255, 87, 113, 1)',fontSize:18,borderBottomColor:'rgba(255, 87, 113, 1)',borderBottomWidth:4,margin:5
    },
    cs2:{
        color:'rgba(102, 102, 102, 1)',fontSize:18,margin:5
    }
})