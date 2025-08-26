import { View, Text, TouchableOpacity } from 'react-native';
import React, { useCallback, useState } from 'react';
import ChildButton from './ChildButton';

const UseCallBackProblemExample = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const handelPress = useCallback(() => {
    setCount(count + 1);
  },[]);

  return (
    <View style={{ padding: 20 }}>
      <Text>Count: {count}</Text>
      <ChildButton  onPress={handelPress}/>
      <TouchableOpacity onPress={()=> setOther(other +1)}>
        <Text>Update Other State</Text>
      </TouchableOpacity>
      <Text>SetOther: {other}</Text>

    </View>
  );
};

export default UseCallBackProblemExample;
