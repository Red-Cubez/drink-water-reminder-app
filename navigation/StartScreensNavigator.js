import React from "react";
import { View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen1 from "../screens/startScreens/Screen1";
import Screen2 from './../screens/startScreens/Screen2';

const Stack = createNativeStackNavigator();

function StartScreensNavigator({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Screen1">
            <Stack.Screen
                name="Screen1"
                component={Screen1}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Screen2"
                component={Screen2}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default StartScreensNavigator;
