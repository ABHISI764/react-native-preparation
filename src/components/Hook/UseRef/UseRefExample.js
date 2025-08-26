import { View, Text, SafeAreaView, ScrollView,TextInput,TouchableOpacity} from 'react-native';
import React, { useRef } from 'react';

const UseRefExample = () => {
  const inputRef =  useRef()

  const handelInput = () => {
    inputRef.current.focus()
    
  }
  return (
    <SafeAreaView style={{marginTop: 150, alignItems:'center'}}>
      <ScrollView>
        <TextInput
        ref={inputRef}
        placeholder='type here'
        style={{width: 150,height: 40, borderWidth: 1, borderColor: 'green'}}
        />
        <TouchableOpacity onPress={handelInput} style={{padding: 10, backgroundColor:'red',marginTop: 20}}>
            <Text>Click For focus</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UseRefExample;
