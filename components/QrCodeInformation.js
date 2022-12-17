import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QrCodeInformation = ({route}) => {
  const {data}=route.params
  data.split(" ")
  return (
    <View style={styles.container}>
      <Text style={styles.Ticket}>Bus Name: {data.split(" ")[0]}</Text>
      <Text style={styles.Ticket}>Departure: {data.split(" ")[1]}</Text>
      <Text style={styles.Ticket}>Destination: {data.split(" ")[2]}</Text>


    </View>
  )
}

export default QrCodeInformation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  Ticket:{
    fontSize:18,
    fontWeight:"600",
    marginTop:8
  }
})