import { View, TouchableOpacity } from "react-native";
import React from "react";
import BackIcon from "react-native-vector-icons/Ionicons";

const CategoryBack = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <BackIcon
        name="arrow-back-outline"
        size={24}
        color={"#000"}
        style={{ marginLeft: 20 }}
      />
    </TouchableOpacity>
  );
};

export default CategoryBack;
