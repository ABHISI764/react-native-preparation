import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useGetDataByIdQuery, useGetDataQuery,useAddNewPostMutation,useDeletePostMutation} from './RtkGetapiCall'

const GetDataUI = () => {
const {data, error, isLoading,isError,isSuccess} = useGetDataQuery();
const res = useGetDataByIdQuery(2);
const [deletePost] = useDeletePostMutation()

const [addPost] = useAddNewPostMutation()
// const product = res.data?.product;
// console.log("testing by id ",res)
if (isLoading) return <Text>Loading...</Text>;
if (error) return <Text>Error fetching data</Text>;
const addData = async() => {
    const res = await addPost({
        title: "Apple Vision Pro",
        brand: "Apple",
        model: "Apple vision pro First Gen",
         color: "Black",
        category: "appliances",
        discount: "1"
    });
    console.log('posting addPost',res)

}
const deletePostHandel = async() => {
const res = await deletePost(2)
console.log('delete res',res)
}

  return (
    <View>
        <TouchableOpacity style={{padding: 20,backgroundColor:'red',alignSelf:'center'}}
        onPress={addData}
        >
            <Text>Add Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 20,backgroundColor:'red',alignSelf:'center'}}
        onPress={deletePostHandel}
        >
            <Text>Delete Data</Text>
        </TouchableOpacity>


    {/* <FlatList
    data={data.products}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <Text>{item.title}</Text>
    )}
  /> */}
      </View>
  )
}

export default GetDataUI