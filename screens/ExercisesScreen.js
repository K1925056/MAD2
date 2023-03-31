import { FlatList, StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Image } from 'react-native';
import ExcerciseCard from '../components/ExcerciseCard';
const ExercisesScreen = () => {
  const [exersices, setExercises] = useState([]);
  const [loading, setIsLoading] = useState(false);
  useEffect(()=>{
    setIsLoading(true)
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest',
      headers: {
        'X-RapidAPI-Key': '7a634421a7msh90c3f7b98c40037p17a65ajsn203b91e17df4',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setExercises([...response.data])
      console.log(response.data);
      setIsLoading(false)
    }).catch(function (error) {
      console.error(error);
      setIsLoading(false)
    });
  },[])
  return (
      <SafeAreaView style={{flex: 1,
        marginTop:  0}}>
      {
          !loading?
          <FlatList
          data={exersices}
          renderItem={({item}) =><ExcerciseCard exercise={item}/> }/>
          
        
          :
        <Text>Loading....</Text>
      }
    
    </SafeAreaView>

  )
}

export default ExercisesScreen

const styles = StyleSheet.create({})