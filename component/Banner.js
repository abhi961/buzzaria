
import React from 'react'
import { View,  StyleSheet, FlatList, Image} from 'react-native';


const Banner = () => {

    const slide =[
        {
        pic: require('../assets/slide-1.jpg'),
        key:'1',
    },
    {
        pic: require('../assets/slide2.jpg'),
        key:'2',
    },
    {
        pic: require('../assets/slide3.jpg'),
        key:'3',
    },
    

]
    return (
       <FlatList
       style={Styles.flatList}
       horizontal
       showsHorizontalScrollIndicator={false}
       keyExtractor={(key)=>{
           return key.key;
       }}
       data={slide}
      renderItem={(item)=>{
          console.log(item)
          return (
            <View style={Styles.imageContainer}>
            <View style={Styles.image}>
                <Image  source={item.item.pic} style={{width:420 , borderRadius:20, height:300, }}/>
            </View>
         </View>
          )
          
      }}
       />
    )
}
const Styles=StyleSheet.create({
     image:{
         width:500,
         height:230,
         borderRadius:10,
     },
     imageContainer:{
         width:500,
         height:230,
         borderRadius:20,
     },
     flatList:{

     }
     
})
export default Banner;