import React,{Component,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsItroduce from './DetailsIntroduce';
import DetailsComment from './DetailsComment';
import Video from 'react-native-video';
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
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import { Value } from 'react-native-reanimated';
import Slider from '@react-native-community/slider';
const Dwidth=Dimensions.get('window').width;
const Dheight=Dimensions.get('window').height;

export default class Details extends Component{
    
    constructor(props){
        super(props)
        this.state={
            allTime:null,
            nowTime:null,
            navigation:this.props.navigation,
            dd:0,
            rate: 1,
        volume: 1,
        muted: false,
        resizeMode: 'contain',
        duration: 0.0,
        currentTime: 0.0,
        vv:1,
        s:1,
        gob:null,
        paused:true,
        fullscreen:false,
        starKey:0,
        endKey:0,
        isMoving:false,
        sliderIsHidden:1,
       
        }
     
    }

    // changgeHidden=()=>{
    //     this.setState({
    //         sliderIsHidden:1
    //     })
    //     var isHidden=window.setTimeout(() => {
    //         this.setState({
    //             sliderIsHidden:0
    //         })
    //     },3000)
    //     console.log(isHidden)
    //     clearTimeout(isHidden)
    //     setTimeout(isHidden)
    // }

     onloadE= (e)=>{
        let alltime=e.duration
        // console.log('方法',e)
        // console.log(e.duration)
 this.setState({
    allTime:alltime
})

    }
// 过滤器
    filterChanggeTime(value){
        let k=parseInt(value)
        let s=k%60
        let m=parseInt(k/60)
        if (s<10){
            s='0'+s
        }
        if(m<10){
            m='0'+m
        }
        return m+':'+s
    }


       

    moveTime=(value)=>{
        // this.Video.seek(value)
        // console.log(value)
        this.player.seek(value)
this.setState({
    nowTime:value,
    isMoving:true
})

    }
//
nowTime= async (e)=>{
    if(this.state.isMoving){
        let tt = e.currentTime
        let  dd=this.state.nowTime/this.state.allTime*100
       
       this.setState({
           nowTime:tt,
           vv:dd
       })
    }
     
    // console.log(this.state.vv)
}
starMove(e){
    if(this.state.starKey){
        console.log('开始')
    }
    this.setState({
        isMoving:true
    })
}
endMove(e){
    if(this.state.endKey){
        console.log('结束')
    }
    this.setState({
        endKey:1
    })
}

fullscreen=()=>{
    console.log(Slider)
    this.setState({
        fullscreen:!this.state.fullscreen
    })
}

    render(){
        let letggGp=()=>{
             this.setState({
                 s:!this.state.s,
                 paused:!this.state.paused
             })
            
        }
        return(
            <ScrollView style={{backgroundColor:"rgba(255,255,255,1)"}} scrollEnabled={!this.state.fullscreen}>
                <TouchableOpacity style={{position:'absolute',zIndex:this.state.fullscreen?-30:30,marginLeft:8}} onPress={()=>this.state.navigation.pop()}><Image source={require('../assets/back.png')} style={{width:30,height:30}} ></Image></TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={()=>this.setState({paused:!this.state.paused})} style={{display:'flex',alignItems:'center',flexDirection:'row'}}>
                <View style={{...styles.VideoBox,height:this.state.fullscreen?Dheight+48:Dheight*.8}} >
                    <Video source={require('../assets/videos/testMovie2.mp4')}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                  // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={this.state.fullscreen?styles.backgroundVideo2:styles.backgroundVideo1}
    //    repeat='ture'
    //    controls={true}
       resizeMode='contain'
       paused={this.state.paused}
       onLoad={(e)=>{this.onloadE(e),this.moveTime(0)}}
       onProgress={(e)=>this.nowTime(e)}
       fullscreen={this.state.fullscreen}
       />
       <View style={this.state.fullscreen?styles.jdBox2:styles.jdBox1}>
       <TouchableOpacity onPress={()=>{letggGp()}} >
            <Image source={this.state.paused?require('../assets/show.png'):require('../assets/stop.png')} style={{width:20,height:20}}  ></Image>
       </TouchableOpacity>
      
       
       <Slider
 
    style={{width:'60%', height: 40}}
    minimumValue={1}
    maximumValue={100}
    minimumTrackTintColor="#FF5771"
    maximumTrackTintColor="#FFFFFF"
    thumbTintColor="#FF5771"
    value={this.state.vv}
    onSlidingStart={(e)=>this.setState({isMoving:false})}
    onSlidingComplete={(value)=>this.moveTime(this.state.allTime/100*value)}
  />
  <Text style={{fontSize:10,color: '#FEFEFE'}}>{this.filterChanggeTime(this.state.nowTime)}/{this.filterChanggeTime(this.state.allTime)}</Text>
  <TouchableOpacity onPress={()=>this.fullscreen()} >
  <Image source={require('../assets/quanping.png')} style={{width:20,height:20}}></Image>
  </TouchableOpacity>
  
      </View>
     
                </View>
                </TouchableOpacity>
              


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
    },
    backgroundVideo1: {
        width:Dwidth,
        height:'100%',
        alignItems:'center'
      },
      backgroundVideo2: {
        width:Dheight+48,
        height:Dwidth,
        backgroundColor:'black',
        position:'absolute',
        top:(Dheight-Dwidth)/2,
        bottom:0,
        transform:[{rotate:'90deg'}]
      },
    fullscreen:{
        width:Dheight,
        height:Dwidth,
        alignItems:'center',
        transform:[{rotate:'90deg'}]
    },
    VideoBox:{
        width:Dwidth,
        height:Dheight,
        overflow:'hidden',
        position:'relative',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,1)',
        backgroundColor:'black',
        
    },
    jdBox1:{
        width:'100%',
        height:40,
        padding:15,
        paddingTop:0,
        paddingBottom:0,
        position:'absolute',
        zIndex:99,
        bottom:0,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
        
    },
    jdBox2:{
        transform:[{rotate:'90deg'}],
        width:Dheight,
        height:40,
        padding:15,
        paddingTop:0,
        paddingBottom:0,
        position:'absolute',
        zIndex:99,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        bottom:"47%",
        right:0
        
    }
})