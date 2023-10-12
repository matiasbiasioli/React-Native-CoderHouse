import { View, FlatList, ActivityIndicator, SafeAreaView } from "react-native";
import React from "react";
// import { categories } from "../data/categories";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../services/api_data";

const Categories = ({ navigation }) => {
  //Con Redux
  // const categories = useSelector(state => state.homeSlice.allCategories)

  //Desde Firebase
  const { data: categories, isLoading } = useGetCategoriesQuery();
  // const categories = datos.data;

  // const isLoading = true;
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View>
          <FlatList
            data={categories}
            keyExtractor={(key) => key}
            renderItem={({ item }) => (
              <CategoryItem navigation={navigation} item={item} />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Categories;
