import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Checkbox from "expo-checkbox";

const width = Dimensions.get("screen").width / -20;

const RegisterScreen = ({ navigation }) => {
  const [name, setname] = useState("");
  const [mobile_no, setmobile_no] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");

  const [state, setstate] = useState("");

  const [country, setcountry] = useState("");

  const [pincode, setpincode] = useState("");

  const [NameError, setNameError] = useState("");
  const [numberError, setnumberError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [AddressError, setAddressError] = useState("");
  const [cityError, setcityError] = useState("");
  const [stateError, setstateError] = useState("");
  const [countryError, setcountryError] = useState("");
  const [pincodeError , setpincodeerror] = useState("");

  const [Agreed,setAgreed] = useState(false)

  const [validEmail, setvalidEmail] = useState("")

  // const state = useSelector((state) => state.RegisterReducer);
  // console.log(state);
  // const dispatch = useDispatch();

  const onsubmitHandler = () => {
    console.log(name, mobile_no, email, address, city, state, country, pincode);
    setname("");
    setmobile_no("");
    setemail("");
    setaddress("");
    setcity("");
    setstate("");
    setcountry("");
    setpincode("");
  };

  const postRegister = async () => {
    axios
      .post("https://reqres.in/api/register", {
        email: "eve.holt@reqres.in",
        password: "pistol",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    postRegister();
  }, []);

  const Namevalidator = () => {
    if (name == "") {
      setNameError("Name field can not be empty");
    } else {
      setNameError("");
    }
  };
  const NumberValidator = () => {
    if (mobile_no == "") {
      setnumberError("Mobile field can not be empty");
    } else {
      setnumberError("");
    }
  };
  const EmailValidator = () => {
    if (email == "") {
      setEmailError("Email field can not to be empty");
    } else {
      setEmailError("");
    }
  };

  const addressValidator = () => {
    if (address == "") {
      setAddressError("Address field can not to be empty");
    } else {
      setAddressError("");
    }
  };
  const cityValidator = () => {
    if (city == "") {
      setcityError("City field can not to be empty");
    }
  };
  const stateValidator = () => {
    if (state == "") {
      setstateError("State field can not be empty");
    } else {
      setstateError("");
    }
  };
  const countryValidator = () => {
    if (country == "") {
      setcountryError("Country field can not be empty");
    } else {
      setcountryError("");
    }
  };
  const pincodeValidator = () => {
    if(pincode==""){
      setpincodeerror("Pincode field can not be empty")
    }else{
      setpincodeerror("");
    }
  }

  return (
    <ScrollView style={{ backgroundColor: "#FFF8F3" }}>
      <View style={styles.conatiner}>
        <View style={styles.InputfieldConatiner}>
          <TextInput
            placeholder="Name*"
            value={name}
            onChangeText={(name) => setname(name)}
            onBlur={() => Namevalidator()}
          />
        </View>
        <Text style={{ color: "red" }}>{NameError}</Text>
        <View style={styles.InputfieldConatiner}>
          <TextInput
            placeholder="Mobile Number*"
            keyboardType="numeric"
            maxLength={10}
            value={mobile_no}
            onBlur={() => NumberValidator()}
            onChangeText={(mobile) => setmobile_no(mobile)}
          />
        </View>
        <Text style={{ color: "red" }}>{numberError}</Text>
        <View style={styles.InputfieldConatiner}>
          <TextInput
            placeholder="Email*"
            value={email}
            onBlur={() => EmailValidator()}
            onChangeText={(email) => setemail(email)}
          />
        </View>
        <Text style={{ color: "red" }}>{EmailError}</Text>
        <View style={styles.InputfieldConatiner}>
          <TextInput
            placeholder="Address*"
            value={address}
            onBlur={() => addressValidator()}
            onChangeText={(address) => setaddress(address)}
          />
        </View>
        <Text style={{ color: "red" }}>{AddressError}</Text>
      </View>
      <View style={{ marginTop: -35 }}>
        <View style={styles.column}>
          <View>
            <TextInput
              style={styles.inputConatiner}
              placeholder="City*"
              value={city}
              onBlur={() => cityValidator()}
              onChangeText={(city) => setcity(city)}
            />
            <Text style={{ color: "red", width: 140, marginTop: 10 }}>
              {cityError}
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.inputConatiner}
              placeholder="State*"
              onBlur={() => stateValidator()}
              value={state}
              onChangeText={(states) => setstate(states)}
            />
            <Text style={{ color: "red", width: 140, marginTop: 10 }}>
              {stateError}
            </Text>
          </View>
        </View>
        <View style={styles.column}>
          <View>
            <TextInput
              style={styles.inputConatiner}
              placeholder="Country*"
              value={country}
              onBlur={() => countryValidator()}
              onChangeText={(country) => setcountry(country)}
            />
            <Text style={{ color: "red", width: 140, marginTop: 10 }}>{countryError}</Text>
          </View>
          <View>
            <TextInput
              style={styles.inputConatiner}
              placeholder="Pincode*"
              keyboardType="numeric"
              value={pincode}
              onBlur={()=> pincodeValidator()}
              onChangeText={(pincode) => setpincode(pincode)}
            />
            <Text  style={{ color: "red", width: 140, marginTop: 10 }}>{pincodeError}</Text>
          </View>
        </View>
        <View style={styles.checkboxConatiner}>
        <Checkbox
        value={Agreed}
        onValueChange={()=>setAgreed(!Agreed)}
        color={Agreed? "orange" :"undefined"}
        />
        <Text style={styles.agreedTxt}>I have read and agreed the TC</Text>
      </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 25,
        }}
      >
        <TouchableOpacity
          style={[styles.registerBtn, {
            backgroundColor: Agreed ? "#FF6712" : '#cccccc'
          }]
           
          }
          disabled={!Agreed}
          onPress={onsubmitHandler}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              color: "#fff",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  InputfieldConatiner: {
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 10,
    shadowColor: "#F89751",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.6,

    elevation: 3,
  },
  conatiner: {
    margin: 30,
  },
  inputConatiner: {
    backgroundColor: "#fff",
    width: 150,
    padding: 10,
    marginTop: -15,
    shadowColor: "#F89751",
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.6,

    elevation: 3,
  },
  column: {
    width,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  registerBtn:{
    // backgroundColor: "#FF6712",
    padding: 15,
    width: 330,
    borderRadius: 10,
  },
  checkboxConatiner:{
    marginLeft:30,
    flexDirection:'row',
  },
  agreedTxt:{
    marginLeft:10,
  }
});
export default RegisterScreen;
