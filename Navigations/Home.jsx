import react from "react";
// import View from "react-native"
import { Text,Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const Home = () =>{
    const Navigation = useNavigation()
    return(
        <>
            <Text>Home Screen</Text>
            <Button 
                onPress={()=>{
                    Navigation.navigate("Settings")
                }}>
                    Move to setting Page</Button>
        </>
    )
}
export default Home;