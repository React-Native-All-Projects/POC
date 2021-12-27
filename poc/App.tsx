import React, { useEffect } from "react";
import { Text,View } from "react-native"
import Config from "react-native-config";

const App = () =>{
  useEffect(() => {
    console.log('Config : ' , Config);
    
  }, [])
  return (
    <View style={[{flex:1,alignItems:'center',justifyContent:'center'}]}>
      <Text>POC</Text>
      <Text>ENV : {Config.APPLICATION_ID}</Text>
    </View>
  )
}

export default App;
