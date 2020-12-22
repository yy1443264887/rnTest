import React,{Component,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TjMore from './tjMore'
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
    TouchableOpacity,
} from 'react-native'
import Banner from './banner';


class Hindex extends Component{
    constructor(props){
        super(props)
        this.state={
            tit:this.props.tit,
            titc:this.props.titc,
            navigator:this.props.navigation,
        }
        // console.log('fff',this.props)
    }

    render(){
        switch (this.state.titc){
            case '0':
                return(
                    <View>
                        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} translucent={false} />
                        <View style={{width:'100%',height:250,marginTop:15}}>
                        <Banner ></Banner>
                        </View>
                    <View style={{width:'100%',marginTop:9,flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
                        <Text style={{fontSize:17,color:'#333333',paddingLeft:12,}}>推荐</Text>
                        <Text style={{fontSize:15,color:'#666666',paddingLeft:12,}} onPress={()=>this.state.navigator('TjMore')}>查看更多 ></Text>
                    </View>
                    <View style={{display:"flex",width:'100%',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',marginTop:20}}>
                        {[1,2,3,4].map((item,index)=>{
                            return(
    <TouchableOpacity key={index} style={{width:180,height:300,overflow:'hidden',borderRadius:8,margin:5}} onPress={()=>this.state.navigator('Details')} >
        
                            <ImageBackground 
                            source={require('../assets/tj1.jpg')}
                             resizeMode='cover'
                              style={{width:180,height:300,display:'flex',justifyContent:'flex-end'}}
                              >
                                  <View style={{display:'flex',flexDirection:'column',padding:10,backgroundColor:'rgba(0, 0, 0, .5)'}}  >
                            <Text style={{color:'white',fontSize:15}} >{this.state.tit[Number(this.state.titc)]}标题</Text>
                            <Text style={{width:60,padding:4,fontSize:10,backgroundColor:'rgba(255, 87, 113, 1)',marginTop:8,borderRadius:30,color:'white',textAlign:'center'}}>{this.state.tit[Number(this.state.titc)]}标签</Text>
                            <View style={{padding:10,paddingBottom:0,display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                                <Text style={{color:'white',fontSize:12,width:50}}>60：00</Text>
                                <View style={{display:'flex',flexDirection:'row'}}>
                                    <Text style={{color:'rgba(255, 255, 255, 1)'}}>收藏</Text>
                                    <Text style={{marginLeft:10,color:'rgba(255, 255, 255, 1)'}}>点赞</Text>
                                </View>
                            </View>
                                  </View>
                           </ImageBackground>
                        </TouchableOpacity>
                            )
                        })}
                        
                    </View>
                    <View style={{width:'100%',marginTop:9,flexDirection:'row',display:'flex',justifyContent:'space-between',marginTop:15}}>
                        <Text style={{fontSize:17,color:'#333333',paddingLeft:12,}}>拆你喜欢</Text>
                        <Text style={{fontSize:15,color:'#666666',paddingLeft:12,}}>查看更多 ></Text>
                    </View>
                    <View style={{display:"flex",width:'100%',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',marginTop:20}}>
                        {[1,2,3,4].map((item,index)=>{
                            return(
    <TouchableOpacity key={index} style={{width:180,height:300,overflow:'hidden',borderRadius:8,margin:5}} onPress={()=>this.state.navigator('Details')} >
                            <ImageBackground 
                            source={require('../assets/tj1.jpg')}
                             resizeMode='cover'
                              style={{width:180,height:300,display:'flex',justifyContent:'flex-end'}}>
                                  <View style={{display:'flex',flexDirection:'column',padding:10,backgroundColor:'rgba(0, 0, 0, .5)'}}>
                            <Text style={{color:'white',fontSize:15}}>{this.state.tit[Number(this.state.titc)]}标题</Text>
                            <Text style={{width:60,padding:4,fontSize:10,backgroundColor:'rgba(255, 87, 113, 1)',marginTop:8,borderRadius:30,color:'white',textAlign:'center'}}>{this.state.tit[Number(this.state.titc)]}标签</Text>
                            <View style={{padding:10,paddingBottom:0,display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                                <Text style={{color:'white',fontSize:12,width:50}}>60：00</Text>
                                <View style={{display:'flex',flexDirection:'row'}}>
                                    <Text style={{color:'rgba(255, 255, 255, 1)'}}>收藏</Text>
                                    <Text style={{marginLeft:10,color:'rgba(255, 255, 255, 1)'}}>点赞</Text>
                                </View>
                            </View>
                                  </View>
                           </ImageBackground>
                        </TouchableOpacity>
                            )
                        })}
                        
                    </View>
                </View>
        
                )
                break;
            case '1':
                return(
                    <View>
                         <View style={{width:'100%',height:250,marginTop:15}}>
                        <Banner ></Banner>
                        </View>
                        <View style={{width:'100%',marginTop:9,flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
                            <Text style={{fontSize:17,color:'#333333',paddingLeft:12,}}>影视动画</Text>
                            <Text style={{fontSize:15,color:'#666666',paddingLeft:12,}}>查看更多 ></Text>
                        </View>
                        <View style={{display:"flex",width:'100%',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',marginTop:20}}>
                            {[1,2,3,4].map((item,index)=>{
                                return(
        <View key={index} style={{width:180,overflow:'hidden',borderRadius:8,margin:5}}>
                                <ImageBackground 
                                source={require('../assets/tj2.jpg')}
                                 resizeMode='cover'
                                  style={{width:180,height:110,display:'flex',justifyContent:'flex-end'}}>
                                       <View style={{padding:10,paddingBottom:0,display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                                    <Text style={{color:'white',fontSize:12,width:50}}>60：00</Text>
                                    <View style={{display:'flex',flexDirection:'row'}}>
                                        <Text style={{color:'rgba(255, 255, 255, 1)'}}>收藏</Text>
                                        <Text style={{marginLeft:10,color:'rgba(255, 255, 255, 1)'}}>点赞</Text>
                                    </View>
                                </View>
                               </ImageBackground>
                               <View style={{display:'flex',flexDirection:'column',padding:10}}>
                                <Text style={{color:'rgba(51, 51, 51, 1)',fontSize:15}}>{this.state.tit[Number(this.state.titc)]}标题</Text>
                                <Text style={{width:60,padding:4,fontSize:12,backgroundColor:'rgba(242, 242, 242, 1)',marginTop:8,borderRadius:30,color:'rgba(242, 84, 108, 1)',textAlign:'center'}}>{this.state.tit[Number(this.state.titc)]}标签</Text>
                               
                                      </View>
                            </View>
                                )
                            })}
                            
                        </View>
                        <View style={{width:'100%',marginTop:9,flexDirection:'row',display:'flex',justifyContent:'space-between',marginTop:15}}>
                            <Text style={{fontSize:17,color:'#333333',paddingLeft:12,}}>影视纪录片</Text>
                            <Text style={{fontSize:15,color:'#666666',paddingLeft:12,}}>查看更多 ></Text>
                        </View>
                        <View style={{display:"flex",width:'100%',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',marginTop:20}}>
                            {[1,2,3,4].map((item,index)=>{
                                return(
        <View key={index} style={{width:180,overflow:'hidden',borderRadius:8,margin:5}}>
                                <ImageBackground 
                                source={require('../assets/tj2.jpg')}
                                 resizeMode='cover'
                                  style={{width:180,height:110,display:'flex',justifyContent:'flex-end'}}>
                                       <View style={{padding:10,paddingBottom:0,display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                                    <Text style={{color:'white',fontSize:12,width:50}}>60：00</Text>
                                    <View style={{display:'flex',flexDirection:'row'}}>
                                        <Text style={{color:'rgba(255, 255, 255, 1)'}}>收藏</Text>
                                        <Text style={{marginLeft:10,color:'rgba(255, 255, 255, 1)'}}>点赞</Text>
                                    </View>
                                </View>
                               </ImageBackground>
                               <View style={{display:'flex',flexDirection:'column',padding:10}}>
                                <Text style={{color:'rgba(51, 51, 51, 1)',fontSize:15}}>{this.state.tit[Number(this.state.titc)]}标题</Text>
                                <Text style={{width:60,padding:4,fontSize:12,backgroundColor:'rgba(242, 242, 242, 1)',marginTop:8,borderRadius:30,color:'rgba(242, 84, 108, 1)',textAlign:'center'}}>{this.state.tit[Number(this.state.titc)]}标签</Text>
                               
                                      </View>
                            </View>
                                )
                            })}
                            
                        </View>
                    </View>
                )
                break;
            case '2':
                    return(
                        <View>
                            <View style={{width:'100%',height:250,marginTop:15}}>
                        <Banner ></Banner>
                        </View>
                            <View style={{width:'100%',marginTop:9,flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
                                <Text style={{fontSize:17,color:'#333333',paddingLeft:12,}}>热门课程</Text>
                                <Text style={{fontSize:15,color:'#666666',paddingLeft:12,}}>查看更多 ></Text>
                            </View>
                            <View style={{display:"flex",width:'100%',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',marginTop:20}}>
                                {[1,2,3,4].map((item,index)=>{
                                    return(
            <View key={index} style={{width:180,overflow:'hidden',borderRadius:8,margin:5}}>
                                    <ImageBackground 
                                    source={require('../assets/tj3.jpg')}
                                     resizeMode='cover'
                                      style={{width:180,height:110,display:'flex',justifyContent:'flex-end'}}>
                                           <View style={{padding:10,paddingBottom:0,display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                                        <Text style={{color:'white',fontSize:12,width:50}}>60：00</Text>
                                        <View style={{display:'flex',flexDirection:'row'}}>
                                            <Text style={{color:'rgba(255, 255, 255, 1)'}}>收藏</Text>
                                            <Text style={{marginLeft:10,color:'rgba(255, 255, 255, 1)'}}>点赞</Text>
                                        </View>
                                    </View>
                                   </ImageBackground>
                                   <View style={{display:'flex',flexDirection:'column',padding:10}}>
                                    <Text style={{color:'rgba(51, 51, 51, 1)',fontSize:15}}>{this.state.tit[Number(this.state.titc)]}标题</Text>
                                    <Text style={{width:60,padding:4,fontSize:12,backgroundColor:'rgba(242, 242, 242, 1)',marginTop:8,borderRadius:30,color:'rgba(242, 84, 108, 1)',textAlign:'center'}}>{this.state.tit[Number(this.state.titc)]}标签</Text>
                                   
                                          </View>
                                </View>
                                    )
                                })}
                                
                            </View>
                            <View style={{width:'100%',marginTop:9,flexDirection:'row',display:'flex',justifyContent:'space-between',marginTop:15}}>
                                <Text style={{fontSize:17,color:'#333333',paddingLeft:12,}}>学习课程</Text>
                                <Text style={{fontSize:15,color:'#666666',paddingLeft:12,}}>查看更多 ></Text>
                            </View>
                            <View style={{display:"flex",width:'100%',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',marginTop:20}}>
                                {[1,2,3,4].map((item,index)=>{
                                    return(
            <View key={index} style={{width:180,overflow:'hidden',borderRadius:8,margin:5}}>
                                    <ImageBackground 
                                    source={require('../assets/tj3.jpg')}
                                     resizeMode='cover'
                                      style={{width:180,height:110,display:'flex',justifyContent:'flex-end'}}>
                                           <View style={{padding:10,paddingBottom:0,display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                                        <Text style={{color:'white',fontSize:12,width:50}}>60：00</Text>
                                        <View style={{display:'flex',flexDirection:'row'}}>
                                            <Text style={{color:'rgba(255, 255, 255, 1)'}}>收藏</Text>
                                            <Text style={{marginLeft:10,color:'rgba(255, 255, 255, 1)'}}>点赞</Text>
                                        </View>
                                    </View>
                                   </ImageBackground>
                                   <View style={{display:'flex',flexDirection:'column',padding:10}}>
                                    <Text style={{color:'rgba(51, 51, 51, 1)',fontSize:15}}>{this.state.tit[Number(this.state.titc)]}标题</Text>
                                    <Text style={{width:60,padding:4,fontSize:12,backgroundColor:'rgba(242, 242, 242, 1)',marginTop:8,borderRadius:30,color:'rgba(242, 84, 108, 1)',textAlign:'center'}}>{this.state.tit[Number(this.state.titc)]}标签</Text>
                                   
                                          </View>
                                </View>
                                    )
                                })}
                                
                            </View>
                        </View>
                    )
                    break;
            case '4':
                return(
                    <View style={{display:'flex',justifyContent:'center',flexDirection:'row',flex:1,flexWrap:'wrap'}}>
                        
                        <Image source={require('../assets/kaifazhong.png')} resizeMode='contain' style={{width:360,height:212}}></Image>
                        
                        <View style={{width:'100%'}}>
                        <Text style={{textAlign:'center',color:'rgba(102, 102, 102, 1)',fontSize:18,marginTop:30}}>正在开发中ㄟ(≧◇≦)ㄏ</Text>
                        </View>
                    </View>
                )
            break;
            default:
                    return(
                        <View>
                        <View style={{width:'100%',marginTop:9,flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
                            <Text style={{fontSize:17,color:'#333333',paddingLeft:12,}}>推荐</Text>
                            <Text style={{fontSize:15,color:'#666666',paddingLeft:12,}}>查看更多 ></Text>
                        </View>
                        <View style={{display:"flex",width:'100%',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',marginTop:20}}>
                            {[1,2,3,4].map((item,index)=>{
                                return(
        <View key={index} style={{width:180,height:300,overflow:'hidden',borderRadius:8,margin:5}}>
                                <ImageBackground 
                                source={require('../assets/tj4.jpg')}
                                 resizeMode='cover'
                                  style={{width:180,height:300,display:'flex',justifyContent:'flex-end'}}>
                                      <View style={{display:'flex',flexDirection:'column',padding:10,backgroundColor:'rgba(0, 0, 0, .5)'}}>
                                <Text style={{color:'white',fontSize:15}}>{this.state.tit[Number(this.state.titc)]}标题</Text>
                                <Text style={{width:60,padding:4,fontSize:10,backgroundColor:'rgba(255, 87, 113, 1)',marginTop:8,borderRadius:30,color:'white',textAlign:'center'}}>{this.state.tit[Number(this.state.titc)]}标签</Text>
                                <View style={{padding:10,paddingBottom:0,display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                                    <Text style={{color:'white',fontSize:12,width:50}}>60：00</Text>
                                    <View style={{display:'flex',flexDirection:'row'}}>
                                        <Text style={{color:'rgba(255, 255, 255, 1)'}}>收藏</Text>
                                        <Text style={{marginLeft:10,color:'rgba(255, 255, 255, 1)'}}>点赞</Text>
                                    </View>
                                </View>
                                      </View>
                               </ImageBackground>
                            </View>
                                )
                            })}
                            
                        </View>
                        <View style={{width:'100%',marginTop:9,flexDirection:'row',display:'flex',justifyContent:'space-between',marginTop:15}}>
                            <Text style={{fontSize:17,color:'#333333',paddingLeft:12,}}>拆你喜欢</Text>
                            <Text style={{fontSize:15,color:'#666666',paddingLeft:12,}}>查看更多 ></Text>
                        </View>
                        <View style={{display:"flex",width:'100%',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',marginTop:20}}>
                            {[1,2,3,4].map((item,index)=>{
                                return(
                            <View key={index} style={{width:180,height:300,overflow:'hidden',borderRadius:8,margin:5}}>
                                <ImageBackground 
                                source={require('../assets/tj4.jpg')}
                                 resizeMode='cover'
                                  style={{width:180,height:300,display:'flex',justifyContent:'flex-end'}}>
                                      <View style={{display:'flex',flexDirection:'column',padding:10,backgroundColor:'rgba(0, 0, 0, .5)'}}>
                                <Text style={{color:'white',fontSize:15}}>{this.state.tit[Number(this.state.titc)]}标题</Text>
                                <Text style={{width:60,padding:4,fontSize:10,backgroundColor:'rgba(255, 87, 113, 1)',marginTop:8,borderRadius:30,color:'white',textAlign:'center'}}>{this.state.tit[Number(this.state.titc)]}标签</Text>
                                <View style={{padding:10,paddingBottom:0,display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                                    <Text style={{color:'white',fontSize:12,width:50}}>60：00</Text>
                                    <View style={{display:'flex',flexDirection:'row'}}>
                                        <Text style={{color:'rgba(255, 255, 255, 1)'}}>收藏</Text>
                                        <Text style={{marginLeft:10,color:'rgba(255, 255, 255, 1)'}}>点赞</Text>
                                    </View>
                                </View>
                                      </View>
                               </ImageBackground>
                            </View>
                                )
                            })}
                            
                        </View>
                    </View>
                    )
        }
        
    }
}
 class RealyHome extends Component{
    constructor(props){
        super(props)
        this.state={
            tit:['推荐','影视','课程','专题','公益','大讲堂','科技','音频','美拍'],
            titc:'0',

        }
        console.log(this.props)
    }
    render(){
        return(
            <ScrollView style={{backgroundColor:'rgba(255,255,255,1)',padding:5}}>
            <View style={style.searchBox}>
                <View style={style.searchLeft}>
                    <Text style={style.searchLeftText}>
                    进入未成年模式
                    </Text>
                    </View>

                <View style={style.searchRight}>
                        <Image source={require('../assets/search.png')} style={{width:20,height:20,alignItems:'center',transform:[{translateY:8},{translateX:15}]}}>

                        </Image>
                        <TextInput placeholder='请输入查询内容' placeholderTextColor="#23333333" style={{color:'#333333',transform:[{translateX:20}],fontSize:13}}>
                        </TextInput>
                    </View>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <View style={style.titBox}>
                {this.state.tit.map((i,index)=><Text key={index} style={index==this.state.titc?style.tit:style.titc} onPress={()=>{console.log(this),this.setState({titc:String(index) })}}>{i}</Text>)}
                </View>
            </ScrollView>
            
            <Hindex key={this.state.titc}  tit={this.state.tit} titc={this.state.titc} navigation={this.props.navigation.navigate}></Hindex>
            
        </ScrollView>
        )
    }
}
const Stack=createStackNavigator();
export default class Home extends Component{
     constructor(props){
         super(props)
         this.state={   
            
         }
     }
     render(){
         console.log(Stack.options)
        return(
            <Stack.Navigator >
              <Stack.Screen name="RealyHome" component={RealyHome} 
              options={{
                headerShown:false
              }} />
              
            </Stack.Navigator>
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
        backgroundColor:'rgba(255, 238, 241, 1)',
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
backgroundColor:'rgba(242, 242, 242, 1)',
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
