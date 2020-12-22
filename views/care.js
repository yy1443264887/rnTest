import React, { Component, useState } from 'react';
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    Button,
    Animated
} from 'react-native';
import { color } from 'react-native-reanimated';
import img from '../img';
import mx from '../mx';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

class Cares extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigation: this.props.navigation,
            arrs: [],
            choseTit: 0
        }
    }

    createArrs = async () => {
        console.log('进入')
        let arrs = []
        let k = [1, 2, 3, 4]
        await k.forEach((i, index) => {
            let obj = {}
            obj.name = `成功人士${i}`
            obj.src = img[`img${i}`]
            obj.c = 1
            arrs.push(obj)
        })
        this.setState({
            arrs: arrs
        })
        console.log(this.state.arrs)
    }
    componentDidMount() {
        this.createArrs()
    }
    render() {

        return (
            <View style={{ backgroundColor: 'white' }}>

                <ScrollView style={{ backgroundColor: 'white', display: 'flex', }}>
                    {
                        !this.state.choseTit ?
                            this.state.arrs.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index}
                                        style={{
                                            padding: 20,
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            borderBottomColor: '#F2F2F2',
                                            borderBottomWidth: 1,
                                            height: 120
                                        }}>
                                        <Image source={item.src}
                                            style={styles.itemImg}
                                        />
                                        <View style={{ flex: 1, display: 'flex', justifyContent: 'space-between', height: '70%', paddingLeft: 10 }}>
                                            <View style={styles.mainBox}>
                                                <Text style={styles.tit}>{item.name}</Text>
                                                <View style={{ width: '40%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <TouchableOpacity>
                                                        <Text style={{ ...styles.sixin }}>
                                                            私信
        </Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.care}>
                                                        <Text>
                                                            已关注
        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <Text style={styles.main}>专业解答性知识，提前预防危害...</Text>
                                        </View>

                                    </TouchableOpacity>
                                )
                            })
                            :
                            <Fans />
                    }
                </ScrollView>
            </View>

        )
    }


}


class Fans extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigetion: this.props.navigation,
            arrs: [
                { name: '范冰冰', },
                { name: '鹿晗', },
                { name: '刘亦菲', },
                { name: '黄晓明', },
                { name: '张翰', },
                { name: '胡歌', },
                { name: '孙笑川', }
            ]
        }
    }
    createArrs = () => {
        this.state.arrs.forEach((item, index) => {
            item.src = mx[`img${index + 1}`]
        })
        console.log(this.state.arrs)
    }
    componentDidMount() {

    }
    render() {
        this.createArrs()
        console.log('誰快')
        return (
            <ScrollView style={{ backgroundColor: 'white', display: 'flex' }}>
                {
                    this.state.arrs.map((item, index) => {
                        return (
                            <TouchableOpacity key={index}
                                style={{
                                    padding: 20,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderBottomColor: '#F2F2F2',
                                    borderBottomWidth: 1,
                                    height: 120
                                }}>
                                <Image source={item.src}
                                    style={styles.itemImg}
                                />
                                <View style={{ flex: 1, display: 'flex', justifyContent: 'space-between', height: '70%', paddingLeft: 10 }}>
                                    <View style={styles.mainBox}>
                                        <Text style={styles.tit}>{item.name}</Text>
                                        <View style={{ width: '40%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <TouchableOpacity>
                                                <Text style={{ ...styles.sixin }}>
                                                    私信
</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.care}>
                                                <Text>
                                                    已关注
</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Text style={styles.main}>专业解答性知识，提前预防危害...</Text>
                                </View>

                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        )
    }
}
class  TTT extends Component {
    constructor(props){
super(props)
this.state={
    choseTit:0
}
    }
    render(){
        console.log(this.props)
        this.props.state.routes.map((route, index) => {
            const { options } = this.props.descriptors[route.key];
            const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
              console.log('这是啥',label)
        })
       
         
        return(
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', flexWrap: 'wrap'}}>
                                <Text style={{ fontSize: 25, padding: 5, color: this.state.choseTit ? '#666666' : '#FF5771', padding: 15 }} onPress={() => {this.setState({ choseTit: 0 }),this.props.navigation.navigate('关注')}}>关注</Text>
                                <Text style={{ fontSize: 25, padding: 5, color: !this.state.choseTit ? '#666666' : '#FF5771', padding: 15 }} onPress={() =>{this.setState({ choseTit: 1 }),this.props.navigation.navigate('粉丝')}}>粉丝</Text>
                            </View>
                )
    }
    
}
                


export default function MyTabs() {
    return (
        <Tab.Navigator 
        tabBar={(props)=><TTT {...props} />}
        // tabBarOptions={{
        //     activeTintColor: '#FF5771',
        //     inactiveTintColor: '#666666',
        //     tabStyle: { width: 80,},
        //     style: { backgroundColor: 'white',},
        //     indicatorStyle:{width:'50%',backgroundColor:'#FF5771'}
        // }}
        >
            <Tab.Screen name="关注" component={Cares} />
            <Tab.Screen name="粉丝" component={Fans} />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemImg: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    mainBox: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    sixin: {
        borderRadius: 25,
        backgroundColor: '#FF9046',
        borderRadius: 20,
        color: '#ffffff',
        width: 45,
        textAlign: 'center',
        height: 25,
        lineHeight: 25
    },
    care: {
        borderRadius: 5,
        borderWidth: 1,
        padding: 1,
        borderColor: '#999999',
        textAlign: 'center',
        height: 22,
        paddingLeft: 10,
        paddingRight: 10
    },
    tit: {
        fontSize: 20,
        color: '#333333',
        flex: 1,

    },
    main: {
        color: '#666666',
        fontSize: 15,
        marginTop: 5
    },
    ttttt: {
        width: 50,
        height: 50,
        backgroundColor: 'pink',
    }

})