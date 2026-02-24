import react from "react";
import { Text,Button } from "react-native-paper";
import { useNavigation,useRoute } from "@react-navigation/native";
const Contact = () =>{
    const Navigation = useNavigation()
    const routesData = useRoute();
    console.log(routesData.params);
    return(
        <>
        <Text>Contact Screen</Text>
        <Button
            onPress={()=>Navigation.navigate('Profile')}
        >Move to Profile Screen</Button>
        </>
    )
}
export default Contact;