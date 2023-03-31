import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Input } from '@rneui/themed';
import { Text } from '@rneui/themed';
import { Button } from '@rneui/base';
import axios from 'axios';
const initialState = {
    bodyPart:"",
    equipment: "",
    gifUrl: "",
    name: "",
    target: ""
}
const EditExercise = ({route,navigation}) => {
    const exerciseData = route.params.exerciseData;
    const [initial, setInitial] = useState(initialState);
    useEffect(()=>{setInitial(exerciseData)},[initialState])
    const handleInput = (name, value) =>{
        console.log(value)
        setInitial({...initial, [name]:value});
    }
    const handleSave = () =>{
        console.log("Savinggg>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",initial)
        const options = {
            method: 'PUT',
            url: 'http://10.130.40.99:3000/api/favExercices',
            params:{initial}
        
          };
          axios.request(options).then(function (response) {
            navigation.navigate('Success');
          }).catch(function (error) {
            console.log(error);
          });
    }
  return (
    <View>
        <Text h1>Edit Exercise</Text>
        <Text h3>Name</Text>
        <Input value={initial.name} onChangeText={text=>handleInput('name', text)}/>
        <Text h3>Body Part</Text>
        <Input value={initial.bodyPart}  onChangeText={text=>handleInput('bodyPart', text)}/>
        <Text h3>Equipment</Text>
        <Input value={initial.equipment}  onChangeText={text=>handleInput('equipment', text)}/>
        <Text h3>Image URL</Text>
        <Input value={initial.gifUrl} onChangeText={text=>handleInput('gifUrl', text)}/>
        <Text h3>Name</Text>
        <Input value={initial.target} onChangeText={text=>handleInput('target', text)}/>
         <Button
              title="Save Changes"
              buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' }}
              containerStyle={{
                height: 40,
                alignSelf:'center',
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{
                color: 'white',
                marginHorizontal: 20,
              }}
              onPress={handleSave}
            />
    </View>
  )
}

export default EditExercise