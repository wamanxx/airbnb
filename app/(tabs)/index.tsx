import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
import ListingsData from '@/assets/data/airbnb-listings.json'
import ListingsMap from '@/components/ListingsMap'
import ListingsDataGeo from '@/assets/data/airbnb-listings.geo.json'
import ListingBottomSheet from '@/components/ListingBottomSheet'

const Page = () => {
  const [category, setCategory] = useState('Tiny Home')
  const items = useMemo(()=>ListingsData as any, [])
  const onDataChanged = (category: string) => {
    setCategory(category)
  }
    return (
    <View style={{ flex: 1, marginTop: 150 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,

        }} />
      {/* <Listings listings={items} category={category} /> */}
      <ListingsMap listings={ListingsDataGeo}/>
      <ListingBottomSheet listings={items} category={category}/>
    </View>
  )
}

export default Page