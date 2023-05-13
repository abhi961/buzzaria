import { View, StyleSheet, Text, Image } from "react-native";
import React, { useState } from "react";
import OtpInputs from "react-native-otp-inputs";



const Otp = ({ navigation }) => {
  const [otp, setotp] = useState([]);
  return (
    <>
      <View>
        <View style={styles.otpImageContainer}>
          <Image source={require("../assets/otpscreen.png")} />
        </View>
        <Text style={{ textAlign: "center", color: "gray" }}>
          Otp Verification
        </Text>
        <Text style={{ textAlign: "center", color: "gray" }}>
          Enter OTP code send to your Mobile Number
        </Text>
      </View>
      <OtpInputs />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 30,
    height: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  otpImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    marginTop: 30,
  },
});

export default Otp;
