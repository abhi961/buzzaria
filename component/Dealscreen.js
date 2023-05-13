import React, { useEffect ,useState } from "react";
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

import FilterIcon from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import BackIcon from 'react-native-vector-icons/Ionicons'
 import axios from "axios";
import { ActivityIndicator } from "react-native-paper";

const width = Dimensions.get("screen").width / 2 - 20;

const Dealscreen = ({ navigation, route }) => {
  const [isLoading, setIsloading] = useState(true)
  
  const dispatch = useDispatch();
  const  {products} = useSelector((state) => state.ProductsReducer);
  console.log(
    products,
    "data************************************************ from deals products"
  );
  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        "https://trijatta.tech/Buzzaria_api/Deals/deal"
      );
      dispatch({ type:"GET_DEAL_PRODUCT", payload:response.data });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
    setIsloading(false)
  }, []);
  // console.log("Products:", products);

  const openProduct = (product_id) => {
    // console.log(product_id, "********** productId DEals product");
    navigation.navigate("DetailsScreen", {
      product_id,
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
      <View style={styles.Dealheader}>
        <View>
          <BackIcon 
          name="arrow-back-outline"
          size={28}
          color={'#fff'}
          onPress={()=> navigation.goBack()}
          />
        </View>
        <Text style={{color:'#fff' ,marginLeft:10, fontSize:20, fontWeight:'500'}}>Deal</Text>
      </View>
      {/* <View>
        <Productheader />
      </View> */}
      {isLoading ? (<View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <ActivityIndicator size="large" color={"#ff6600"} animating={true} />
        </View>):
      (
        <FlatList
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{
          marginTop: 25,
          backgroundColor: "#FFF8F3",
        }}
        numColumns={2}
        data={products}
        keyExtractor={(key) => key.product_id}
        renderItem={({ item }) => {
          return (
            <SafeAreaView>
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={() => openProduct(item.product_id)}
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
                      {item.product_deal_price}
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
      )
      }
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
  Dealheader:{
    backgroundColor:'#ff6600',
    padding:20,
    flexDirection:'row',
    alignItems:'center'

  }
});

export default Dealscreen;
