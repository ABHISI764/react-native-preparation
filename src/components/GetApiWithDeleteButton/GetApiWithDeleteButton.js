

import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

const GetApiWithDeleteButton = () => {
  const [user, setUser] = useState([]);

  const getApicall = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const responseData = await response.json(); // Add await and type annotation
    // const responseData = response.json();
    console.log('Response Data:', response.data); // The JSON payload (array of posts)
      console.log('Response Status:', response.status); // HTTP status code (e.g., 200)
      console.log('Response Status Text:', response.statusText); // HTTP status message (e.g., "OK")
      console.log('Response Headers:', response.headers); // Response headers object
      console.log('Response Config:', response.config); // Request configuration
      console.log('Response Request:', response.request); // Underlying request object
    setUser(response.data);
  };
  useEffect(() => {
    getApicall();
  }, []);
  const deleteData = (id) => {
    setUser((previusUser) => previusUser.filter(item => item.id !==id));
  };

  console.log(user);
  return (
    <View>
        <Text>Hello From get api call</Text>
      <FlatList
        data={user}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', marginVertical: 5 }}>
            <Text>{item.title}</Text>
            <TouchableOpacity
              style={{ padding: 5, backgroundColor: 'red' }}
              onPress={()=>deleteData(item.id)}
            >
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default GetApiWithDeleteButton;