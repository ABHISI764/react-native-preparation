import {
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, { useRef } from 'react';

const Testing = () => {
  const inputRef = useRef();

  const handelInput = () => {
    inputRef.current.focus();
    Alert.alert('focus working');
  };

  return (
    <SafeAreaView style={{ marginTop: 150, alignItems: 'center' }}>
      <ScrollView>
        <TextInput
          placeholder="Plese type here"
          ref={inputRef}
          style={{
            width: 150,
            height: 40,
            borderWidth: 1,
            borderColor: 'green',
          }}
        />
        <TouchableOpacity
          onPress={handelInput}
          style={{ padding: 10, backgroundColor: 'green', marginTop: 20 }}
        >
          <Text>Focus on Input</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Testing;
