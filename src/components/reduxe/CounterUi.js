import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../reduxeNew/Slice/counterSlice'

const CounterUi = () => {
    const count = useSelector((item)=>item.counter.value)
    const dispatch = useDispatch()
  return (
    <View>
      <TouchableOpacity style={{backgroundColor:'red',padding: 20,marginTop: 145,width: 140,alignSelf:'center',alignItems:'center'}}>
        <Text onPress={()=> dispatch(increment())}>Increment</Text>
      </TouchableOpacity>
      <Text style={{alignSelf:'center'}}>{count}</Text>

      <TouchableOpacity
      style={{backgroundColor:'green',padding: 20,marginTop: 145,width: 140,alignSelf:'center',alignItems:'center'}}
      onPress={()=>dispatch(decrement())}
      >
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CounterUi