import React, { useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import StarIcon from "react-native-vector-icons/AntDesign";
import BackIcon from "react-native-vector-icons/AntDesign";
import FilterIcon from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import Dealpro from "./Dealpro";

const width = Dimensions.get("screen").width / 2 - 20;

const Popularscreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const {dealPro} = useSelector((state) => state.DealReducer);
  console.log(
    dealPro,
    "data************************************************ from redux"
  );
  const fetchProduct = async () => {
    try {
      const response = await axios
      .get("https://trijatta.tech/Buzzaria_api/Deals/deal")
    dispatch({ type:"GET_PRODUCT", payload: response.data });
    } catch (error) {
      console.log(error);
    }
   
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  // console.log("Products:", products);

  const openProduct = ({navigation}) => {
    navigation.navigate("DetailsScreen", {
      screen: "DetailsScreen",
    });

    // navigation.navigate("ProductStack", {
    //   screen: "DetailScreen",
    //   params: { id: item.id },
    // })
    // dispatch({ type: "PRODUCT", {id: item.id} )
  };
//   const Productheader = () => {
//     return (
//       <View style={styles.headerConatiner}>
//         <TouchableOpacity
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//           }}
//         >
//           <TouchableOpacity activeOpacity={0.8}>
//             <BackIcon
//               name="arrowleft"
//               size={23}
//               color={"#fff"}
//               onPress={() => navigation.navigate("Home")}
//             />
//           </TouchableOpacity>
//           <Text
//             style={{
//               marginLeft: 10,
//               fontSize: 18,
//               fontWeight: "bold",
//               color: "#fff",
//             }}
//           >
//             Product
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.FilterIcon}>
//           <FilterIcon
//             name="filter"
//             size={23}
//             color={"#fff"}
//             onPress={() => navigation.navigate("Filter")}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   };
  return (
    <>
      {/* <View>
        <Productheader />
      </View> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{
          marginTop: 25,
          backgroundColor: "#FFF8F3",
        }}
        numColumns={2}
        data={Dealpro}
        keyExtractor={(key) => key.id}
        renderItem={({ item }) => {
          return (
            <SafeAreaView>
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={() => openProduct(item.id)}
                  style={styles.procontainer}
                >
                  <Image
                    style={{ width: 168, height: 220 }}
                    source={item.product_main_image}
                  />
                </TouchableOpacity>
                <View style={styles.textConatiner}>
                  <Text style={styles.proname}>{item.product_name}</Text>
                </View>
                <View style={styles.collectionContainer}>
                  <Text style={styles.colltxt}>{item.collection_name}</Text>
                </View>
                <View style={styles.ratingContianer}>
                  <Text style={{ color: "#000" }}>
                    <StarIcon name="star" size={18} color={"green"} />{" "}
                    {item.rating}
                  </Text>
                </View>
                <View style={styles.PriceConatiner}>
                  <View style={styles.priceTxtConatiner}>
                    <Text style={styles.pricText}>
                      <Text style={{ marginRight: 10 }}>&#8377;</Text>
                      {item.product_mrp_price}
                    </Text>
                  </View>
                  <View style={styles.discountContainer}>
                    <Text
                      style={{
                        color: "green",
                        lineHeight: 30,
                        fontWeight: "bold",
                      }}
                    >
                      <Text>&#8377;</Text> {item.product_discount} Off
                    </Text>
                  </View>
                </View>
              </View>
            </SafeAreaView>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: 250,
    marginBottom: 120,
    padding: 20,
    marginHorizontal: 10,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: -30,
  },
  procontainer: {
    alignItems: "center",
  },
  PriceConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  proname: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#404040",
    marginTop: 10,
  },
  colltxt: {
    color: "#808080",
  },
  pricText: {
    fontWeight: "bold",
    lineHeight: 30,
  },
  ratingContianer: {
    margin: 2,
  },
  headerConatiner: {
    backgroundColor: "#ff6600",
    flexDirection: "row",
    padding: 20,
  },
  FilterIcon: {
    position: "absolute",
    right: 20,
    top: 18,
  },
});

export default Popularscreen;
