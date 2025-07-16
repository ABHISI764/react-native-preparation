import { View, Text, SafeAreaView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../reduxe/Slice/todo';

const GetApiCall = () => {
  const dispatch = useDispatch();

  // Access state from Redux store
  const { data, isLoading, isError } = useSelector((state) => state.todo);

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Todos List</Text>

      <TouchableOpacity
        onPress={() => dispatch(fetchTodos())}
        style={{ backgroundColor: 'red', padding: 16, borderRadius: 8, marginBottom: 20 }}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>Fetch Data</Text>
      </TouchableOpacity>

      {isLoading && <ActivityIndicator size="large" color="blue" />}

      {isError && <Text style={{ color: 'red' }}>Something went wrong!</Text>}

      {data && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => ( 
            <View
              style={{
                backgroundColor: '#eee',
                padding: 10,
                marginVertical: 4,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default GetApiCall;
