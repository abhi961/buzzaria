import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import SearchIcon from "react-native-vector-icons/AntDesign";
import { Searchbar } from "react-native-paper";

const Search = () => {
  const [search, setsearch] = useState("");
  const onChangeSearch = (query) => {
    setsearch(query);
  };
  return (
    <View style={styles.conatiner}>
      <View style={styles.searchContaner}>
        <Searchbar
          value={search}
          onChangeText={onChangeSearch}
          placeholder="Search Product"
          style={styles.textinput}
        />
        <SearchIcon
          name="search1"
          size={20}
          color={"orange"}
          style={styles.iconconatiner}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 30,
  },
  searchContaner: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 30,
    marginRight: 10,
    marginLeft: 10,
    shadowColor: "#ff8533",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textinput: {
    alignItems: "center",
  },
  iconconatiner: {
    position: "absolute",
    top: 12,
    right: 10,
    alignItems: "center",
  },
});
export default Search;
