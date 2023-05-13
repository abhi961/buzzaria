import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card, Text, TextInput,ActivityIndicator } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { AddtoCart } from "./store/action";

const DetailsScreen = ({ navigation, route }) => {
  const { attributes_id } = route.params;
  console.log(
    attributes_id,
    route.params,
    "***************** data params id ***********************************"
  );
  const [quantity, setquantity] = useState(1);
  const [pickervalue, setPickervalue] = useState("Select size");
  const [isLoading, setIsLoading] = useState(true);
  const { product } = useSelector((state) => state.ProductsReducer);
  console.log(product);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://buzzaria.in/Delhi/product_details_api/${attributes_id}`
      );
      // .catch((err) => {
      //   console.log("Err", err);
      // });
      console.log(
        response.data,
        "data from APi>>>>>>><<<<<<<<<<<<<<<>>>>>< sigle product"
      );
      dispatch({ type: "SELECTEDPRODUCTS", payload: response.data });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (attributes_id && attributes_id !== "") fetchProduct();

    // return () => {
    // dispatch({type:"REMOVE_SELECTED_PRODUCT", payload: null})
    // };
  }, [attributes_id]);
  console.log("Products:", product);

  const DropDown = () => {
    return (
      <View>
        <Picker
          style={styles.picker}
          selectedValue={pickervalue}
          onValueChange={(item) => setPickervalue(item)}
        >
          <Picker.Item label="Select size" value="select size" />
          <Picker.Item label="XS" value="XS" />
          <Picker.Item label="S" value="S" />
          <Picker.Item label="M" value="M" />
          <Picker.Item label="L" value="L" />
          <Picker.Item label="XL" value="XL" />
        </Picker>
      </View>
    );
  };

  const counterHandler = () => {
    quantity > 1 ? setquantity(quantity - 1) : setquantity(1);
  };

  const openProduct = (e) => {
    dispatch(AddtoCart(e))
    console.log(e)
    navigation.navigate("Cart", {
      screen: "Cart",
    });
    // navigation.navigate("ProductStack", {
    //   screen: "DetailScreen",
    //   params: { id: item.id },
    // })
    // dispatch({ type: "PRODUCT", {id: item.id} )
  };
  const OpenWishlist = () => {
    navigation.navigate("Wishlist");
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: "#FFF8F3" }}
      showsVerticalScrollIndicator={false}
      >
        {isLoading ? (
          <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems:'center',
            alignItems: "center",
            flex:1
          }}
        >
          <ActivityIndicator size="large" color={"#ff6600"} animating={true} />
        </View>
        ) : (
          <>
            <View style={styles.imageContainer}>
              <Image
                source={product.product_attribute_images}
                style={styles.images}
              />
            </View>

            <Card style={styles.textContainer}>
              <Text style={styles.titleText}>{product.product_name}</Text>
              <Text style={styles.titleCollection}>
                {product.collection_name}
              </Text>
              <View style={styles.priceDetailsContainer}>
                <View>
                  <Text style={styles.priceTxt}>
                    ₹ {product.product_attribute_mrp_price}
                  </Text>
                </View>
                <View>
                  <Text style={styles.sellingPrice}>
                    ₹{product.product_attribute_selling_price}
                  </Text>
                </View>
                <View>
                  <Text style={styles.sellingPrice}>
                    {" "}
                    ₹ {product.product_deal_discount} off
                  </Text>
                </View>
                <View>
                  <Text style={styles.taxTextContainer}>
                    (Inclusive of all taxes)
                  </Text>
                </View>
              </View>
            </Card>
            <Card style={styles.ProdctDesContainer}>
              <Text style={styles.descriptionContainer}>
                Product Description
              </Text>
              <Text>{product.product_description}</Text>
            </Card>
            <Card style={styles.ProdctDesContainer}>
              <Text style={styles.descriptionContainer}>Select Size</Text>
              <DropDown />
            </Card>
            <Card style={styles.textContainer}>
              <View style={styles.Qtyconainer}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Select Qty
                </Text>
                <View style={styles.counterContainer}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#f72c2c",
                      width: 30,
                      height: 30,
                      borderRadius: 2,
                    }}
                    onPress={() => counterHandler()}
                  >
                    <Text style={styles.incsCounter}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.counterContainerBox}>{quantity}</Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#f72c2c",
                      width: 30,
                      height: 30,
                      borderRadius: 2,
                    }}
                    onPress={() => setquantity(quantity + 1)}
                  >
                    <Text style={styles.incsCounter}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>

            <Card style={styles.buyButtonContainer}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.cartButton}
                  onPress={() => openProduct(product)}
                >
                  <Text style={styles.addTxt}>Add To Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cartButton}
                  onPress={() => OpenWishlist(product)}
                >
                  <Text style={styles.addTxt}>Add To Wishlist</Text>
                </TouchableOpacity>
              </View>
            </Card>
            <Card style={styles.deliveryConatiner}>
              <Text style={styles.deliveryText}>Delivery Options</Text>
              <TextInput
                style={{
                  height: 48,
                  backgroundColor: "none",
                  borderBottomColor: "orange",
                }}
                label="Enter Pincode"
                activeUnderlineColor="#f72c2c"
              ></TextInput>
              <TouchableOpacity style={styles.checkButton}>
                <Text style={styles.checkTxt}>Check</Text>
              </TouchableOpacity>
            </Card>
          </>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 300,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  images: {
    width: "100%",
    height: 280,
  },
  textContainer: {
    marginHorizontal: 20,
    padding: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  titleCollection: {
    fontSize: 16,
    fontWeight: "500",
    color: "#a6a6a6",
  },
  priceTxt: {
    fontSize: 16,
    fontWeight: "800",
    textDecorationLine: "line-through",
    color: "#a6a6a6",
  },
  priceDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sellingPrice: {
    fontSize: 16,
    fontWeight: "800",
  },
  taxTextContainer: {
    color: "#f72c2c",
    fontWeight: "bold",
  },
  ProdctDesContainer: {
    marginHorizontal: 20,
    padding: 10,
    marginVertical: 10,
  },
  descriptionContainer: {
    fontSize: 16,
    fontWeight: "bold",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  incsCounter: {
    textAlign: "center",
    marginTop: 4,
    fontSize: 16,
    color: "#fff",
  },
  counterContainerBox: {
    textAlign: "center",
    borderBottomWidth: 0.5,
    borderColor: "#000",
    padding: 8,
  },
  buyButtonContainer: {
    marginHorizontal: 20,
    padding: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartButton: {
    backgroundColor: "#f72c2c",
    width: 160,
    padding: 12,
  },
  addTxt: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  deliveryConatiner: {
    marginHorizontal: 20,
    padding: 10,
    marginVertical: 10,
  },
  deliveryText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textInputConatiner: {},
  checkButton: {
    position: "absolute",
    right: 10,
    top: 35,
  },
  checkTxt: {
    fontSize: 16,
    color: "#f72c2c",
  },
});

export default DetailsScreen;
