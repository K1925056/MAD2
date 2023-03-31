import React from 'react'
import { Pressable,Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';



const BodyPartCard = ({excercise,nav}) => {
  return (
  <Pressable style={{marginVertical:10 }} onPress={nav}  >
     <LinearGradient
  colors={['#ff0a0a', '#a9ff0a']}
  style={{height:50,width:'100%',alignItems:'center', justifyContent:'center'}}
  start={[0, 0]}
  end={[1, 1]}
>
<Text style={{fontSize:24,textTransform: 'capitalize', color:'white', fontWeight:'bold'}}> {excercise} Workouts</Text>
</LinearGradient>

    </Pressable>
  


  )
}

export default BodyPartCard