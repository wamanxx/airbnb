import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from "expo-router"
import Colors from '@/constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';

const Layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.primary,
      tabBarLabelStyle: {
        fontFamily: 'mon-b'
      }
    }}>
      <Tabs.Screen name="index" options={{
        tabBarLabel: "Explore",
        tabBarIcon: ({ color, size }) => {

          return  <AntDesign name="search1" color={color} size={size} />
        }
      }} />
      <Tabs.Screen name="wishlists" options={{
        tabBarLabel: "Whishlists",
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="heart-outline" color={color} size={size} />
        }
      }} />
      <Tabs.Screen name="trips" options={{
        tabBarLabel: "Trips",
        tabBarIcon: ({ color, size, focused }) => {
          return <FontAwesome5 name="airbnb" color={color} size={size} />
        }
      }} />
      <Tabs.Screen name="inbox" options={{
        tabBarLabel: "Inbox",
        tabBarIcon: ({ color, size }) => {

          return <MaterialCommunityIcons name="message-outline" color={color} size={size} />
        }
      }} />
      <Tabs.Screen name="profile" options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color, size }) => {

          return <Ionicons name="person-circle-outline"  color={color} size={size}/>
        }
      }} />
    </Tabs>
  )
}

export default Layout 