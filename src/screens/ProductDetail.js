import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { colors } from "../theme/colors";
import { Ionicons } from "@expo/vector-icons";

const ProductDetail = ({ navigation, route }) => {
  const {item} = route.params
  return (
    <SafeAreaView>
      <Header title="Detalles" />
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
      <View style={styles.containerDetails}>
        <Image source={{ uri: item.images[0] }} style={styles.image} />
        <Text style={styles.textDetails}> Título: {item.title}</Text>
        <Text style={styles.textDetails}>
          {" "}
          Descripción: {item.description}
        </Text>
        <Text style={styles.textDetails}> Precio: $ {item.price}</Text>
      </View>
      <Pressable style={styles.buttonDetail}>
        <Button color={colors.lightViolet} title="Agregar al carrito"></Button>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  containerDetails: {
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },
  image: {
    width: 160,
    height: 160,
  },
  buttonDetail: {
    marginTop: 10,
  },
});
