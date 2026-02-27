import react from "react";
import Topbar_Navigation from "./Topbar_Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
const App = () =>{
  return(
    <SafeAreaProvider>
      <Topbar_Navigation />
    </SafeAreaProvider>
  )
}

export default App;