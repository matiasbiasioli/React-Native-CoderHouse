import { FlatList, View, Pressable, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
// import { products } from "../data/products";
import ProductItem from "../components/ProductItem";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../services/api_data";

const Products = ({ route, navigation }) => {
  const [productsCategory, setProductsCategory] = useState([]);
  const [text, setText] = useState("");

  const { item } = route.params;

  //Usando Redux
  const products = useSelector(state => state.homeSlice.allProducts)
  //Trayendo Productos desde Firebase
  const datos = useGetProductsQuery()

  //Filtro buscador por categoria
  useEffect(() => {
    const productsByCategory = products.filter((el) => el.category === item);
    setProductsCategory(productsByCategory);
    if (text) {
      const filterByName = products.filter(
        (el) => el.title.toLowerCase() === text.toLowerCase()
      );
      setProductsCategory(filterByName);
    }
  }, [text, item]);

  return (
    <SafeAreaView>
      <Header title={item} />
      <View style={styles.container}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Search text={text} setText={setText} />
        <FlatList
          data={productsCategory}
          keyExtractor={products.id}
          renderItem={({ item }) => (
            <ProductItem navigation={navigation} item={item} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightViolet,
  },
});
