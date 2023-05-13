import React,{useState} from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity, ScrollView } from "react-native";
import { Card, IconButton } from "react-native-paper";
import DeleteIcon from "react-native-vector-icons/AntDesign";
import { useSelector,useDispatch } from "react-redux";
import { removeCart } from "./store/action";

const Cart = () => {
  const [quantity, setquantity] = useState(1);
  const getcart = useSelector((state) => state.CartReducer.carts);
  const dispatch = useDispatch();
  console.log('Carts:',getcart);

  const counterHandler = () => {
    quantity > 1 ? setquantity(quantity - 1) : setquantity(1);
  };
     const removeHandler = (product_id) => {
      dispatch(removeCart(product_id))
     }
  return (
    <ScrollView style={{backgroundColor: "#FFF8F3"}}
    showsVerticalScrollIndicator={false}
    >
      {getcart.map((item) => (
       
         <Card key={item.id} style={{ marginBottom:5,marginHorizontal:20,marginTop:20, padding:20 }}>
          {getcart.length > 0 ? (
            <>
              <View style={styles.cardContainer}>
                <View >
                  <Image
                    source={item.product_attribute_images}
                    alt="cart_img"
                    style={styles.productimageContainer}
                  />
                </View>
                <View>
                  <Text style={styles.productName}>{item.product_name}</Text>
                  <Text style={styles.collectionName}>{item.collection_name}</Text>
                  <Text style={styles.priceText}>₹ {item.product_attribute_mrp_price}</Text>
                  <Text style={styles.sizeContainer}>Size:</Text>
                </View>
                <View style={styles.Qtyconainer}>
                  <View style={styles.counterContainer}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#f72c2c",
                        width: 25,
                        height: 25,
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
                        width: 25,
                        height: 25,
                        borderRadius: 2,
                      }}
                      onPress={() => setquantity(quantity + 1)}
                    >
                      <Text style={styles.incsCounter}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity style={styles.deleteContainer}
                onPress={()=> removeHandler(item.product_id)}
                >
                  <IconButton icon="delete"
                  color="red" />
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <View>
                <Text>Your Cart is Empty</Text>
              </View>
            </>
          )}
        </Card>
       
      ))}
    </ScrollView >
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  productName:{
    fontSize:16,
    fontWeight:'bold'
  },
  collectionName:{
    color:'gray'
  },
  priceText:{
    fontSize:16,
    fontWeight:'500'

  },
  sizeContainer:{
    fontSize:16
  },
  counterContainer:{
    flexDirection:'row'
  },
  counterContainerBox: {
    textAlign: "center",
    borderBottomWidth: 0.5,
    borderColor: "#000",
    padding: 8,
  },
  incsCounter:{
    textAlign:'center',
    marginTop:2,
    color:'#fff'
  },
  deleteContainer:{
    backgroundColor:'#ffe0cc',
    borderRadius:50,
    width:40,
    height:40,
    justifyContent:'center',
    alignItems:'center'
  }
});
export default Cart;
