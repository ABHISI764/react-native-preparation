import { View, Text, SafeAreaView,ActivityIndicator,StyleSheet,FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './Slice/userSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  },[dispatch]);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  if (error) return <Text style={styles.error}>{error}</Text>;
  return (
    <FlatList
    data={users}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <View style={styles.item}>
        <Text>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    )}
  />
  );
};

const styles = StyleSheet.create({
    item: {
      padding: 15,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    email: {
      color: 'gray',
    },
    error: {
      marginTop: 50,
      color: 'red',
      textAlign: 'center',
    },
  });

export default UserList;
