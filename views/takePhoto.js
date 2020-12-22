import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {RNCamera} from 'react-native-camera';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
    TouchableOpacity
  } from 'react-native';

export default class Rember extends Component {
    constructor(props){
      super(props)
    }
    render() {
      return (
        <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes);
            }}
          />
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
              {/* <Text style={{ fontSize: 14 }}> SNAP </Text> */}
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{position:'absolute',top:0,left:0,width:50,height:50,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}
          onPress={()=>this.props.navigation.navigate('首页')}
          >
              <Text style={{fontSize:16,color:'white',fontWeight:'700'}} >BACK</Text>
          </TouchableOpacity>
        </View>
      );
    }
  
    takePicture = async () => {
      if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        console.log(data.uri);
      }
    };
  }

  const styles = StyleSheet.create({
    tt:{
      textAlign:"center",
      fontSize:40,
      color:'lightblue',
      lineHeight:600
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
      position:'relative'
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      // padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
      borderRadius:50,
      width:60,
      height:60
    },
  });