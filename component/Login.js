import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React ,{useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ForwardIcon from 'react-native-vector-icons/AntDesign'

const Login = ({ navigation }) => {

  const onchangescreen = ()=> {

    if(phoneNumber == ''){
      alert('Enter your mobile Number')
      return
    }
   navigation.navigate('Address');
  }

  const [ phoneNumber , setphoneNumber]= useState('')

  const changeNumber = (number) => {
    setphoneNumber(number)
  }
  // const openaddress = () => {
  //   navigation.navigate("otpscreen")
  // };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <View style={styles.imageContainer}>
          <Image
            style={styles.loginImage}
            source={require("../assets/login-screen.png")}
          />
        </View> */}
         <View>
           <Image source={require('../assets/mobileverify.png')} />
         </View>
      </View>
      
      <View style={styles.mobileLabel}>
        <Text style={styles.labelTxt}>Enter Your Mobile Number we will sent</Text>
        <Text style={{textAlign:'center', color:'gray'}}>you Otp to verify</Text>
      </View>
      <View style={styles.mobileinputContainer}>
        <TextInput
          style={styles.inputContainer}
          placeholder=" +91 | Mobile Number"
          value={phoneNumber}
          keyboardType="numeric"
          maxLength={10}
          onChangeText={changeNumber}

        />
      </View>
      <View style={styles.sumbitButtonContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: "#FF6712",
            borderRadius: 60,
            padding:20,
          }}
          onPress={() => onchangescreen()}
        >
         <ForwardIcon name="arrowright" size={22} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
    marginTop:20,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: "#ffe0cc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    padding:20,
  },

  imageContainer: {
    width: 250,
  },
  loginImage: {
    width: "100%",
  },
  mobileLabel: {
    justifyContent: "center",
    alignContent: "center",
    marginTop:20,
  },
  labelTxt: {
    textAlign: "center",
    fontSize:16,
    color:'gray'
  },
  mobileinputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    padding: 12,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 5,
    marginTop:20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 18,
  },
  otpinputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  otpContainerr: {
    backgroundColor: "#fff",
    margin: 10,
    width: 30,
    height: 30,
    borderRadius: 5,
    textAlign: "center",
  },
  otpInput: {
    textAlign: "center",
  },
  sumbitButtonContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
});

export default Login;
