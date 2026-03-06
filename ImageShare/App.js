import { useState } from "react";
import { View,Image } from "react-native";
import react from "react";
import { Text,Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from 'expo-sharing'
const App = () =>{
 
  const [ImagePath , setImagePath] = useState(null)
  const Choose = async() =>{
      const permission = await ImagePicker.getMediaLibraryPermissionsAsync();
      if(!permission.granted){
        alert("Not Permitted")
        return;
      }
      const Data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:"images",
        quality:1
      })
      // console.log(Data.assets[0].uri)
      setImagePath(Data.assets[0].uri)
  }

  const Share = async() =>{
     const status =  await Sharing.isAvailableAsync()
     if(!status){
      alert("Not allowed to share")
      return;
     }
     await Sharing.shareAsync(ImagePath)
  }
  return(
    <View>
      <Button onPress={Choose}>Choose Image</Button>
      {
        ImagePath
        ? <Image source={{uri : ImagePath}} style={{width:200,height:200}}/>
        : <Text>NO Image got Selected</Text>
      }
      <Button onPress={Share}>Share Image</Button>
    </View>
  )
}
export default App;