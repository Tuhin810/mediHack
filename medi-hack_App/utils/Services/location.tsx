import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location';
import { View,Text } from 'react-native';


function Locationutil() {
    const [location, setLocation]:any = useState(null);
  const [errorMsg, setErrorMsg]:any = useState(null);
 useEffect(()=>{
   
   const getpermission= async ()=>{
    let {status } = await Location.requestForegroundPermissionsAsync();
         if (status!=="granted") {
            setErrorMsg("location permission not granted")
            return;
         }

         let locationres = await Location.getCurrentPositionAsync({});
      setLocation(locationres);
    }
    getpermission()
   
 },[])
  return (
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //   {/* {errorMsg ? <Text>{errorMsg}</Text> : null} */}
  //   {/* {location ? (

     
  //     // <Text>
  //     //   Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
  //     // </Text>
  // //  <Toastercompo text="loaction fetched succesfully"/>
  
  //   ) : (
  //     <Text>Loading location...</Text>
  //   )} */}
    
  // </View>
  null
  
  )
}

export default Locationutil