import { StyleSheet, SafeAreaView } from "react-native";
import Home from "./src/screens/Home";
import Products from "./src/screens/Products";
import { useFonts } from "expo-font";
import ProductDetail from "./src/screens/ProductDetail";
import RootNavigation from "./src/navigation/RootNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Pacific: require("./assets/Fonts/Pacifico-Regular.ttf"),
  });
  if (fontsLoaded === false) {
    return;
  }
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>

    // <SafeAreaView style={styles.container}>
    //   <Home/>
    //   <Products category="laptops"/>
    //   <ProductDetail/>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
