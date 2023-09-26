import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RootNavigation from "./RootNavigation";
import Profile from "../screens/Profile";
import Cart from "../screens/Cart";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ title: "", headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name="user-circle" size={34} color= {focused ? 'orange' : "black"} />
          ),
        }}
        name="profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons name="home-circle" size={34} color={focused ? 'orange' : 'black'} />
          ),
        }}
        name="root"
        component={RootNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Entypo name="shopping-cart" size={34} color= {focused ? 'orange' : 'black'} />
          ),
        }}
        name="cart"
        component={Cart}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabNavigation;