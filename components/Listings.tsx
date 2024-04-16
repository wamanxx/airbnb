import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { defaultStyles } from '@/constants/Styles';

interface Props{
  listings: any[];
  category: string;

}

const Listings = ({listings, category}: Props) => {
  useEffect(()=>{
    console.log(listings.length)
  },[category])
  return (
    <View style={defaultStyles.container} >
      <FlatList/>

    </View>
  )
}

export default Listings