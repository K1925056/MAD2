import React, { useState } from 'react'
import axios from 'axios'
import ExcerciseCard from '../components/ExcerciseCard';
import { FlatList,View,Text } from 'react-native';
import { useEffect } from 'react';
const BodyPartPage = ({route}) => {
    const [data, setData] = useState([]);
    const {bodyPart} = route.params;
    useEffect(()=>{
        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
            headers: {
              'X-RapidAPI-Key': '7a634421a7msh90c3f7b98c40037p17a65ajsn203b91e17df4',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            setData(response.data)
            console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    },[])
  return (
    <View style={{backgroundColor:'black'}}>
        {
            data.length>0 ?
            <FlatList
          data={data}
          renderItem={({item}) =><ExcerciseCard exercise={item}/> }
            />:
            <Text>Loading...</Text>
        }
       
    </View>
  )
}

export default BodyPartPage