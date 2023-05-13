import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";

const Tab = createBottomTabNavigator();

const myTab = () => {
    return(
        <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
    )
}
export default myTab;