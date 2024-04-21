import { View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet } from 'react-native'

interface Props{
    listings: any;
}

const ListingsMap = ({listings}: Props) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    map:{
        width: '100%',
        height: '100%'
    }


})

export default ListingsMap