import React,{Component,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsItroduce from './DetailsIntroduce';
import DetailsComment from './DetailsComment'
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
export default class Details extends Component{
    constructor(props){
        super(props)
        this.state={
            navigation:this.props.navigation,
            dd:0

        }
    }
    render(){
        return(
            <ScrollView style={{backgroundColor:"rgba(255,255,255,1)"}}>
                <TouchableOpacity style={{position:'absolute',zIndex:30,marginLeft:8,}} onPress={()=>this.state.navigation.pop()}><Image source={require('../assets/back.png')} style={{width:30,height:30}} ></Image></TouchableOpacity>
                
                <View style={{width:Dwidth,height:Dheight*.8,overflow:'hidden'}}>
                    <Image source={require('../assets/tj4.jpg')} style={{width:Dwidth,height:Dheight,transform:[{translateY:-38}]}}>
                    </Image>
                </View>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomColor:'rgba(242, 242, 242, 1)',borderBottomWidth:2}}>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'25%'}}>
                        <Text style={this.state.dd==0?styles.dd:styles.dd2} onPress={()=>this.setState({dd:0})}>简介</Text>
        <Text style={this.state.dd==1?styles.dd:styles.dd2} onPress={()=>this.setState({dd:1})}>评论</Text>
                    </View>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'35%',paddingTop:5}}>
                        <View style={{display:'flex',flexDirection:'row',marginRight:5}}>
                            <Image source={require('../assets/bofang.png')} style={styles.icon}></Image>
                            <Text style={{lineHeight:25}}>42</Text>
                        </View>
                        <View style={{display:'flex',flexDirection:'row',marginRight:5}}>
                            <Image source={require('../assets/dianzan.png')} style={styles.icon}></Image>
                            <Text style={{lineHeight:25}}>20</Text>
                        </View>
                        <View style={{display:'flex',flexDirection:'row',marginRight:5}}>
                            <Image source={require('../assets/zhuanfa.png')} style={styles.icon}></Image>
                            <Text style={{lineHeight:25}}>6</Text>
                        </View>
                    </View>
                </View>
                {
                    this.state.dd==0?<DetailsItroduce/>:<DetailsComment/>
                }
              
            </ScrollView>
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