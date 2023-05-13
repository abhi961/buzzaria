import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet ,Dimensions ,ImageBackground } from "react-native";

const width = Dimensions.get('screen').width/2-30

const products = [
  {
    id: 1,
    image: require("../assets/pro3.jpg"),
  },
  {
    id: 2,
    image: require("../assets/pro_2.jpg"),
  },
];

const Popularpro = ({ navigation }) => {
  const openProduct = () => {
    navigation.navigate("Product");
  };

  return (
    <View style={{marginBottom:20}}>
      <View style={{justifyContent:'center' , alignItems:'center',}}> 
        <Text style={styles.heading}>Popular Product</Text>
        <View style={styles.bottomimageconatiner}>
          <Image source={require('../assets/bottom_design.png')} style={styles.bottomimage} />
        </View>
      </View>
      <View style={styles.container}>
        {products.map((item) => (
          <TouchableOpacity
            onPress={openProduct}
            key={item.id}
            style={styles.imageConatiner}
          >
            <Image source={item.image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 10,
    fontSize: 20,
    marginBottom: 10,
    color: "#000",
    fontWeight: "500",
    // backgroundColor: "#ff471a",
    textAlign: "center",
    padding: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    marginHorizontal: 10,
    marginTop:35,
    backgroundColor: "#fff",
    padding: 20,
    shadowColor: "#ff471a",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageConatiner: {
    width: "48%",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  bottomimageconatiner:{
     width:150,
     position:'absolute',
     top:-20,
  },
  bottomimage:{
    width:150,
    height:130,
    marginBottom:30,
  }
});

export default Popularpro;
