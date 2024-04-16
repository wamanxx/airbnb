import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser'
import { useOAuth } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

enum Strategy {
  Google = 'oauth_google',
  Apple = 'oauth_apple',
  Facebook = 'oauth_facebook'
}

const Page = () => {
  useWarmUpBrowser()
  const router = useRouter();
  const { startOAuthFlow: appleAuth } = useOAuth({strategy : 'oauth_apple'})
  const { startOAuthFlow: googleAuth } = useOAuth({strategy : 'oauth_google'})
  const { startOAuthFlow: facebookAuth } = useOAuth({strategy : 'oauth_facebook'})

  const onSelectAuth = async (strategy : Strategy)=>{
    const selectedAuth = {
      [Strategy.Google]: googleAuth,
      [Strategy.Facebook]: facebookAuth,
      [Strategy.Apple]: appleAuth,
    }[strategy];
    try{
      const { createdSessionId, setActive} = await selectedAuth()
      if(createdSessionId){
        setActive!({session: createdSessionId})
        router.back()
      } 
    }catch (err) {
      console.error('OAuth error :', err)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='E-mail' autoCapitalize='none' style={[defaultStyles.inputField, { marginBottom: 30 }]} />
      <TouchableOpacity style={[defaultStyles.btn]}><Text style={[defaultStyles.btnText]}>Continuer</Text></TouchableOpacity>
      <View style={[styles.seperatorView]}>
        <View style={{
          borderBottomColor: '#000',
          borderBottomWidth: StyleSheet.hairlineWidth,
          flex: 1
        }} />
        <Text style={[styles.seperator]}>où</Text>
        <View style={{
          borderBottomColor: '#000',
          borderBottomWidth: StyleSheet.hairlineWidth,
          flex: 1
        }} />
      </View>
      <View style={{
        gap: 20,
      }}>
        <TouchableOpacity style={[styles.btnOutline]} >
          <Ionicons name='call-outline' style={[defaultStyles.btnIcon]} size={24}></Ionicons>
          <Text style={[styles.btnOutlineText]}>Continuer avec Numéro</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.btnOutline]} onPress={()=>onSelectAuth(Strategy.Google)}>
          <Ionicons name='logo-google' style={[defaultStyles.btnIcon]} size={24}></Ionicons>

          <Text style={[styles.btnOutlineText]}>Continuer avec Google</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.btnOutline]} onPress={()=>onSelectAuth(Strategy.Facebook)}>
          <Ionicons name='logo-facebook' style={[defaultStyles.btnIcon]} size={24}></Ionicons>
          <Text style={[styles.btnOutlineText]}>Continuer avec Facebook</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.btnOutline]} onPress={()=>onSelectAuth(Strategy.Apple)}>
          <Ionicons name='logo-apple' style={[defaultStyles.btnIcon]} size={24}></Ionicons>
          <Text style={[styles.btnOutlineText]}>Continuer avec Apple</Text></TouchableOpacity>

      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 26,
  },
  seperatorView: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    marginVertical: 30

  },
  seperator: {
    fontFamily: 'mon-b',
    color: Colors.grey,

  },
  btnOutline: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: "black",
    fontSize: 16,
    fontFamily: 'mon-b'
  }
})
export default Page