import { View, Text } from 'react-native'
import React from 'react'
import BackIcon from 'react-native-vector-icons/Ionicons'

const RegisterBack = ( {navigation}) => {
  return (
    <View>
     <BackIcon name='arrow-back-outline'  size={24} color={'#fff'}
     onPress={()=>navigation.navigate("Home")}
     style={{marginLeft:20}}
     />
    </View>
  )
}

export default RegisterBack