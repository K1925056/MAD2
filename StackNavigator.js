import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import FitScreen from "./screens/FitScreen";
import RestScreen from "./screens/RestScreen";
import Loginn from "./screens/Loginn";
import ExercisesScreen from "./screens/ExercisesScreen";
import BodyPartCard from "./components/BodyPartCard";

import Favourite from "./screens/Favourite";
import EditExercise from "./screens/EditExercise";
import Success from "./screens/Success";
import CameraScreen from "./screens/CameraScreen";
import MyImages from "./screens/Progress";
import BodyPartPage from "./screens/BodyPartPage";
import Progress from "./screens/Progress";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loginn" component={Loginn} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ExercisesScreen" component={ExercisesScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Workout" component={WorkoutScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Fit" component={FitScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Rest" component={RestScreen} options={{headerShown:false}}/>
        <Stack.Screen name="EditScreen" component={EditExercise} />
        <Stack.Screen name="Favourite" component={Favourite} />
        <Stack.Screen name="Success" component={Success}/>
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="MyImages" component={Progress} />
        <Stack.Screen name="BodyPart" component={BodyPartPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
