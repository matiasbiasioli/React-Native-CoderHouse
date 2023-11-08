import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "../screens/Profile";
import MapLoc from "../screens/MapLoc";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ProfileNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="profile"
    >
      <Stack.Screen component={Profile} name="profile" />
      <Stack.Screen component={MapLoc} name="mapLoc" />
    </Stack.Navigator>
  );
};

export default ProfileNav;

const styles = StyleSheet.create({});
