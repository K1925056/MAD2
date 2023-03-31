import React, { useState, useRef, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { AntDesign } from '@expo/vector-icons';

export default function CameraExample({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const photo = await cameraRef.current.takePictureAsync(options);
      const filename = photo.uri.split('/').pop();
      const path = `${FileSystem.documentDirectory}${filename}`;
      await FileSystem.moveAsync({
        from: photo.uri,
        to: path,
      });
      navigation.navigate('Success');
      console.log(`Saved photo to ${path}`);
    }
  };

  const handleCameraReady = () => {
    console.log('Camera is ready!');
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={cameraRef} onCameraReady={handleCameraReady}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            textAlign:'center',
            alignContent:'center',
            width:'100%',
            marginBottom:50
          }}>
          <TouchableOpacity
            style={{
            width:50,
              alignSelf: 'flex-end',
              marginLeft:'10%'
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
      
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:100, alignSelf: 'flex-end', alignItems: 'center', marginLeft:50}} onPress={takePicture}>
          <AntDesign name="camerao" size={38} color="white" style={{alignSelf:'center'}}/>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
