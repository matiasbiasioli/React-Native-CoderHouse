import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import { products } from "../data/products";
import ProductItem from "../components/ProductItem";

const Products = ({ category }) => {
  const [productsCategory, setProductsCategory] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const productsByCategory = products.filter(
      (el) => el.category === category
    );
    setProductsCategory(productsByCategory);
    // filtro de input por nombre
    if (text) {
      const filterByName = products.filter((el)=> el.title.toLowerCase() === text.toLowerCase())
      setProductsCategory(filterByName)
    }
  }, [text]);

  return (
    <>
      <Header title="Productos" />
      <Search text={text} setText={setText}/>
      <SafeAreaView>

      <FlatList
        data={productsCategory}
        keyExtractor={products.id}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
      </SafeAreaView>
    </>
  );
};

export default Products;

const styles = StyleSheet.create({});
