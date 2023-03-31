import React, { useEffect, useState } from 'react'
import { View , Text} from 'react-native'
import axios from 'axios';
import ExcerciseCard from '../components/ExcerciseCard';
import { FlatList } from 'react-native';
const Favourite = ({navigation}) => {
    const [data,setData] = useState([]);
    const [success, setIsSuccess] = useState(false);
    const handleDelete = (exercise) =>{
        const removeItem = data.filter(item=>item._id!==exercise._id);
        setData([...removeItem])
        const options = {
            method: 'DELETE',
            url: 'http://10.130.40.99:3000/api/favExercices',
            params:{id: exercise._id}
        
          };
          axios.request(options).then(function (response) {
            setIsSuccess(true)
            load()
          }).catch(function (error) {
            setIsVisible(true) 
            setIsSuccess(false) 
          });
    }
    const handleEdit=(exercise)=>{
        navigation.navigate('EditScreen',{exerciseData: exercise});
    }
    const load = () =>{

       useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'http://10.130.40.99:3000/api/favExercices'
        
          };
          axios.request(options).then(function (response) {
            setData([...response.data.data])
          }).catch(function (error) {
            console.log(error)
          });
    },[])} 
    load();
    console.log(data);
  return (
    <View style={{backgroundColor:'gray', height: '100%'}}>
        <Text style={{fontSize:30,fontWeight:'bold',color:"white", margin:5}}>My Favourite</Text>
        {data.length>0 ?
    <FlatList
      data={data}
      renderItem={({item})=> <ExcerciseCard exercise={item} saved={true} handleDelete={handleDelete} handleEdit={handleEdit}/>}
    />: <Text>Loading....</Text>}
    </View>
  )
}

export default Favourite