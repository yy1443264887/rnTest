import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        };
    }

    render() {
        console.log('11111',this.props)
        return (
            <TouchableOpacity style={styles.liBox} activeOpacity={.5}>
                <Image source={require('../assets/touxiang.png')} style={styles.leftImg} />
                <Text
                 style={{ flex: 1, paddingLeft: 18, fontSize: 22, color: '#333333',display:this.state.isLogin?'none':'flex' }} 
                 onPress={()=>this.props.navigation.navigate('Login')}
                 >请先登录</Text>
                <View style={{ flex: 1,flexDirection:'column', paddingLeft: 18, fontSize: 22, color: '#333333',transform:[{translateY:17}],display:this.state.isLogin?'flex':'none'}} >
                    <Text style={{fontSize:24}}>听说~</Text>
                    <Text style={{color:'#666666'}}>过好每一天，满怀希望，都是美好的~</Text>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style={{borderWidth:1,borderRadius:15,borderColor:'#FF526D',color:'#FF526D',padding:2,height:25,textAlign:'center',lineHeight:19,paddingLeft:10,paddingRight:10,marginRight:15}}>个人认证</Text>
                        <Image source={require('../assets/icon-huiyuan.png')} style={{width:'24%'}} resizeMode='contain' />
                        </View>
                </View>
                <Image source={require('../assets/icon-fanhui.png')} />
            </TouchableOpacity>
        );
    }
}

class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            isAuthentication: 0,
            isVip: false
        };
    }

    render() {
        console.log('2222222222',this.props)
        return (
            <ScrollView style={{ padding: 15 }}>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text style={{ backgroundColor: '#FFEEF1', color: '#FF526D', padding: 5, borderRadius: 15, position: 'absolute', left: 0, paddingLeft: 15, paddingRight: 15,opacity:this.state.isAuthentication }}>进入未成年模式</Text>

                    <Text style={{ padding: 15, backgroundColor: '#999999', color: 'white', borderRadius: 15, paddingTop: 6, paddingBottom: 6, marginRight: 15 ,display:this.state.isLogin?'flex':'none'}}>
                        {
                        (()=>{
                            switch(this.state.isAuthentication){
                                case 0:
                                return '未认证';
                                case 1:
                                return '认证中';
                                case 2:
                                return '已认证';
                            }
                        })()
               
                }
                </Text>
                    <Image source={require('../assets/icon-shezhi.png')} style={{ width: 30, height: 30 }} /></View>
                <Login {...this.props} />
                <Image source={require('../assets/bannerVip.png')} style={{ width: '100%', }} resizeMode='contain' />

                <TouchableOpacity style={styles.liBox1} activeOpacity={.5}>
                    <Image source={require('../assets/zuopin.png')} style={styles.leftImg} />
                    <Text style={{ flex: 1, paddingLeft: 14, fontSize: 22, color: '#333333' }}>我的作品</Text>
                    <Image source={require('../assets/icon-fanhui.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.liBox1} activeOpacity={.5}>
                    <Image source={require('../assets/qianbao.png')} style={styles.leftImg} />
                    <Text style={{ flex: 1, paddingLeft: 14, fontSize: 22, color: '#333333' }}>我的钱包</Text>
                    <Image source={require('../assets/icon-fanhui.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.liBox1} activeOpacity={.5}>
                    <Image source={require('../assets/kecheng.png')} style={styles.leftImg} />
                    <Text style={{ flex: 1, paddingLeft: 14, fontSize: 22, color: '#333333' }}>我的课程</Text>
                    <Image source={require('../assets/icon-fanhui.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.liBox1, borderBottomWidth: 0 }} activeOpacity={.5}>
                    <Image source={require('../assets/goumai.png')} style={styles.leftImg} />
                    <Text style={{ flex: 1, paddingLeft: 14, fontSize: 22, color: '#333333' }}>已购视频</Text>
                    <Image source={require('../assets/icon-fanhui.png')} />
                </TouchableOpacity>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    BOX: {
        display: 'flex',
        padding: 20
    },
    liBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 12,
        paddingBottom: 12,
        marginTop: 15
    },
    liBox1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 5,
        paddingBottom: 10,
        marginTop: 5,
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 1
    },
    leftImg: {
        width: 60,
        height: 60
    }
})

export default Mine;
