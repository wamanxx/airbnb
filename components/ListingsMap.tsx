import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { StyleSheet } from 'react-native'
import { defaultStyles } from '@/constants/Styles';
import { ListingGeo } from '../Interfaces/ListingGeo'
import { useRouter } from 'expo-router';

interface Props{
  listings: any;
}

const ListingsMap = ({ listings }: Props) => {
  
  const router = useRouter()
  const onMarkerSelected = (item: ListingGeo)=>{
    router.push(`listing/${item.properties.id}` as any)
  };
  
  return (
    <View style={defaultStyles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        showsUserLocation showsMyLocationButton>
          
        {listings.features.map((item: ListingGeo) => (<Marker
        onPress={()=>onMarkerSelected(item)}
          key={item.properties.id}
          coordinate={{
            
            latitude: +item.properties.latitude,
            longitude: +item.properties.longitude
          }}>
            <View style={styles.marker}>
              <Text style={styles.markerStyle}>{item.properties.price + "£"}</Text>
            </View>
          </Marker>))}

      </MapView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  marker: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"white",
    padding: 6,
    borderRadius: 12,
    elevation:5,
    shadowColor:'black',
    shadowOpacity:0.1,
    shadowRadius:6,
    shadowOffset:{
      width:1,
      height:10
    }
  },
  markerStyle:{
    fontSize:14,
    fontFamily: 'mon-b'
  }

})

export default ListingsMap