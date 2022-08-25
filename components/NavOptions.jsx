import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen"
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen"
  }
]

export default function NavOptions() {
  const nav = useNavigation();
  return (
    <FlatList 
    data={data}
    keyExtractor={(item) => item.id}
    horizontal
    renderItem={({item})=> (
      <TouchableOpacity onPress={()=>{nav.navigate(item.screen)}}>
        <View className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40">
          <Image
          style={{width: 120, height: 120, resizeMode: "contain"}}
          source={{uri: item.image}}
          />
          <Text>{item.title}</Text>
          <Icon
          className="p-2 bg-black rounded-full w-10 mt-4"
          type="antdesign"
          color="white"
          name="arrowright"
          />
        </View>
      </TouchableOpacity>
    )}
    />
  )
}