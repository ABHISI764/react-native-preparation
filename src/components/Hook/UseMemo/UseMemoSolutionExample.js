import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useMemo, useState } from 'react';

const UseMemoExample = () => {
  const [numbers, setNumbers] = useState([10, 20, 30, 40, 50]);
  const [text, setText] = useState('');

  const total = useMemo(() => {
  return numbers.reduce((acc, current)=> acc + current) 
  }, [numbers]);

  return (
    <View style={{ flex: 1, padding: 120 }}>
      <Text>NUmbers: {numbers.join(" , ")}</Text>
      <Text>Sum: {total}</Text>
      <TextInput
        value={text}
        placeholder="type here"
        onChangeText={setText}
        style={{ width: '90%',height:40, borderWidth: 0.5, borderColor: 'red' }}
      />
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          padding: 10,
          backgroundColor: 'green',
          marginTop: 10,
        }}
        onPress={() =>
          setNumbers([...numbers, Math.floor(Math.random() * 100)])
        }
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseMemoExample;
