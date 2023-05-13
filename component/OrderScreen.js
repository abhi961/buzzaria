import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import React, { useState ,useEffect } from "react";
import StepIndicator from "react-native-step-indicator";
import axios from "axios";

const { width, height } = Dimensions.get("window");



const labels = [
  "Cart",
  "Delivery Address",
  "Order Summary",
  "Payment Method",
  "Track",
];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#fe7013",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#fe7013",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#fe7013",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#fe7013",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#fe7013",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#fe7013",
};

const OrderScreen = ({ navigation }) => {

  const fetchtracking = async() => {
    try {
      const response = await axios.get('https://trijatta.tech/Buzzaria_api/Orders/order/3/yes');
      console.log(response)
    } catch (error) {
      
    }
 }
 useEffect(() => {
   fetchtracking();
 }, [])
  const [currentPosition, setcurrentPostion] = useState("");
  const data = [
    {
      label: "Ordered and Approved",
      status: "Your Order has been placed",
      dateTime: "Sat , 16th March 11.49Am",
    },
    {
      label: "Ordered and Approved",
      status: "Your Order has been placed",
      dateTime: "Sat , 16th March 11.49Am",
    },
    {
      label: "Ordered and Approved",
      status: "Your Order has been placed",
      dateTime: "Sat , 16th March 11.49Am",
    },
    {
      label: "Ordered and Approved",
      status: "Your Order has been placed",
      dateTime: "Sat , 16th March 11.49Am",
    },
    {
      label: "Ordered and Approved",
      status: "Your Order has been placed",
      dateTime: "Sat , 16th March 11.49Am",
    },
  ];

  return (
    <>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Estimated Time
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "#777",
            }}
          >
            Wednesday{" "}
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={currentPosition}
            labels={labels}
            direction="vertical"
          />
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: 20,
  },
  indicatorContainer: {
    width: width - 30,
    height: height - 160,
    padding: 20,
    margin: 15,
    backgroundColor: "#FFF8F3",
  },
});

export default OrderScreen;
