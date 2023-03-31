import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { Button } from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Image, View } from 'react-native';
import { Text } from '@rneui/base';

export default function Progress({navigation}) {
  const [images, setImages] = useState([]);
  
  const retrieveImages = async () => {
    const dir = `${FileSystem.documentDirectory}/`;
  
    try {
      // request permission to read and write to file system
      const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

      if (status !== 'granted') {
        console.log('Permission to access file system was denied');
        return;
      }

      // get all files in directory
    let files = await FileSystem.readDirectoryAsync(dir);

      // create array of image elements
      const imageElements = await Promise.all(
        files.map(async (file) => {
          const path = `${dir}${file}`;
          const { uri } = await FileSystem.getInfoAsync(path);
          return { uri, path };
        })
      );

      setImages(imageElements);
    } catch (error) {
      console.log('Error retrieving images:', error);
    }
  };
  const handleDeleteImage = async (path) => {
    try {
      await FileSystem.deleteAsync(path);
      setImages((prevImages) => prevImages.filter((image) => image.path !== path));
    } catch (error) {
      console.log('Error deleting image:', error);
    }
  };

  useEffect(() => {
    retrieveImages();
  }, []);

  return (
    <ScrollView style={{ width: '100%' }}>
    <Text h2>My Progress</Text>
    <Text h4>Take a photo to track your progress</Text>
    <Button   buttonStyle={{margin:10}} title="Camera" onPress={()=>navigation.navigate('Camera')}/>
      {images.map(({ uri, path }) => (
        <View key={uri} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{ uri }} style={{ width: 200, height: 200 }} />
            <Button color="error" onPress={() => handleDeleteImage(path)} style={{ marginLeft: 10 }}>
            <Text>Delete</Text>
            </Button>
        </View>
      ))}
    </ScrollView>
  );
}
