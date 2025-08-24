import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import WithAuth from './WithAuth'

const DashBoard = () => {

  return (
    <SafeAreaView>
        <ScrollView>
        <Text>DashBoard</Text>
        </ScrollView>
    </SafeAreaView>
  )
}
const AuthDash = WithAuth(DashBoard)

export default AuthDash


// Video Url : https://www.youtube.com/watch?v=W-rIDc2yt-0&t=578s

/* 
App.tsx
    //  <AuthDash />


*/