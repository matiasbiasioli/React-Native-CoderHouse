import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { colors } from "../theme/colors";

const CategoryItem = ({ item, navigation }) => {
  //Item es el nombre de la categoria presionada
  return (
    <Pressable style= {styles.container}
      onPress={() => 
        navigation.navigate('products', {item})
      }
    >
      <Text style={styles.categoryItem}>{item}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightViolet,
  },
  categoryItem: {
    borderWidth: 3,
    borderRadius: 40,
    marginHorizontal: 20,
    marginVertical: 3,
    paddingVertical: 5,
    paddingHorizontal: 120,
    textAlign: "center",
    backgroundColor: colors.violet,
    color: 'white'
  },
});

export default CategoryItem;
