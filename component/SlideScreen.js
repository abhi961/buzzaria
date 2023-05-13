import React from "react";
import { Text, FlatList ,View ,Image } from "react-native";

const SlideScreen = () => {
  const slide = [
    {
      pic: require("../assets/phonebanner.jpg"),
      key: "1",
    },
    {
      pic: require("../assets/phonebanner2.jpg"),
      key: "2",
    },
    {
      pic: require("../assets/phonebanner3.jpg"),
      key: "3",
    },
  ];

  return (
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
      data={slide}
      keyExtractor={}
      renderItem={(item) => {
        return (
          <View>
            <Image source={item.item.pic} />
          </View>
        );
      }}
    />
  );
};

export default SlideScreen;
