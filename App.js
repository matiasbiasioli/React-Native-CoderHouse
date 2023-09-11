import { StyleSheet, View, SafeAreaView  } from "react-native";
import Home from "./src/screens/Home";
import Products from "./src/screens/Products";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Home/> */}
      <Products category="laptops"/>
    </SafeAreaView>
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
