import React from 'react'
import { View } from 'react-native'
import { Button, Text } from '@rneui/base'

const Success = ({navigation}) => {
  return (
    <View style={{height:'100%',width:'100%', backgroundColor:'green', justifyContent:'center',alignItems:'center'}}>
        <Text h1>Success</Text>
        <Button
              title="Home"
              buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' }}
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
              onPress={()=>navigation.navigate('Home')}
            />
    </View>
  )
}

export default Success