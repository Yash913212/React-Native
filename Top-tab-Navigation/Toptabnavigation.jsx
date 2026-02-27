import react from "react";
import Home from "./Home";
import Contact from "./Contact";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
const TopTab = createMaterialTopTabNavigator();
import { Icon } from "react-native-paper";

const Toptabnabigation = () => {
    const data = useSafeAreaInsets();
    console.log(data)
    return (
        <NavigationContainer>
            <TopTab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, size, color }) => {
                        let IconName;
                        if (route.name == 'Home') {
                            IconName = focused ? "home" : "home-outline"
                        }
                        if (route.name == 'Settings') {
                            IconName = focused ? "cog" : "cog-outline"
                        }
                        return <Icon source={IconName} size={size} color={color} />
                    },
                    tabBarStyle: {
                        paddingTop: data.top,
                        // backgroundColor:"red"
                    },
                    tabBarShowLabel: true,
                    tabBarLabelStyle: {
                        // color:"green"
                    },
                    tabBarActiveTintColor: "red",
                    tabBarInactiveTintColor: "black",
                    tabBarItemStyle: {
                        flexDirection: "row"
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: "red",
                        height: 2,
                    },
                })}
            >
                <TopTab.Screen name="Home" component={Home} />
                <TopTab.Screen name="Settings" component={Contact} />
            </TopTab.Navigator>
        </NavigationContainer>
    )
}
export default Toptabnabigation