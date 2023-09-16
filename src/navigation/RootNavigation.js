import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetail from "../screens/ProductDetail";
import Home from "../screens/Home";
import Products from "../screens/Products";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Products} name="products" />
      <Stack.Screen component={ProductDetail} name="productDetail" />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
