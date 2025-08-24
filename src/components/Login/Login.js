import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { legacy_createStore } from '@reduxjs/toolkit'

const Login = () => {
  const inputRef = useRef(null)


useEffect(()=>{
inputRef.current.focus()
},[])

  return (
    <View style={{alignItems:'center',}}>
     <Text>input data</Text>
     <TextInput 
     ref={inputRef}
      placeholder='type here'
      style={{height:40,borderWidth:1, width: '90%'}}
     />
     <TouchableOpacity style={{padding: 10, backgroundColor:'green',borderRadius:10,marginTop: 50}}>
        <Text>Click for Focus</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Login