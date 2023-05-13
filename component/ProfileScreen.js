import React , {useEffect , useState} from "react";
import { View,  StyleSheet, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Title, Avatar, Text, Caption } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Entypo';
import axios from "axios";

const ProfileScreen = () => {
  const [profile , setprofile] = useState("");
 
  const fetchProfile = async( ) => {
 try {
    const res = await axios.get('https://trijatta.tech/Buzzaria_api/Profiles/profile/4')
    console.log(res)
    setprofile(res)
 } catch (error) {
   console.log(error)
 }
  }
  useEffect(() => {
   fetchProfile();
  }, [])
  
  return (
    < >
    <ScrollView style={{backgroundColor:'#FFF8F3'}}>
     <View style={styles.conatiner}>
        <View style={styles.userinfoScection}>
        <View style={styles.row}>
        <Avatar.Image source={require('../assets/avator.png')}
          size={80}
          />
         <View style={styles.titleconatiner}>
         <Title style={styles.title}>{profile.u_fname}</Title>
         </View>
        </View>
        </View>
        <View style={styles.infosection}>
          <View style={styles.infoconatiner}>
            <Icon name="old-phone" size={20} color={"#777777"} />
           <Text style={styles.infoNumber}>+91 9865428742</Text>
          </View>
          <View style={styles.infoconatiner}>
            <Icon name="email" size={20} color={"#777777"} />
           <Text style={styles.infoNumber}>{profile.u_email}</Text>
          </View>
          <View style={styles.infoconatiner}>
            <Icon name="location" size={20} color={"#777777"} />
           <Text style={styles.infoNumber}>Delhi </Text>
          </View>
        </View>
        <View style={styles.orderConatiner}>
         <View>
         <Title>{profile.u_ordersplaced}</Title>
         <View>
           <Caption style={styles.captionText}>Order</Caption>
         </View>
         </View>
        </View>
      </View>
     </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    marginLeft:20,
    marginTop:30,
  },
  titleconatiner:{
    marginLeft:20,
    marginTop:15,
    marginBottom:5,
  },
  infoconatiner:{
    flexDirection:'row',
    marginVertical:8,
    marginLeft:20,
  },
  infoNumber:{
    marginLeft:15,
    color:'#777777'
  },
  infosection:{
    marginTop:30,
  },
  orderConatiner:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderTopColor:'#7777',
    borderBottomColor:'#7777',
    padding:10,
    marginTop:10,
  },
  captionText:{
    fontSize:16,
    fontWeight:'bold',
  }
});

export default ProfileScreen;
