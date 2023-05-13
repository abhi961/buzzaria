import { View, Text } from "react-native";
import React from "react";
import { DrawerItemList } from "@react-navigation/drawer";

const CustomSideMenu = ({ ...props }) => {
  return (
    <>
      <View style={{ marginTop: 80, flex: 1 }}>
        <DrawerItemList {...props} />
      </View>
    </>
  );
};

export default CustomSideMenu;
