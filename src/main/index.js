import React from "react"
import { Text, View } from "react-native"

const Main = ({navigation, route}) => {
    return(
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 24, color:'red'}}>{`USER: ${route.params.user} PASS: ${route.params.pass}` }</Text>
        </View>
    )
}

export default Main