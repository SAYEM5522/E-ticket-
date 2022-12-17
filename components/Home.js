import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const {width,height}=Dimensions.get("window")
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:height/2
 
  },
  Button:{
    height:45,
    width:110,
    borderRadius:20,
    backgroundColor:"lightgray",
    alignItems:"center",
    justifyContent:"center"

  },
  header:{
    height:50,
    width:width-30,
    backgroundColor:"#000",
    borderRadius:15,
    alignSelf:"center",
    marginTop:45,
    justifyContent:"center"
  },
  content:{
    color:"#fff",
    textAlign:"center",
    fontSize:17,
    fontWeight:"600",
    fontStyle:"italic"
  }
})
const Home = () => {
  const navigation=useNavigation()
  const ViewTicket=useCallback(()=>{
   navigation.navigate("QrCode")
  },[])
  
  return (
   <View >
    <View style={styles.header}>
      <Text style={styles.content}>ETicket</Text>
    </View>
    <View style={styles.container}>
      <TouchableOpacity onPress={ViewTicket} style={styles.Button}>
       <Text  >Scan Ticket</Text> 

      </TouchableOpacity>

    </View>
    </View>
  )
}

export default Home
