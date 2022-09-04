import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { Component, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

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

//if we have surge pricing, this goes up
const SURGE_CHARGE_RATE = 1.7

const RideOptionCard = () => {
  const nav = useNavigation();
  const [selected, setSelected] = useState(null)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  return (
    <SafeAreaView className="bg-white flex-grow">
      <View className="-mt-10">
        <TouchableOpacity
          onPress={() => nav.navigate("NavigateCard")} 
          className="absolute z-50 left-5 p-5 rounded-full"
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="top-0 text-center py-5 text-xl">Select a Ride - {travelTimeInformation?.distance?.text}</Text>
      </View>
      <FlatList 

      data={data}
      keyExtractor={item=> item.id}
      renderItem={({item: {id, title, multiplier, image}, item})=> (
        <TouchableOpacity 
        onPress={()=> setSelected(item)}
        className={`flex-row justify-between items-center px-6 ${id === selected?.id && "bg-gray-200"}`}
        >
          <Image style={{
            width: 100,
            height: 100,
            resizeMode: "contain"
          }}
          source={{uri: image}}
          />
          <View >
            <Text className="text-xl font-semibold mt-4">{title}</Text>
            <Text className="mt-2">Estimated: {travelTimeInformation?.duration?.text} </Text>
          </View>
          <Text className="-ml-5 text-xl">{new Intl.NumberFormat('en-gb', {
            style: 'currency',
            currency: "CAD"
          }).format(
            (travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier) / 100
          )
          }</Text>
        </TouchableOpacity>
      )}
      />
      <View>
        <TouchableOpacity disabled={!selected} 
        className={`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
          <Text className="text-center text-white text-xl">Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionCard;
