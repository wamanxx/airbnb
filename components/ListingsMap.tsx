import { View, Text } from 'react-native'
import React from 'react'
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { StyleSheet } from 'react-native'
import { defaultStyles } from '@/constants/Styles';
import { ListingGeo } from '../Interfaces/listingGeo'
import { useRouter } from 'expo-router';
import MapView from "react-native-map-clustering";
const INITIAL_REGION = {
  latitude: 52.5,
  longitude: 19.2,
  latitudeDelta: 8.5,
  longitudeDelta: 8.5,
};

interface Props {
  listings: any;
}

const ListingsMap = ({ listings }: Props) => {

  const router = useRouter()
  const onMarkerSelected = (item: ListingGeo) => {
    router.push(`listing/${item.properties.id}` as any)
  };

  const renderCluster = (cluster: any) => {
    const { id, geometry, onPress, properties } = cluster;
    const points = properties.point_count
          return (
            <Marker key={`clusters-${id}`} coordinate={{
              longitude: geometry.coordinates[0],
              latitude: geometry.coordinates[1],
            }}
            onPress={onPress}>
              <View style={styles.marker}>
                <Text style={{
                  textAlign:'center',
                    fontSize:14,
                    fontFamily: 'mon-b'
                  }}>{points}</Text>
                </View>
            </Marker>
    )
  }

  return (
    <View style={defaultStyles.container}>
      <MapView
        initialRegion={INITIAL_REGION}
        animationEnabled={false}
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        showsUserLocation showsMyLocationButton
        clusterColor='white'
        clusterTextColor='black'
        clusterFontFamily='mon-b'
        renderCluster={renderCluster}
      >

        {listings.features.map((item: ListingGeo) => (<Marker
          onPress={() => onMarkerSelected(item)}
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    padding: 6,
    borderRadius: 12,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10
    }
  },
  markerStyle: {
    fontSize: 14,
    fontFamily: 'mon-b'
  }

})

export default ListingsMap