import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Badge, ActivityIndicator } from "react-native-paper";
import { useSelector } from "react-redux";
import NavIcon from "react-native-vector-icons/Ionicons";
import CartIcon from "react-native-vector-icons/MaterialIcons";
import WishlistIcon from 'react-native-vector-icons/MaterialIcons'
import Banner from "./Banner";
import { ScrollView } from "react-native";
import Latestpro from "./Latestpro";
import Popularpro from "./Popularpro";
import Dealpro from "./Dealpro";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "./Search";

const Home = ({ navigation }) => {
  const [category, setcategory] = useState([]);

  const [ fetchImage , setFetchImage] = useState();

  const {totalQty}=useSelector(state=> state.CartReducer);
  
  const  getcarts  = useSelector((state) => state.WishlistReducer.wishlistcarts);
  const [loading, setLoading] = useState(true);

  const fetchimg = async() => {
      try {
        const response = await fetch('https://buzzaria.in/category/man.png')
        const data = await response.json();
        setFetchImage(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(() => {
    getCategories();
    setLoading(false);
    fetchimg();
  }, []);

  const getCategories = async () => {
    const response = await fetch(
      "https://buzzaria.in/Delhi/get_parent_category"
    );
    const data = await response.json();
    setcategory(data);
    console.log(data);
  };

  const Categories = ({ navigation }) => {
    const opencat = (categoryId) => {
      console.log(categoryId, "Category Id ###############################");
      navigation.navigate("Category", {
      categoryId
      });
    };
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <StatusBar barStyle="light-content" backgroundColor={"#e64d00"} />
        {category.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={{
              margin: 10,
            }}
            onPress={() => opencat(category.parent_category_id)}
          >
            <View style={styles.iconimageConatiner}>
              <Image
                source={fetchImage}
                style={styles.iconImage}
               
              />
            </View>
            <Text style={{ textAlign: "center" }}>
              {category.parent_category_name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };


  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <SafeAreaView>
          <ScrollView
            style={{ backgroundColor: "#FFF8F3", marginBottom: 10 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.headerContainer}>
              <View>
                <NavIcon
                  name="menu-sharp"
                  size={25}
                  onPress={() => navigation.openDrawer()}
                />
              </View>
              <View style={styles.logoContainer}>
                <Image
                  source={require("../assets/buzz_logo.png")}
                  style={styles.image}
                />
              </View>
              <View style={styles.WishlistContainer}>
                <WishlistIcon
                  name="favorite-border"
                  size={28}
                  color={"#ff6600"}
                  onPress={() => navigation.navigate("Wishlist")}
                />
              </View>
              <Badge
                style={{
                  position: "absolute",
                  top: 18,
                  right: 70,
                  backgroundColor: "#ff0000",
                  fontWeight: "bold",
                }}
              >
                {getcarts.length}
              </Badge>
              <View style={styles.cart}>
                <CartIcon
                  name="shopping-cart"
                  size={28}
                  color={"#ff6600"}
                  onPress={() => navigation.navigate("Cart")}
                />
              </View>
              <Badge
                style={{
                  position: "absolute",
                  top: 16,
                  right: 14,
                  backgroundColor: "#ff0000",
                  fontWeight: "bold",
                }}
              >
                {totalQty}
              </Badge>
            </View>
            <Search />
            <Categories navigation={navigation} />
            <Banner />
            <Dealpro navigation={navigation} />
            <Latestpro navigation={navigation} />
            <Popularpro navigation={navigation} />
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 80,
    padding: 10,
    paddingBottom: 10,
    marginBottom: 30,
  },
  logoContainer: {
    marginLeft: 20,
    alignItems: "center",
    width: 150,
  },
  image: {
    width: "100%",
    height: 50,
  },
  cart: {
    position: "absolute",
    right: 18,
  },
  iconimageConatiner: {
    width: 78,
    height: 78,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#F89751",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  iconImage: {
    width: 40,
    height: 40,
  },
  WishlistContainer:{
    position:'absolute',
    right:80
  }
});

export default Home;
