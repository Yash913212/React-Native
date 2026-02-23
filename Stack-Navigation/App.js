import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-paper';
import Home from './Home';
import Contact from './Contact';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {Icon} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createNativeStackNavigator()
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        // title:"HAI"
        // headerShown:false
        // headerStyle:{
        //   backgroundColor:"red"
        // }
        // headerTintColor:"red"
        // headerTitleStyle:{
        //   fontSize:26
        // }
        headerTitleAlign:"center",
        headerRight:()=> <Icon source={"bell"} size={24}/>,
        // headerLeft:() => <Icon source={"home"} size={24}/>,
        headerBackButtonDisplayMode:"minimal",
        animation:"fade"

      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

