import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Address = ({ navigation }) => {
  console.log("data from address screen*****+++++++++++***********");
  const [name, setname] = useState("");
  const [mobile_no, setmobile_no] = useState("");
  const [Address, setAddress] = useState("");
  const [Pincode, setPincode] = useState("");
  const [landmark, setlandmark] = useState("");
  const [City, setCity] = useState("");
  const [state, setstate] = useState("");

  const [NameError, setNameError] = useState("");
  const [MobileError, setMobileError] = useState("");
  const [AddressError, setAddressError] = useState("");

  const [pincodeError, setpincodeError] = useState("");
  const [LandMarkError, setlandmarkError] = useState("");
  const [cityError, setcityError] = useState("");
  const [stateError, setstateError] = useState("");
  const SaveValue = () => {
    console.log(name);

    setname("");
    setmobile_no("");
    setAddress("");
    setlandmark("");
    setPincode("");
    setCity("");
    setstate("");
  };

  const postAddress = () => {
    axios
      .post("https://trijatta.tech/Buzzaria_api/Addresss/address", {
        name: "test",
        mobile_no: "9852147452",
        address: "test",
        pincode: "80024",
        landmark: "test",
        city: "test",
        state: "text",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    postAddress();
  }, []);

  const NameValidator = () => {
    if (name == "") {
      setNameError("Name field can not be empty");
    } else {
      setNameError("");
    }
  };
  const MobileValidator = () => {
    if (mobile_no == "") {
      setMobileError("Mobile No. field can not be empty");
    } else {
      setMobileError("");
    }
  };
  const AddressValidator = () => {
    if (Address == "") {
      setAddressError("Address field can not be empty");
    } else {
      setAddressError("");
    }
  };
  const pincodeValidator = () => {
    if (Pincode == "") {
      setpincodeError("Pincode field can not be empty");
    } else {
      setpincodeError("");
    }
  };
  const landMarkValidator = () => {
    (landmark=="")? setlandmarkError("LandMark can not be empty") 
    : setlandmarkError("")
  };
  const cityValidator = () => {
    if (City == "") {
      setcityError("City field can not be empty");
    } else {
      setcityError("");
    }
  };
  const stateValidator = () => {
    if (state == "") {
      setstateError("State field can not be empty");
    } else {
      setstateError("");
    }
  };
  return (
    <>
      <ScrollView style={{ backgroundColor: "#FFF8F3" }}>
        <View style={styles.titleTxtconatiner}>
          <Text style={styles.titleTxt}>Contact Details</Text>
        </View>
        <View style={styles.contactContainer}>
          <View>
            <TextInput
              style={styles.nameFieldConatiner}
              placeholder="Name*"
              value={name}
              onBlur={() => NameValidator()}
              onChangeText={(name) => setname(name)}
            />
            <Text style={{ color: "red", marginLeft: 18 }}>{NameError}</Text>
          </View>
          <View>
            <TextInput
              style={styles.nameFieldConatiner}
              placeholder="Mobile No*."
              value={mobile_no}
              onBlur={() => MobileValidator()}
              onChangeText={(mobile) => setmobile_no(mobile)}
              // style={styles.nametxtfield}
            />
            <Text style={{ color: "red", marginLeft: 18 }}>{MobileError}</Text>
          </View>
        </View>
        <View style={styles.titleTxtconatiner}>
          <Text style={styles.titleTxt}>Address Details</Text>
        </View>
        <View style={styles.contactContainer}>
          <View>
            <TextInput
              style={styles.nameFieldConatiner}
              value={Address}
              onBlur={() => AddressValidator()}
              onChangeText={(address) => setAddress(address)}
              placeholder="Address(House No, Building, Street,Area )*"
              // style={styles.nametxtfield}
            />
            <Text style={{ color: "red", marginLeft: 18 }}>{AddressError}</Text>
          </View>
          <View>
            <TextInput
              style={styles.nameFieldConatiner}
              placeholder="pincode*"
              value={Pincode}
              keyboardType="numeric"
              onBlur={() => pincodeValidator()}
              onChangeText={(pincode) => setPincode(pincode)}
              // style={styles.nametxtfield}
            />
            <Text style={{ color: "red", marginLeft: 18 }}>{pincodeError}</Text>
          </View>
          <View>
            <TextInput
              style={styles.nameFieldConatiner}
              placeholder="LandMark*"
              value={landmark}
              onBlur={() => landMarkValidator()}
              onChangeText={(landmark) => setlandmark(landmark)}
              // style={styles.nametxtfield}
            />
            <Text style={{ color: "red", marginLeft: 18 }}>
              {LandMarkError}
            </Text>
          </View>
          <View style={styles.lacalArea}>
            <View>
              <TextInput
                style={styles.cityConatiner}
                placeholder="City/ District*"
                value={City}
                onBlur={() => cityValidator()}
                onChangeText={(city) => setCity(city)}
                // style={styles.cityTxt}
              />
              <Text style={{ color: "red", marginLeft: 4, marginTop: 8, width:120 }}>
                {cityError}
              </Text>
            </View>
            <View>
              <TextInput
                style={styles.stateConatiner}
                placeholder="State*"
                value={state}
                onBlur={() => stateValidator()}
                onChangeText={(states) => setstate(states)}
                // style={styles.cityTxt}
              />
               <Text style={{ color: "red", marginLeft: 4, marginTop: 8 , width:120 }}>{stateError}</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.saveButton} onPress={SaveValue}>
              <Text style={styles.savebtntxt}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  titleTxtconatiner: {
    flexDirection: "row",
    margin: 15,
  },
  titleTxt: {
    fontSize: 16,
    fontWeight: "600",
  },
  nameFieldConatiner: {
    borderColor: "#a6a6a6",
    borderWidth: 1,
    margin: 15,
    marginBottom: 5,
    padding: 5,
    borderRadius: 5,
  },
  nametxtfield: {
    borderColor: "gray",
    padding: 0,
  },

  contactContainer: {
    backgroundColor: "#fff",
    paddingBottom: 10,
    shadowColor: "#ffe0cc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  lacalArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
  },
  cityConatiner: {
    borderColor: "#a6a6a6",
    borderWidth: 1,
    width: 160,
    height: 42,
    borderRadius: 5,
    alignItems: "center",
  },
  stateConatiner: {
    borderColor: "#a6a6a6",
    borderWidth: 1,
    width: 140,
    height: 42,
    borderRadius: 5,
  },
  cityTxt: {
    textAlign: "center",
  },
  saveButton: {
    backgroundColor: "#FF6712",
    padding: 15,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 5,
  },
  savebtntxt: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
});

export default Address;
