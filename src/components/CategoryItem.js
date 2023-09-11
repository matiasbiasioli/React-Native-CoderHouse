import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../theme/colors";


const CategoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryItem} >{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
    categoryItem: {
        borderWidth: 3,
        borderRadius: 40,
        marginVertical: 3,
        paddingVertical: 5,
        paddingHorizontal: 120,
        textAlign: "center",
        backgroundColor: colors.lightViolet   
    }
})

export default CategoryItem;