import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const ProductItem = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('productDetail', {item})}>
        <Text style={styles.productText}>{item.title}</Text>
      </Pressable>
      <Image
        source={{ uri: item.images[0] }}
        style={{ height: 80, width: 80 }}
      />
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 10,
    height: 100,
  },
  productText: {
    fontSize: 15,
    fontWeight: "600",
  },
});
