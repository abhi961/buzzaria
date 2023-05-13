import React from "react";
import "react-native-gesture-handler";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DeleteIcon from "react-native-vector-icons/Entypo";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-native-paper";

const width = Dimensions.get("screen").width - 20;
const cart = ({ navigation }) => {

  
  const  getcarts  = useSelector((state) => state.WishlistReducer.wishlistcarts);
  console.log("wishlist :", getcarts)
 

  // const Incproduct = () => {
  //   dispatch({ type: "INC", payload: products.id });
  // };

  // const deleteItem = () => {
  //   dispatch({ type: "REMOVE", payload: products.id });
  // };
  // const OpenLogin = () => {
  //   navigation.navigate("Login");
  // };
 
  return (
  <ScrollView>
    <Card>
      <Text>wishlist</Text>
    </Card>
  </ScrollView> 

  
  );
};

const styles = StyleSheet.create({
  productConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width,
    height: 150,
    marginLeft: 10,
    backgroundColor: "#fff",
    margin: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    shadowColor: "#ffe0cc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  productimageContainer: {
    width: 90,
    height: 100,
    alignItems: "center",
    position: "absolute",
    top: 16,
    left: 10,
  },
  productimage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    position: "absolute",
  },
  productNameConatiner: {
    width: 100,
    position: "absolute",
    top: 25,
    left: 120,
  },
  productname: {
    color: "#737373",
    lineHeight: 18,
    fontSize: 13,
  },
  collectionname: {
    color: "#000",
    fontSize: 16,
  },
  price: {
    fontSize: 13,
    fontWeight: "bold",
    lineHeight: 20,
  },
  sizeTxt: {
    color: "#737373",
    fontSize: 13,
  },
  counterContainer: {
    position: "absolute",
    left: "70%",
  },
  priceDetails: {
    backgroundColor: "#fff",
    padding: 20,
    flexDirection: "column",
    shadowColor: "#ffe0cc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  pricedeatilsTxt: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tItems: {
    fontSize: 14,
    fontWeight: "600",
  },
  TPricetxt: {
    fontSize: 14,
    fontWeight: "bold",
  },
  checkOutContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
  },
  cartConatiner:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:20,
  },
  cartText:{
    textAlign:'center',
    fontSize:16,
    marginTop:10,
  }
});

export default cart;
