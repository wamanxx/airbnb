import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
import ListingsData from '@/assets/data/air-bnb-listings.json'
const Page = () => {
  const [category, setCategory] = useState('Tiny Home')
  const items = useMemo(()=>ListingsData as any, [])
  const onDataChanged = (category: string) => {
    setCategory(category)
  }
  return (
    // <View style={{ flex: 1, marginTop: 150, backgroundColor: 'red', borderColor: 'red', borderWidth: 10 }}>
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,

        }} />
      <Listings listings={items} category={category} />²
    </View>
  )
}

export default Page