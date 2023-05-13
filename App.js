import React from "react";
import { View ,StatusBar } from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./component/store/store";
import Router from "./Router";

export default function App() {
  return (
    <Provider store={store}>
      <View
        style={{

          flex: 1,
          height:'auto',
        }}
      >
        <StatusBar style="auto" />
        <Router />
      </ View>
    </Provider>
  );
}
