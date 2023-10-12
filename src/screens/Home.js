import { ActivityIndicator, SafeAreaView } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";

const Home = ({ navigation }) => {
  const isLoading = false;
  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <>
          <Header title="Categorias" />
          <Categories navigation={navigation} />
        </>
      )}
    </SafeAreaView>
  );
};

export default Home;
