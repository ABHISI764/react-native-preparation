import { View, Text } from 'react-native';
import React, { useEffect,useState } from 'react';

const MemoryLeakSolution = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, []);

    return ()=> clearInterval(interval)
  }, []);

  return (
    <View>
      <Text> count: {count}</Text>
    </View>
  );
};

export default MemoryLeakSolution;
