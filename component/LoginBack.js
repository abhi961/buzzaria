import { View, TouchableOpacity } from "react-native";
import React from "react";
import BackIcon from "react-native-vector-icons/Ionicons";

const LoginBack = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <BackIcon
        name="arrow-back-outline"
        size={24}
        color={"#fff"}
        style={{ marginLeft: 20 }}
      />
    </TouchableOpacity>
  );
};

export default LoginBack;
