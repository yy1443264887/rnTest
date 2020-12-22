import React, { Component } from 'react';
import { View, Text,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView>
          <View style={styles.BOX}>
              <Text style={{fontSize:22,fontWeight:'500',textAlign:'center',marginBottom:15}}>消息</Text>
          <TouchableOpacity style={styles.liBox} activeOpacity={.5}>
              <Image source={require('../assets/icon-xiaoxi.png')} style={styles.leftImg}/>
              <Text style={{flex:1,paddingLeft:18,fontSize:22,color:'#333333'}}>系统消息</Text>
              <Image source={require('../assets/icon-fanhui.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.liBox} activeOpacity={.5}>
              <Image source={require('../assets/icon-sixin.png')} style={styles.leftImg}/>
              <Text style={{flex:1,paddingLeft:18,fontSize:22,color:'#333333'}}>我的私信</Text>
              <View style={{width:10,height:10,borderRadius:50,backgroundColor:'#FF516D',marginRight:25}}></View>
              <Image source={require('../assets/icon-fanhui.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.liBox} activeOpacity={.5}>
              <Image source={require('../assets/icon-dianzan.png')} style={styles.leftImg}/>
              <Text style={{flex:1,paddingLeft:18,fontSize:22,color:'#333333'}}>我的点赞</Text>
              <Image source={require('../assets/icon-fanhui.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.liBox} activeOpacity={.5}>
              <Image source={require('../assets/icon-pinglun.png')} style={styles.leftImg}/>
              <Text style={{flex:1,paddingLeft:18,fontSize:22,color:'#333333'}}>我的评论</Text>
              <Image source={require('../assets/icon-fanhui.png')} />
          </TouchableOpacity>
          </View>
         
      </ScrollView>
    );
  }
}

const styles=StyleSheet.create({
    BOX:{
        display:'flex',
        padding:20
    },
    liBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginBottom:25,
        borderBottomColor:'#F2F2F2',
        paddingBottom:20,
        borderBottomWidth:2
    },
    leftImg:{
        width:80,
        height:80
    }
})

export default Message;
