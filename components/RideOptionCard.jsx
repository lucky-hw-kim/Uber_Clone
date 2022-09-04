import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { Component, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  }

]

const RideOptionCard = () => {
  const nav = useNavigation();
  const [selected, setSelected] = useState(null)

  return (
    <SafeAreaView className="bg-white flex-grow">
      <View className="-mt-10">
        <TouchableOpacity
          onPress={() => nav.navigate("NavigateCard")} 
          className="absolute z-50 left-5 p-5 rounded-full"
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="top-0 text-center py-5 text-xl">Select a Ride</Text>
      </View>
      <FlatList 
      data={data}
      keyExtractor={item=> item.id}
      renderItem={({item: {id, title, multiplier, image}, item})=> (
        <TouchableOpacity 
        onPress={()=> setSelected(item)}
        className="flex-row justify-between items-center px-10"
        >
          <Image style={{
            width: 100,
            height: 100,
            resizeMode: "contain"
          }}
          source={{uri: image}}
          />
          <View className="-ml-6">
            <Text className="text-xl font-semibold">{title}</Text>
            <Text>Travel time...</Text>
          </View>
          <Text className="text-xl">$50</Text>
        </TouchableOpacity>
      )}
      />
    </SafeAreaView>
  );
};

export default RideOptionCard;
