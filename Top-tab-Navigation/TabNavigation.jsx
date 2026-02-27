import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-paper';
import Home from './Home';
import Contact from './Contact';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabNavigation = createBottomTabNavigator()
export default function TabNavigation() {
  return (
      <BottomTabNavigation.Navigator
        screenOptions={({route})=>({
          tabBarIcon:({focused,color})=>{
            let IconName;
            if(route.name == 'Home'){
               IconName = focused ? 'home' : "home-outline"
            }
            if(route.name == "Settings"){
              IconName = focused ? "cog" : "cog-outline"
            }
            return <Icon source={IconName} size={30} color={color}/>
          },
          tabBarActiveTintColor:"green",
          tabBarInactiveTintColor:"black",
          headerShown:false,
          headerStyle:{
            
          }
        })}
      >
        <BottomTabNavigation.Screen name="Home" component={Home}/>
        <BottomTabNavigation.Screen name="Settings" component={Contact}/>
      </BottomTabNavigation.Navigator>
  );
}

