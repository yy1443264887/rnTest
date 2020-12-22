import React, { Component } from 'react';
import {
    Dimensions, 
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const Wwidth = Dimensions.get('window').width;
        const Wheight = Dimensions.get('window').height;
        console.log(this.props.navigation)
        return (
            <View style={{ width: Wwidth, height: Wheight, padding: 15, }}>
                <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
                <Image source={require('../assets/login/icon-cuo.png')} style={{width:35,height:35}}  />
                </TouchableOpacity>
                
                <View style={{
                    padding: 10,
                    marginTop:30
                }}>
                    <Text style={{fontSize:38,marginBottom:45}}>
                    欢迎登录彼若鱼
                    </Text>
                    <View style={styles.InputBox}>
                    
                        <Image source={require('../assets/login/icon.png')} style={styles.Image} />
                        <TextInput placeholder={'请输手机号码'} maxLength={11} placeholderTextColor={'#B3B3B3'} style={{fontSize:25}}>

                        </TextInput>
                    </View>
                    <View style={{...styles.InputBox,justifyContent:'space-between'}}>
                        <Image source={require('../assets/login/icon-mima.png')} style={styles.Image} />
                        <TextInput placeholder={'请输手机号码'} maxLength={11} placeholderTextColor={'#B3B3B3'} style={{fontSize:25,flex:1}}>

                        </TextInput>
                        <Image source={require('../assets/login/icon-yincang.png')} style={styles.Image} />
                    </View>
                    <TouchableOpacity style={{marginTop:35}}>
                    <Text style={styles.login}>登录</Text>
                    </TouchableOpacity>
                        
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    InputBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderBottomColor:'#F2F2F2',
        borderBottomWidth:1,
        marginBottom:25
    },
    Image:{
        width:50,
        height:50
    },
    login:{
        backgroundColor:'#FF5771',
        textAlign:'center',
        color:'white',
        padding: 15,
        borderRadius:45,
        fontSize:22
    }

})

export default Login;
