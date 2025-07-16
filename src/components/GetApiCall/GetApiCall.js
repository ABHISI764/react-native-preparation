import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../reduxe/Slice/todo';

const GetApiCall = () => {
    const dispatch = useDispatch();
    const { data, isLoading, isError, page } = useSelector(state => state.todo);
  
    useEffect(() => {
      dispatch(fetchTodos({ start: 0, limit: 10 }));
    }, []);
  
    const fetchMoreData = () => {
      if (!isLoading) {
        dispatch(fetchTodos({ start: page * 10, limit: 10 }));
      }
    };
  
    return (
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        {isLoading && page === 0 && <ActivityIndicator size={'large'} color="red" />}
        {isError && <Text>Something went wrong</Text>}
  
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                borderColor: 'red',
                borderWidth: 0.1,
                shadowColor: 'red',
                shadowOpacity: 0.5,
                height: 50,
                justifyContent: 'center',
              }}
            >
              <Text>{item.title}</Text>
            </View>
          )}
          onEndReached={fetchMoreData}
          onEndReachedThreshold={0.5}
          ListFooterComponent={isLoading && <ActivityIndicator size="small" color="blue" />}
        />
      </SafeAreaView>
  );
};

export default GetApiCall;
