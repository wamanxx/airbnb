import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { Link } from 'expo-router'

const Page = () => {
  const {signOut, isSignedIn}= useAuth()

  return (
    <View>
       <Button title='Se déconnecter' onPress={()=>signOut()} />
      {!isSignedIn && <Link href="/(modals)/login">
       <Text>Se connecter</Text>
        </Link>}
    </View>
  )
}

export default Page