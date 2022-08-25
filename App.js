import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <TailwindProvider>
            <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
            options={{headerShown:false}}
            />
            <Stack.Screen name="MapScreen" component={MapScreen}
            options={{headerShown:false}}
            />
            </Stack.Navigator>
          </TailwindProvider>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
