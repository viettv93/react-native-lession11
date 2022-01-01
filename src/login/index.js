import React from "react"
import { View, TextInput, TouchableOpacity, Text } from "react-native"

const Login = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', paddingVertical: 10, paddingHorizontal: 20, justifyContent: 'space-evenly' }}>

            <TextInput
                placeholder=" User"
                style={{ borderWidth: 1, width: '100%', backgroundColor: 'gray', color: 'white', fontSize: 15 }} />
            <TextInput
                placeholder="PassWord"
                style={{ borderWidth: 1, width: '100%', backgroundColor: 'yellow', color: 'red', fontSize: 15 }} />
            <TouchableOpacity onPress={() => {
                navigation.navigate('Main', { user: 'Viet', pass: '123' })
            }} style={{ backgroundColor: 'red', borderWidth: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 15, color: 'black', padding: 5 }}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login