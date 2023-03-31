import { StyleSheet, Text, View,  Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from '@rneui/base';
import BodyPartCard from '../components/BodyPartCard'
import { FlatList } from 'react-native';
import axios from 'axios';
const IP_Address = process.env.IP_Address;

const Loginn = ({navigation}) => {
  const [bodyParts, setBodyParts]=useState([])
  const navigateHandler = ()=>navigation.navigate('BodyPart')
 useEffect(()=>{
  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '7a634421a7msh90c3f7b98c40037p17a65ajsn203b91e17df4',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    setBodyParts(response.data);
  }).catch(function (error) {
    console.error(error);
  });
 },[])
  return (
    <View style={{ backgroundColor:'black',paddingTop:40,height:'105%'}}>
      <View style={{display:'flex',flexDirection:'row',justifyContent:"space-around"}}>
      <Button buttonStyle={{margin:10}}  title="Home" onPress={(bodyPart)=>navigation.navigate('Home',{bodyPart:bodyPart})}/>
      <Button  buttonStyle={{margin:10}} title="Extra" onPress={()=>navigation.navigate('ExercisesScreen')}/>
      <Button   buttonStyle={{margin:10}} title="Favourite" onPress={()=>navigation.navigate('Favourite')}/>
      </View>
  
      <Text style={{fontSize:24,fontWeight:'bold',color:"white", margin:5}}>Exarsices Library by body part</Text>
      <FlatList
      data={bodyParts}
      renderItem={({item})=> <BodyPartCard excercise={item} nav={()=>navigation.navigate('BodyPart', {bodyPart:item})}/>}
    />

    </View>
  )
}


export default Loginn

const styles = StyleSheet.create({})