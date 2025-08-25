import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

const MemoryLeakProblem = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  }, []);
  return (
    <SafeAreaView style={{ marginTop: 150 }}>
      <ScrollView>
        <Text>Count: {count}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MemoryLeakProblem;
