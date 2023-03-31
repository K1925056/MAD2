import { StyleSheet, Text, View, SafeAreaView, Image,ScrollView } from "react-native";

import React ,{useContext, useEffect} from "react";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";
import axios from "axios";
import { Button } from "@rneui/base";

const HomeScreen = ({navigation}) => {
  const {
   
    minutes,
  
    calories,

    workout,
  } = useContext(FitnessItems);






  return (
    <ScrollView >
      <View
        style={{
          backgroundColor:'black',
          padding: 10,
          height: "150%",
          width: "100%",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18, marginTop:40, }}>
          HOME WORKOUT
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {workout}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              WORKOUTS
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {calories}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              KCAL
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {minutes}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              MINS
            </Text>
          </View>
        </View>

        <FitnessCards/>
        <Button titleStyle={{color:'black',fontWeight:'bold'}} buttonStyle={{backgroundColor:'white',width:'50%',alignSelf:'center'}} title="Extra" onPress={()=>navigation.navigate('Loginn')}/>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
