import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
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

  return (
    <SafeAreaView className="bg-white flex-grow">
      <View>
        <TouchableOpacity
          onPress={() => nav.navigate("NavigateCard")} 
          className="absolute top-3 left-5 p-3 rounded-full"
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">Select a Ride</Text>
      </View>
      <FlatList 
      data={data}
      keyExtractor={item=> item.id}
      renderItem={({item: {id, title, multiplier, image}, item})=> (
        <TouchableOpacity>
          <Image style={{
            width: 100,
            height: 100,
            resizeMode: "contain"
          }}
          source={{uri: image}}
          />
        </TouchableOpacity>
      )}
      />
    </SafeAreaView>
  );
};

export default RideOptionCard;
