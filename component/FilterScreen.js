import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

const FilterScreen = ({ navigation }) => {
  const [filtered, setfiltered] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://trijatta.tech/Buzzaria_api/Products/product/1"
    );
    const data = await response.json();
    console.log(data);
    setfiltered(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <></>;
};

export default FilterScreen;
