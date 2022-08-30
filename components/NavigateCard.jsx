import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEYS} from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import RideOptionCard from "./RideOptionCard";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";


const NavigateCard = () => {

  const dispatch =useDispatch()
  const nav = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Good Afternoon, Lucky!</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <GooglePlacesAutocomplete
          styles={toInputBoxStyle}
          placeholder="Where to?"
          fetchDetails={true}
          returnKeyType={"search"}
          minLength={2}
          onPress={(
            data, details = null
          ) => {
            dispatch(setDestination({
              location: details.geometry.location,
              description: data.description
            }))
            nav.navigate("RideOptionCard")
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          query={{
            key: GOOGLE_MAPS_APIKEYS,
            language: "en"
         }}
          debounce={400}
          enablePoweredByContainer={false}
        />
      </View>
      <NavFavourites />
      <View>
        <TouchableOpacity className="flex-row bg-black w-24 px-4 py-3 rounded-full">
            <Icon name="car" type="font-awesome" color="white" size={16}/>
            <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row bg-black w-24 px-4 py-3 rounded-full">
            <Icon name="fast-food-outline" type="ionicon" color="black" size={16}/>
            <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
