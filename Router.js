import React from "react";
import { View, Text } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./component/Home";
import Cart from "./component/Cart";
import ProfileScreen from "./component/ProfileScreen";
import Address from "./component/Address";
import Wishlist from "./component/Wishlist";
import Login from "./component/Login";
import Product from "./component/Product";
import Categorylist from "./component/Categorylist";
import DetailsScreen from "./component/DetailsScreen";
import FilterScreen from "./component/FilterScreen";
import CustomSideMenu from "././component/CustomSideMenu";
import Icon from "react-native-vector-icons/MaterialIcons";
import HeartIcon from "react-native-vector-icons/AntDesign";
import HomeIcon from "react-native-vector-icons/Feather";
import LoginIcon from "react-native-vector-icons/Entypo";
import HelpIcon from "react-native-vector-icons/Entypo";
import Helpscreen from "./component/Helpscreen";
import ProductHeader from "./component/ProductHeader";
import ProductIcon from "react-native-vector-icons/AntDesign";
import OrderScreen from "./component/OrderScreen";
import OrderIcon from "react-native-vector-icons/FontAwesome5";
import ProfileIcon from "react-native-vector-icons/MaterialCommunityIcons";
import RegisterScreen from "./component/RegisterScreen";
import RegisterIcon from "react-native-vector-icons/FontAwesome";
import AccountIcon from "react-native-vector-icons/MaterialCommunityIcons";
import LoginBack from "./component/LoginBack";
import RegisterBack from "./RegisterBack";
import Account from "./component/Account";
import CategoryBack from "./component/CategoryBack";
import Otp from "./component/Otpscreen";
import Dealscreen from "./component/Dealscreen";
import Latestscreen from "./component/Latestscreen";

const Tab = createBottomTabNavigator();
const ProductStack = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const LoginStack = createStackNavigator();
const OrderStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const CartStack = createStackNavigator();
const WishlistStack = createStackNavigator();
const HelpStack = createStackNavigator();
const AccountStack = createStackNavigator();
const OtpStack = createStackNavigator();
const DealStack = createStackNavigator();
const CategoryStack = createStackNavigator();
 

const ProductScreens = ({ navigation }) => {
  return (
    <ProductStack.Navigator initalRoute="Product">
      <ProductStack.Screen
        name="Product"
        component={Product}
        options={{
          headerShown: false,
          title: "Product",
          headerStyle: { backgroundColor: "#ff6600" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#fff",
          },
          headerLeft: (props) => (
            <ProductHeader navigation={navigation} {...props} />
          ),
        }}
      />
      <ProductStack.Screen
        name="DetailsScreen"
        options={{
          title: "Details",
          headerStyle: { backgroundColor: "#ff6600" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#fff",
          },
        }}
        component={DetailsScreen}
      />
      <ProductStack.Screen name="Latest" component={Latestscreen} />
    
      <ProductStack.Screen
        name="Cart"
        options={{
          title: "Cart",
          headerStyle: { backgroundColor: "#ff6600" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#fff",
          },
        }}
        component={Cart}
      />
      <ProductStack.Screen name="Filter" component={FilterScreen} />
      {/* <ProductStack.Screen name="Category" component={CategoryScreens} /> */}
       <ProductStack.Screen name="Deals" component={DealScreensStack} />
    </ProductStack.Navigator>
  );
};

const CategoryScreens = () => {
  return(
    <CategoryStack.Navigator>
      <CategoryStack.Screen name="Category" component={Categorylist} />
    </CategoryStack.Navigator>
  )
}

const DealScreensStack = () => {
  return(
    <DealStack.Navigator>
      <DealStack.Screen name="Dealstack" component={Dealscreen} 
          options={{headerShown:false}}
      />
    </DealStack.Navigator>
  )
}

const LoginScreen = ({ navigation }) => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        options={{
          title: "Login",
          headerStyle: { backgroundColor: "#ff6600" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#fff",
          },
          headerLeft: (props) => (
            <LoginBack navigation={navigation} {...props} />
          ),
        }}
        component={Login}
      />
      <LoginStack.Screen name="Address" component={Address} />
      <LoginStack.Screen name="Otp" component={Otp} />
    </LoginStack.Navigator>
  );
};

const CartScreens = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={Cart} />
    </CartStack.Navigator>
  );
};
const Wishlistscreens = () => {
  return (
    <WishlistStack.Navigator>
      <WishlistStack.Screen name="Wishlist" component={Wishlist} />
    </WishlistStack.Navigator>
  );
};
const helpscreens = () => {
  return (
    <HelpStack.Navigator>
      <HelpStack.Screen name="Help" component={Helpscreen} />
    </HelpStack.Navigator>
  );
};
const Accountscreen = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="My Account" component={Account} />
      <AccountStack.Screen name="Profile" component={ProfileScreen} />
      <AccountStack.Screen name="Register" component={RegisterScreen} />
      <AccountStack.Screen name="Order" component={OrderScreen} />
    </AccountStack.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <Tab.Navigator
      initalRoute="Product"
      tabBarOptions={{
        style: {
          height: 55,
          elevation: 0,
          fontSize: 20,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Icon name="home-filled" size={25} color={"#ff4d4d"} style={{}} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreens}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-cart" color={"#ff6600"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlistscreens}
        options={{
          tabBarIcon: ({ color }) => (
            <HeartIcon name="hearto" color={"#ff6600"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Accountscreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AccountIcon name="account-circle" color={"#ff6600"} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <DrawerStack.Navigator
        drawerContent={(props) => <CustomSideMenu {...props} />}
        screenOptions={{ drawerLabelStyle: { marginLeft: -30 } }}
        drawerStyle={{ backgroundColor: "#FFF8F3" }}
        drawerContentOptions={{
          activeTintColor: "#ff6600",
        }}
      >
        <DrawerStack.Screen
          name="Home"
          component={AppNavigator}
          options={{
            drawerIcon: ({ color, size }) => (
              <HomeIcon name="home" size={22} color={"#ff6600"} />
            ),
          }}
        />
        <DrawerStack.Screen
          name="Category"
          component={CategoryScreens}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="category" size={22} color={"#ff6600"} />
            ),
            activeTintColor: "#fff",
          }}
        />
        <DrawerStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <LoginIcon name="login" size={22} color={"#ff6600"} />
            ),
          }}
        />
        <DrawerStack.Screen
          name="Help & Support"
          component={helpscreens}
          options={{
            drawerIcon: ({ color, size }) => (
              <HelpIcon name="help" size={22} color={"#ff6600"} />
            ),
          }}
        />
        <DrawerStack.Screen
          name="Product"
          component={ProductScreens}
          options={{
            drawerIcon: ({ color, size }) => (
              <ProductIcon name="inbox" size={22} color={"#ff6600"} />
            ),
          }}
        />
        {/* <DealStack.Screen name="Deal" component={DealScreens} 
  
        /> */}
        {/* <DrawerStack.Screen
          name="Order"
          component={OrderScreens}
          options={{
            drawerIcon: ({ color, size }) => (
              <OrderIcon name="border-all" size={22} color={"#ff6600"} />
            ),
          }}
        /> */}
        {/* <DrawerStack.Screen
          name="Register"
          component={Registerscreens}
          options={{
            drawerIcon: ({ color, size }) => (
              <RegisterIcon name="registered" size={22} color={"#ff6600"} />
            ),
          }}
        /> */}
      </DrawerStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
