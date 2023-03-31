import React, { useState } from 'react'
import { View,Image } from 'react-native'
import { Button ,Text } from '@rneui/base';
import axios from 'axios'; 
const ExcerciseCard = ({exercise,saved,handleDelete, handleEdit }) => {
    const [success, setIsSuccess] = useState(null);
    const [visible, setIsVisible] = useState(null);
    console.log(exercise)
     const handleAddToFav = () =>{
        const options = {
            method: 'GET',
            url: 'http://10.130.40.99:3000/api/postExercices',
            params:{...exercise}
        
          };
          axios.request(options).then(function (response) {
            response.status===200?setIsSuccess(true):setIsSuccess(false) 
            setIsVisible(true) 
          }).catch(function (error) {
            setIsVisible(true) 
            setIsSuccess(false) 
          });
    }
    
    setTimeout(()=>{setIsVisible(false)},2000)
  return (
    <View style={{margin:10,justifyContent:"center",width:"100%", alignItems:'center'}}>
        <Text h1 style={visible? {display:'flex'}:{display:'none'}}>{success===true?<Text style={{backgroundColor:'green'}}>Sussesfully added to favourite</Text>:<Text style={{backgroundColor:'red'}} >Could not add</Text>}</Text>
        <Text h4 style={{color:'white'}}>Exercise Name: {exercise.name} </Text>
        <Text h4 style={{color:'white'}}>Body Part:{exercise.bodyPart} </Text>
        <Text h4 style={{color:'white'}}>Equipment: {exercise.equipment}</Text>  
        <Text h4 style={{color:'white'}}>Target: {exercise.target}</Text>
        <Image 
        source={{uri: exercise.gifUrl}}  
        style={{width: 200, height:150 }} 
    /> 
        {!saved &&    <Button
        title="Add to my favourite"
        buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' }}
        onPress={()=>handleAddToFav()}
        containerStyle={{
          height: 40,
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{
          color: 'white',
          marginHorizontal: 20,
        }}
      />  }
        {saved && 
            <Button
        title="Remove"
        buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' }}
        onPress={()=>handleDelete(exercise)}
        containerStyle={{
          height: 40,
          backgroundColor:'#ff0000',
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{
          color: 'white',
          marginHorizontal: 20,
        }}
      /> 
     }
      {saved && 
          <Button
          title="Edit"
          buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' }}
          onPress={()=>handleEdit(exercise)}
          containerStyle={{
            height: 40,
            backgroundColor:'#ff0000',
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{
            color: 'white',
            marginHorizontal: 20,
          }}
        />
      }
     

    

    
     
    </View>)
}

export default ExcerciseCard