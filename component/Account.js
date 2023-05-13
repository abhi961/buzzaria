import { View, Text ,TouchableOpacity , StyleSheet } from 'react-native'
import React from 'react'

const Account = ({navigation }) => {
  return (
    <>
    <View style={{
      marginHorizontal:40,
      marginLeft:20,
      marginRight:20,
      flexDirection:'row',
      justifyContent:'center',
    }}>
      <TouchableOpacity 
      style={styles.Profilebtn}
       onPress={( )=> navigation.navigate('Profile') }>
        <Text style={styles.btnText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.Profilebtn}
       onPress={( )=> navigation.navigate('Register') }>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
    </View>
    <View style={{
      marginHorizontal:20,
      flexDirection:'row',
      justifyContent:'center',
    }}>
    <TouchableOpacity 
      style={styles.Profilebtn}
       onPress={( )=> navigation.navigate('Order') }>
        <Text style={styles.btnText}>Order</Text>
      </TouchableOpacity>
    </View>
      </>
  )
}
const styles= StyleSheet.create({
  Profilebtn:{
    backgroundColor:'#FF6712',
    padding:15,
    width:150,
    margin:10,
    borderRadius:5,
  },
  btnText:{
    textAlign:'center',
    color:'#fff',
    fontSize:16,
  }
})

export default Account