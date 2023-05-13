import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import SupportIcon from "react-native-vector-icons/MaterialIcons";
import EmailIcon from "react-native-vector-icons/Entypo";
import CallIcon from "react-native-vector-icons/AntDesign";
import axios from "axios";
import Checkbox from "expo-checkbox";

const Helpscreen = () => {
  const [message, setmessage] = useState([]);
  const [Email, setEmail] = useState([]);
  const [mobile, setmobile] = useState([]);
  const [mobileError, setmobileError] = useState("");
  const [emailError, setemailError] = useState("");
  const [messageError, setmessageError] = useState("");

  const [Agreed , setAgreed] = useState(false)

  const messageChanger = (text) => {
    setmessage("");
    setEmail("");
    setmobile("");
  };

  const postHelp = () => {
    try {
      axios({
        method: "POST",
        url: "https://buzzaria.in/Delhi/api_help",
        headers: {
          Accept: "application/json",
          "Content-type": "Application/Json",
        },
        body: JSON.stringify({
          mb_num: 8446859552,
          userid: 19,
          comments: "test comment",
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    postHelp();
  }, []);

  const numberValidator = () => {
    if (mobile == "") {
      setmobileError("Mobile field can not be empty");
    } else {
      setmobileError("");
    }
  };
   const emailValidator = () => {
     (Email=="") ? setemailError("Email field can not be empty") : setemailError("")
   }

   const messagevalidator = () => {
       (message=="") ? setmessageError("Message field can not be empty") : setmessageError("")
   }
   
  return (
    <SafeAreaView style={{ backgroundColor: "#FFF8F3", height:800 }}>
      <View style={{ marginHorizontal: 22, marginTop: 20 }}>
        <Text style={styles.technicalText}>Technical Support</Text>
        <View style={styles.helpContainer}>
          <SupportIcon name="support-agent" size={22} color={"#777777"} />
          <Text style={styles.technicaltxt}>1800 1800 4562</Text>
        </View>

        <View style={styles.helpContainer}>
          <EmailIcon name="mail" size={22} color={"#777777"} />
          <Text style={styles.technicaltxt}>buzzaria@gmail.com</Text>
        </View>
      </View>

      <View style={{ marginHorizontal: 22, marginTop: 20 ,marginTop:30 }}>
        <Text style={styles.technicalText}>Customer Support (24x7)</Text>
        <View style={styles.helpContainer}>
          <CallIcon name="customerservice" size={22} color={"#777777"} />
          <Text style={styles.technicaltxt}>1800 1800 4562</Text>
        </View>

        <View style={styles.helpContainer}>
          <EmailIcon name="mail" size={22} color={"#777777"} />
          <Text style={styles.technicaltxt}>buzzaria@gmail.com</Text>
        </View>
      </View>
      <View style={styles.mobileContainer}>
        <TextInput
          placeholder="Enter Mobile No."
          keyboardType="numeric"
          onBlur={() => numberValidator()}
          value={mobile}
          onChangeText={(number) => setmobile(number)}
        />
      </View>
      <Text style={{ color: "red", marginLeft: 22, marginTop: 4 }}>
        {mobileError}
      </Text>
      <View style={styles.mobileContainer}>
        <TextInput
          placeholder="Enter Email Address*"
          value={Email}
          onBlur={()=> emailValidator()}
          onChangeText={(e) => setEmail(e)}
        />
      </View>
      <Text style={{ color: "red", marginLeft: 22, marginTop: 4 }}>
        {emailError}
      </Text>
      <View style={styles.messagecontainer}>
        <TextInput
          placeholder="Type message Here...."
          onChangeText={(e)=> setmessage(e)}
          value={message}
          onBlur={()=> messagevalidator()}
        />
      </View>
      <Text style={{ color: "red", marginLeft: 22, marginTop: 4 }}>
        {messageError}
      </Text>
      <View style={styles.agrredConatiner}>
        <Checkbox
        value={Agreed}
        onValueChange={()=> setAgreed(!Agreed)}
        color={Agreed ? "#FF6712" : "undefined"}
        />
        <Text style={styles.agreedTxt}>I have read and agreed the TC</Text>
      </View>
      <View style={styles.submitconatiner}>
        <TouchableOpacity 
        style={[styles.submitBtn,{
          backgroundColor:Agreed ? "#FF6712" : '#cccccc'
        }]}
        disabled={!Agreed}
        >
          <Text style={styles.submittxt}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  technicalText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  technicaltxt: {
    color: "#777777",
    marginLeft: 10,
  },
  helpContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  messagecontainer: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 30,
    marginTop: 8,
    borderRadius: 5,
    shadowColor: "#ffe0cc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  submitBtn: {
    backgroundColor: "#FF6712",
    width: 180,
    paddingBottom: 12,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  submitconatiner: {
    marginLeft: 21,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  submittxt: {
    textAlign: "center",
    marginTop: 15,
    color: "#fff",
    fontSize: 16,
  },
  mobileContainer: {
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    shadowColor: "#ffe0cc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginHorizontal: 22,
  },
  agrredConatiner:{
    flexDirection:'row',
    marginTop:20,
    marginLeft:20,
  },
  agreedTxt:{
    marginLeft:10
  }
});

export default Helpscreen;
